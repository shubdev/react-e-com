import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import { Outlet } from 'react-router-dom';
const Layout = () => {

    return (
        <>
            <Navbar />
            <Outlet />
            {/* <Footer /> */}


        </>)
}

export default Layout