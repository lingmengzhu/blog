import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import user from './user';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// 持久化store的配置
const persistConfig = {
    key: 'root',
    storage: storage,
};
const reducer = combineReducers({ user });
// 持久化reduce
const durableReducer = persistReducer(persistConfig, reducer);
const store = createStore(durableReducer, applyMiddleware(logger));
// 持久化store
export const durableStore  = persistStore(store);
export default store;
