import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Eye, ShieldCheck, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  const { t, isRTL, language } = useLanguage();

  return (
    <section id="about" className="py-24 bg-luxury-lightBg dark:bg-luxury-darkBg relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Crown Prince / Vision 2030 Section */}
        <div 
          className="mb-24 p-8 md:p-12 rounded-2xl text-white relative overflow-hidden border border-gold/30 shadow-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${language === 'ar' ? '/media/visionBgAr.4e591c8841c702e189fc.png' : '/media/visionBg.ab7899944ba28a26c648.png'})` }}
        >
          {/* Overlay to darken background image */}
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[1px]" />
          
          <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
            {/* Quote / Emblem */}
            <div className="md:col-span-2 flex flex-col justify-center text-right md:text-right">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-3xl font-bold text-gold mb-6 border-b border-slate-800 pb-4"
              >
                {t('vision.leader.title')}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-slate-300 leading-relaxed mb-4 text-sm md:text-base font-light"
              >
                {t('vision.leader.text1')}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-slate-300 leading-relaxed text-sm md:text-base font-light"
              >
                {t('vision.leader.text2')}
              </motion.p>
            </div>

            {/* Crown Prince MBS Portrait */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col items-center justify-center relative rounded-xl overflow-hidden border border-gold/40 shadow-xl group aspect-[4/5] bg-slate-950 max-w-[240px] mx-auto"
            >
              <img 
                src="/media/mbs.5e6835360ca59b176b86.jpg" 
                alt="HRH Crown Prince Mohammed bin Salman" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 brightness-90 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-[10px] text-gold font-bold tracking-[0.2em] block uppercase">{isRTL ? 'رؤية ٢٠٣٠' : 'VISION 2030'}</span>
                <span className="text-[9px] text-slate-300 font-light mt-0.5 block">{isRTL ? 'طموحنا عنان السماء' : '"Our ambition is the sky"'}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Corporate Narrative & Map Pin Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold font-bold tracking-widest uppercase text-sm block mb-3"
            >
              {t('about.title')}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-snug"
            >
              {t('about.subtitle')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-8"
            >
              {t('about.text')}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 items-start"
            >
              <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {t('about.map')}
              </p>
            </motion.div>
          </div>

          {/* Interactive Map Visual */}
          <div className="relative flex justify-center items-center">
            <div className="w-full max-w-lg aspect-[4/3] bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-lg overflow-hidden relative group">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 relative z-10">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{isRTL ? 'خريطة التواجد الاستراتيجي' : 'Strategic Footprint Map'}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>

              {/* Saudi Actual Map Image */}
              <div className="relative h-64 w-full flex items-center justify-center overflow-hidden">
                <img 
                  src="/media/map.7bb3fad151c4f8e28776.png" 
                  alt="HISAS Presence Map" 
                  className="w-full h-full object-contain dark:brightness-90 transition-all duration-300"
                />
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 text-center relative z-10 border-t border-slate-200 dark:border-slate-800 pt-3">
                {isRTL ? 'نركز على التطوير في الرياض والمنطقة الشرقية' : 'Strategic developments in Riyadh and the Eastern Province'}
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-gold/50 transition-colors duration-300 group"
          >
            <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-105 transition-transform duration-300">
              <Eye className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              {t('about.vision.title')}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
              {t('about.vision.text')}
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-gold/50 transition-colors duration-300 group"
          >
            <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-105 transition-transform duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              {t('about.mission.title')}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
              {t('about.mission.text')}
            </p>
          </motion.div>
        </div>

        {/* CEO Message section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 rounded-2xl text-white border border-gold/30 shadow-2xl relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/media/ceoBg.797127596c7907ec61a0.jpg')" }}
        >
          {/* Blur Overlay */}
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* CEO Portrait */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-gold flex-shrink-0 bg-slate-900 shadow-lg">
              <img 
                src="/media/ceo.9ff3399b9d75f987441a.png" 
                alt={t('ceo.name')} 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <div className="flex-grow text-center md:text-right">
              <span className="text-gold font-bold uppercase tracking-widest text-xs block mb-2">{t('ceo.title')}</span>
              <p className="text-slate-200 text-lg md:text-xl italic leading-relaxed mb-6 font-light">
                "{t('ceo.text')}"
              </p>
              
              <div className="border-t border-slate-700 pt-4 mt-6">
                <h5 className="text-lg font-bold text-white">{t('ceo.name')}</h5>
                <p className="text-xs text-gold font-semibold uppercase tracking-wider">{isRTL ? 'الرئيس التنفيذي - شركة حصص العقارية' : 'Chief Executive Officer - HISAS Real Estate'}</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
