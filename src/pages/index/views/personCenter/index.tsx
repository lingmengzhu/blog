/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import styleModule from './index.module.less';
import { useParams, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import Tags from '../index/UPart/Tags';
import UIcon from '@/component/UIcon';
import UEmpty from '@/component/UEmpty';

const Index = () => {
    console.log('Index');
    const { activeKey } = useParams();
    const [activeTab, setActiveTab] = useState(activeKey);
    useEffect(() => {
        setActiveTab(activeKey);
    }, [activeKey]);
    const TabsArr = [
        { key: 'article', label: '文章 0' },
        { key: 'comment', label: '评论 0' },
        { key: 'topic', label: '话题 0' },
        { key: 'reply', label: '回复 0' },
        { key: 'collection', label: '收藏 0' },
        { key: 'data', label: '资料' },
    ];

    return (
        <div className={styleModule.pageContent}>
            <div className={styleModule.content}>
                <div className={styleModule.cardLeft}>
                    <div className={styleModule.pcHeader}>
                        <div className={styleModule.icon}>
                            <UIcon iconClass="addArticle" style={{ height: '80px', width: '80px', fill: '#777' }} />
                        </div>
                        <div className={styleModule.info}>
                            <div className={styleModule.name}>栗山是板栗山吗</div>
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
                        <UEmpty text="列表为空，暂无数据" />
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

export default Index;
