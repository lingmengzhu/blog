import axios from 'axios';

const R = axios.create({
    baseURL: '/',
    timeout: 2000,
    // headers: {
    //     'Content-Type': 'application/json; charset=UTF-8',
    //     // 本地run 需要添加authorizationToken用于本地测试
    //     authorizationToken: token
    //   }
});
R.interceptors.request.use(
    (config) => config,
    (err) => {
        console.log('error', err);

        return Promise.reject(err);
    }
);

R.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (err) => {
        return Promise.reject(err);
    }
);
export default R;
