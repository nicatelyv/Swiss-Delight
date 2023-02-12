import React from 'react'
import { Helmet } from 'react-helmet'
import AboutUsSection from '../Components/AboutUsPageComponents/AboutUs-Section/AboutUsSection'
import AboutUsHeader from '../Components/AboutUsPageComponents/Header/AboutUsHeader'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function AboutUsPage() {
    return (
        <>
            <Helmet>
                <title>About us - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <Navbar />
            <AboutUsHeader />
            <AboutUsSection />
            <Footer />
        </>
    )
}

export default AboutUsPage