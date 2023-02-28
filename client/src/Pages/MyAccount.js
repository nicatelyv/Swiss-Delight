import React from 'react'
import { Helmet } from 'react-helmet'
import MyAccountSection from '../Components/MyAccount'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function MyAccount() {
    return (
        <>
            <Helmet>
                <title>My Account - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <Navbar />
            <MyAccountSection />
            <Footer />
        </>
    )
}

export default MyAccount