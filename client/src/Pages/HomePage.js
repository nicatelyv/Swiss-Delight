import React from 'react'
import CreationMasterpiecesSection from '../Components/HomePageComponents/Creation&MasterpiecesSection/Creation&Masterpieces'
import HomeHeader from '../Components/HomePageComponents/Header/HomeHeader'
import HomeInstagramItemsSection from '../Components/HomePageComponents/HomeInstagramItemSection/HomeInstagramItemsSection'
import LoveChocoSection from '../Components/HomePageComponents/HomeLoveChocoSection/LoveChocoSection'
import OurMissionSection from '../Components/HomePageComponents/HomeOurMissionSection/OurMissionSection'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function HomePage() {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <CreationMasterpiecesSection />
      <LoveChocoSection />
      <OurMissionSection/>
      <HomeInstagramItemsSection/>
      <Footer />
    </>
  )
}

export default HomePage