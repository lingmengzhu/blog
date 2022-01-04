import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import user from './user';

const reducer = combineReducers({ user });

const store = createStore(reducer, applyMiddleware(logger));
export default store;
