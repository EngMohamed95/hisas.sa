import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Building2, Settings2, ShieldCheck, CheckCircle2, ChevronRight, BarChart3 } from 'lucide-react';
import { SEO } from '../components/SEO';

export const ServicesPage: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      id: 1,
      titleKey: 'services.1.title',
      descKey: 'services.1.desc',
      icon: Building2,
      details: isRTL 
        ? ['دراسة الجدوى وتخطيط المشاريع', 'التصميم الهندسي والمعماري الفاخر', 'إشراف كامل على التشييد وبناء الأبراج السكنية', 'إجراءات التسليم النهائي للملاك']
        : ['Feasibility studies & project planning', 'Luxury architectural & engineering design', 'Full oversight of residential tower construction', 'Final client handover procedures']
    },
    {
      id: 2,
      titleKey: 'services.2.title',
      descKey: 'services.2.desc',
      icon: Settings2,
      details: isRTL
        ? ['استخراج التصاريح والتراخيص الحكومية', 'إدارة العلاقات مع المطورين والمصممين', 'التحكم بالجدول الزمني وضبط الميزانيات', 'تطبيق نظم رقابة الجودة الصارمة']
        : ['Acquiring government permits & licenses', 'Managing relationships with master developers & designers', 'Schedule optimization & strict budget controls', 'Implementing global quality control standards']
    },
    {
      id: 3,
      titleKey: 'services.3.title',
      descKey: 'services.3.desc',
      icon: ShieldCheck,
      details: isRTL
        ? ['شراكة رسمية مع برنامج وافي السعودي', 'توفير حسابات ضمان مستقلة للمستثمرين', 'إدارة عمليات البيع والتملك المبكر', 'توافق قانوني وشفافية مطلقة للعملاء']
        : ['Official partnership with Saudi Wafi Program', 'Providing secure escrow accounts for investors', 'Managing early ownership & sales operations', 'Full regulatory compliance & client transparency']
    }
  ];

  const developmentSteps = [
    { num: '01', title: isRTL ? 'تحديد الفرص والجدوى' : 'Opportunity Identification', desc: isRTL ? 'اختيار مواقع نادرة ودراسة الجدوى الاستثمارية' : 'Selecting prime locations and calculating feasibility' },
    { num: '02', title: isRTL ? 'الهندسة والتصاميم' : 'Design & Engineering', desc: isRTL ? 'إعداد التصاميم الفاخرة بالتحالف مع بيوت الخبرة' : 'Drafting luxury layouts with global design firms' },
    { num: '03', title: isRTL ? 'التراخيص والترخيص' : 'Permits & Off-Plan Licenses', desc: isRTL ? 'الحصول على التراخيص الرسمية وتأهيل وافي' : 'Securing state permits and Wafi qualifications' },
    { num: '04', title: isRTL ? 'التشييد وضبط الجودة' : 'Construction & Quality', desc: isRTL ? 'بدء البناء وتطبيق رقابة جودة هندسية صارمة' : 'Executing construction under strict QA processes' },
    { num: '05', title: isRTL ? 'التسليم والتشغيل' : 'Handover & Operation', desc: isRTL ? 'تسليم الوحدات وتشغيل العقارات بتميز' : 'Delivering keys and managing operations elegantly' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 transition-colors duration-300">
      <SEO titleKey="nav.services" descriptionKey="services.subtitle" />

      {/* Page Header */}
      <section 
        className="relative pt-36 pb-24 overflow-hidden bg-cover bg-center border-b border-slate-200/80 text-white"
        style={{ backgroundImage: "url('/media/servicesBg.fa72d1598baae5011fcf.jpg')" }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-slate-950/40 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-gold font-bold tracking-widest uppercase text-xs sm:text-sm block mb-3">
            {t('nav.services')}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-white">
            {t('services.title')}
          </h1>
        </div>
      </section>

      {/* Services Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        
        {/* Core Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-md hover:shadow-xl hover:border-gold/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
                    {t(service.descKey)}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-5 mt-4">
                  <ul className="space-y-2.5">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-sm md:text-base text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Development Lifecycle Road */}
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {isRTL ? 'منهجية التطوير في حصص' : 'Development Lifecycle Methodology'}
            </h3>
            <p className="text-slate-500 text-base md:text-lg lg:text-xl">
              {isRTL 
                ? 'رحلة تشييد الأبراء والمجمعات الفاخرة من الفكرة الأولية حتى نسلمكم المفتاح.'
                : 'The structural journey of high-rise towers from initial concept to handing over your keys.'}
            </p>
          </div>

          {/* Steps Horizontal/Vertical Road */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {developmentSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                {/* Arrow connector */}
                {idx < 4 && (
                  <div className={`hidden lg:block absolute top-6 ${isRTL ? '-left-4' : '-right-4'} w-8 h-[2px] bg-slate-200`} />
                )}
                
                <div className="w-12 h-12 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center font-bold text-slate-500 group-hover:border-gold group-hover:text-gold transition-colors duration-300 mb-4 text-lg font-sans">
                  {step.num}
                </div>
                
                <h4 className="font-bold text-slate-900 mb-2 text-sm md:text-base">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-sm md:text-base max-w-[180px] mx-auto leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Teaser inside Services */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              {isRTL ? 'ركائز نهتدي بها في كل تفصيل' : 'Foundational Pillars of Excellence'}
            </h3>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg lg:text-xl mb-6">
              {isRTL
                ? 'لا نعتبر التطوير العقاري مجرد عملية بناء، بل هو صياغة فخامة تليق بتطلعات عملائنا. نحرص في جميع مراحل المشاريع على التخطيط الدقيق للتدفقات النقدية ونسبة الأمان المالي وضبط معايير الجودة لتفوق توقعات المستثمرين والنخبة.'
                : 'We do not view development as just building structures, but as formulating lifestyle luxury matching our clients ambitions. At every project stage, we manage financial flows, ensure project protection, and raise quality to exceed investor expectations.'}
            </p>
            <div className="flex gap-3">
              <span className="px-4 py-2 bg-gold/10 text-gold rounded-full text-xs font-semibold">{isRTL ? 'إنجاز بنسبة 100%' : '100% Commitment'}</span>
              <span className="px-4 py-2 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-semibold">{isRTL ? 'تراخيص وافي معتمدة' : 'Official Wafi Licenses'}</span>
            </div>
          </div>

          <div className="bg-gold/5 text-slate-800 p-8 rounded-2xl border border-gold/25 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-gold" />
              <span>{isRTL ? 'حوكمة المشاريع وأمان التمويل' : 'Project Governance & Finance Security'}</span>
            </h4>
            <ul className="space-y-3.5 text-slate-700 text-xs md:text-sm">
              <li className="flex gap-2">
                <ChevronRight className={`w-4 h-4 text-gold flex-shrink-0 mt-0.5 ${isRTL ? 'rotate-180' : ''}`} />
                <span>{isRTL ? 'حسابات ضمان مرخصة لكل مشروع لضمان صرف دفعات البناء في مكانها الصحيح.' : 'Licensed escrow accounts for each project to guarantee proper fund allocation.'}</span>
              </li>
              <li className="flex gap-2">
                <ChevronRight className={`w-4 h-4 text-gold flex-shrink-0 mt-0.5 ${isRTL ? 'rotate-180' : ''}`} />
                <span>{isRTL ? 'إشراف دوري ومراجعة دورية من الهيئة العامة للعقار لرفع التقارير الفنية.' : 'Regular audits and technical reports from the Real Estate General Authority.'}</span>
              </li>
              <li className="flex gap-2">
                <ChevronRight className={`w-4 h-4 text-gold flex-shrink-0 mt-0.5 ${isRTL ? 'rotate-180' : ''}`} />
                <span>{isRTL ? 'تعاقد مع أفضل المكاتب الاستشارية والمقاولين المصنفين بالمملكة.' : 'Partnering with the finest engineering consultants and top classified builders.'}</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};
