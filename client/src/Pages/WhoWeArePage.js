import React from 'react'
import { Helmet } from 'react-helmet'
import WhoWeAreCelebrations from '../Components/WhoWeArePageComponents/Celebrations -Section'
import WhoWeAreHeader from '../Components/WhoWeArePageComponents/Header'
import OurSpecialTeam from '../Components/WhoWeArePageComponents/OurSpecialTeam - Section'
import OurHistoryWhoWeAre from '../Components/WhoWeArePageComponents/OurStory - Section'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function WhoWeArePage() {
    return (
        <>
            <Helmet>
                <title>Who We Are - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <Navbar />
            <WhoWeAreHeader />
            <OurHistoryWhoWeAre />
            <WhoWeAreCelebrations />
            <OurSpecialTeam />
            <Footer />
        </>
    )
}

export default WhoWeArePage