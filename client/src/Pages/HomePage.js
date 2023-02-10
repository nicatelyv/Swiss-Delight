import React from 'react'
import CreationMasterpiecesSection from '../Components/HomePageComponents/Creation&MasterpiecesSection/Creation&Masterpieces'
import HomeHeader from '../Components/HomePageComponents/Header/HomeHeader'
import HomeVideoSection from '../Components/HomePageComponents/HomeVideoSection/HomeVideoSection'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function HomePage() {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <CreationMasterpiecesSection />
      <HomeVideoSection />
      <Footer />
    </>
  )
}

export default HomePage