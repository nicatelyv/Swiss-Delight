import React from 'react'
import { Helmet } from 'react-helmet'
import GetInTouchHeader from '../Components/GetInTouchPageComponents/Header'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function GetInTouchPage() {
    return (
        <>
            <Helmet>
                <title>Get In Touch - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <Navbar />
            <GetInTouchHeader />
            <Footer />
        </>
    )
}

export default GetInTouchPage