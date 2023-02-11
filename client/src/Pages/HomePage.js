import React from 'react'
import { Helmet } from 'react-helmet'
import CreationMasterpiecesSection from '../Components/HomePageComponents/Creation&Masterpieces-Section/Creation&Masterpieces'
import HomeHeader from '../Components/HomePageComponents/Header/HomeHeader'
import HomeInstagramItemsSection from '../Components/HomePageComponents/InstagramItems-Section/HomeInstagramItemsSection'
import LoveChocoSection from '../Components/HomePageComponents/LoveChoco-Section/LoveChocoSection'
import OurMissionSection from '../Components/HomePageComponents/OurMission-Section/OurMissionSection'
import SweetnessForSpecialDays from '../Components/HomePageComponents/SweetnessForSpecialDays-Section/SweetnessForSpecialDays'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home - Swiss Delight - Chocolate & Cake</title>
      </Helmet>
      <Navbar />
      <HomeHeader />
      <CreationMasterpiecesSection />
      <LoveChocoSection />
      <OurMissionSection />
      <SweetnessForSpecialDays />
      <HomeInstagramItemsSection />
      <Footer />
    </>
  )
}

export default HomePage