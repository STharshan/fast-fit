import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import ServiceSection from '../components/Home/ServiceSection'
import AboutSection from '../components/Home/About'
import UKMapInteractive from '../components/Map'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <UKMapInteractive />
    </div>
  )
}

export default Home
