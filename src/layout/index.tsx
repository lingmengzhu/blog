import React, { useState, useContext } from 'react';
import { Input } from 'antd';
import { Scrollbars } from 'rc-scrollbars';
import { useNavigate } from 'react-router-dom';
import { ArrowUpOutlined, FormOutlined } from '@ant-design/icons';
import UModal from '@/component/UModal';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import UIcon from '@/component/UIcon';
// 登出
import { resetUserInfo } from '@/actions/user';
import styleModule from './index.module.less';

const { Search } = Input;
const iconStyle = { height: '24px', width: '24px', fill: '#777' };
interface LayoutProps {
    userInfo?: any;
    resetUserInfo?: Function;
}
interface LayoutContextProps extends LayoutProps {
    visible?: boolean;
    setVisible?: Function;
}
const LayoutContext = React.createContext<LayoutContextProps>({});
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
    const navigate = useNavigate();
    const edit = () => {
        backTop();
        navigate('/add');
    };
    const backTop = () => {
        const rootElement = document.documentElement;
        rootElement.scrollTo({
            top: 0,
            behavior: 'smooth', //动画效果
        });
    };
    return (
        <div className={styleModule.pageTool}>
            <div className={styleModule.item} onClick={edit}>
                <FormOutlined />
            </div>
            <div className={styleModule.item} onClick={backTop}>
                <ArrowUpOutlined />
            </div>
        </div>
    );
};
const Header = () => {
    const { setVisible, userInfo, resetUserInfo } = useContext<LayoutContextProps>(LayoutContext);
    const { token } = userInfo;
    console.log('token', token);
    const navigate = useNavigate();
    return (
        <div className={styleModule.pageHeader}>
            <div className={styleModule.container}>
                <div className={styleModule.category}>
                    <div className={styleModule.item} onClick={() => navigate('/')}>
                        首页
                    </div>
                    <div className={styleModule.item}>文章</div>
                    <div className={styleModule.item}>资源</div>
                    <div className={styleModule.item}>知识库</div>
                    <div className={styleModule.item}>个人介绍</div>
                    <div className={styleModule.item}>项目</div>
                    <div className={styleModule.item}>
                        <Search placeholder="搜索关键字" onSearch={() => {}} style={{ width: 260 }} />
                    </div>
                </div>
                {token ? (
                    <div className={styleModule.person}>
                        <div className={styleModule.weixin}>
                            <UIcon iconClass="weixin" style={iconStyle} />
                        </div>
                        <div className={styleModule.login} onClick={() => resetUserInfo()}>
                            登出
                        </div>
                    </div>
                ) : (
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
                        <div className={styleModule.login} onClick={() => setVisible(true)}>
                            登录
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
const LoginModal = () => {
    const { visible, setVisible } = useContext<LayoutContextProps>(LayoutContext);
    return (
        <UModal
            title="登录"
            visible={visible}
            wrapClassName="loginModal"
            handleCancel={() => setVisible(false)}
            handleOk={() => setVisible(false)}
            width="400px"
        >
            <div>登录form</div>
        </UModal>
    );
};
const Layout = (props: LayoutProps) => {
    const [visible, setVisible] = useState(false);
    return (
        <Scrollbars style={{ width: '100vw', height: '100vh' }}>
            <LayoutContext.Provider value={{ visible, setVisible, ...props }}>
                <div className={styleModule.layout}>
                    <Header />
                    <Outlet />
                    <Footer />
                    <Tool />
                    <LoginModal />
                </div>
            </LayoutContext.Provider>
        </Scrollbars>
    );
};
const mapStateToProps = (state: any, ownProps: any) => {
    return { ...ownProps, userInfo: state.user };
};
const mapDispatchToProps = (dispatch: any) => ({
    resetUserInfo: (userInfo: any) => dispatch(resetUserInfo(userInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
