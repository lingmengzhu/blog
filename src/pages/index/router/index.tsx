import React, { Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Index from '../views/index';
import List from '../views/list';
import Add from '../views/add';

const RouterView = () => (
    <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/list" element={<List />} />
                <Route path="/add" element={<Add />} />
            </Routes>
        </Suspense>
    </HashRouter>
);

export default RouterView;
