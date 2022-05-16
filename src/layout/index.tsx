import React from 'react';
import { Input } from 'antd';
import { Outlet } from 'react-router-dom';
import UIcon from '@/component/UIcon';
import styleModule from './index.module.less';

const { Search } = Input;
const iconStyle = { height: '24px', width: '24px', fill: '#777' };
const Layout = () => {
    return (
        <div className={styleModule.layout}>
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
            <Outlet />
        </div>
    );
};
export default Layout;
