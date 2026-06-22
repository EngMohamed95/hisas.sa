import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Partners } from '../components/Partners';
import { Blog } from '../components/Blog';
import { SEO } from '../components/SEO';

export const Home: React.FC = () => {

  return (
    <>
      <SEO />
      <Hero />
      
      {/* Short teaser for About instead of full section, or render full section but clean */}
      <About />
      
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <Partners />
      <Blog />
    </>
  );
};
