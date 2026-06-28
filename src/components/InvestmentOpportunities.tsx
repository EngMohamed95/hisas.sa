import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Landmark, TrendingUp, Calendar, Coins, ArrowRight, ShieldCheck } from 'lucide-react';

export const InvestmentOpportunities: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [investValue, setInvestValue] = useState<number>(5000000); // 5 Million SAR default

  // ROI parameters
  const irr = 0.1577; // 15.77% target annual yield
  const durationMonths = 60; // 60 months / 5 years expected period
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
          ? `أرغب في مناقشة فرصة استثمارية بقيمة ${formatCurrency(investValue)} في شركة حصص العقارية.`
          : `I would like to discuss an investment opportunity of ${formatCurrency(investValue)} in HISAS Real Estate Company.`;
      }
    }
  };

  return (
    <section id="investment" className="py-24 bg-slate-50 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-gold font-bold tracking-widest uppercase text-base md:text-lg block mb-4"
          >
            {t('nav.investment')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight"
          >
            {t('invest.subtitle')}
          </motion.h2>
          <div className="w-16 h-[2px] bg-gold-gradient mx-auto" />
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-5 gap-10 items-stretch">
          
          {/* ROI Calculator Inputs */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 p-8 bg-white leaf-shape border border-slate-200 flex flex-col justify-between shadow-md"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-gold animate-pulse" />
                <span>{isRTL ? 'تخصيص قيمة الاستثمار' : 'Customize Investment Value'}</span>
              </h3>

              {/* Slider Input */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm text-slate-600 font-bold block uppercase tracking-wider">
                    {t('invest.calc.label')}
                  </label>
                  <span className="text-gold font-bold font-sans text-base">
                    {formatCurrency(investValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min={5000000}
                  max={50000000}
                  step={500000}
                  value={investValue}
                  onChange={(e) => setInvestValue(Number(e.target.value))}
                  className="w-full accent-gold h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-sans mt-2">
                  <span>5M</span>
                  <span>20M</span>
                  <span>35M</span>
                  <span>50M</span>
                </div>
                
                <div className="mt-6">
                  <label className="text-xs text-slate-500 font-bold block mb-2 uppercase tracking-wider">
                    {isRTL ? 'أو أدخل مبلغاً مخصصاً (ريال سعودي):' : 'Or enter a custom amount (SAR):'}
                  </label>
                  <input
                    type="number"
                    value={investValue || ''}
                    min={5000000}
                    max={50000000}
                    onChange={(e) => {
                      const val = e.target.value === '' ? 0 : Number(e.target.value);
                      setInvestValue(val);
                    }}
                    onBlur={() => {
                      if (investValue < 5000000) {
                        setInvestValue(5000000);
                      } else if (investValue > 50000000) {
                        setInvestValue(50000000);
                      }
                    }}
                    placeholder={isRTL ? 'مثال: 5,000,000' : 'Example: 5,000,000'}
                    className={`w-full bg-slate-50 border rounded-lg px-4 py-3 text-base text-slate-800 placeholder:text-slate-400 focus:outline-none font-sans transition-colors duration-200 ${
                      (investValue > 0 && investValue < 5000000) || investValue > 50000000
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-slate-200 focus:border-gold'
                    }`}
                  />
                  {((investValue > 0 && investValue < 5000000) || investValue > 50000000) && (
                    <p className="text-red-500 text-xs mt-1.5 font-medium">
                      {isRTL 
                        ? 'المبلغ يجب أن يكون بين 5,000,000 و 50,000,000 ريال سعودي'
                        : 'Amount must be between 5,000,000 and 50,000,000 SAR'}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Shield compliance message */}
            <div className="mt-8 border-t border-slate-100 pt-6">
              <div className="flex gap-3 items-start">
                <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-slate-600 leading-loose font-medium">
                  {isRTL 
                    ? 'جميع استثمارات حصص العقارية متوافقة مع أنظمة الهيئة العامة للعقار وهيئة السوق المالية ومرخصة بالكامل عبر نظام وافي للبيع على الخارطة.'
                    : 'All HISAS real estate investment options are fully compliant with the Real Estate General Authority regulations and licensed via the Wafi off-plan registry.'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Calculator Output Displays */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 p-8 bg-gold/5 text-slate-800 leaf-shape border border-gold/25 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center border-b border-gold/15 pb-5 mb-8">
                <span className="text-slate-800 font-bold tracking-widest text-xs uppercase">{isRTL ? 'تقديرات عوائد التطوير والاستثمار' : 'Development yield projections'}</span>
                <span className="bg-gold/15 text-gold border border-gold/30 rounded text-xs font-semibold px-2 py-0.5">
                  Vision 2030 Compatible
                </span>
              </div>

              {/* Dynamic projections grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 mb-10">
                <div>
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <TrendingUp className="w-4 h-4 text-gold" />
                    <span className="text-xs uppercase font-medium tracking-wide">{t('invest.calc.roi')}</span>
                  </div>
                  <h4 className="text-3xl font-extrabold text-gold-gradient tracking-tight">
                    {(irr * 100).toFixed(2)}%
                  </h4>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span className="text-xs uppercase font-medium tracking-wide">{t('invest.calc.duration')}</span>
                  </div>
                  <h4 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                    {durationMonths} {isRTL ? 'شهراً' : 'Months'}
                  </h4>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <Coins className="w-4 h-4 text-gold" />
                    <span className="text-xs uppercase font-medium tracking-wide">{t('invest.calc.profit')}</span>
                  </div>
                  <h4 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                    {formatCurrency(profit)}
                  </h4>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <Landmark className="w-4 h-4 text-gold" />
                    <span className="text-xs uppercase font-medium tracking-wide">{t('invest.calc.total')}</span>
                  </div>
                  <h4 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    {formatCurrency(totalPayout)}
                  </h4>
                </div>
              </div>
            </div>

            {/* Request discussion */}
            <div>
              <button
                onClick={handleCTA}
                className="w-full flex items-center justify-center gap-2 bg-gold-gradient text-white font-extrabold py-4 px-6 leaf-shape shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>{t('invest.calc.btn')}</span>
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
