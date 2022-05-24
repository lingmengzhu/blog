import React, { useEffect, useState } from 'react';
import { Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { addUser } from '@/api/user';
import styleModule from './index.module.less';

const Index = (props: any) => {
    const navigate = useNavigate();
    const { token } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const submit = () => {
        const user = { username, password, email };
        addUser(user)
            .then(() => message.success('注册成功'))
            .catch(() => {});
    };
    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token]);
    return (
        <div className={styleModule.pageRegister}>
            <div className={styleModule.registerBox}>
                <div className={styleModule.registerForm}>
                    <div className={styleModule.title}>账号注册</div>
                    <div className={styleModule.protocol}>
                        登录注册即表示同意 <a>《用户协议》</a> 和 <a>《使用规范》</a>。
                    </div>
                    <div className={styleModule.userName}>
                        <Input
                            value={username}
                            placeholder="请输入用户名"
                            onChange={(v) => setUsername(v.target.value)}
                        ></Input>
                    </div>
                    <div className={styleModule.password}>
                        <Input
                            value={password}
                            placeholder="请输入密码"
                            onChange={(v) => setPassword(v.target.value)}
                        ></Input>
                    </div>
                    <div className={styleModule.email}>
                        <Input
                            value={email}
                            placeholder="请输入邮箱地址"
                            onChange={(v) => setEmail(v.target.value)}
                        ></Input>
                    </div>
                    <div className={styleModule.hint}>
                        <span>
                            遇到问题? <a>联系客服</a>
                        </span>
                        <span>
                            <a onClick={() => navigate('/login')}>已有账号去登录</a>
                        </span>
                    </div>
                    <div className={styleModule.confirm}>
                        <Button type="primary" onClick={() => submit()} block>
                            注册
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any, ownProps: any) => {
    return { ...ownProps, token: state.user.token };
};

export default connect(mapStateToProps)(Index);
