import React from 'react'
import { Helmet } from 'react-helmet'
import ShopHeader from '../Components/ShopPageComponents/ShopHeader/ShopHeader'
import ShopItems from '../Components/ShopPageComponents/ShopItems - Section/ShopItems'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function ShopPage() {
  return (
    <>
      <Helmet>
        <title>Shop - Swiss Delight - Chocolate & Cake</title>
      </Helmet>
      <Navbar />
      <ShopHeader />
      <ShopItems />
      <Footer />
    </>
  )
}

export default ShopPage