import Index from '../views/index';
import List from '../views/list';
import Add from '../views/add';
import Edit from '../views/edit';
import Article from '../views/article';
import Search from '../views/search';
import Login from '../views/login';
import Register from '../views/register';
import PersonCenter from '../views/personCenter';
import Setting from '../views/setting';
import DocSetting from '../views/docSetting/list';
import DocSettingAdd from '../views/docSetting/add';
import DocSettingEdit from '../views/docSetting/edit';

export default [
    { path: '/', name: 'App', component: Index, auth: true },
    { path: '/list', name: 'List', component: List, auth: true },
    { path: '/person_center/:activeKey', name: 'PersonCenter', component: PersonCenter, auth: true },
    { path: '/setting', name: 'Setting', component: Setting, auth: true },
    { path: '/add', name: 'Add', component: Add, auth: true },
    { path: '/edit/:id', name: 'Edit', component: Edit, auth: true },
    { path: '/article/:id', name: 'Article', component: Article, auth: true },
    { path: '/search', name: 'Search', component: Search, auth: true },
    { path: '/search/:keywords', name: 'Search-Key', component: Search, auth: true },
    { path: '/doc/setting', name: 'Doc-Setting', component: DocSetting, auth: true },
    { path: '/doc/setting/add', name: 'Doc-Setting-Add', component: DocSettingAdd, auth: true },
    { path: '/doc/setting/edit/:id', name: 'Doc-Setting-Edit', component: DocSettingEdit, auth: true },
    { path: '/login', name: 'Login', component: Login, auth: false },
    { path: '/register', name: 'Register', component: Register, auth: false },
];
