import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            <div className='lg:w-[1200px] mx-auto'>

                {/* <Navbar></Navbar> */}
                <Outlet></Outlet>
                <Toaster></Toaster>
                {/* footer here */}
            </div>
        </div>
    );
};

export default MainLayouts;