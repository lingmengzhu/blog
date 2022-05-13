import React, { useEffect, useState } from 'react';
import { Input, List, Avatar, Card, Tooltip, message } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { listAllArticle } from '@/api/article';
import { connect } from 'react-redux';
import { resetUserInfo } from '@/actions/user';
import code from '../../../../assets/img/code.jpg';
import './index.scss';

const { Search } = Input;
const ArticleList = () => {
    console.log('ArticleList');
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(7);
    const [data, setData] = useState([]);
    useEffect(() => {
        listAllArticle({ page, pageSize })
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                message.error('服务器错误');
            });
    }, [setData, listAllArticle]);
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
                <List.Item
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        navigate(`/show/${item._id}`);
                    }}
                >
                    <List.Item.Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={item.title}
                        description="description"
                    />
                </List.Item>
            )}
        />
    );
};

const Header = ({ resetUserInfo, username }: any) => {
    console.log('Header');
    const navigate = useNavigate();
    const onSearch = (value: string) => {
        navigate(`/search/${value}`);
    };

    const onList = () => {
        navigate('/list');
    };

    return (
        <div className="page-index">
            <div className="fixed-menu">
                <Tooltip title="管理文章">
                    <PlusCircleTwoTone onClick={onList} style={{ fontSize: 48 }} />
                </Tooltip>
                <Tooltip title="退出登录">
                    <PlusCircleTwoTone
                        onClick={() => {
                            resetUserInfo();
                        }}
                        style={{ fontSize: 48 }}
                    />
                </Tooltip>
            </div>
            <div className="layout">
                <div className="header">
                    <div className="title">
                        <span>{username}的博客</span>
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
                        <div className="more" onClick={() => onSearch('')}>
                            更多文章......
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="message">
                            <Card title="最新留言" bordered={false} style={{ width: 300 }}>
                                <div className="card-content">
                                    <p>Card content</p>
                                </div>
                            </Card>
                        </div>
                        <div className="author">
                            <Card title="关于" bordered={false} style={{ width: 300 }}>
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

const Index = (prop: any) => {
    console.log('Index');

    return <Header {...prop} />;
};
const mapStateToProps = (state: any, ownProps: any) => {
    return { ...ownProps, username: state.user.username };
};

const mapDispatchToProps = (dispatch: any) => ({
    resetUserInfo: (userInfo: any) => dispatch(resetUserInfo(userInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
