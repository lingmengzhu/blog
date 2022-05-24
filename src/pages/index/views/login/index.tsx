/* eslint-disable react/no-danger */
import React, { useState, useCallback, useEffect } from 'react';
import { Form, Input, Button, Checkbox, message, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '@/api/user';
import { setUserInfo } from '@/actions/user';
import styleModule from './index.module.less';

const Index = (props: any) => {
    const { setUserInfo, token } = props;
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const submit = () => {
        loginUser({ password: password.trim(), username: username.trim() })
            .then((res: any) => {
                const { token, id } = res.data;
                setUserInfo({ userId: id, username: username.trim(), token });
            })
            .catch(() => {});
    };
    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token]);
    return (
        <div className={styleModule.pageLogin}>
            <div className={styleModule.loginBox}>
                <div className={styleModule.qrChange}></div>
                <div className={styleModule.loginImage}></div>
                <div className={styleModule.loginForm}>
                    <div className={styleModule.loginMode}>
                        <div className={styleModule.item}>账号登录</div>
                        <div className={styleModule.item}>验证码登录</div>
                    </div>
                    <div className={styleModule.userName}>
                        <Input
                            value={username}
                            placeholder="请输入用户名"
                            onChange={(e) => setUsername(e.target.value)}
                        ></Input>
                    </div>
                    <div className={styleModule.password}>
                        <Input
                            value={password}
                            placeholder="请输入密码"
                            onChange={(e) => setPassword(e.target.value)}
                        ></Input>
                    </div>
                    <div className={styleModule.hint}>
                        <span>
                            还没有账号？<a onClick={() => navigate('/register')}>立即注册</a>
                        </span>
                        <span>
                            <a>忘记密码</a>
                        </span>
                    </div>
                    <div className={styleModule.confirm}>
                        <Button type="primary" block onClick={() => submit()}>
                            登录
                        </Button>
                    </div>
                    <div className={styleModule.extra}>社交账号登录</div>
                    <div className={styleModule.extraIcon}>
                        <div className={styleModule.weixin}></div>
                        <div className={styleModule.qq}></div>
                        <div className={styleModule.github}></div>
                    </div>
                    <div className={styleModule.protocol}>
                        使用社交账号可以作为已创建的博客账户，并同意<a>用户协议</a>。
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any, ownProps: any) => {
    return { ...ownProps, token: state.user.token };
};

const mapDispatchToProps = (dispatch: any) => ({
    setUserInfo: (userInfo: any) => dispatch(setUserInfo(userInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
