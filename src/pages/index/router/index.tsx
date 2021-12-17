import React, { Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Index from '../views/index';
import List from '../views/list';
import Add from '../views/add';
import Edit from '../views/edit';
import Show from '../views/show';
import Search from '../views/search';

const RouterView = () => (
    <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/list" element={<List />} />
                <Route path="/add" element={<Add />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/show/:id" element={<Show />} />
                <Route path="/search" element={<Search />} />
                <Route path="/search/:keywords" element={<Search />} />
            </Routes>
        </Suspense>
    </HashRouter>
);

export default RouterView;
