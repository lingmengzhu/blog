/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { Button, Pagination } from 'antd';
import styleModule from './index.module.less';
import { useParams, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { listArticle } from '@/api/article';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Tags from '../index/UPart/Tags';
import defaultPng from '@/assets/images/10000.png';
import moment from 'moment';
import UEmpty from '@/component/UEmpty';

const Index = (props: any) => {
    console.log('Index');
    const { user } = props;
    const navigate = useNavigate();
    const { activeKey } = useParams();
    const [activeTab, setActiveTab] = useState(activeKey);
    const countMapInit = { article: 0, comment: 0, topic: 0, reply: 0, collection: 0 };
    const dataMapInit: any = { article: [], comment: [], topic: [], reply: [], collection: [], data: [] };
    const [countMap, setCountMap] = useState(countMapInit);
    const [dataMap, setDataMap] = useState(dataMapInit);
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 });
    const { current, pageSize, total } = pagination;
    useEffect(() => {
        setActiveTab(activeKey);
    }, [activeKey]);
    const TabsArr = [
        { key: 'article', label: `文章 ${countMap.article}` },
        { key: 'comment', label: `评论 ${countMap.comment}` },
        { key: 'topic', label: `话题 ${countMap.topic}` },
        { key: 'reply', label: `回复 ${countMap.reply}` },
        { key: 'collection', label: `收藏 ${countMap.collection}` },
        { key: 'data', label: `资料` },
    ];
    useEffect(() => {
        listArticle({ current, pageSize }).then((res: any) => {
            setCountMap({ ...countMap, article: res.total });
            setDataMap({ ...dataMap, article: res.data });
            setPagination({ ...pagination, total: res.total });
        });
    }, []);

    const onChange = (page: any, size: any) => {
        setPagination({ ...pagination, current: page, pageSize: size });
    };
    const Empty = <UEmpty text="列表为空，暂无数据" />;
    const Article = () => {
        const Dom = (
            <div className={styleModule.ucArticle}>
                <div className={styleModule.articleList}>
                    {dataMap.article.map((item: any) => {
                        return (
                            <div
                                key={item.articleId}
                                className={styleModule.articleItem}
                                onClick={() => {
                                    navigate(`/article/${item.articleId}`);
                                }}
                            >
                                <div className={styleModule.title}>{item.title}</div>
                                <div
                                    className={styleModule.text}
                                    dangerouslySetInnerHTML={{ __html: item.content }}
                                ></div>
                                <div className={styleModule.mark}>
                                    <div className={styleModule.author}>{item.user.nickname || item.user.username}</div>
                                    <div className={styleModule.time}>{moment(item.createTime).fromNow()}</div>
                                    <div className={styleModule.read}>浏览 {item.readNum || 0}</div>
                                    <div className={styleModule.comment}>评论 {item.commentNum || 0}</div>
                                    <div className={styleModule.collect}>收藏 {item.collectNum || 0}</div>
                                </div>
                            </div>
                        );
                    })}

                    <div className={styleModule.pagination}>
                        <Pagination
                            showTotal={(total) => `${total} items`}
                            current={current}
                            total={total}
                            pageSize={pageSize}
                            showSizeChanger
                            onChange={onChange}
                        />
                    </div>
                </div>
            </div>
        );
        return dataMap.article.length > 0 ? Dom : Empty;
    };
    const Content = () => {
        let el = <Article></Article>;
        switch (activeTab) {
            case 'comment':
                el = Empty;
                break;
            case 'topic':
                el = Empty;
                break;
            case 'reply':
                el = Empty;
                break;
            case 'collection':
                el = Empty;
                break;
            case 'data':
                el = Empty;
                break;
            default:
                break;
        }
        return el;
    };
    return (
        <div className={styleModule.pageContent}>
            <div className={styleModule.content}>
                <div className={styleModule.cardLeft}>
                    <div className={styleModule.pcHeader}>
                        <div className={styleModule.icon}>
                            {/* <UIcon iconClass="addArticle" style={{ height: '80px', width: '80px', fill: '#777' }} /> */}
                            <img src={user.profilePhoto || defaultPng} alt="" />
                        </div>
                        <div className={styleModule.info}>
                            <div className={styleModule.name}>{user.nickname || user.username}</div>
                            <div className={styleModule.indicator}>
                                <div className={styleModule.item}>文章 0</div>
                                <div className={styleModule.item}>评论 0</div>
                                <div className={styleModule.item}>浏览 0</div>
                            </div>
                        </div>
                        <div className={styleModule.notice}>
                            <Button type="primary" shape="round" size="middle">
                                关注 0
                            </Button>
                        </div>
                    </div>
                    <div className={styleModule.pcTabs}>
                        {TabsArr.map((item) => {
                            return (
                                <div
                                    key={item.key}
                                    className={classNames(
                                        styleModule.tabsItem,
                                        activeTab === item.key && styleModule.active
                                    )}
                                    onClick={() => setActiveTab(item.key)}
                                >
                                    {item.label}
                                </div>
                            );
                        })}
                    </div>
                    <div className={styleModule.pcContent}>
                        <Content />
                    </div>
                </div>

                <div className={styleModule.cardRight}>
                    <div className={styleModule.sideTags}>
                        <Tags url="" title="热门标签" type="tags"></Tags>
                    </div>
                    <div className={styleModule.sideGroup}>
                        <Tags url="" title="推荐作者" type="author"></Tags>
                    </div>
                    <div className={styleModule.sideFriendship}>
                        <Tags url="" title="友情链接" type="link"></Tags>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any, ownProps: any) => {
    return { ...ownProps, user: state.user };
};

export default connect(mapStateToProps)(Index);
