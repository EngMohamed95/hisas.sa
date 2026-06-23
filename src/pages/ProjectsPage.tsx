import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Activity, Compass, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { SEO } from '../components/SEO';

interface Project {
  id: number;
  category: 'single' | 'cluster';
  brandKey: string;
  descKey: string;
  image: string;
  images: string[];
  locationKey: string;
  units: string;
  roi: string;
  statusKey: string;
  specs: {
    ar: string[];
    en: string[];
  };
  logo?: string;
}

export const ProjectsPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'single' | 'cluster'>('single');
  const [activeImages, setActiveImages] = useState<Record<number, string>>({});

  const projectsList: Project[] = [
    {
      id: 1,
      category: 'single',
      brandKey: 'projects.brand.alvera',
      descKey: 'projects.brand.alvera.desc',
      image: '/media/project1_1.ef2b9d45d51c07165a83.jpg',
      images: [
        '/media/project1_1.ef2b9d45d51c07165a83.jpg',
        '/media/project1_2.c84732b8d920fc7e373c.jpg',
        '/media/project1_3.efc7860b465b8a3c3c49.jpg'
      ],
      locationKey: 'projects.location.khobar',
      units: '180',
      roi: '18.4%',
      statusKey: 'projects.status.active',
      specs: {
        ar: ['إطلالة بحرية كاملة ومباشرة على كورنيش الخبر', 'تصميم معماري عصري فريد ومبتكر', 'تشطيبات فاخرة بأعلى معايير الجودة العالمية', 'أنظمة منزلية ذكية متكاملة وموفرة للطاقة'],
        en: ['Full and direct waterfront views on Al-Khobar Corniche', 'Unique and innovative modern architectural design', 'Premium luxury finishes with highest international standards', 'Integrated smart home and energy-saving systems']
      }
    },
    {
      id: 2,
      category: 'cluster',
      brandKey: 'projects.brand.nexus',
      descKey: 'projects.brand.nexus.desc',
      image: '/media/project2_1.b7b422fe98293d6a3c2e.jpg',
      images: [
        '/media/project2_1.b7b422fe98293d6a3c2e.jpg',
        '/media/project2_2.91ad708de53284847b8b.jpg',
        '/media/project2_3.7f2805650cc7b0517eef.jpg'
      ],
      locationKey: 'projects.location.riyadh',
      units: '570',
      roi: '22.8%',
      statusKey: 'projects.status.upcoming',
      specs: {
        ar: ['موقع استراتيجي نادر في حي النخيل بالرياض', 'مجمع سكني ذكي يضم أبراجاً متكاملة الخدمات', 'مرافق ترفيهية وصحية خاصة واستثنائية', 'مواقف سيارات مجهزة بمحطات شحن كهربائية'],
        en: ['Rare strategic location in Al-Nakheel, Riyadh', 'Smart residential complex with full-service towers', 'Private and exceptional health and leisure facilities', 'Underground parking equipped with EV charging stations']
      },
      logo: '/media/projectLogo2.6d1e741685f74dde03e9.png'
    }
  ];

  const filteredProjects = projectsList.filter(
    (p) => p.category === filter
  );

  return (
    <div className="min-h-screen bg-slate-50 transition-colors duration-300">
      <SEO titleKey="nav.projects" descriptionKey="projects.subtitle" />

      {/* Page Header */}
      <section 
        className="relative pt-36 pb-24 overflow-hidden bg-cover bg-center border-b border-slate-200/80 text-white"
        style={{ backgroundImage: "url('/media/ceoBg.797127596c7907ec61a0.jpg')" }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-slate-950/40 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-white font-bold tracking-widest uppercase text-xs sm:text-sm block mb-3">
            {t('nav.projects')}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-white">
            {isRTL ? 'محفظة المشاريع النوعية' : 'Signature Project Portfolio'}
          </h1>
        </div>
      </section>

      {/* Projects Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 text-slate-700">
            <SlidersHorizontal className="w-4 h-4 text-gold" />
            <span className="text-sm font-semibold">{isRTL ? 'تصنيف المشاريع:' : 'Filter Projects:'}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {(['single', 'cluster'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 border ${
                  filter === type
                    ? 'bg-gold-gradient text-white border-transparent shadow-md font-bold'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-gold/50'
                }`}
              >
                {type === 'single' && t('projects.category.1')}
                {type === 'cluster' && t('projects.category.2')}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Showcase - Full Width of Content Grid */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => {
              const currentImage = activeImages[project.id] || project.image;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid lg:grid-cols-12 gap-8 lg:gap-12 bg-white leaf-shape border border-slate-200 p-6 md:p-10 shadow-lg relative items-start"
                >
                  {/* Left Column - Large Image Showcase (5 Columns) with Thumbnail Selector */}
                  <div className="lg:col-span-5 w-full flex flex-col gap-4">
                    <div className="w-full overflow-hidden relative leaf-shape group">
                      <div className="aspect-[3/4] w-full overflow-hidden relative bg-slate-950">
                        <img
                          src={currentImage}
                          alt={t(project.brandKey)}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-slate-950/25" />
                        
                        {/* Category Tag */}
                        <span className="absolute top-4 left-4 bg-slate-900/90 text-gold border border-gold/30 px-3 py-1 text-xs font-semibold uppercase rounded-md backdrop-blur-sm">
                          {project.category === 'single' ? t('projects.category.1') : t('projects.category.2')}
                        </span>
                      </div>
                    </div>

                    {/* Thumbnail Selector */}
                    {project.images && project.images.length > 1 && (
                      <div className="flex gap-3 overflow-x-auto py-1 justify-center lg:justify-start">
                        {project.images.map((imgUrl, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveImages(prev => ({ ...prev, [project.id]: imgUrl }))}
                            className={`w-12 h-16 sm:w-16 sm:h-20 leaf-shape overflow-hidden border-2 transition-all duration-300 flex-shrink-0 cursor-pointer ${
                              currentImage === imgUrl ? 'border-gold scale-105 shadow-md' : 'border-slate-200 hover:border-gold/50'
                            }`}
                          >
                            <img src={imgUrl} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Column - Project Content & Metrics & Specs (7 Columns) */}
                  <div className={`lg:col-span-7 flex flex-col justify-between h-full ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div>
                      {project.logo && (
                        <div className="mb-4 h-12 flex items-center justify-start">
                          <img src={project.logo} alt="Project Logo" className="h-full object-contain" />
                        </div>
                      )}
                      <span className="text-gold font-bold text-xs uppercase tracking-wider block mb-2">
                        {project.category === 'single' ? t('projects.category.1') : t('projects.category.2')}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-4">
                        {t(project.brandKey)}
                      </h3>
                      <p className="text-slate-650 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {t(project.descKey)}
                      </p>

                    {/* Metrics Box Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-50 p-4 leaf-shape border border-slate-200 shadow-sm">
                        <span className="text-[10px] text-slate-500 block mb-1 uppercase font-semibold">{t('projects.location.label')}</span>
                        <div className="flex items-center gap-1.5 font-bold text-slate-800 text-xs sm:text-sm">
                          <Compass className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="truncate">{t(project.locationKey)}</span>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-4 leaf-shape border border-slate-200 shadow-sm">
                        <span className="text-[10px] text-slate-500 block mb-1 uppercase font-semibold">{t('projects.units.label')}</span>
                        <div className="flex items-center gap-1.5 font-bold text-slate-800 text-xs sm:text-sm">
                          <Building className="w-4 h-4 text-gold flex-shrink-0" />
                          <span>{project.units} {isRTL ? 'وحدة' : 'Units'}</span>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-4 leaf-shape border border-slate-200 shadow-sm">
                        <span className="text-[10px] text-slate-500 block mb-1 uppercase font-semibold">{t('invest.calc.roi')}</span>
                        <div className="flex items-center gap-1.5 font-bold text-slate-800 text-xs sm:text-sm">
                          <Activity className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="text-emerald-500">{project.roi}</span>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-4 leaf-shape border border-slate-200 shadow-sm">
                        <span className="text-[10px] text-slate-500 block mb-1 uppercase font-semibold">{t('projects.status.label')}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-gold/15 text-gold border border-gold/30 rounded inline-block truncate">
                          {t(project.statusKey)}
                        </span>
                      </div>
                    </div>

                    {/* Premium Specifications */}
                    <div className="border-t border-slate-100 pt-5 mt-6">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
                        {isRTL ? 'المواصفات الاستثنائية' : 'Premium Specifications'}
                      </h4>
                      <ul className="space-y-2.5">
                        {(isRTL ? project.specs.ar : project.specs.en).map((spec, i) => (
                          <li key={i} className="flex gap-2 text-xs sm:text-sm text-slate-650 font-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action CTA Button */}
                  <div className="border-t border-slate-100 pt-5 mt-6">
                    <button
                      onClick={() => {
                        const prefillMessage = isRTL 
                          ? `أرغب في مناقشة فرصة الاستثمار في مشروع ${t(project.brandKey)}.`
                          : `I would like to discuss investing in ${t(project.brandKey)}.`;
                        
                        navigate('/contact', { state: { prefillMessage, classification: 'investor' } });
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-gold-gradient text-white font-extrabold py-3.5 px-6 leaf-shape shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                    >
                      <span>{isRTL ? 'تواصل معنا للمناقشة' : 'Contact Us for Details'}</span>
                      <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
