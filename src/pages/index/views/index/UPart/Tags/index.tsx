import React, { useEffect, useState } from 'react';
import { Carousel, Pagination, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import styleModule from './index.module.less';
import { listAllArticle } from '@/api/article';
import { useNavigate } from 'react-router-dom';
import { listTags } from '@/api/tags';
import { listUser } from '@/api/user';
import UIcon from '@/component/UIcon';
import moment from 'moment';

const iconStyle = { height: '48px', width: '48px', fill: '#777' };
export interface Props {
    url: String;
    title: String;
    type: String;
    more?: Boolean;
}
const Article = () => {
    const navigate = useNavigate();
    const [article, setArticle] = useState([]);
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 });
    const { current, pageSize, total } = pagination;
    // 获取文章
    const getArticle = () => {
        listAllArticle({ current, pageSize }).then((res: any) => {
            setArticle(res.data);
            setPagination({ ...pagination, total: res.total });
        });
    };
    const onChange = (page: any, size: any) => {
        console.log(page, size);
        setPagination({ ...pagination, current: page, pageSize: size });
    };
    useEffect(() => {
        getArticle();
    }, [pagination.current, pagination.pageSize]);
    return (
        <div className={styleModule.ucArticle}>
            <div className={styleModule.articleList}>
                {article.map((item) => {
                    return (
                        <div
                            key={item.articleId}
                            className={styleModule.articleItem}
                            onClick={() => {
                                navigate(`/article/${item.articleId}`);
                            }}
                        >
                            <div className={styleModule.title}>{item.title}</div>
                            <div className={styleModule.text} dangerouslySetInnerHTML={{ __html: item.content }}></div>
                            <div className={styleModule.mark}>
                                <div className={styleModule.author}>{item.userId}</div>
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
};
const HotTags = () => {
    const current = 1;
    const pageSize = 15;
    const order = 'articleNum';
    const [tags, setTags] = useState([]);
    const getTags = () => {
        listTags({ current, pageSize, order }).then((res: any) => {
            setTags(res.data);
        });
    };
    useEffect(() => {
        getTags();
    }, []);
    return (
        <div className={styleModule.uc}>
            {tags.map((item) => {
                return (
                    <div key={item._id} className={styleModule.warper}>
                        <div className={styleModule.uItem}>{item.label}</div>
                    </div>
                );
            })}
        </div>
    );
};
const Author = () => {
    const current = 1;
    const pageSize = 5;
    const order = 'articleNum';
    const [userList, setUserList] = useState([]);
    const getAuthor = () => {
        listUser({ current, pageSize, order }).then((res: any) => {
            setUserList(res.data);
        });
    };
    useEffect(() => {
        getAuthor();
    }, []);
    return (
        <div className={styleModule.ucAuthor}>
            {userList.map((item) => {
                return (
                    <div key={item._id} className={styleModule.auItem}>
                        <div className={styleModule.icon}></div>
                        <div className={styleModule.auContent}>
                            <div className={styleModule.row01}>{item.username}</div>
                            <div className={styleModule.row02}>文章 {item.articleNum || 0}</div>
                        </div>
                        <div className={styleModule.attention}>关注 {item.attentionNum || 0}</div>
                    </div>
                );
            })}
        </div>
    );
};
const Doc = () => {
    return (
        <div className={styleModule.ucDoc}>
            <Carousel dots={false}>
                <div>
                    <div className={classNames(styleModule.docItem, styleModule.carousel01)}>
                        <div className={styleModule.itemBefore}>
                            <LeftOutlined style={{ color: '#fff' }} />
                        </div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemAfter}>
                            <RightOutlined style={{ color: '#fff' }} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={classNames(styleModule.docItem, styleModule.carousel02)}>
                        <div className={styleModule.itemBefore}>
                            <LeftOutlined style={{ color: '#fff' }} />
                        </div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemAfter}>
                            <RightOutlined style={{ color: '#fff' }} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={classNames(styleModule.docItem, styleModule.carousel03)}>
                        <div className={styleModule.itemBefore}>
                            <LeftOutlined style={{ color: '#fff' }} />
                        </div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemAfter}>
                            <RightOutlined style={{ color: '#fff' }} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={classNames(styleModule.docItem, styleModule.carousel04)}>
                        <div className={styleModule.itemBefore}>
                            <LeftOutlined style={{ color: '#fff' }} />
                        </div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemInstance}></div>
                        <div className={styleModule.itemAfter}>
                            <RightOutlined style={{ color: '#fff' }} />
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};
const Link = () => {
    return (
        <div className={styleModule.ucLink}>
            <div className={styleModule.warper}>
                <div className={styleModule.linkItem}>掘金主页</div>
            </div>
            <div className={styleModule.warper}>
                <div className={styleModule.linkItem}>github主页</div>
            </div>
            <div className={styleModule.warper}>
                <div className={styleModule.linkItem}>码云主页</div>
            </div>
            <div className={styleModule.warper}>
                <div className={styleModule.linkItem}>个人主页</div>
            </div>
        </div>
    );
};
const Writer = () => {
    return (
        <div className={styleModule.ucWriter}>
            <div className={styleModule.person}>
                <div className={styleModule.icon}>
                    <UIcon iconClass="weixin" style={iconStyle} />
                </div>
                <div className={styleModule.section}>
                    <div className={styleModule.name}>空心人</div>
                    <div className={styleModule.signature}>我是空心人</div>
                </div>
            </div>
            <div className={styleModule.output}>
                <div className={styleModule.item}>
                    <div className={styleModule.count}>0</div>
                    <div className={styleModule.type}>文章</div>
                </div>
                <div className={styleModule.item}>
                    <div className={styleModule.count}>0</div>
                    <div className={styleModule.type}>评论</div>
                </div>
                <div className={styleModule.item}>
                    <div className={styleModule.count}>0</div>
                    <div className={styleModule.type}>人气</div>
                </div>
            </div>
            <div className={styleModule.operate}>
                <div className={styleModule.focus}>
                    <Button type="primary">关注</Button>
                </div>
                <div className={styleModule.letter}>
                    <Button type="primary">私信</Button>
                </div>
            </div>
        </div>
    );
};
const Tags: React.FC<Props> = (props: Props) => {
    const { url, title, type, more = true } = props;

    let UC = <HotTags />;
    switch (type) {
        case 'author':
            UC = <Author />;
            break;
        case 'writer':
            UC = <Writer />;
            break;
        case 'link':
            UC = <Link />;
            break;
        case 'doc':
            UC = <Doc />;
            break;
        case 'article':
            UC = <Article />;
            break;
        default:
            break;
    }
    return (
        <div className={classNames('uPart', styleModule.tags)}>
            <div className={styleModule.uh}>
                <div className={styleModule.ut}>{title}</div>
                {more && <div className={styleModule.uo}>更多</div>}
            </div>
            {UC}
        </div>
    );
};
export default Tags;
