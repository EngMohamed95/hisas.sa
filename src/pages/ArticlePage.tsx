import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { articles } from '../data/articles';

export const ArticlePage: React.FC = () => {
  const { slug } = useParams();
  const { isRTL, language } = useLanguage();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            {isRTL ? 'المقال غير موجود' : 'Article Not Found'}
          </h1>
          <Link to="/blog" className="text-gold font-bold">
            {isRTL ? 'العودة إلى المقالات' : 'Back to Articles'}
          </Link>
        </div>
      </div>
    );
  }

  const content = isRTL ? article.ar : article.en;

  return (
    <article className="min-h-screen bg-slate-50">
      <Helmet>
        <html lang={language} />
        <title>{content.title} | HISAS Real Estate</title>
        <meta name="description" content={content.excerpt} />
      </Helmet>

      <section className="relative pt-36 pb-20 bg-slate-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url('${article.image}')` }}
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/25" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gold font-bold text-base mb-8"
          >
            <ArrowRight className={`w-4 h-4 ${isRTL ? '' : 'rotate-180'}`} />
            <span>{isRTL ? 'العودة إلى المقالات' : 'Back to Articles'}</span>
          </Link>

          <span className="inline-block bg-white/10 text-gold text-sm font-bold uppercase px-4 py-2 rounded-md mb-6 border border-gold/25">
            {content.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-normal mb-8">
            {content.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-slate-300 text-base font-sans">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gold" />
              {content.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gold" />
              {content.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white leaf-shape border border-slate-200 shadow-md p-8 md:p-12">
          <p className="text-xl md:text-2xl text-slate-700 leading-loose font-bold mb-10">
            {content.excerpt}
          </p>
          <div className="space-y-7">
            {content.body.map((paragraph, index) => (
              <p key={index} className="text-lg md:text-xl text-slate-700 leading-loose">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};
