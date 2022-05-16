import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpOutlined, FormOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { resetUserInfo } from '@/actions/user';
import Carousel from '@/component/Carousel';
import Tags from './UPart/Tags/index';

import styleModule from './index.module.less';


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
    const navigate = useNavigate();
    const edit = () => {
        navigate('/add');
    };
    return (
        <div className={styleModule.pageTool}>
            <div className={styleModule.item} onClick={edit}>
                <FormOutlined />
            </div>
            <div className={styleModule.item}>
                <ArrowUpOutlined />
            </div>
        </div>
    );
};
const Index = (prop: any) => {
    console.log('Index');

    return (
        <>
            <Content {...prop} />
            <Footer {...prop} />
            <Tool />
        </>
    );
};
const mapStateToProps = (state: any, ownProps: any) => {
    return { ...ownProps, username: state.user.username };
};

const mapDispatchToProps = (dispatch: any) => ({
    resetUserInfo: (userInfo: any) => dispatch(resetUserInfo(userInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
