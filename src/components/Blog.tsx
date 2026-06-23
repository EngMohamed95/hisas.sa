import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { articles } from '../data/articles';

export const Blog: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="blog" className="py-24 bg-slate-50 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-gold font-bold tracking-widest uppercase text-lg md:text-xl block mb-5 font-sans"
          >
            {isRTL ? 'المقالات والتحليلات' : 'Insights & News'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-7 leading-normal"
          >
            {t('blog.subtitle')}
          </motion.h2>
          <div className="w-16 h-[2px] bg-gold-gradient mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((post, index) => {
            const content = isRTL ? post.ar : post.en;

            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white leaf-shape border border-slate-200 shadow-md hover:shadow-xl hover:border-gold/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-8 md:p-9">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-5 font-sans">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span>{content.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gold" />
                      <span>{content.readTime}</span>
                    </div>
                  </div>

                  <span className="inline-block bg-slate-50 text-gold text-xs font-bold uppercase px-3 py-1.5 rounded-md mb-5 border border-slate-200">
                    {content.badge}
                  </span>

                  <h3 className="text-2xl font-extrabold text-slate-900 mb-4 line-clamp-3 leading-normal group-hover:text-gold transition-colors duration-300">
                    {content.title}
                  </h3>

                  <p className="text-slate-600 text-base md:text-lg leading-loose line-clamp-3">
                    {content.excerpt}
                  </p>
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="px-8 md:px-9 pb-8 pt-5 border-t border-slate-100 flex items-center gap-2 text-gold font-extrabold text-base group-hover:gap-3 transition-all"
                >
                  <span>{t('blog.readMore')}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold-gradient text-white font-extrabold leaf-shape shadow-md hover:scale-[1.02] transition-transform"
          >
            {isRTL ? 'عرض كل المقالات' : 'View All Articles'}
          </Link>
        </div>
      </div>
    </section>
  );
};
