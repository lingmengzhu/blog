import React, { useEffect } from 'react';

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

const Index = (prop: any) => {
    console.log('Index');

    return <Content {...prop} />;
};
const mapStateToProps = (state: any, ownProps: any) => {
    return { ...ownProps, username: state.user.username };
};

const mapDispatchToProps = (dispatch: any) => ({
    resetUserInfo: (userInfo: any) => dispatch(resetUserInfo(userInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
