import axios from 'axios';
import { message } from 'antd';

const R = axios.create({
    baseURL: '/',
    timeout: 3000,
});
R.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        config.headers.authorization = 'Bearer ' + token;
        return config;
    },
    (err) => {
        console.log('error', err);
        return Promise.reject(err);
    }
);

R.interceptors.response.use(
    (res) => {
        console.log(res.data);
        // 请求异常
        if (res.data && res.data.code === 500) {
            message.error(res.data.msg || '服务器错误')
            return Promise.reject(res.data);
        }
        return Promise.resolve(res.data);
    },
    (err) => {
        return Promise.reject(err);
    }
);
export default R;
