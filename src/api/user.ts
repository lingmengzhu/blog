import R from './request';
const loginUser = (user: any) => R.post('/api/user/login', user);
const addUser = (user: any) => R.post('/api/user', user);
const listUser = (query: any) => {
    let queryString = '';
    if (Object.keys(query).length > 0) {
        queryString += '?';
        Object.keys(query).map((key, index) => {
            if (index === 0) {
                queryString += `${key}=${query[key]}`;
            } else {
                queryString += `&${key}=${query[key]}`;
            }
        });
    }
    return R.get(`/api/user${queryString}`);
};
export { loginUser, addUser, listUser };
