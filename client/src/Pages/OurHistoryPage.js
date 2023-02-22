import React from 'react'
import { Helmet } from 'react-helmet'
import SliderWorkSelection from '../Components/OurChefPageComponents/Slider'
import OurHistoyryHeader from '../Components/OurHistoryPageComponents/Header'
import HistorySection from '../Components/OurHistoryPageComponents/History - Section'
import TraditionSection from '../Components/OurHistoryPageComponents/Tradition - Section'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function OurHistoryPage() {
    return (
        <>
            <Helmet>
                <title>Our History - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <Navbar />
            <OurHistoyryHeader />
            <TraditionSection />
            <HistorySection />
            <SliderWorkSelection />
            <Footer />
        </>
    )
}

export default OurHistoryPage