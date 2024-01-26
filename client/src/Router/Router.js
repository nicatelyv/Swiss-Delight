import { createBrowserRouter } from 'react-router-dom'
import AboutUsPage from '../Pages/AboutUsPage'
import BlogPage from '../Pages/BlogPage'
import CartPage from '../Pages/CartPage'
import ContactUsPage from '../Pages/ContactUsPage'
import GetInTouchPage from '../Pages/GetInTouchPage'
import HomePage from '../Pages/HomePage'
import ItemDetails from '../Pages/DetailsPage'
import Login from '../Pages/Login'
import MyAccount from '../Pages/MyAccount'
import OurChefPage from '../Pages/OurChefPage'
import OurHistoryPage from '../Pages/OurHistoryPage'
import OurMenuPage from '../Pages/OurMenuPage'
import PortfolioPage from '../Pages/PortfolioPage'
import PricingPlansPage from '../Pages/PricingPlansPage'
import Register from '../Pages/Register'
import ShopPage from '../Pages/ShopPage'
import WhoWeArePage from '../Pages/WhoWeArePage'
import WishlistPage from '../Pages/WishlistPage'
import Logout from '../Pages/Logout'
import AdminPanelUsers from '../Pages/AdminPanelUsers'
import AdminPanelProducts from '../Pages/AdminPanelProducts'
import AdminAddProduct from '../Pages/AdminAddProduct'
import AdminUserMessage from '../Pages/AdminUserMessage'
import AdminPanelEditProduct from '../Pages/AdminPanelEditProduct'
import Error from '../Pages/Error'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "*",
        element: <Error />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/my-account',
        element: <MyAccount />
    },
    {
        path: '/wishlist',
        element: <WishlistPage />
    },
    {
        path: '/cart',
        element: <CartPage />
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
        path: "/shop/:id/details",
        element: <ItemDetails />
    },
    {
        path: '/blog',
        element: <BlogPage />
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
        element: <ContactUsPage />
    },
    {
        path: '/get-in-touch',
        element: <GetInTouchPage />
    },
    {
        path: "/logout",
        element: <Logout />
    },
    localStorage.isAdmin === "true" ? {
        path: "/adminpanel-users",
        element: <AdminPanelUsers />
    } : <></>,
    localStorage.isAdmin === "true" ? {
        path: "/adminpanel",
        element: <AdminPanelProducts />
    } : <></>,
    localStorage.isAdmin === "true" ? {
        path: "/adminpanel/:id",
        element: <AdminPanelEditProduct />
    } : <></>,
    localStorage.isAdmin === "true" ? {
        path: "/adminpanel-addproduct",
        element: <AdminAddProduct />
    } : <></>,
    localStorage.isAdmin === "true" ? {
        path: "/adminpanel-user-message",
        element: <AdminUserMessage />
    } : <></>,
])
