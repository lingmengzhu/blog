import R from './request';
import qs from 'query-string';
const loginUser = (user: any) => R.post('/api/user/login', user);
const addUser = (user: any) => R.post('/api/user/register', user);
const getUser = (id: any) => R.get(`/api/user/${id}`);
const updateUser = (data: any) => R.put(`/api/user`, data);
const listUser = (query: any) => {
    return R.get(`/api/user/list?${qs.stringify(query)}`);
};
export { loginUser, addUser, listUser, getUser, updateUser };
