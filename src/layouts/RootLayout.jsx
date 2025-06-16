import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';
import DynamicTitle from '../components/DynamicTitle';

const RootLayout = () => {
    return (
        <div>
            <DynamicTitle/>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default RootLayout;