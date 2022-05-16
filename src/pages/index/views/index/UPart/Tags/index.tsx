import React from 'react';
import { Carousel, Pagination } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './index.scss';

export interface Props {
    url: String;
    title: String;
    type: String;
}
const Tags: React.FC<Props> = (props: Props) => {
    const { url, title, type } = props;
    const contentStyle = {
        height: '400px',
    };

    let UC = (
        <div className="uc">
            <div className="warper">
                <div className="uItem">vue</div>
            </div>
            <div className="warper">
                <div className="uItem">react</div>
            </div>
            <div className="warper">
                <div className="uItem">node</div>
            </div>
            <div className="warper">
                <div className="uItem">koa</div>
            </div>
            <div className="warper">
                <div className="uItem">nginx</div>
            </div>
            <div className="warper">
                <div className="uItem">fiddler</div>
            </div>
            <div className="warper">
                <div className="uItem">jenkins</div>
            </div>
            <div className="warper">
                <div className="uItem">mongodb</div>
            </div>
            <div className="warper">
                <div className="uItem">docker</div>
            </div>
            <div className="warper">
                <div className="uItem">hooks</div>
            </div>
            <div className="warper">
                <div className="uItem">reduce</div>
            </div>
            <div className="warper">
                <div className="uItem">vscode</div>
            </div>
        </div>
    );
    switch (type) {
        case 'author':
            UC = (
                <div className="uc-author">
                    <div className="auItem">
                        <div className="icon"></div>
                        <div className="au-content">
                            <div className="row-01">艾拉</div>
                            <div className="row-02">文章 100</div>
                        </div>
                        <div className="attention">关注 100</div>
                    </div>
                    <div className="auItem">
                        <div className="icon"></div>
                        <div className="au-content">
                            <div className="row-01">艾拉</div>
                            <div className="row-02">文章 100</div>
                        </div>
                        <div className="attention">关注 100</div>
                    </div>
                    <div className="auItem">
                        <div className="icon"></div>
                        <div className="au-content">
                            <div className="row-01">艾拉</div>
                            <div className="row-02">文章 100</div>
                        </div>
                        <div className="attention">关注 100</div>
                    </div>
                    <div className="auItem">
                        <div className="icon"></div>
                        <div className="au-content">
                            <div className="row-01">艾拉</div>
                            <div className="row-02">文章 100</div>
                        </div>
                        <div className="attention">关注 100</div>
                    </div>
                    <div className="auItem">
                        <div className="icon"></div>
                        <div className="au-content">
                            <div className="row-01">艾拉</div>
                            <div className="row-02">文章 100</div>
                        </div>
                        <div className="attention">关注 100</div>
                    </div>
                </div>
            );
            break;
        case 'link':
            UC = (
                <div className="uc-link">
                    <div className="warper">
                        <div className="linkItem">掘金主页</div>
                    </div>
                    <div className="warper">
                        <div className="linkItem">github主页</div>
                    </div>
                    <div className="warper">
                        <div className="linkItem">码云主页</div>
                    </div>
                    <div className="warper">
                        <div className="linkItem">个人主页</div>
                    </div>
                </div>
            );
            break;
        case 'doc':
            UC = (
                <div className="uc-doc">
                    <Carousel dots={false}>
                        <div>
                            <div className="doc-item carousel-01">
                                <div className="item-before">
                                    <LeftOutlined style={{ color: '#fff' }} />
                                </div>
                                <div className="item-instance"></div>
                                <div className="item-instance"></div>
                                <div className="item-instance"></div>
                                <div className="item-instance"></div>
                                <div className="item-instance"></div>
                                <div className="item-after">
                                    <RightOutlined style={{ color: '#fff' }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="doc-item carousel-02">
                                <div className="item-before">
                                    <LeftOutlined style={{ color: '#fff' }} />
                                </div>
                                <div className="item-instance"></div>
                                <div className="item-instance"></div>
                                <div className="item-instance"></div>
                                <div className="item-instance"></div>
                                <div className="item-instance"></div>
                                <div className="item-after">
                                    <RightOutlined style={{ color: '#fff' }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="doc-item carousel-03">
                                <div className="item-before">
                                    <LeftOutlined style={{ color: '#fff' }} />
                                </div>
                                <div className="item-instance"></div>
                                <div className="item-instance"></div>
                                <div className="item-instance"></div>
                                <div className="item-instance"></div>
                                <div className="item-instance"></div>
                                <div className="item-after">
                                    <RightOutlined style={{ color: '#fff' }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="doc-item carousel-04">
                                <div className="item-before">
                                    <LeftOutlined style={{ color: '#fff' }} />
                                </div>
                                <div className="item-instance"></div>
                                <div className="item-instance"></div>
                                <div className="item-instance"></div>
                                <div className="item-instance"></div>
                                <div className="item-instance"></div>
                                <div className="item-after">
                                    <RightOutlined style={{ color: '#fff' }} />
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            );
            break;
        case 'article':
            UC = (
                <div className="uc-article">
                    <div className="articleList">
                        <div className="articleItem">
                            <div className="title">第 10 题：常见异步笔试题，请写出代码的运行结果 </div>
                            {/* <div className="image">
                                <img src="" alt="" />
                            </div> */}
                            <div className="text">{`从一道题浅说 JavaScript 的事件循环 注：本篇文章运行环境为当前最新版本的谷歌浏览器（72.0.3626.109） 最近看到这样一道有关事件循环的前端面试题： //请写出输出内容 async function async1() { console.log('async1 start'); await async2(); console.log('async1 end'); } async…`}</div>
                            <div className="mark">
                                <div className="author">艾拉</div>
                                <div className="time">一小时前</div>
                                <div className="read">浏览 800</div>
                                <div className="comment">评论 10</div>
                                <div className="collect">收藏 10</div>
                            </div>
                        </div>
                        <div className="articleItem">
                            <div className="title">第 10 题：常见异步笔试题，请写出代码的运行结果 </div>
                            {/* <div className="image">
                                <img src="" alt="" />
                            </div> */}
                            <div className="text">{`从一道题浅说 JavaScript 的事件循环 注：本篇文章运行环境为当前最新版本的谷歌浏览器（72.0.3626.109） 最近看到这样一道有关事件循环的前端面试题： //请写出输出内容 async function async1() { console.log('async1 start'); await async2(); console.log('async1 end'); } async…`}</div>
                            <div className="mark">
                                <div className="author">艾拉</div>
                                <div className="time">一小时前</div>
                                <div className="read">浏览 800</div>
                                <div className="comment">评论 10</div>
                                <div className="collect">收藏 10</div>
                            </div>
                        </div>
                        <div className="articleItem">
                            <div className="title">第 10 题：常见异步笔试题，请写出代码的运行结果 </div>
                            {/* <div className="image">
                                <img src="" alt="" />
                            </div> */}
                            <div className="text">{`从一道题浅说 JavaScript 的事件循环 注：本篇文章运行环境为当前最新版本的谷歌浏览器（72.0.3626.109） 最近看到这样一道有关事件循环的前端面试题： //请写出输出内容 async function async1() { console.log('async1 start'); await async2(); console.log('async1 end'); } async…`}</div>
                            <div className="mark">
                                <div className="author">艾拉</div>
                                <div className="time">一小时前</div>
                                <div className="read">浏览 800</div>
                                <div className="comment">评论 10</div>
                                <div className="collect">收藏 10</div>
                            </div>
                        </div>
                        <div className="articleItem">
                            <div className="title">第 10 题：常见异步笔试题，请写出代码的运行结果 </div>
                            {/* <div className="image">
                                <img src="" alt="" />
                            </div> */}
                            <div className="text">{`从一道题浅说 JavaScript 的事件循环 注：本篇文章运行环境为当前最新版本的谷歌浏览器（72.0.3626.109） 最近看到这样一道有关事件循环的前端面试题： //请写出输出内容 async function async1() { console.log('async1 start'); await async2(); console.log('async1 end'); } async…`}</div>
                            <div className="mark">
                                <div className="author">艾拉</div>
                                <div className="time">一小时前</div>
                                <div className="read">浏览 800</div>
                                <div className="comment">评论 10</div>
                                <div className="collect">收藏 10</div>
                            </div>
                        </div>
                        <div className="articleItem">
                            <div className="title">第 10 题：常见异步笔试题，请写出代码的运行结果 </div>
                            {/* <div className="image">
                                <img src="" alt="" />
                            </div> */}
                            <div className="text">{`从一道题浅说 JavaScript 的事件循环 注：本篇文章运行环境为当前最新版本的谷歌浏览器（72.0.3626.109） 最近看到这样一道有关事件循环的前端面试题： //请写出输出内容 async function async1() { console.log('async1 start'); await async2(); console.log('async1 end'); } async…`}</div>
                            <div className="mark">
                                <div className="author">艾拉</div>
                                <div className="time">一小时前</div>
                                <div className="read">浏览 800</div>
                                <div className="comment">评论 10</div>
                                <div className="collect">收藏 10</div>
                            </div>
                        </div>
                        <div className='pagination'>
                            <Pagination defaultCurrent={6} total={500} />
                        </div>
                    </div>
                </div>
            );
            break;
        default:
            break;
    }
    return (
        <div className="u-part tags">
            <div className="uh">
                <div className="ut">{title}</div>
                <div className="uo">更多</div>
            </div>
            {UC}
        </div>
    );
};
export default Tags;
