import React from 'react'
import DetailsItem from '../Components/DetailsPageComponents/DetailsItem/DetailsItem'
import DetailPageHeader from '../Components/DetailsPageComponents/Header/DetailPageHeader'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function ItemDetails() {
    return (
        <>
            <Navbar />
            <DetailPageHeader />
            <DetailsItem />
            <Footer />
        </>
    )
}

export default ItemDetails