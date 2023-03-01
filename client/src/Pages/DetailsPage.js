import React from 'react'
import { Helmet } from 'react-helmet'
import DetailsItem from '../Components/DetailsPageComponents/DetailsItem/DetailsItem'
import DetailPageHeader from '../Components/DetailsPageComponents/Header/DetailPageHeader'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function ItemDetails() {
    return (
        <>
            <Helmet>
                <title>Details - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <Navbar />
            <DetailPageHeader />
            <DetailsItem />
            <Footer />
        </>
    )
}

export default ItemDetails