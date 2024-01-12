import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const MainLayouts = () => {
    return (
        <div>


            <div>
                <div className='bg-[#272930]'>
                    <Navbar></Navbar>
                </div>
                <Outlet></Outlet>
                <Toaster></Toaster>
                {/* footer here */}
            </div>
        </div>
    );
};

export default MainLayouts;