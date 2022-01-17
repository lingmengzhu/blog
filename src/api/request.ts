import axios from 'axios';

const R = axios.create({
    baseURL: '/',
    timeout: 3000,
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
