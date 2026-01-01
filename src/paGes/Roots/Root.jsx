import React from 'react';
import Navbar from '../../CompoNents/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../CompoNents/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;