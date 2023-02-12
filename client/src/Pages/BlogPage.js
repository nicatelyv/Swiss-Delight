import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog - Swiss Delight - Chocolate & Cake</title>
      </Helmet>
      <Navbar />
      <Footer />
    </>
  )
}

export default BlogPage