import React from 'react'
import { Helmet } from 'react-helmet'
import BiographyOurChef from '../Components/OurChefPageComponents/Biography - Section'
import HeaderOurChef from '../Components/OurChefPageComponents/Header'
import SlicerWorkSelection from '../Components/OurChefPageComponents/Slider'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function OurChefPage() {
    return (
        <>
            <Helmet>
                <title>Our Chef - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <Navbar />
            <HeaderOurChef />
            <BiographyOurChef />
            <SlicerWorkSelection />
            <Footer />
        </>
    )
}

export default OurChefPage