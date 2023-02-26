import React from 'react'
import { Helmet } from 'react-helmet'
import Basket from '../Components/CartPageComponents/Basket'
import CartHeader from '../Components/CartPageComponents/Header'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function CartPage() {
    return (
        <>
            <Helmet>
                <title>Basket - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <Navbar />
            <CartHeader />
            <Basket />
            <Footer />
        </>
    )
}

export default CartPage