import R from './request';
const loginUser = (user: any) => R.post('/api/user/login', user);
const addUser = (user: any) => R.post('/api/user', user);
export { loginUser, addUser };
