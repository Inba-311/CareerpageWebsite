import React from 'react';
import Navbar from './pages/navbar';
import ScrollingSection from './pages/scrollingsection';
import PortfolioSection from './pages/portfoliosection';
import BestServiceSection from './pages/bestservice';
import FeatureSection from './pages/featuresection';
import CtaSection from './pages/ctasection';
import FAQSection from './pages/faqsection';
import Formsection from './pages/formsection';
import TestimonialSection from './pages/testimonialsection';
import FooterSection from './pages/footersection';
import BannerSection from './pages/bannerSection';

const App = () => {
  return (
    <>
      <Navbar/>
      <BannerSection/>
      <ScrollingSection/>
      <PortfolioSection/>
      <BestServiceSection/>
      <FeatureSection/>
      <CtaSection/>
      <FAQSection/>
      <Formsection/>
      <TestimonialSection/>
      <FooterSection/>
    </>
    
  )
}

export default App