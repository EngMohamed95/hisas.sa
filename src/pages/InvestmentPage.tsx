import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Landmark, TrendingUp, Calendar, Coins, ArrowRight, ShieldCheck, PieChart, BadgePercent } from 'lucide-react';
import { SEO } from '../components/SEO';

export const InvestmentPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();
  const [investValue, setInvestValue] = useState<number>(5000000); // 5 Million SAR default

  // ROI parameters
  const irr = 0.18; // 18% target annual yield
  const durationMonths = 36; // 36 months / 3 years expected period
  const profit = Math.round(investValue * irr * (durationMonths / 12));
  const totalPayout = investValue + profit;

  const formatCurrency = (val: number) => {
    return val.toLocaleString(isRTL ? 'ar-SA' : 'en-US') + ' ' + (isRTL ? 'ريال' : 'SAR');
  };

  const handleCTA = () => {
    const prefillMessage = isRTL 
      ? `أرغب في مناقشة فرصة استثمارية بقيمة ${formatCurrency(investValue)} في شركة حصص العقارية.`
      : `I would like to discuss an investment opportunity of ${formatCurrency(investValue)} in HISAS Real Estate Company.`;
    
    navigate('/contact', { state: { prefillMessage, classification: 'investor' } });
  };

  return (
    <div className="min-h-screen bg-slate-50 transition-colors duration-300">
      <SEO titleKey="nav.investment" descriptionKey="invest.subtitle" />

      {/* Page Header */}
      <section 
        className="relative pt-36 pb-24 overflow-hidden bg-cover bg-center border-b border-slate-200/80 text-white"
        style={{ backgroundImage: "url('/images/riyadh_skyline_luxury.png')" }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-slate-950/40 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-white font-bold tracking-widest uppercase text-xs sm:text-sm block mb-3">
            {t('nav.investment')}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-white">
            {t('invest.title')}
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        
        {/* Intro Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-7 leading-normal tracking-[0.02em]">
              {isRTL ? 'الاستثمار العقاري الساحلي والريادي في المملكة' : 'Coastal & Strategic Real Estate Investment'}
            </h2>
            <p className="text-slate-700 leading-loose text-lg md:text-xl mb-8 font-medium tracking-[0.01em]">
              {isRTL
                ? 'تقدم شركة حصص العقارية فرصاً استثمارية ممتازة مبنية على التحليل المالي الدقيق والفرص التنموية ذات العوائد المرتفعة. نركز مشاريعنا في مناطق النمو الاستراتيجي بالمنطقة الشرقية وكورنيش الخبر الفاخر، وشمال العاصمة الرياض بالتماشي التام مع مستهدفات التنمية الإسكانية لرؤية 2030.'
                : 'HISAS Real Estate offers signature investment options based on diligent financial screening and high-yield properties. We center our pipeline in high-growth districts across Al-Khobar Corniche and North Riyadh, complying fully with the housing expansion targets of Saudi Vision 2030.'}
            </p>
            <div className="space-y-4">
              <div className="flex gap-3 items-center">
                <BadgePercent className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-base md:text-lg font-bold text-slate-800 leading-relaxed">
                  {isRTL ? 'معدل عائد داخلي مستهدف يتراوح بين 18% و 24%' : 'Target IRR yields spanning 18% to 24% annually'}
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <PieChart className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-base md:text-lg font-bold text-slate-800 leading-relaxed">
                  {isRTL ? 'محفظة أصول متنوعة وشفافية كاملة عبر برنامج وافي' : 'Diversified asset model with full Wafi regulated disclosure'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 leaf-shape border border-slate-200 shadow-sm">
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-6 leading-normal">
              {isRTL ? 'مزايا الشراكة الاستثمارية مع حصص' : 'Advantages of HISAS Alliances'}
            </h3>
            <ul className="space-y-5 text-base md:text-lg text-slate-700 font-medium leading-loose">
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-3" />
                <span>{isRTL ? 'دراسات جدوى مالية موثقة ومعتمدة من جهات تقييم مرخصة.' : 'Verified financial feasibility studies from certified valuers.'}</span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-3" />
                <span>{isRTL ? 'تمويل مرن وهياكل استثمارية تناسب كبار المستثمرين والشركات.' : 'Flexible investment brackets custom-structured for family offices and corporates.'}</span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-3" />
                <span>{isRTL ? 'أولوية التملك وحجز الوحدات السكنية بأسعار تفضيلية خلال مرحلة الإطلاق.' : 'First-look priority bookings at preferred early pricing brackets.'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Dashboard Grid - Calculator */}
        <div className="grid lg:grid-cols-5 gap-10 items-stretch">
          
          {/* ROI Calculator Inputs */}
          <div className="lg:col-span-2 p-8 bg-white leaf-shape border border-slate-200 flex flex-col justify-between shadow-md">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-gold" />
                <span>{isRTL ? 'تخصيص قيمة الاستثمار' : 'Customize Investment Value'}</span>
              </h3>

              {/* Slider Input */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs text-slate-500 block uppercase tracking-wider">
                    {t('invest.calc.label')}
                  </label>
                  <span className="text-gold font-bold font-sans text-sm">
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
              </div>
            </div>

            {/* Shield compliance message */}
            <div className="mt-8 border-t border-slate-100 pt-6">
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
          <div className="lg:col-span-3 p-8 bg-gold/5 text-slate-800 leaf-shape border border-gold/25 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-gold/15 pb-5 mb-8">
                <span className="text-slate-800 font-bold tracking-widest text-xs uppercase">{isRTL ? 'تقديرات عوائد التطوير والاستثمار' : 'Development yield projections'}</span>
                <span className="bg-gold/15 text-gold border border-gold/30 rounded text-xs font-semibold px-2 py-0.5 font-sans">
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
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-gold-gradient tracking-tight">
                    {(irr * 100).toFixed(1)}%
                  </h4>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span className="text-xs uppercase font-medium tracking-wide">{t('invest.calc.duration')}</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                    {durationMonths} {isRTL ? 'شهراً' : 'Months'}
                  </h4>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <Coins className="w-4 h-4 text-gold" />
                    <span className="text-xs uppercase font-medium tracking-wide">{t('invest.calc.profit')}</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight font-sans">
                    {formatCurrency(profit)}
                  </h4>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <Landmark className="w-4 h-4 text-gold" />
                    <span className="text-xs uppercase font-medium tracking-wide">{t('invest.calc.total')}</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
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
          </div>

        </div>

      </div>
    </div>
  );
};
