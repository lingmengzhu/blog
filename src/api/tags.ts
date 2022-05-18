import R from './request';

const listTags = (query: any) => {
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
    return R.get(`/api/tags${queryString}`);
};
export { listTags };
