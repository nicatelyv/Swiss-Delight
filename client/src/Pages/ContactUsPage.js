import React from 'react'
import { Helmet } from 'react-helmet'
import ContactUsHeader from '../Components/ContactUsPageComponents/Header'
import ContactUsMessageSection from '../Components/ContactUsPageComponents/Message - Section'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function ContactUsPage() {
    return (
        <>
            <Helmet>
                <title>Contact Us - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <Navbar />
            <ContactUsHeader />
            <ContactUsMessageSection />
            <Footer />
        </>
    )
}

export default ContactUsPage