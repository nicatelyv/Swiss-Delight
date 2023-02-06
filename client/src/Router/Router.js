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
    }
])