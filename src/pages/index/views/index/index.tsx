import React from 'react';
import { Input, List, Avatar, Card, Tooltip } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons';
import code from '../../../../assets/img/code.jpg';
import './index.scss';

const { Search } = Input;
const ArticleList = () => {
    console.log('ArticleList');
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];

    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={
                            <Avatar src="https://joeschmoe.io/api/v1/random" />
                        }
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
            )}
        />
    );
};

const Header = () => {
    console.log('Header');

    const onSearch = (value: string) => console.log(value);

    const onList = () => {
        window.location.href = '/#/list';
    };

    return (
        <div className="page-index">
            <div className="fixed-menu">
                <Tooltip title="管理文章">
                    <PlusCircleTwoTone
                        onClick={onList}
                        style={{ fontSize: 48 }}
                    />
                </Tooltip>
            </div>
            <div className="layout">
                <div className="header">
                    <div className="title">
                        <span>陈航的博客</span>
                    </div>
                    <div className="search">
                        <Search onSearch={onSearch} style={{ width: 200 }} />
                    </div>
                </div>
                <div className="divider" />
                <div className="content">
                    <div className="article">
                        <div className="header">
                            <div className="title">最新文章</div>
                        </div>
                        <div className="divider" />
                        <div className="list">
                            <ArticleList />
                        </div>
                        <div className="more">更多文章......</div>
                    </div>
                    <div className="info-card">
                        <div className="message">
                            <Card
                                title="最新留言"
                                bordered={false}
                                style={{ width: 300 }}
                            >
                                <div className="card-content">
                                    <p>Card content</p>
                                </div>
                            </Card>
                        </div>
                        <div className="author">
                            <Card
                                title="关于"
                                bordered={false}
                                style={{ width: 300 }}
                            >
                                <div className="card-content">
                                    <p>Card content</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="divider" />
                <div className="footer">
                    <div className="contact">
                        <div className="code">
                            <img src={code} alt="" width="120" height="120" />
                        </div>
                        <div className="email">Email:2287843583@qq.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Index = () => {
    console.log('Index');

    return <Header />;
};

export default Index;
