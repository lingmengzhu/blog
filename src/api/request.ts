import axios from 'axios';

const R = axios.create({
    baseURL: '/',
    timeout: 3000,
});
R.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        config.headers.Authorization = 'Bearer ' + token;

        return config;
    },
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
