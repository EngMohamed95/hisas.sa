import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Loader } from './components/Loader';
import { SEO } from './components/SEO';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FeaturedProjects } from './components/FeaturedProjects';
import { InvestmentOpportunities } from './components/InvestmentOpportunities';
import { Partners } from './components/Partners';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function MainLayout() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen selection:bg-gold selection:text-slate-900 overflow-x-hidden">
          <SEO />
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            <FeaturedProjects />
            <InvestmentOpportunities />
            <Partners />
            <Blog />
            <Contact />
          </main>
          
          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <MainLayout />
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
