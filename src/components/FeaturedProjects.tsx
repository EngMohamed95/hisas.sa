import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Activity, Compass, ChevronRight } from 'lucide-react';

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
  logo?: string;
}

export const FeaturedProjects: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [filter, setFilter] = useState<'single' | 'cluster'>('single');
  const [activeImages, setActiveImages] = useState<Record<number, string>>({});

  const projectsList: Project[] = [
    {
      id: 1,
      category: 'single',
      brandKey: 'projects.brand.alvera',
      descKey: 'projects.brand.alvera.desc',
      image: '/images/narmi_1.jpeg',
      images: [
        '/images/narmi_1.jpeg',
        '/images/narmi_2.jpeg',
        '/images/narmi_3.jpeg'
      ],
      locationKey: 'projects.location.khobar',
      units: '180',
      roi: '15.7%',
      statusKey: 'projects.status.active'
    },
    {
      id: 2,
      category: 'cluster',
      brandKey: 'projects.brand.nexus',
      descKey: 'projects.brand.nexus.desc',
      image: '/images/h_square_1.jpeg',
      images: [
        '/images/h_square_1.jpeg',
        '/images/h_square_2.jpeg',
        '/images/h_square_3.jpeg',
        '/images/h_square_4.jpeg',
        '/images/h_square_5.jpeg',
        '/images/h_square_6.jpeg'
      ],
      locationKey: 'projects.location.riyadh',
      units: '570',
      roi: '22.8%',
      statusKey: 'projects.status.upcoming',
      logo: '/media/projectLogo2.6d1e741685f74dde03e9.png'
    }
  ];

  const filteredProjects = projectsList.filter(
    (p) => p.category === filter
  );

  return (
    <section id="projects" className="py-24 bg-slate-50 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-gold font-bold tracking-widest uppercase text-base md:text-lg block mb-4"
          >
            {t('nav.projects')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight"
          >
            {t('projects.subtitle')}
          </motion.h2>
          <div className="w-16 h-[2px] bg-gold-gradient mx-auto mb-8" />

          {/* Filter Tabs */}
          <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
            {(['single', 'cluster'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  filter === type
                    ? 'bg-gold-gradient text-white shadow-lg font-bold'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-gold'
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
                  className="grid lg:grid-cols-12 gap-8 lg:gap-12 bg-white leaf-shape border border-slate-200 p-6 md:p-10 shadow-lg relative items-center"
                >
                  {/* Left Column - Large Image Showcase (5 Columns) with Thumbnail Selector */}
                  <div className="lg:col-span-5 w-full flex flex-col gap-4">
                    <div className="w-full overflow-hidden relative leaf-shape group">
                      <div className="aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden relative bg-slate-950">
                        <img
                          src={currentImage}
                          alt={t(project.brandKey)}
                          className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-slate-950/25" />
                        
                        {/* Category Tag */}
                        <span className="absolute top-4 left-4 bg-slate-900/90 text-white border border-white/25 px-3 py-1 text-xs font-semibold uppercase rounded-md backdrop-blur-sm shadow-lg">
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

                  {/* Right Column - Project Content & Metrics (7 Columns) */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div>
                      {project.logo && (
                        <div className={`mb-4 h-12 flex items-center ${isRTL ? 'justify-end' : 'justify-start'}`}>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                      <div className="bg-slate-50 p-4 leaf-shape border border-slate-200 shadow-sm">
                        <span className="text-[10px] text-slate-500 block mb-1 uppercase font-semibold">{t('projects.location.label')}</span>
                        <div className="flex items-center gap-1.5 font-bold text-slate-800 text-xs sm:text-sm">
                          <Compass className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="min-w-0 break-words">{t(project.locationKey)}</span>
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
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-gold/15 text-gold border border-gold/30 rounded inline-block">
                          <span className="break-words">{t(project.statusKey)}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action CTA Button */}
                  <div className="border-t border-slate-100 pt-5 mt-4">
                    <button
                      onClick={() => {
                        const contactEl = document.querySelector('#contact');
                        if (contactEl) {
                          contactEl.scrollIntoView({ behavior: 'smooth' });
                          const messageTextarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
                          if (messageTextarea) {
                            messageTextarea.value = isRTL 
                              ? `أرغب في مناقشة فرصة الاستثمار في مشروع ${t(project.brandKey)}.`
                              : `I would like to discuss investing in ${t(project.brandKey)}.`;
                          }
                        }
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-gold-gradient text-white font-extrabold py-3.5 px-6 leaf-shape shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                    >
                      <span>{isRTL ? 'مناقشة فرص الاستثمار' : 'Discuss Investment Option'}</span>
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
    </section>
  );
};
