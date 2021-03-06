/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import { Upload, Input, Button, Radio, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import ImgCrop from 'antd-img-crop';
import qs from 'query-string';
import { getUser, updateUser } from '@/api/user';
import styleModule from './index.module.less';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

const { TextArea } = Input;
interface FormData {
    _id?: string;
    username: string;
    nickname: string;
    sex: 1 | 2 | 3;
    email: string;
    phone: string;
    introduction: string;
    age: string;
    createTime: string | number;
    address: string;
    profilePhoto: string;
}

const Index = (props: any) => {
    const { user } = props;
    const { userId, token } = user;
    const navigate = useNavigate();

    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const initData: FormData = {
        username: '',
        nickname: '',
        sex: 3,
        email: '',
        phone: '',
        age: '',
        createTime: '',
        introduction: '',
        address: '',
        profilePhoto: '',
    };
    const [formData, setFormData] = useState(initData);

    useEffect(() => {
        getUser(userId)
            .then((res) => {
                setFormData({ ...formData, ...res.data });
                const { profilePhoto } = res.data;
                if (profilePhoto) {
                    const arr = profilePhoto.split('/');
                    setFileList([
                        {
                            uid: '',
                            name: arr[arr.length - 1],
                            percent: 100,
                            status: 'success',
                            thumbUrl: profilePhoto,
                            url: profilePhoto,
                        },
                    ]);
                }
            })
            .catch(() => { });
    }, []);

    const onFileChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        let profilePhoto = '';
        if (newFileList.length > 0) {
            const file = newFileList[0];
            if (newFileList[0].status === 'done') {
                profilePhoto = file.response.data.url;
            } else {
                profilePhoto = '';
            }
        } else {
            profilePhoto = '';
        }
        setFormData({ ...formData, profilePhoto });
    };
    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    const onChange = (key: string, value: any) => {
        setFormData({ ...formData, [key]: value });
    };
    const submit = () => {
        updateUser(formData)
            .then((res: any) => {
                message.success('????????????');
            })
            .catch(() => { });
    };
    return (
        <div className={styleModule.pageSetting}>
            <div className={styleModule.settingBox}>
                <div className={styleModule.title}>????????????</div>
                <div className={styleModule.basicForm}>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>??????</div>
                        <div className={styleModule.widget}>{formData.username}</div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>??????</div>
                        <div className={styleModule.widget}>
                            <Input
                                value={formData.nickname}
                                onChange={(e) => onChange('nickname', e.target.value)}
                            ></Input>
                        </div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>??????</div>
                        <div className={styleModule.widget}>
                            <ImgCrop rotate shape="round">
                                <Upload
                                    action="/api/upload"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={onFileChange}
                                    onPreview={onPreview}
                                    headers={{ Authorization: `Bearer ${token}` }}
                                >
                                    {fileList.length < 1 && '+ Upload'}
                                </Upload>
                            </ImgCrop>
                        </div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>??????</div>
                        <div className={styleModule.widget}>
                            <Radio.Group onChange={(e) => onChange('sex', e.target.value)} value={formData.sex}>
                                <Radio value={1}>???</Radio>
                                <Radio value={2}>???</Radio>
                                <Radio value={3}>??????</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>?????????</div>
                        <div className={styleModule.widget}>
                            <Input
                                value={formData.address}
                                onChange={(e) => onChange('address', e.target.value)}
                            ></Input>
                        </div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>????????????</div>
                        <div className={styleModule.widget}>
                            <Input value={formData.email} onChange={(e) => onChange('email', e.target.value)}></Input>
                        </div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>????????????</div>
                        <div className={styleModule.widget}>
                            <Input value={formData.phone} onChange={(e) => onChange('phone', e.target.value)}></Input>
                        </div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>??????</div>
                        <div className={styleModule.widget}>
                            <TextArea
                                rows={4}
                                value={formData.introduction}
                                onChange={(e) => onChange('introduction', e.target.value)}
                                placeholder="?????????????????????????????????"
                                maxLength={6}
                            />
                        </div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>????????????</div>
                        <div className={styleModule.widget}>
                            {moment(formData.createTime).format('YYYY-MM-DD HH:mm:ss')}
                        </div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>??????</div>
                        <div className={styleModule.widget}>
                            <Input value={formData.age} onChange={(e) => onChange('age', e.target.value)}></Input>
                        </div>
                    </div>
                </div>
                <div className={styleModule.operate}>
                    <Button type="primary" onClick={() => submit()}>
                        ??????
                    </Button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any, ownProps: any) => {
    return { ...ownProps, user: state.user };
};

export default connect(mapStateToProps)(Index);
