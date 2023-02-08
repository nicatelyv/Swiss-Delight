import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import PortfolioPage from '../Pages/PortfolioPage/PortfolioPage'
export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/portfolio-page",
        element: <PortfolioPage />
    },
    {
        path:"/shop",
    },
    {
        path:'/blog',
    },
    {
        path:'/cart',
    },
    {
        path:'/about-us',
    },
    {
        path:'/who-we-are',
    },
    {
        path:'/our-chef',
    },
    {
        path:'/our-history',
    },
    {
        path:'/our-menu',
    },
    {
        path: '/pricing-plans',
    },
    {
        path: '/contact-us',
    },
    {
        path: '/get-in-touch',
    },
])