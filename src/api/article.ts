import R from './request';
const listArticle = () => R.get('/api/article');
const addArticle = (article: any) => R.post('/api/article', article);
const deleteArticle = (id: any) => R.delete(`/api/article/${id}`);
const getArticle = (id: any) => R.get(`/api/article/${id}`);
const updateArticle = (article: any) => R.put(`/api/article`, article);

export { listArticle, addArticle, deleteArticle, getArticle, updateArticle };
