import React from 'react'
import Hero from './Hero'
import AboutSection from './AboutSection'
import ServicesSecton from './ServicesSecton'
import TeamsSection from './TeamsSection'
import PricingSection from './PricingSection'
import ImageGallery from './ImageGallery'
import ReviewsSection from './ReviewsSection'
import RecentNewsSection from './RecentNewsSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSecton />
      <TeamsSection />
      <PricingSection />
      <ImageGallery />
      <ReviewsSection />
      <RecentNewsSection />
      {/* HOME: I am the legendary home page! */}
    </div>
  )
}

export default Home
