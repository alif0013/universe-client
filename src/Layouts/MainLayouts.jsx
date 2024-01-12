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
                <div className='bg-[#F2F2F2]'>
                    <Outlet></Outlet>
                    <Toaster></Toaster>
                </div>
                {/* footer here */}
            </div>
        </div>
    );
};

export default MainLayouts;