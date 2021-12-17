import React, { useEffect, useState } from 'react';
import { Table, Space, Input, Button, Popconfirm, message } from 'antd';
import { listArticle, deleteArticle } from '@/api/article';
import './index.scss';

const { Search } = Input;

const Index = () => {
    console.log('Index');
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [data, setData] = useState([]);

    useEffect(() => {
        listArticle({ page, pageSize })
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                message.error('服务器错误');
            });
    }, [setData, listArticle]);

    const onSearch = () => {};

    const onAdd = () => {
        window.location.href = '/#/add';
    };

    const onDel = (id: any) => {
        deleteArticle(id)
            .then((res) => {
                console.log('listArticle', res);
                message.success(`id为${id}项已经被删除`);
            })
            .catch(() => {
                message.error('服务器错误');
            });
    };

    const onEdit = (id: any) => {
        console.log(id);
        window.location.href = `/#/edit/${id}`;
    };

    const columns = [
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '上传时间',
            dataIndex: 'createTime',
            key: 'createTime',
        },
        {
            title: '修改时间',
            dataIndex: 'modifyTime',
            key: 'modifyTime',
        },
        {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '操作',
            key: 'action',
            render: (text: any, record: any) => (
                <Space size="middle">
                    <Button type="link" onClick={() => onEdit(record._id)}>
                        Edit
                    </Button>
                    <Popconfirm
                        title="你确定要删除该项内容吗?"
                        onConfirm={() => onDel(record._id)}
                        okText="确认"
                        cancelText="取消"
                    >
                        <Button type="link">Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div className="page-list">
            <div className="layout">
                <div>
                    <h2>文章管理</h2>
                </div>
                <div className="button-group">
                    <Search onSearch={onSearch} style={{ width: 200 }} />
                    <Button type="primary" onClick={onAdd}>
                        Add
                    </Button>
                </div>
                <Table style={{ width: '100%' }} rowKey="_id" columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Index;
