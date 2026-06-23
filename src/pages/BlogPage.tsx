import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { articles } from '../data/articles';

export const BlogPage: React.FC = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO titleKey="blog.title" descriptionKey="blog.subtitle" />

      <section
        className="relative pt-36 pb-20 bg-slate-950 text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/riyadh_skyline_luxury.png')" }}
      >
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/35" />
        <div className={`max-w-7xl mx-auto px-6 relative z-10 ${isRTL ? 'text-right' : 'text-left'}`}>
          <span className="text-white font-bold tracking-widest uppercase text-base md:text-lg block mb-4">
            {isRTL ? 'المقالات والتحليلات' : 'Insights & News'}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-normal">
            {isRTL ? 'آخر أخبار حصص العقارية' : 'Latest HISAS Real Estate Articles'}
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => {
            const content = isRTL ? article.ar : article.en;
            return (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.12, duration: 0.55 }}
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

                  <h2 className="text-2xl font-extrabold text-slate-900 mb-4 leading-normal group-hover:text-gold transition-colors duration-300">
                    {content.title}
                  </h2>

                  <p className="text-slate-600 text-base md:text-lg leading-loose line-clamp-4">
                    {content.excerpt}
                  </p>
                </div>

                <Link
                  to={`/blog/${article.slug}`}
                  className="px-8 md:px-9 pb-8 pt-5 border-t border-slate-100 flex items-center gap-2 text-gold font-extrabold text-base hover:gap-3 transition-all"
                >
                  <span>{isRTL ? 'اقرأ المقال بالكامل' : 'Read Full Article'}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
