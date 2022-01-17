import Index from '../views/index';
import List from '../views/list';
import Add from '../views/add';
import Edit from '../views/edit';
import Show from '../views/show';
import Search from '../views/search';
import Login from '../views/login';

export default [
    { path: '/', name: 'App', component: Index, auth: true },
    { path: '/list', name: 'List', component: List, auth: true },
    { path: '/add', name: 'Add', component: Add, auth: true },
    { path: '/edit/:id', name: 'Edit', component: Edit, auth: true },
    { path: '/show/:id', name: 'Show', component: Show, auth: true },
    { path: '/search', name: 'Search', component: Search, auth: true },
    { path: '/search/:keywords', name: 'Search-Key', component: Search, auth: true },
    { path: '/login', name: 'Login', component: Login, auth: false },
];
