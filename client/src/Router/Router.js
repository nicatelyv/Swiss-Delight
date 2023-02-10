import { createBrowserRouter } from 'react-router-dom'
import AboutUsPage from '../Pages/AboutUsPage'
import BlogPage from '../Pages/BlogPage'
import CartPage from '../Pages/CartPage'
import ContactUsPage from '../Pages/ContactUsPage'
import GetInTouchPage from '../Pages/GetInTouchPage'
import HomePage from '../Pages/HomePage'
import OurChefPage from '../Pages/OurChefPage'
import OurHistoryPage from '../Pages/OurHistoryPage'
import OurMenuPage from '../Pages/OurMenuPage'
import PortfolioPage from '../Pages/PortfolioPage'
import PricingPlansPage from '../Pages/PricingPlansPage'
import ShopPage from '../Pages/ShopPage'
import WhoWeArePage from '../Pages/WhoWeArePage'
export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/portfolio",
        element: <PortfolioPage />
    },
    {
        path: "/shop",
        element: <ShopPage />
    },
    {
        path: '/blog',
        element: <BlogPage />
    },
    {
        path: '/cart',
        element: <CartPage />
    },
    {
        path: '/about-us',
        element: <AboutUsPage />
    },
    {
        path: '/who-we-are',
        element: <WhoWeArePage />
    },
    {
        path: '/our-chef',
        element: <OurChefPage />
    },
    {
        path: '/our-history',
        element: <OurHistoryPage />
    },
    {
        path: '/our-menu',
        element: <OurMenuPage />
    },
    {
        path: '/pricing-plans',
        element: <PricingPlansPage />
    },
    {
        path: '/contact-us',
        element: <ContactUsPage/>
    },
    {
        path: '/get-in-touch',
        element: <GetInTouchPage/>
    },
])