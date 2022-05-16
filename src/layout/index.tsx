import React from 'react';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ArrowUpOutlined, FormOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import UIcon from '@/component/UIcon';
import styleModule from './index.module.less';

const { Search } = Input;
const iconStyle = { height: '24px', width: '24px', fill: '#777' };

const Footer = () => {
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
            <Footer />
            <Tool />
        </div>
    );
};
export default Layout;
