/* eslint-disable react/no-danger */
import React, { useState, useCallback } from 'react';
import { Form, Input, Button, Checkbox, message, Modal } from 'antd';
import { loginUser, addUser } from '@/api/user';
import './index.scss';

const Index = () => {
    const [user, setUser] = useState({} as any);
    const [visible, setVisible] = useState(false);
    const onFinish = (values: any) => {
        console.log('Success:', values);
        const { password, username } = values;
        if (password.trim() === '' || username.trim() === '') {
            alert('请正常输入 不然我一刀');
            return;
        }
        loginUser({ password: password.trim(), username: username.trim() })
            .then((res) => {
                // 用户ID
                const { _id } = res.data;
                if (!_id) {
                    setUser({ password: password.trim(), username: username.trim() });
                    setVisible(true)
                } else {
                    sessionStorage.setItem('userId', _id);
                    sessionStorage.setItem('username', username);
                    window.location.href = '/';
                }
            })
            .catch(() => {
                message.error('服务器错误');
            });
    };
    const createUser = useCallback(() => {
        addUser(user)
            .then((res) => {
                setVisible(false)
                // 用户ID
                const { _id } = res.data;
                sessionStorage.setItem('userId', _id);
                sessionStorage.setItem('username', user.username);
                window.location.href = '/';
            })
            .catch(() => {
                message.error('服务器错误');
            });
    }, [user]);

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        alert('你输入的内容不合法');
    };
    return (
        <div className="page-login">
            <div className="layout">
                <div className="content">
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <div className="title">欢迎大家登录博客平台</div>
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                登录/注册
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <Modal title="用户注册" visible={visible} onOk={createUser} onCancel={() => setVisible(false)}>
                <p>没有查询到该用户，是否立即注册?</p>
            </Modal>
        </div>
    );
};

export default Index;
