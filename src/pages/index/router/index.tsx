import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routeArr from './route';
import Layout from '@/layout';
import Login from '../views/login';
import { connect } from 'react-redux';

const RouterView = (props: any) => {
    const { token } = props;
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {routeArr.map((item, index) => {
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={token || !item.auth ? <item.component /> : <Navigate to="/login" />}
                            ></Route>
                        );
                    })}
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Suspense>
    );
};
const mapStateToProps = (state: any, ownProps: any) => {
    return { ...ownProps, token: state.user.token };
};
export default connect(mapStateToProps)(RouterView);
