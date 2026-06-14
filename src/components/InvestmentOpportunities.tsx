import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Landmark, TrendingUp, Calendar, Coins, ArrowRight, ShieldCheck } from 'lucide-react';

export const InvestmentOpportunities: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [investValue, setInvestValue] = useState<number>(1000000); // 1 Million SAR default
  const [selectedProject, setSelectedProject] = useState<'alvera' | 'nexus'>('alvera');

  // ROI parameters
  const irr = selectedProject === 'alvera' ? 0.184 : 0.228;
  const durationMonths = selectedProject === 'alvera' ? 36 : 42;
  const profit = Math.round(investValue * irr * (durationMonths / 12));
  const totalPayout = investValue + profit;

  const formatCurrency = (val: number) => {
    return val.toLocaleString(isRTL ? 'ar-SA' : 'en-US') + ' ' + (isRTL ? 'ريال' : 'SAR');
  };

  const handleCTA = () => {
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      // Pre-fill input details if form supports it
      const messageTextarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
      if (messageTextarea) {
        messageTextarea.value = isRTL 
          ? `أرغب في مناقشة فرصة استثمارية بقيمة ${formatCurrency(investValue)} في مشروع ${selectedProject === 'alvera' ? 'أبراج ألفيرا' : 'أبراج نكسيوس'}.`
          : `I would like to discuss an investment opportunity of ${formatCurrency(investValue)} in project ${selectedProject === 'alvera' ? 'Alvera Towers' : 'Nexus Towers'}.`;
      }
    }
  };

  return (
    <section id="investment" className="py-24 bg-luxury-lightBg dark:bg-luxury-darkBg relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-widest uppercase text-sm block mb-3"
          >
            {t('nav.investment')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
          >
            {t('invest.subtitle')}
          </motion.h2>
          <div className="w-16 h-[2px] bg-gold-gradient mx-auto" />
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-5 gap-10 items-stretch">
          
          {/* ROI Calculator Inputs */}
          <div className="lg:col-span-2 p-8 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-gold" />
                <span>{isRTL ? 'تخصيص قيمة الاستثمار' : 'Customize Investment Value'}</span>
              </h3>

              {/* Project Toggle */}
              <div className="mb-8">
                <label className="text-xs text-slate-500 dark:text-slate-400 block mb-3 uppercase tracking-wider">
                  {isRTL ? 'اختر علامة المشروع العقاري' : 'Select Project Brand'}
                </label>
                <div className="grid grid-cols-2 gap-3 bg-slate-100 dark:bg-slate-900 p-1 rounded-lg">
                  <button
                    onClick={() => setSelectedProject('alvera')}
                    className={`py-2 px-3 text-xs font-bold rounded-md transition-colors ${
                      selectedProject === 'alvera'
                        ? 'bg-gold text-slate-900 shadow-md'
                        : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {t('projects.brand.alvera').split(' (')[0]}
                  </button>
                  <button
                    onClick={() => setSelectedProject('nexus')}
                    className={`py-2 px-3 text-xs font-bold rounded-md transition-colors ${
                      selectedProject === 'nexus'
                        ? 'bg-gold text-slate-900 shadow-md'
                        : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {t('projects.brand.nexus').split(' (')[0]}
                  </button>
                </div>
              </div>

              {/* Slider Input */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs text-slate-500 dark:text-slate-400 block uppercase tracking-wider">
                    {t('invest.calc.label')}
                  </label>
                  <span className="text-gold font-bold font-sans text-sm">
                    {formatCurrency(investValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={50000000}
                  step={500000}
                  value={investValue}
                  onChange={(e) => setInvestValue(Number(e.target.value))}
                  className="w-full accent-gold h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-sans mt-2">
                  <span>500K</span>
                  <span>10M</span>
                  <span>25M</span>
                  <span>50M</span>
                </div>
              </div>
            </div>

            {/* Shield compliance message */}
            <div className="mt-8 border-t border-slate-100 dark:border-slate-900 pt-6">
              <div className="flex gap-3 items-start">
                <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed">
                  {isRTL 
                    ? 'جميع استثمارات حصص العقارية متوافقة مع أنظمة الهيئة العامة للعقار وهيئة السوق المالية ومرخصة بالكامل عبر نظام وافي للبيع على الخارطة.'
                    : 'All HISAS real estate investment options are fully compliant with the Real Estate General Authority regulations and licensed via the Wafi off-plan registry.'}
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Output Displays */}
          <div className="lg:col-span-3 p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-2xl border border-gold/30 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-5 mb-8">
                <span className="text-gold font-bold tracking-widest text-xs uppercase">{isRTL ? 'تقديرات عوائد التطوير والاستثمار' : 'Development yield projections'}</span>
                <span className="bg-gold/15 text-gold border border-gold/30 rounded text-xs font-semibold px-2 py-0.5">
                  Vision 2030 Compatible
                </span>
              </div>

              {/* Dynamic projections grid */}
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <TrendingUp className="w-4 h-4 text-gold" />
                    <span className="text-xs uppercase font-medium tracking-wide">{t('invest.calc.roi')}</span>
                  </div>
                  <h4 className="text-3xl font-extrabold text-white text-gold-gradient tracking-tight">
                    {(irr * 100).toFixed(1)}%
                  </h4>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span className="text-xs uppercase font-medium tracking-wide">{t('invest.calc.duration')}</span>
                  </div>
                  <h4 className="text-3xl font-extrabold text-white tracking-tight">
                    {durationMonths} {isRTL ? 'شهراً' : 'Months'}
                  </h4>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <Coins className="w-4 h-4 text-gold" />
                    <span className="text-xs uppercase font-medium tracking-wide">{t('invest.calc.profit')}</span>
                  </div>
                  <h4 className="text-3xl font-extrabold text-white tracking-tight">
                    {formatCurrency(profit)}
                  </h4>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <Landmark className="w-4 h-4 text-gold" />
                    <span className="text-xs uppercase font-medium tracking-wide">{t('invest.calc.total')}</span>
                  </div>
                  <h4 className="text-3xl font-extrabold text-gold tracking-tight">
                    {formatCurrency(totalPayout)}
                  </h4>
                </div>
              </div>
            </div>

            {/* Request discussion */}
            <div>
              <button
                onClick={handleCTA}
                className="w-full flex items-center justify-center gap-2 bg-gold-gradient text-slate-900 font-extrabold py-4 px-6 rounded-lg shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>{t('invest.calc.btn')}</span>
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
