import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import ErrorPage from '../errorPage/ErrorPage';
import Home from '../Pages/Home/Home/Home';
import About from '../Pages/Home/About/About';
import Blog from '../Pages/Home/Blog/Blog';
import Contact from '../Pages/Home/Contact/Contact';

const myCreatedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        }
    ]
  }  
])
export default myCreatedRoutes;