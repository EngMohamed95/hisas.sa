import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Eye, ShieldCheck, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  const { t, isRTL, language } = useLanguage();

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Crown Prince / Vision 2030 Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="mb-24 p-8 md:p-12 leaf-shape-lg text-slate-800 relative overflow-hidden border border-gold/30 shadow-md bg-cover bg-center"
          style={{ backgroundImage: `url(${language === 'ar' ? '/media/visionBgAr.4e591c8841c702e189fc.png' : '/media/visionBg.ab7899944ba28a26c648.png'})` }}
        >
          {/* Overlay to darken background image */}
          <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px]" />
          
          <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
            {/* Quote / Emblem */}
            <div className={`md:col-span-2 flex flex-col justify-center ${isRTL ? 'text-right' : 'text-left'}`}>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-3xl font-bold text-gold mb-6 border-b border-slate-200 pb-4"
              >
                {t('vision.leader.title')}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg lg:text-xl font-normal"
              >
                {t('vision.leader.text1')}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-slate-700 leading-relaxed text-base md:text-lg lg:text-xl font-normal"
              >
                {t('vision.leader.text2')}
              </motion.p>
            </div>

            {/* Crown Prince MBS Portrait */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col items-center justify-center relative leaf-shape overflow-hidden border border-gold/30 shadow-md group aspect-[4/5] bg-slate-100 max-w-[240px] mx-auto w-full"
            >
              <img 
                src="/media/mbs.5e6835360ca59b176b86.jpg" 
                alt="HRH Crown Prince Mohammed bin Salman" 
                className="w-full h-full object-cover transition-all duration-700 brightness-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-[10px] text-gold font-bold tracking-[0.2em] block uppercase">{isRTL ? 'رؤية ٢٠٣٠' : 'VISION 2030'}</span>
                <span className="text-[9px] text-slate-700 font-semibold mt-0.5 block">{isRTL ? 'طموحنا عنان السماء' : '"Our ambition is the sky"'}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Corporate Narrative & Map Pin Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              className="text-gold font-bold tracking-[0.12em] uppercase text-base md:text-lg block mb-4"
            >
              {t('about.title')}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-normal tracking-[0.03em]"
            >
              {t('about.subtitle')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-slate-600 leading-relaxed text-xl md:text-2xl mb-8"
            >
              {t('about.text')}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="flex gap-4 p-4 bg-white leaf-shape border border-slate-200 items-start shadow-sm"
            >
              <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <p className="text-base md:text-lg lg:text-xl font-medium text-slate-700">
                {t('about.map')}
              </p>
            </motion.div>
          </motion.div>

          {/* Interactive Map Visual */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <div className="w-full max-w-lg aspect-[4/3] bg-white leaf-shape-lg border border-slate-200 p-6 flex flex-col justify-between shadow-md overflow-hidden relative group">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 relative z-10">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{isRTL ? 'خريطة التواجد الاستراتيجي' : 'Strategic Footprint Map'}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>

              {/* Saudi Actual Map Image */}
              <div className="relative h-64 w-full flex items-center justify-center overflow-hidden">
                <img 
                  src="/media/map.7bb3fad151c4f8e28776.png" 
                  alt="HISAS Presence Map" 
                  className="w-full h-full object-contain transition-all duration-300"
                />
              </div>

              <div className="text-xs text-slate-500 text-center relative z-10 border-t border-slate-200 pt-3">
                {isRTL ? 'نركز على التطوير في الرياض والمنطقة الشرقية' : 'Strategic developments in Riyadh and the Eastern Province'}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="p-8 leaf-shape border border-slate-200 bg-white shadow-sm hover:border-gold/50 transition-colors duration-300 group"
          >
            <div className="w-12 h-12 leaf-shape bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-105 transition-transform duration-300">
              <Eye className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">
              {t('about.vision.title')}
            </h4>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg lg:text-xl">
              {t('about.vision.text')}
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-8 leaf-shape border border-slate-200 bg-white shadow-sm hover:border-gold/50 transition-colors duration-300 group"
          >
            <div className="w-12 h-12 leaf-shape bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-105 transition-transform duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">
              {t('about.mission.title')}
            </h4>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg lg:text-xl">
              {t('about.mission.text')}
            </p>
          </motion.div>
        </div>

        {/* CEO Message section - Card layout inside container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="relative mt-24 md:mt-32 w-full bg-[#012d35] text-white py-12 md:py-16 px-6 md:px-12 leaf-shape-lg overflow-visible border border-gold/25 shadow-2xl"
        >
          {/* Background Image Overlay (clipped to leaf-shape-lg) */}
          <div className="absolute inset-0 overflow-hidden z-0 leaf-shape-lg">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
              style={{ backgroundImage: "url('/media/ceoBg.797127596c7907ec61a0.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#012d35] via-[#012d35]/65 to-[#01404a]/85" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-12 gap-8 items-center w-full relative z-10" dir="ltr">
            {/* Text column - occupies 7-8 cols on desktop to prevent overlap */}
            <div className={`col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-6 flex flex-col justify-center ${isRTL ? 'text-right md:pr-8 lg:pr-12' : 'text-left md:pl-8 lg:pl-12'}`} dir={isRTL ? "rtl" : "ltr"}>
              <span className="text-slate-300 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
                {t('ceo.title')}
              </span>
              <h4 className="text-2xl sm:text-4xl font-black text-[#b69f6a] mb-6 font-heading leading-tight">
                {t('ceo.name')}
              </h4>
              <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed mb-6 font-normal max-w-xl opacity-95">
                "{t('ceo.text')}"
              </p>
              <div className="border-t border-white/10 pt-4 mt-2 max-w-md">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  {isRTL ? 'الرئيس التنفيذي - شركة حصص العقارية' : 'Chief Executive Officer - HISAS Real Estate'}
                </p>
              </div>
            </div>

            {/* Mobile placeholder image (no overlap) */}
            <div className="col-span-12 flex justify-center md:hidden mt-6">
              <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-[#b69f6a]/40 bg-[#02464f]/40 shadow-lg">
                <img 
                  src="/media/ceo.9ff3399b9d75f987441a.png" 
                  alt={t('ceo.name')} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Overlapping cut-out CEO Portrait (Desktop only) */}
          <div className="absolute bottom-0 right-2 lg:right-8 xl:right-16 h-[105%] lg:h-[118%] xl:h-[122%] w-auto pointer-events-none z-20 hidden md:block">
            <img 
              src="/media/ceo.9ff3399b9d75f987441a.png" 
              alt={t('ceo.name')} 
              className="h-full w-auto object-contain object-bottom"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
