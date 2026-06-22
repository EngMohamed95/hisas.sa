import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building, Activity, X, Compass, ChevronRight, SlidersHorizontal } from 'lucide-react';
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
}

export const ProjectsPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'single' | 'cluster'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const projectsList: Project[] = [
    {
      id: 1,
      category: 'single',
      brandKey: 'projects.brand.alvera',
      descKey: 'projects.brand.alvera.desc',
      image: '/images/alvera_tower_luxury.png',
      images: [
        '/images/alvera_tower_luxury.png',
        '/media/project1_2.c84732b8d920fc7e373c.jpg',
        '/media/project1_3.efc7860b465b8a3c3c49.jpg'
      ],
      locationKey: 'projects.location.khobar',
      units: '180',
      roi: '18.4%',
      statusKey: 'projects.status.active',
      specs: {
        ar: ['إطلالة بحرية كاملة ومباشرة على كورنيش الخبر', 'تصميم عصري جريء بارتفاع شاهق ونوعي', 'مواصفات تشطيبات فاخرة للغاية (درجة ممتازة)', 'أنظمة ذكية لإدارة الطاقة والتحكم المنزلي'],
        en: ['Full & direct waterfront views on Al-Khobar Corniche', 'Bold high-rise modern architecture design', 'Super luxury finishes of premium grade materials', 'Smart energy-saving and home automation systems']
      }
    },
    {
      id: 2,
      category: 'cluster',
      brandKey: 'projects.brand.nexus',
      descKey: 'projects.brand.nexus.desc',
      image: '/images/nexus_tower_luxury.png',
      images: [
        '/images/nexus_tower_luxury.png',
        '/media/project2_2.91ad708de53284847b8b.jpg',
        '/media/project2_3.7f2805650cc7b0517eef.jpg'
      ],
      locationKey: 'projects.location.riyadh',
      units: '570',
      roi: '22.8%',
      statusKey: 'projects.status.upcoming',
      specs: {
        ar: ['موقع استراتيجي متميز في حي النخيل بالرياض', 'مجمع متكامل يضم 2 إلى 6 أبراج سكنية ذكية', 'مناطق ترفيهية وخدمات مشتركة خاصة بالنخبة', 'مواقف سيارات تحت الأرض مجهزة بمحطات شحن'],
        en: ['Strategic landmark location in Al-Nakheel, Riyadh', 'Integrated complex comprising 2 to 6 smart residential towers', 'Dedicated leisure facilities & premium clubhouses', 'Underground parking equipped with EV chargers']
      }
    }
  ];

  const handleOpenProject = (project: Project) => {
    setActiveImgIndex(0);
    setActiveProject(project);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeProject) return;
    setActiveImgIndex((prev) => (prev === 0 ? activeProject.images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeProject) return;
    setActiveImgIndex((prev) => (prev === activeProject.images.length - 1 ? 0 : prev + 1));
  };

  const filteredProjects = projectsList.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <div className="pt-24 min-h-screen bg-slate-50 transition-colors duration-300">
      <SEO titleKey="nav.projects" descriptionKey="projects.subtitle" />

      {/* Page Header */}
      <section 
        className="relative py-24 overflow-hidden bg-cover bg-center border-b border-slate-200/80 text-white"
        style={{ backgroundImage: "url('/media/ceoBg.797127596c7907ec61a0.jpg')" }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-slate-950/40 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-gold font-bold tracking-widest uppercase text-xs sm:text-sm block mb-3">
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
            {(['all', 'single', 'cluster'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 border ${
                  filter === type
                    ? 'bg-gold-gradient text-white border-transparent shadow-md font-bold'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-gold/50'
                }`}
              >
                {type === 'all' && t('projects.category.all')}
                {type === 'single' && t('projects.category.1')}
                {type === 'cluster' && t('projects.category.2')}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards List */}
        <div className="grid md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md hover:shadow-xl hover:border-gold/40 transition-all duration-500 cursor-pointer flex flex-col justify-between"
                onClick={() => handleOpenProject(project)}
              >
                <div>
                  {/* Image Render */}
                  <div className="aspect-[16/10] overflow-hidden relative bg-slate-950">
                    <img
                      src={project.image}
                      alt={t(project.brandKey)}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors duration-500" />
                    
                    {/* Tag */}
                    <span className="absolute top-4 left-4 bg-slate-900/90 text-gold border border-gold/30 px-3 py-1 text-xs font-semibold uppercase rounded-md backdrop-blur-sm">
                      {project.category === 'single' ? t('projects.category.1') : t('projects.category.2')}
                    </span>
                  </div>

                  {/* Copy Details */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-gold transition-colors duration-300">
                      {t(project.brandKey)}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {t(project.descKey)}
                    </p>
                  </div>
                </div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="flex items-center justify-between border-t border-slate-100 pt-5 gap-4">
                    <div className="flex items-center gap-2 text-slate-500 text-xs md:text-sm">
                      <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="truncate">{t(project.locationKey)}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-gold font-bold text-xs md:text-sm hover:underline group-hover:translate-x-1 transition-transform flex-shrink-0">
                      <span>{t('projects.explore')}</span>
                      <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Fullscreen Overlay Detail Modal - Fully Mobile Optimized */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-slate-950/80 hover:bg-gold hover:text-slate-950 text-white rounded-full transition-colors backdrop-blur-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto flex-grow">
                {/* Hero / Slider Container */}
                <div className="aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] w-full relative bg-slate-950">
                  <img
                    src={activeProject.images[activeImgIndex]}
                    alt={t(activeProject.brandKey)}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Image Navigation */}
                  {activeProject.images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 bg-slate-950/80 hover:bg-gold text-white hover:text-slate-950 rounded-full transition-all duration-200 z-10"
                      >
                        <ChevronRight className="w-5 h-5 rotate-180" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-slate-950/80 hover:bg-gold text-white hover:text-slate-950 rounded-full transition-all duration-200 z-10"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Title & Tag */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <span className="bg-gold text-white font-bold px-2.5 py-0.5 rounded text-[10px] sm:text-xs mb-2 inline-block">
                      {activeProject.category === 'single' ? t('projects.category.1') : t('projects.category.2')}
                    </span>
                    <h2 className="text-xl sm:text-3xl font-bold text-white leading-tight">
                      {t(activeProject.brandKey)}
                    </h2>
                  </div>
                </div>

                {/* Info and Specifications Body */}
                <div className="p-5 sm:p-8">
                  {/* Grid Specs */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-500 block mb-1">{t('projects.location.label')}</span>
                      <div className="flex items-center gap-1 font-bold text-slate-800 text-xs sm:text-sm">
                        <Compass className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="truncate">{t(activeProject.locationKey)}</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-500 block mb-1">{t('projects.units.label')}</span>
                      <div className="flex items-center gap-1 font-bold text-slate-800 text-xs sm:text-sm">
                        <Building className="w-4 h-4 text-gold flex-shrink-0" />
                        <span>{activeProject.units}</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-500 block mb-1">{t('invest.calc.roi')}</span>
                      <div className="flex items-center gap-1 font-bold text-slate-800 text-xs sm:text-sm">
                        <Activity className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="text-emerald-500">{activeProject.roi}</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-500 block mb-1">{t('projects.status.label')}</span>
                      <span className="text-[9px] sm:text-xs font-bold px-2 py-0.5 bg-gold/15 text-gold border border-gold/30 rounded inline-block truncate max-w-full">
                        {t(activeProject.statusKey)}
                      </span>
                    </div>
                  </div>

                  {/* Overview Text */}
                  <div className="grid md:grid-cols-5 gap-8">
                    <div className="md:col-span-3">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
                        {isRTL ? 'نظرة عامة على المشروع' : 'Project Overview'}
                      </h4>
                      <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                        {t(activeProject.descKey)}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="md:col-span-2">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
                        {isRTL ? 'المواصفات الاستثنائية' : 'Premium Features'}
                      </h4>
                      <ul className="space-y-2.5">
                        {(isRTL ? activeProject.specs.ar : activeProject.specs.en).map((spec, i) => (
                          <li key={i} className="flex gap-2 text-xs sm:text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
