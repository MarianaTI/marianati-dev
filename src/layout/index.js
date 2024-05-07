import Navbar from '@/components/Navbar';
import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <div>{children}</div>
        </div>
    );
}

export default Layout;
