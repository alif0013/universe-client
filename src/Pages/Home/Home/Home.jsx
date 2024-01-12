import React from 'react';

const Home = () => {
    return (
        <div className='lg:max-w-[1200px] mx-auto'>

            <div className='lg:w-[1200px] flex'>

                 <div className='hidden text-center  lg:w-[270px] lg:block'>left menu</div>
                 <div className='bg-white text-center w-full lg:w-[660px]'> content</div>
                 <div className='hidden text-center  lg:w-[270px] lg:block'> right</div>
            </div>
        </div>
    );
};

export default Home;