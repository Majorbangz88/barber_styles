import React from 'react'
import Hero from './Hero'
 import AboutSection from '../home/AboutSection'
 import ServicesSection from '../home/ServicesSecton'
 import TeamsSection from '../home/TeamsSection'
 import PricingSection from '../home/PricingSection'
 import ImageGallery from '../home/ImageGallery'

const About = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TeamsSection />
      <PricingSection />
      <ImageGallery />
      {/* ABOUT: This is the absolute about page where you get all the juicy gists! */}
    </div>
  )
}

export default About
