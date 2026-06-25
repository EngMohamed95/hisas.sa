import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: '/media/serviceIcon1.38ec53ca7cfada8c8211b07c2629279b.svg?v=2',
      titleKey: 'services.1.title',
      descKey: 'services.1.desc'
    },
    {
      icon: '/media/serviceIcon2.e033cdacee222647d2adfa5d5e4d14d3.svg?v=2',
      titleKey: 'services.2.title',
      descKey: 'services.2.desc'
    },
    {
      icon: '/media/serviceIcon3.c981364fb2badda4b4762114a79c92a8.svg?v=2',
      titleKey: 'services.3.title',
      descKey: 'services.3.desc'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight"
          >
            {t('nav.services')}
          </motion.h2>
          <div className="w-16 h-[2px] bg-gold-gradient mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
             <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 leaf-shape relative group transition-all duration-300 overflow-hidden hover:border-gold/50 cursor-pointer"
            >
              {/* Background gradient hint on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated Icon Ring */}
              <div className="w-16 h-16 leaf-shape bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold-gradient transition-all duration-500 p-3.5">
                <img 
                  src={service.icon} 
                  alt="" 
                  className="w-full h-full object-contain transition-all duration-500" 
                />
              </div>

              {/* Service Details */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-gold transition-colors duration-300">
                {t(service.titleKey)}
              </h3>
              
              <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed relative z-10">
                {t(service.descKey)}
              </p>

              {/* Top border gold flash */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Extra Info / Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-base md:text-lg lg:text-xl font-medium">
            {t('partners.text')}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
