import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export const WhyChooseUs: React.FC = () => {
  const { isRTL } = useLanguage();

  const reasons = [
    {
      icon: '/media/whyChooseIcon1.50dc6ca687ab93e303fd253b7463f1a3.svg',
      text: isRTL ? 'خبرة عميقة في السوق العقاري السعودي.' : 'Deep expertise in the Saudi real estate market.'
    },
    {
      icon: '/media/whyChooseIcon2.f4c9c1c1b8f54a3954a5973bc6b857ed.svg',
      text: isRTL ? 'اختيار مواقع استراتيجية بعناية.' : 'Carefully selected strategic locations.'
    },
    {
      icon: '/media/whyChooseIcon3.115ee60c2497c8e92d829fef51fac32c.svg',
      text: isRTL ? 'التزام بمعايير عالية في التصميم والتنفيذ.' : 'High standards in design and execution.'
    },
    {
      icon: '/media/whyChooseIcon4.75200c53baf7379f6670a1285f29a5bd.svg',
      text: isRTL ? 'شراكات موثوقة مع أفضل الاستشاريين والمقاولين.' : 'Trusted partnerships with top consultants and contractors.'
    },
    {
      icon: '/media/whyChooseIcon5.1ee7c4b3ad229dc997f0e736e9597175.svg',
      text: isRTL ? 'تقديم فرص استثمارية مجدية للمستثمرين الأفراد والمؤسسات.' : 'Valuable investment opportunities for individuals and institutions.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-10 leading-normal tracking-[0.02em]"
          >
            {isRTL ? 'ماذا يميزنا؟' : 'What Sets Us Apart?'}
          </motion.h2>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="min-h-[258px] bg-white px-5 py-9 leaf-shape flex flex-col items-center justify-start"
            >
              {/* Icon Container */}
              <div className="w-24 h-24 rounded-full border border-[#8f806c] flex items-center justify-center mb-8 p-6">
                <img 
                  src={reason.icon} 
                  alt="" 
                  className="w-full h-full object-contain transition-all duration-300" 
                />
              </div>

              <p className="text-[#8f806c] text-lg leading-loose text-center max-w-[185px] mx-auto">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
