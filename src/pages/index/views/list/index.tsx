import React, { useEffect } from 'react';
import { Table, Space, Input, Button, Popconfirm, message } from 'antd';
import { listArticle, deleteArticle } from '@/api/article';
import './index.scss';

const { Search } = Input;

const Index = () => {
    console.log('Index');
    useEffect(() => {
        listArticle()
            .then((res) => {
                console.log('listArticle', res);
            })
            .catch(() => {
                message.error('服务器错误');
            });
    }, [listArticle]);
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
            dataIndex: 'time',
            key: 'time',
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
                    <Button type="link" onClick={() => onEdit(record.id)}>
                        Edit
                    </Button>
                    <Popconfirm
                        title="你确定要删除该项内容吗?"
                        onConfirm={() => onDel(record.id)}
                        // onCancel={cancel}
                        okText="确认"
                        cancelText="取消"
                    >
                        <Button type="link">Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const data = [
        {
            id: '1',
            key: '1',
            title: '科技人生',
            time: '1997-11-09',
            type: '技术文集',
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
                <Table style={{ width: '100%' }} columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Index;
