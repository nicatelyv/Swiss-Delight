import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'
import ErrorPage from '../Components/ErrorPage/ErrorPage'

function Error() {
    return (
        <>
            <Helmet>
                <title>Error 404 not found - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <Navbar />
            <ErrorPage />
            <Footer />
        </>
    )
}

export default Error