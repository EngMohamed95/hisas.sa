import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  titleKey?: string;
  descriptionKey?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  descriptionKey = 'about.text', 
  type = 'website' 
}) => {
  const { language, t } = useLanguage();
  
  const companyName = language === 'ar' ? 'شركة حصص العقارية | HISAS Real Estate' : 'HISAS Real Estate | Saudi Property Developer';
  const pageTitle = `${companyName} - ${t('hero.title')}`;
  const description = t(descriptionKey);
  
  const keywords = language === 'ar' 
    ? 'عقارات السعودية، استثمار عقاري، تطوير عقاري، إدارة المشاريع العقارية، أبراج سكنية، الخبر، الرياض، شركة حصص'
    : 'Real Estate Saudi Arabia, Property Development Saudi Arabia, Real Estate Investment Saudi Arabia, Saudi Real Estate Solutions, Hisas Real Estate';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": language === 'ar' ? "شركة حصص العقارية" : "HISAS Real Estate",
    "image": "https://hisas.sa/images/alvera_tower_luxury.png",
    "@id": "https://hisas.sa/#organization",
    "url": "https://hisas.sa/",
    "telephone": "+966555625502",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "King Abdullah Road, An Nakheel Dist.",
      "addressLocality": "Riyadh",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.7346",
      "longitude": "46.6669"
    },
    "sameAs": [
      "https://x.com/hisasrealestate",
      "https://www.tiktok.com/@hisas_realestate",
      "https://www.linkedin.com/company/110035613"
    ]
  };

  return (
    <Helmet>
      <html lang={language} />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href="https://hisas.sa/" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/alvera_tower_luxury.png" />
      <meta property="og:url" content="https://hisas.sa/" />
      <meta property="og:site_name" content={language === 'ar' ? 'حصص العقارية' : 'HISAS Real Estate'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/alvera_tower_luxury.png" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};
