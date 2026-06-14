import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const posts = [
    {
      id: 1,
      titleKey: 'blog.1.title',
      descKey: 'blog.1.desc',
      readTime: isRTL ? '٤ دقائق قراءة' : '4 min read',
      badge: isRTL ? 'دراسات السوق' : 'Market Analysis'
    },
    {
      id: 2,
      titleKey: 'blog.2.title',
      descKey: 'blog.2.desc',
      readTime: isRTL ? '٣ دقائق قراءة' : '3 min read',
      badge: isRTL ? 'أخبار الشركة' : 'Press Release'
    },
    {
      id: 3,
      titleKey: 'blog.3.title',
      descKey: 'blog.3.desc',
      readTime: isRTL ? '٥ دقائق قراءة' : '5 min read',
      badge: isRTL ? 'ابتكار وتطوير' : 'Sustainability'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-slate-50 dark:bg-slate-900/40 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-widest uppercase text-sm block mb-3 font-sans"
          >
            {isRTL ? 'المقالات والتحليلات' : 'Insights & News'}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
          >
            {t('blog.subtitle')}
          </motion.h2>
          <div className="w-16 h-[2px] bg-gold-gradient mx-auto" />
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-gold/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div className="p-8">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4 font-sans">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span>{t('blog.date')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Badge */}
                <span className="inline-block bg-slate-100 dark:bg-slate-900 text-gold text-[10px] font-bold uppercase px-2.5 py-1 rounded-md mb-4 border border-slate-200 dark:border-slate-800">
                  {post.badge}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 leading-snug group-hover:text-gold transition-colors duration-300">
                  {t(post.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed line-clamp-3">
                  {t(post.descKey)}
                </p>
              </div>

              {/* Call to action footer */}
              <div className="px-8 pb-8 pt-4 border-t border-slate-100 dark:border-slate-900/50">
                <div className="flex items-center gap-1 text-gold font-bold text-xs group-hover:translate-x-1 transition-transform">
                  <span>{t('blog.readMore')}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
