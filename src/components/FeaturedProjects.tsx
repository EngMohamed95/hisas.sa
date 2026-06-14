import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building, Activity, X, Compass, ChevronRight } from 'lucide-react';

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
}

export const FeaturedProjects: React.FC = () => {
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
      image: '/media/project1_1.ef2b9d45d51c07165a83.jpg',
      images: [
        '/media/project1_1.ef2b9d45d51c07165a83.jpg',
        '/media/project1_2.c84732b8d920fc7e373c.jpg',
        '/media/project1_3.efc7860b465b8a3c3c49.jpg'
      ],
      locationKey: 'projects.location.khobar',
      units: '180',
      roi: '18.4%',
      statusKey: 'projects.status.active'
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
      statusKey: 'projects.status.upcoming'
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
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/40 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-widest uppercase text-sm block mb-3"
          >
            {t('nav.projects')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
          >
            {t('projects.subtitle')}
          </motion.h2>
          <div className="w-16 h-[2px] bg-gold-gradient mx-auto mb-8" />

          {/* Filter Tabs */}
          <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
            {(['all', 'single', 'cluster'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  filter === type
                    ? 'bg-gold-gradient text-slate-900 shadow-lg'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-gold'
                }`}
              >
                {type === 'all' && t('projects.category.all')}
                {type === 'single' && t('projects.category.1')}
                {type === 'cluster' && t('projects.category.2')}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => handleOpenProject(project)}
              >
                {/* Image Container */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={t(project.brandKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Luxury tint overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-500" />
                  
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-slate-900/90 text-gold border border-gold/30 px-3 py-1 text-xs font-semibold uppercase rounded-md backdrop-blur-md">
                    {project.category === 'single' ? t('projects.category.1') : t('projects.category.2')}
                  </span>
                </div>

                {/* Card Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {t(project.brandKey)}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {t(project.descKey)}
                  </p>

                  <div className="flex flex-wrap items-center justify-between border-t border-slate-100 dark:border-slate-900 pt-5 gap-4">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs md:text-sm">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span>{t(project.locationKey)}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-gold font-bold text-xs md:text-sm hover:underline group-hover:translate-x-1 transition-transform">
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

      {/* Fullscreen Overlay Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-5xl bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-slate-950/80 hover:bg-gold hover:text-slate-950 text-white rounded-full transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto flex-grow">
                {/* Hero render inside modal with Carousel */}
                <div className="aspect-[21/9] w-full relative">
                  <img
                    src={activeProject.images[activeImgIndex]}
                    alt={t(activeProject.brandKey)}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Left & Right navigation buttons */}
                  {activeProject.images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-slate-950/80 hover:bg-gold text-white hover:text-slate-950 rounded-full transition-all duration-200 z-10"
                      >
                        <ChevronRight className="w-5 h-5 rotate-180" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-slate-950/80 hover:bg-gold text-white hover:text-slate-950 rounded-full transition-all duration-200 z-10"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-gold text-slate-950 font-bold px-3 py-1 rounded text-xs uppercase mb-2 inline-block">
                      {activeProject.category === 'single' ? t('projects.category.1') : t('projects.category.2')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                      {t(activeProject.brandKey)}
                    </h2>
                  </div>
                </div>

                {/* Specs Box */}
                <div className="p-6 md:p-8">
                  {/* Grid Specs */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                      <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">{t('projects.location.label')}</span>
                      <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200 text-sm">
                        <Compass className="w-4 h-4 text-gold" />
                        <span>{t(activeProject.locationKey)}</span>
                      </div>
                    </div>

                    <div className="bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                      <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">{t('projects.units.label')}</span>
                      <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200 text-sm">
                        <Building className="w-4 h-4 text-gold" />
                        <span>{activeProject.units}</span>
                      </div>
                    </div>

                    <div className="bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                      <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">{t('invest.calc.roi')}</span>
                      <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200 text-sm">
                        <Activity className="w-4 h-4 text-gold" />
                        <span className="text-emerald-500">{activeProject.roi}</span>
                      </div>
                    </div>

                    <div className="bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                      <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">{t('projects.status.label')}</span>
                      <span className="text-xs font-bold px-2 py-1 bg-gold/15 text-gold border border-gold/30 rounded inline-block">
                        {t(activeProject.statusKey)}
                      </span>
                    </div>
                  </div>

                  {/* Complete Copy */}
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
                    {isRTL ? 'نظرة عامة على المشروع' : 'Project Overview'}
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base mb-6">
                    {t(activeProject.descKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
