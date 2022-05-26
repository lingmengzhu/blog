import R from './request';
import qs from 'query-string';
const listArticle = (query: any) => {
    return R.get(`/api/article/list?${qs.stringify(query)}`);
};

const addArticle = (article: any) => R.post('/api/article', article);
const deleteArticle = (id: any) => R.delete(`/api/article/${id}`);
const getArticle = (id: any) => R.get(`/api/article/${id}`);
const updateArticle = (article: any) => R.put(`/api/article/${article.id}`, article);

export { listArticle, addArticle, deleteArticle, getArticle, updateArticle };
