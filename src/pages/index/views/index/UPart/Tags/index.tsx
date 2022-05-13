import React from 'react';
import { Carousel } from 'antd';
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
                    <Carousel autoplay>
                        <div>
                            <div style={contentStyle} className="carousel-01"></div>
                        </div>
                        <div>
                            <div style={contentStyle} className="carousel-02"></div>
                        </div>
                        <div>
                            <div style={contentStyle} className="carousel-03"></div>
                        </div>
                        <div>
                            <div style={contentStyle} className="carousel-04"></div>
                        </div>
                    </Carousel>
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
