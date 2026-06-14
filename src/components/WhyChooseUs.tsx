import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: '/media/whyChooseIcon1.50dc6ca687ab93e303fd253b7463f1a3.svg',
      titleKey: 'whyUs.1.title',
      descKey: 'whyUs.1.desc'
    },
    {
      icon: '/media/whyChooseIcon2.f4c9c1c1b8f54a3954a5973bc6b857ed.svg',
      titleKey: 'whyUs.2.title',
      descKey: 'whyUs.2.desc'
    },
    {
      icon: '/media/whyChooseIcon3.115ee60c2497c8e92d829fef51fac32c.svg',
      titleKey: 'whyUs.3.title',
      descKey: 'whyUs.3.desc'
    },
    {
      icon: '/media/whyChooseIcon4.75200c53baf7379f6670a1285f29a5bd.svg',
      titleKey: 'whyUs.4.title',
      descKey: 'whyUs.4.desc'
    },
    {
      icon: '/media/whyChooseIcon5.1ee7c4b3ad229dc997f0e736e9597175.svg',
      titleKey: 'whyUs.5.title',
      descKey: 'whyUs.5.desc'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-luxury-lightBg dark:bg-luxury-darkBg relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-widest uppercase text-sm block mb-3"
          >
            {t('nav.whyUs')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
          >
            {t('whyUs.subtitle')}
          </motion.h2>
          <div className="w-16 h-[2px] bg-gold-gradient mx-auto" />
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className={`glass-card p-8 rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:border-gold/50 cursor-pointer ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6 p-2.5">
                <img 
                  src={reason.icon} 
                  alt="" 
                  className="w-full h-full object-contain dark:brightness-200 dark:contrast-150 transition-all duration-300" 
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {t(reason.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {t(reason.descKey)}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
