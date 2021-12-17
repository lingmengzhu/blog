/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { Button, message, Input, List, Avatar } from 'antd';
// 引入编辑器组件
import BraftEditor, { ControlType } from 'braft-editor';
import { useParams } from 'react-router-dom';
import { listArticle } from '@/api/article';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import './index.scss';

const { Search } = Input;
const Index = () => {
    console.log('Index');
    let { keywords = '' } = useParams();
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(9999);
    const [data, setData] = useState([]);

    useEffect(() => {
        listArticle({ keywords, page, pageSize })
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                message.error('服务器错误');
            });
    }, [setData, listArticle]);

    const onSearch = (value: string) => {
        listArticle({ keywords: value, page, pageSize })
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                message.error('服务器错误');
            });
    };

    return (
        <div className="page-show">
            <div className="layout">
                <div className="header">
                    <div className="search">
                        <Search onSearch={onSearch} style={{ width: 200 }} />
                    </div>
                </div>
                <div className="content">
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item className="item">
                                <List.Item.Meta
                                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                    title={<a href={`/#/show/${item._id}`}>{item.title}</a>}
                                    description="description"
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default Index;
