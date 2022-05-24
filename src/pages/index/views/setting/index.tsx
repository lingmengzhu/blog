/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { Upload, Input, Button, Radio } from 'antd';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import ImgCrop from 'antd-img-crop';
import { setUserInfo } from '@/actions/user';
import styleModule from './index.module.less';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

const { TextArea } = Input;
interface FormData {
    username: string;
    nickname: string;
    fileList: UploadFile[];
    sex: 1 | 2 | 3;
    email: string;
    phone: string;
    introduction: string;
    age: string;
    createTime: string | number;
    address: string;
}

const Index = (props: any) => {
    const { setUserInfo, token } = props;
    const navigate = useNavigate();

    const initData: FormData = {
        username: 'Hchen',
        nickname: 'Hchen',
        fileList: [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
        ],
        sex: 1,
        email: '2287843583@qq.com',
        phone: '15779214557',
        age: '18',
        createTime: '1653293540320',
        introduction: '',
        address: '',
    };
    const [formData, setFormData] = useState(initData);
    const onFileChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFormData({ ...formData, fileList: newFileList });
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
    return (
        <div className={styleModule.pageSetting}>
            <div className={styleModule.settingBox}>
                <div className={styleModule.title}>基本资料</div>
                <div className={styleModule.basicForm}>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>账号</div>
                        <div className={styleModule.widget}>{formData.username}</div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>昵称</div>
                        <div className={styleModule.widget}>
                            <Input
                                value={formData.nickname}
                                onChange={(e) => onChange('nickname', e.target.value)}
                            ></Input>
                        </div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>头像</div>
                        <div className={styleModule.widget}>
                            <ImgCrop rotate>
                                <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={formData.fileList}
                                    onChange={onFileChange}
                                    onPreview={onPreview}
                                >
                                    {formData.fileList.length < 5 && '+ Upload'}
                                </Upload>
                            </ImgCrop>
                        </div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>性别</div>
                        <div className={styleModule.widget}>
                            <Radio.Group onChange={(e) => onChange('sex', e.target.value)} value={formData.sex}>
                                <Radio value={1}>男</Radio>
                                <Radio value={2}>女</Radio>
                                <Radio value={3}>保密</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>居住地</div>
                        <div className={styleModule.widget}>
                            <Input
                                value={formData.address}
                                onChange={(e) => onChange('address', e.target.value)}
                            ></Input>
                        </div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>电子邮箱</div>
                        <div className={styleModule.widget}>
                            <Input value={formData.email} onChange={(e) => onChange('email', e.target.value)}></Input>
                        </div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>手机号码</div>
                        <div className={styleModule.widget}>
                            <Input value={formData.phone} onChange={(e) => onChange('phone', e.target.value)}></Input>
                        </div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>简介</div>
                        <div className={styleModule.widget}>
                            <TextArea
                                rows={4}
                                value={formData.introduction}
                                onChange={(e) => onChange('introduction', e.target.value)}
                                placeholder="该用户很懒，什么也没写"
                                maxLength={6}
                            />
                        </div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>注册时间</div>
                        <div className={styleModule.widget}>{moment(formData.createTime).format()}</div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>年龄</div>
                        <div className={styleModule.widget}>
                            <Input value={formData.age} onChange={(e) => onChange('age', e.target.value)}></Input>
                        </div>
                    </div>
                </div>
                <div className={styleModule.operate}>
                    <Button type="primary">保存</Button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any, ownProps: any) => {
    return { ...ownProps, token: state.user.token };
};

const mapDispatchToProps = (dispatch: any) => ({
    setUserInfo: (userInfo: any) => dispatch(setUserInfo(userInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
