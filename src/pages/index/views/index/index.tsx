import React from 'react';
import { Input } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { resetUserInfo } from '@/actions/user';
import UIcon from '@/component/UIcon';
import Carousel from '@/component/Carousel';
import Tags from './UPart/Tags/index';

import styleModule from './index.module.less';

const { Search } = Input;
const iconStyle = { height: '24px', width: '24px', fill: '#777' };
const Header = ({ resetUserInfo, username }: any) => {
    return (
        <div className={styleModule.pageHeader}>
            <div className={styleModule.container}>
                <div className={styleModule.category}>
                    <div className={styleModule.item}>首页</div>
                    <div className={styleModule.item}>文章</div>
                    <div className={styleModule.item}>资源</div>
                    <div className={styleModule.item}>知识库</div>
                    <div className={styleModule.item}>个人介绍</div>
                    <div className={styleModule.item}>项目</div>
                    <div className={styleModule.item}>
                        <Search placeholder="搜索关键字" onSearch={() => {}} style={{ width: 260 }} />
                    </div>
                </div>
                <div className={styleModule.person}>
                    <div className={styleModule.weixin}>
                        <UIcon iconClass="weixin" style={iconStyle} />
                    </div>
                    <div className={styleModule.qq}>
                        <UIcon iconClass="qq" style={iconStyle} />
                    </div>
                    <div className={styleModule.github}>
                        <UIcon iconClass="github" style={iconStyle} />
                    </div>
                    <div className={styleModule.login}>登录</div>
                </div>
            </div>
        </div>
    );
};
const Content = ({ resetUserInfo, username }: any) => {
    return (
        <div className={styleModule.pageContent}>
            <div className={styleModule.content}>
                <div className={styleModule.cardLeft}>
                    <div className={styleModule.sideCarousel}>
                        <Carousel></Carousel>
                    </div>
                    <div className={styleModule.sideDoc}>
                        <Tags url="" title="最新手册" type="doc"></Tags>
                    </div>
                    <div className={styleModule.sideArticle}>
                        <Tags url="" title="最新文章" type="article"></Tags>
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
const Footer = (prop: any) => {
    console.log('Index');

    return (
        <div className={styleModule.pageFooter}>
            <div className={styleModule.line01}>
                <div>捐赠本站</div>
                <div>友情链接</div>
                <div>使用规范</div>
                <div>服务协议</div>
                <div>关于站长</div>
            </div>
            <div className={styleModule.line02}>
                <div>备案号：182457328234</div>
            </div>
        </div>
    );
};
const Tool = () => {
    console.log('Index');

    return (
        <div className={styleModule.pageTool}>
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
