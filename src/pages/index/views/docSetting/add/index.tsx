/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { Upload, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import ImgCrop from 'antd-img-crop';

import { addDoc } from '@/api/doc';
import styleModule from './index.module.less';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

const { TextArea } = Input;
interface FormData {
    _id?: string;
    title: string;
    image: string;
    url: string;
}

const Index = (props: any) => {
    const { user } = props;
    const { userId, token } = user;
    const navigate = useNavigate();

    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const initData: FormData = {
        title: '',
        image: '',
        url: '',
    };
    const [formData, setFormData] = useState(initData);

    const onFileChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        let image = '';
        if (newFileList.length > 0) {
            const file = newFileList[0];
            if (newFileList[0].status === 'done') {
                image = file.response.data.url;
            } else {
                image = '';
            }
        } else {
            image = '';
        }
        setFormData({ ...formData, image });
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
        addDoc(formData)
            .then((res: any) => {
                message.success('保存成功');
            })
            .catch(() => {});
    };
    return (
        <div className={styleModule.pageSetting}>
            <div className={styleModule.settingBox}>
                <div className={styleModule.title}>添加手册</div>
                <div className={styleModule.basicForm}>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>标题</div>
                        <div className={styleModule.widget}>
                            <Input value={formData.title} onChange={(e) => onChange('title', e.target.value)}></Input>
                        </div>
                    </div>
                    <div className={styleModule.formItem}>
                        <div className={styleModule.label}>图片</div>
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
                        <div className={styleModule.label}>链接</div>
                        <div className={styleModule.widget}>
                            <Input value={formData.url} onChange={(e) => onChange('url', e.target.value)}></Input>
                        </div>
                    </div>
                </div>
                <div className={styleModule.operate}>
                    <Button type="primary" onClick={() => submit()}>
                        保存
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
