import Navbar from '@/components/Navbar';
import React from 'react';
import { Container } from './index.style';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <Container>{children}</Container>
        </div>
    );
}

export default Layout;
