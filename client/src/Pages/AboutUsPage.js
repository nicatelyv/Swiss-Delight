import React from 'react'
import { Helmet } from 'react-helmet'
import AboutUsSection from '../Components/AboutUsPageComponents/AboutUs-Section/AboutUsSection'
import AboutUsHeader from '../Components/AboutUsPageComponents/Header/AboutUsHeader'
import OurStoryAboutPage from '../Components/AboutUsPageComponents/OurStory - Section/OurStory-AboutPage'
import WeAreOpenAboutUs from '../Components/AboutUsPageComponents/WeAreOpen - Section/WeAreOpen-AboutUs'
import WhoWeAreAboutPage from '../Components/AboutUsPageComponents/WhoWeAre - Section/WhoWeAre-AboutPage'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function AboutUsPage() {
    return (
        <>
            <Helmet>
                <title>About Us - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <Navbar />
            <AboutUsHeader />
            <AboutUsSection />
            <WhoWeAreAboutPage />
            <OurStoryAboutPage />
            <WeAreOpenAboutUs />
            <Footer />
        </>
    )
}

export default AboutUsPage