import Navbar from '@/components/navbar';
import React from 'react';

const Withlayout = ({ children }) => {
    return (
        <div>

            <Navbar></Navbar>

            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default Withlayout;