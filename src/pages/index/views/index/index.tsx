import React from 'react';
import { Input } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { resetUserInfo } from '@/actions/user';
import UIcon from '@/component/UIcon';
import Carousel from '@/component/Carousel';
import Tags from './UPart/Tags/index';

import './index.scss';

const { Search } = Input;
const iconStyle = { height: '24px', width: '24px', fill: '#777' };
const Header = ({ resetUserInfo, username }: any) => {
    return (
        <div className="page-header">
            <div className="container">
                <div className="category">
                    <div className="item">首页</div>
                    <div className="item">文章</div>
                    <div className="item">资源</div>
                    <div className="item">知识库</div>
                    <div className="item">个人介绍</div>
                    <div className="item">项目</div>
                    <div className="item">
                        <Search placeholder="搜索关键字" onSearch={() => {}} style={{ width: 260 }} />
                    </div>
                </div>
                <div className="person">
                    <div className="weixin">
                        <UIcon iconClass="weixin" style={iconStyle} />
                    </div>
                    <div className="qq">
                        <UIcon iconClass="qq" style={iconStyle} />
                    </div>
                    <div className="github">
                        <UIcon iconClass="github" style={iconStyle} />
                    </div>
                    <div className="login">登录</div>
                </div>
            </div>
        </div>
    );
};
const Content = ({ resetUserInfo, username }: any) => {
    return (
        <div className="page-content">
            <div className="content">
                <div className="card-left">
                    <div className="side-carousel">
                        <Carousel></Carousel>
                    </div>
                    <div className="side-doc">
                        <Tags url="" title="最新手册" type="doc"></Tags>
                    </div>
                    <div className="side-article">
                        <Tags url="" title="最新文章" type="article"></Tags>
                    </div>
                </div>

                <div className="card-right">
                    <div className="side-tags">
                        <Tags url="" title="热门标签" type="tags"></Tags>
                    </div>
                    <div className="side-group">
                        <Tags url="" title="推荐作者" type="author"></Tags>
                    </div>
                    <div className="side-friendship">
                        <Tags url="" title="友情链接" type="link"></Tags>
                    </div>
                </div>
            </div>
        </div>
    );
};
const Footer = (prop: any) => {
    console.log('Index');

    return (
        <div className="page-footer">
            <div className="line-01">
                <div>捐赠本站</div>
                <div>友情链接</div>
                <div>使用规范</div>
                <div>服务协议</div>
                <div>关于站长</div>
            </div>
            <div className="line-02">
                <div>备案号：182457328234</div>
            </div>
        </div>
    );
};
const Tool = () => {
    console.log('Index');

    return (
        <div className="page-tool">
            <ArrowUpOutlined style={{ color: '#999', fontSize: '18px' }} />
        </div>
    );
};
const Index = (prop: any) => {
    console.log('Index');

    return (
        <div>
            <Header {...prop} />
            <Content {...prop} />
            <Footer {...prop} />
            <Tool />
        </div>
    );
};
const mapStateToProps = (state: any, ownProps: any) => {
    return { ...ownProps, username: state.user.username };
};

const mapDispatchToProps = (dispatch: any) => ({
    resetUserInfo: (userInfo: any) => dispatch(resetUserInfo(userInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
