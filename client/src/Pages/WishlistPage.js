import React from 'react'
import { Helmet } from 'react-helmet'
import WishListHeader from '../Components/WishlistComponents/Header'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function WishlistPage() {
    return (
        <>
            <Helmet>
                <title>Wishlist - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <Navbar />
            <WishListHeader />
            <Footer />
        </>
    )
}

export default WishlistPage