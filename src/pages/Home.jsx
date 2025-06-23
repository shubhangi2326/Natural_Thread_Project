import React from 'react'
import HeroCarousel from '../Components/HeroCarousel'

import AmazingApparel from '../Components/AmazingApparel';

import FashionShowcase from '../Components/FashionShowcase'
import BottomWearBanner from '../Components/BottomWearBanner'
import PersonalCare from '../Components/PersonalCare'
import GentlemenSlides from '../Components/GentlemenSlides'
import WithInNatureBanner from '../Components/WithInNatureBanner'
import NewsletterSection from '../Components/NewsletterSection'
import FeaturesSection from '../Components/FeaturesSection'
import NewArticlesSection from '../Components/NewArticlesSection'

const Home = () => {
  return (
    <div>
        <HeroCarousel />
        <AmazingApparel autoplayDelay={2000} />
        <FashionShowcase />
        <GentlemenSlides autoplayDelay={2000} />
        <BottomWearBanner />
        <PersonalCare />
        <WithInNatureBanner />
        <NewsletterSection />
        <FeaturesSection />
        <NewArticlesSection />
    </div>
  )
}

export default Home