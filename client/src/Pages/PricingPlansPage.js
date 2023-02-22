import React from 'react'
import { Helmet } from 'react-helmet'
import PricingPlansHeader from '../Components/PricingPlansPageComponents/Header'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function PricingPlansPage() {
    return (
        <>
            <Helmet>
                <title>Pricing Plans - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <Navbar />
            <PricingPlansHeader />
            <Footer />
        </>
    )
}

export default PricingPlansPage