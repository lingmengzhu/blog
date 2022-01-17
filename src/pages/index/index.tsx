import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from '@/store';
import { durableStore } from '@/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={durableStore}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.querySelector('#root')
);
