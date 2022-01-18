import R from './request';
const listArticle = (query: any) => {
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
    return R.get(`/api/article${queryString}`);
};
const listAllArticle = (query: any) => {
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
    return R.get(`/api/allArticle${queryString}`);
};
const addArticle = (article: any) => R.post('/api/article', article);
const deleteArticle = (id: any) => R.delete(`/api/article/${id}`);
const getArticle = (id: any) => R.get(`/api/article/${id}`);
const updateArticle = (article: any) => R.put(`/api/article/${article.id}`, article);

export { listArticle, listAllArticle, addArticle, deleteArticle, getArticle, updateArticle };
