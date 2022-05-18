import React, { useEffect, useState } from 'react';
import { Carousel, Pagination } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import styleModule from './index.module.less';
import { listAllArticle } from '@/api/article';
import moment from 'moment';

export interface Props {
    url: String;
    title: String;
    type: String;
}
const Article = () => {
    const [loading, setLoading] = useState(false);
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
                        <div key={item.articleId} className={styleModule.articleItem}>
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
const Tags: React.FC<Props> = (props: Props) => {
    const { url, title, type } = props;
    const contentStyle = {
        height: '400px',
    };

    let UC = (
        <div className={styleModule.uc}>
            <div className={styleModule.warper}>
                <div className={styleModule.uItem}>vue</div>
            </div>
            <div className={styleModule.warper}>
                <div className={styleModule.uItem}>react</div>
            </div>
            <div className={styleModule.warper}>
                <div className={styleModule.uItem}>node</div>
            </div>
            <div className={styleModule.warper}>
                <div className={styleModule.uItem}>koa</div>
            </div>
            <div className={styleModule.warper}>
                <div className={styleModule.uItem}>nginx</div>
            </div>
            <div className={styleModule.warper}>
                <div className={styleModule.uItem}>fiddler</div>
            </div>
            <div className={styleModule.warper}>
                <div className={styleModule.uItem}>jenkins</div>
            </div>
            <div className={styleModule.warper}>
                <div className={styleModule.uItem}>mongodb</div>
            </div>
            <div className={styleModule.warper}>
                <div className={styleModule.uItem}>docker</div>
            </div>
            <div className={styleModule.warper}>
                <div className={styleModule.uItem}>hooks</div>
            </div>
            <div className={styleModule.warper}>
                <div className={styleModule.uItem}>reduce</div>
            </div>
            <div className={styleModule.warper}>
                <div className={styleModule.uItem}>vscode</div>
            </div>
        </div>
    );
    switch (type) {
        case 'author':
            UC = (
                <div className={styleModule.ucAuthor}>
                    <div className={styleModule.auItem}>
                        <div className={styleModule.icon}></div>
                        <div className={styleModule.auContent}>
                            <div className={styleModule.row01}>艾拉</div>
                            <div className={styleModule.row02}>文章 100</div>
                        </div>
                        <div className={styleModule.attention}>关注 100</div>
                    </div>
                    <div className={styleModule.auItem}>
                        <div className={styleModule.icon}></div>
                        <div className={styleModule.auContent}>
                            <div className={styleModule.row01}>艾拉</div>
                            <div className={styleModule.row02}>文章 100</div>
                        </div>
                        <div className={styleModule.attention}>关注 100</div>
                    </div>
                    <div className={styleModule.auItem}>
                        <div className={styleModule.icon}></div>
                        <div className={styleModule.auContent}>
                            <div className={styleModule.row01}>艾拉</div>
                            <div className={styleModule.row02}>文章 100</div>
                        </div>
                        <div className={styleModule.attention}>关注 100</div>
                    </div>
                    <div className={styleModule.auItem}>
                        <div className={styleModule.icon}></div>
                        <div className={styleModule.auContent}>
                            <div className={styleModule.row01}>艾拉</div>
                            <div className={styleModule.row02}>文章 100</div>
                        </div>
                        <div className={styleModule.attention}>关注 100</div>
                    </div>
                    <div className={styleModule.auItem}>
                        <div className={styleModule.icon}></div>
                        <div className={styleModule.auContent}>
                            <div className={styleModule.row01}>艾拉</div>
                            <div className={styleModule.row02}>文章 100</div>
                        </div>
                        <div className={styleModule.attention}>关注 100</div>
                    </div>
                </div>
            );
            break;
        case 'link':
            UC = (
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
            break;
        case 'doc':
            UC = (
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
                <div className={styleModule.uo}>更多</div>
            </div>
            {UC}
        </div>
    );
};
export default Tags;
