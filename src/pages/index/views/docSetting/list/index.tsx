/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import { Upload, Input, Button, Radio, message, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import ImgCrop from 'antd-img-crop';
import qs from 'query-string';
import { urlWithToken } from '@/utils/index';
import { getUser, updateUser } from '@/api/user';
import styleModule from './index.module.less';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

const { TextArea } = Input;

const Index = (props: any) => {
    const { user } = props;
    const { token } = user.token;
    const navigate = useNavigate();
    const [pageData, setPageData] = useState({ pageSize: 10, current: 1, total: 1 });
    const { total, pageSize, current } = pageData;
    const columns: any = [
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '图片',
            dataIndex: 'image',
            key: 'image',
            render: (v: any) => (
                <div className={styleModule.imgColumn}>
                    <img src={v} alt="" />
                </div>
            ),
        },
        {
            title: '链接',
            dataIndex: 'url',
            key: 'url',
        },
        {
            title: '操作',
            key: 'operate',
            render: () => (
                <div className={styleModule.operate}>
                    <Button type="primary" size="small">
                        编辑
                    </Button>
                    <Button type="primary" size="small" danger>
                        删除
                    </Button>
                </div>
            ),
        },
    ];
    const data: any[] = [
        {
            title: 'React',
            image: urlWithToken('http://localhost:8080\\upload\\b81693b439ac71637af20a601.png', token),
            url: 'https://reactjs.org/',
        },
    ];
    const paginationChange = (index: any, size: any) => {
        setPageData({ ...pageData, current: index, pageSize: size });
    };
    const defaultPagination = {
        size: 'small',
        showTotal: (sum: any) => `total ${sum} item`,
        showQuickJumper: false,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '30'],
        onChange: paginationChange,
    };
    const pagination: any = { ...defaultPagination, total, pageSize, current };

    const add = () => {
        navigate('/doc/setting/add')
    };
    return (
        <div className={styleModule.pageSetting}>
            <div className={styleModule.settingBox}>
                <div className={styleModule.title}>管理手册</div>
                <div className={styleModule.basicForm}>
                    <div className={styleModule.header}>
                        <Button type="primary" onClick={() => add()}>
                            添加
                        </Button>
                    </div>
                    <Table columns={columns} dataSource={data} pagination={pagination} />
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state: any, ownProps: any) => {
    return { ...ownProps, user: state.user };
};
export default connect(mapStateToProps)(Index);
