import React from 'react'
import { Helmet } from 'react-helmet'
import OurMenuHeader from '../Components/OurMenuComponents/Header'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function OurMenuPage() {
    return (
        <>
            <Helmet>
                <title>Our Menu - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <Navbar />
            <OurMenuHeader />
            <Footer />
        </>
    )
}

export default OurMenuPage