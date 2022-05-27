import R from './request';
import qs from 'query-string';

const addDoc = (doc: any) => R.post('/api/doc/add', doc);
const editDoc = (doc: any) => R.post('/api/doc/edit', doc);
const deleteDoc = (docId: any) => R.delete(`/api/doc/${docId}`);
const getDoc = (docId: any) => R.get(`/api/article/${docId}`);
const listDoc = () => R.get('/api/doc/list');

export { addDoc, editDoc, deleteDoc, getDoc, listDoc };
