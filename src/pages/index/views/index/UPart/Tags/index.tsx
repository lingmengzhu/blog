import React from 'react';
import { Carousel, Pagination } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import styleModule from './index.module.less';

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
            UC = (
                <div className={styleModule.ucArticle}>
                    <div className={styleModule.articleList}>
                        <div className={styleModule.articleItem}>
                            <div className={styleModule.title}>第 10 题：常见异步笔试题，请写出代码的运行结果 </div>
                            {/* <div className={styleModule.image}>
                                <img src="" alt="" />
                            </div> */}
                            <div
                                className={styleModule.text}
                            >{`从一道题浅说 JavaScript 的事件循环 注：本篇文章运行环境为当前最新版本的谷歌浏览器（72.0.3626.109） 最近看到这样一道有关事件循环的前端面试题： //请写出输出内容 async function async1() { console.log('async1 start'); await async2(); console.log('async1 end'); } async…`}</div>
                            <div className={styleModule.mark}>
                                <div className={styleModule.author}>艾拉</div>
                                <div className={styleModule.time}>一小时前</div>
                                <div className={styleModule.read}>浏览 800</div>
                                <div className={styleModule.comment}>评论 10</div>
                                <div className={styleModule.collect}>收藏 10</div>
                            </div>
                        </div>
                        <div className={styleModule.articleItem}>
                            <div className={styleModule.title}>第 10 题：常见异步笔试题，请写出代码的运行结果 </div>
                            {/* <div className={styleModule.image}>
                                <img src="" alt="" />
                            </div> */}
                            <div
                                className={styleModule.text}
                            >{`从一道题浅说 JavaScript 的事件循环 注：本篇文章运行环境为当前最新版本的谷歌浏览器（72.0.3626.109） 最近看到这样一道有关事件循环的前端面试题： //请写出输出内容 async function async1() { console.log('async1 start'); await async2(); console.log('async1 end'); } async…`}</div>
                            <div className={styleModule.mark}>
                                <div className={styleModule.author}>艾拉</div>
                                <div className={styleModule.time}>一小时前</div>
                                <div className={styleModule.read}>浏览 800</div>
                                <div className={styleModule.comment}>评论 10</div>
                                <div className={styleModule.collect}>收藏 10</div>
                            </div>
                        </div>
                        <div className={styleModule.articleItem}>
                            <div className={styleModule.title}>第 10 题：常见异步笔试题，请写出代码的运行结果 </div>
                            {/* <div className={styleModule.image}>
                                <img src="" alt="" />
                            </div> */}
                            <div
                                className={styleModule.text}
                            >{`从一道题浅说 JavaScript 的事件循环 注：本篇文章运行环境为当前最新版本的谷歌浏览器（72.0.3626.109） 最近看到这样一道有关事件循环的前端面试题： //请写出输出内容 async function async1() { console.log('async1 start'); await async2(); console.log('async1 end'); } async…`}</div>
                            <div className={styleModule.mark}>
                                <div className={styleModule.author}>艾拉</div>
                                <div className={styleModule.time}>一小时前</div>
                                <div className={styleModule.read}>浏览 800</div>
                                <div className={styleModule.comment}>评论 10</div>
                                <div className={styleModule.collect}>收藏 10</div>
                            </div>
                        </div>
                        <div className={styleModule.articleItem}>
                            <div className={styleModule.title}>第 10 题：常见异步笔试题，请写出代码的运行结果 </div>
                            {/* <div className={styleModule.image}>
                                <img src="" alt="" />
                            </div> */}
                            <div
                                className={styleModule.text}
                            >{`从一道题浅说 JavaScript 的事件循环 注：本篇文章运行环境为当前最新版本的谷歌浏览器（72.0.3626.109） 最近看到这样一道有关事件循环的前端面试题： //请写出输出内容 async function async1() { console.log('async1 start'); await async2(); console.log('async1 end'); } async…`}</div>
                            <div className={styleModule.mark}>
                                <div className={styleModule.author}>艾拉</div>
                                <div className={styleModule.time}>一小时前</div>
                                <div className={styleModule.read}>浏览 800</div>
                                <div className={styleModule.comment}>评论 10</div>
                                <div className={styleModule.collect}>收藏 10</div>
                            </div>
                        </div>
                        <div className={styleModule.articleItem}>
                            <div className={styleModule.title}>第 10 题：常见异步笔试题，请写出代码的运行结果 </div>
                            {/* <div className={styleModule.image}>
                                <img src="" alt="" />
                            </div> */}
                            <div
                                className={styleModule.text}
                            >{`从一道题浅说 JavaScript 的事件循环 注：本篇文章运行环境为当前最新版本的谷歌浏览器（72.0.3626.109） 最近看到这样一道有关事件循环的前端面试题： //请写出输出内容 async function async1() { console.log('async1 start'); await async2(); console.log('async1 end'); } async…`}</div>
                            <div className={styleModule.mark}>
                                <div className={styleModule.author}>艾拉</div>
                                <div className={styleModule.time}>一小时前</div>
                                <div className={styleModule.read}>浏览 800</div>
                                <div className={styleModule.comment}>评论 10</div>
                                <div className={styleModule.collect}>收藏 10</div>
                            </div>
                        </div>
                        <div className={styleModule.pagination}>
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
