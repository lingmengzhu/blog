/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { message, Input, List, Avatar } from 'antd';
// 引入编辑器组件
import { useParams, useNavigate } from 'react-router-dom';
import { listAllArticle } from '@/api/article';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import './index.scss';

const { Search } = Input;
const Index = () => {
    console.log('Index');
    const navigate = useNavigate();
    let { keywords = '' } = useParams();
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(9999);
    const [data, setData] = useState([]);

    useEffect(() => {
        listAllArticle({ keywords, page, pageSize })
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                message.error('服务器错误');
            });
    }, [setData, listAllArticle]);

    const onSearch = (value: string) => {
        listAllArticle({ keywords: value, page, pageSize })
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
                                    title={
                                        <span
                                            onClick={() => {
                                                navigate(`/show/${item._id}`);
                                            }}
                                        >
                                            {item.title}
                                        </span>
                                    }
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
