import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export const Partners: React.FC = () => {
  const { t } = useLanguage();

  const partners = [
    { name: 'Wafi Program Registry', logo: '/media/partners/wafi.png' },
    { name: 'Sharqia Municipality Authority', logo: '/media/partners/sharqia-municipality.png' },
    { name: 'Al Rowad Wael Design', logo: '/media/partners/wael-design.png' },
    { name: 'Rkaz Aljesser Real Estate', logo: '/media/partners/rkaz-aljesser.png' },
    { name: 'Sharqia Development Authority', logo: '/media/partners/sharqia-development-authority.png' }
  ];

  // Duplicate for seamless infinite marquee scroll loop
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className="py-20 bg-slate-50 text-slate-800 overflow-hidden relative border-y border-slate-200/50">
      {/* Side Fade Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-gold font-bold tracking-widest uppercase text-base md:text-lg block mb-4 font-sans"
        >
          {t('partners.title')}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900"
        >
          {t('partners.subtitle')}
        </motion.h2>
      </div>

      {/* Infinite Scrolling Logo Loop */}
      <div className="w-full relative py-6">
        <div className="animate-marquee flex gap-8 whitespace-nowrap">
          {marqueeItems.map((partner, index) => (
            <div
              key={index}
              className="flex h-36 w-44 md:w-52 items-center justify-center bg-white leaf-shape hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-20 max-w-[78%] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
