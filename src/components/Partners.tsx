import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export const Partners: React.FC = () => {
  const { t } = useLanguage();

  const partners = [
    { name: 'Eastern Province Development', arName: 'هيئة تطوير المنطقة الشرقية', initial: 'E' },
    { name: 'Wafi Program Registry', arName: 'برنامج وافي للبيع على الخارطة', initial: 'W' },
    { name: 'Sharqia Municipality Authority', arName: 'أمانة المنطقة الشرقية', initial: 'M' },
    { name: 'Al Rowad Wael Design', arName: 'الرواد / وائل ديزاين', initial: 'D' },
    { name: 'Rkaz Aljesser Real Estate', arName: 'ركاز الجسر للاستثمار', initial: 'R' }
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
          viewport={{ once: true }}
          className="text-gold font-bold tracking-widest uppercase text-xs block mb-3 font-sans"
        >
          {t('partners.title')}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              className="flex items-center gap-4 px-8 py-5 bg-white border border-slate-200 rounded-xl hover:border-gold/45 transition-colors duration-300 shadow-sm"
            >
              {/* Gold initial emblem */}
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center border border-gold/20 flex-shrink-0">
                <span className="text-gold font-extrabold text-lg font-sans">
                  {partner.initial}
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-bold text-slate-800 font-sans tracking-wide">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-400 font-arabic tracking-normal mt-0.5">
                  {partner.arName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
