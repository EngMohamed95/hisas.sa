import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    classification: 'investor',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert(isRTL ? 'يرجى تعبئة الحقول المطلوبة (الاسم، الجوال، البريد)' : 'Please fill required fields (Name, Phone, Email)');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Confetti burst
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#02464f', '#086E7B', '#011c20']
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        classification: 'investor',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-widest uppercase text-base md:text-lg block mb-4 font-sans"
          >
            {t('nav.contact')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight"
          >
            {t('contact.title')}
          </motion.h2>
          <div className="w-16 h-[2px] bg-gold-gradient mx-auto" />
        </div>

        {/* Contact Form and Details Layout */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Information & Socials Column */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-8 bg-gold/5 text-slate-800 leaf-shape border border-gold/25 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-gold/15 pb-3">
                {isRTL ? 'تفاصيل الاتصال الرسمية' : 'Official Contact Info'}
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 leaf-shape bg-gold/10 flex items-center justify-center text-gold border border-gold/20 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase tracking-wider">{t('info.phone')}</span>
                    <a href="tel:+966555625502" className="text-sm font-semibold font-sans text-slate-700 hover:text-gold transition-colors">
                      +966 55 562 5502
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 leaf-shape bg-gold/10 flex items-center justify-center text-gold border border-gold/20 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase tracking-wider">{t('info.email')}</span>
                    <a href="mailto:hisas.realestate@gmail.com" className="text-sm font-semibold font-sans text-slate-700 hover:text-gold transition-colors">
                      hisas.realestate@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 leaf-shape bg-gold/10 flex items-center justify-center text-gold border border-gold/20 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase tracking-wider">{isRTL ? 'العنوان الرئيسي' : 'Headquarters'}</span>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      {t('info.address.desc')}
                    </p>
                  </div>
                </div>

                {/* CR */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 leaf-shape bg-gold/10 flex items-center justify-center text-gold border border-gold/20 flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase tracking-wider">{t('info.cr')}</span>
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed font-sans">
                      7035818439
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Interactive HQ Map */}
            <div className="aspect-[4/3] leaf-shape border border-slate-200 bg-white p-4 relative overflow-hidden group shadow-md">
              <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative">
                  <span className="absolute -inset-3 rounded-full bg-gold/30 animate-ping" />
                  <MapPin className="w-10 h-10 text-gold drop-shadow-lg" />
                </div>
                <span className="bg-slate-800 text-white text-[10px] font-bold py-1.5 px-3 rounded shadow-md mt-3 whitespace-nowrap">
                  {isRTL ? 'موقع مكاتب حصص' : 'HISAS Executive Offices'}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 text-[10px] text-slate-500 font-sans">
                Riyadh, An Nakheel Dist.
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 p-8 bg-white border border-slate-200 leaf-shape shadow-md"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              {isRTL ? 'إرسال طلب استفسار' : 'Submit Inquiry Request'}
            </h3>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 text-center bg-emerald-500/10 border border-emerald-500/30 leaf-shape"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {isRTL ? 'تم الإرسال بنجاح' : 'Submitted Successfully'}
                  </h4>
                  <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed">
                    {t('contact.success')}
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 px-6 py-2.5 bg-slate-900 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                  >
                    {isRTL ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                  </button>
                </motion.div>
              ) : (
                <motion.form onSubmit={handleSubmit} className="space-y-6">
                  {/* Classification Select */}
                  <div>
                    <label className="text-xs text-slate-500 block mb-2 uppercase tracking-wider">
                      {t('contact.classification')}
                    </label>
                    <select
                      name="classification"
                      value={formData.classification}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-gold"
                    >
                      <option value="investor">{t('contact.classification.investor')}</option>
                      <option value="buyer">{t('contact.classification.buyer')}</option>
                      <option value="partner">{t('contact.classification.partner')}</option>
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="text-xs text-slate-500 block mb-2 uppercase tracking-wider">
                      {t('contact.name')} *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.name.placeholder')}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-gold"
                    />
                  </div>

                  {/* Contact Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="text-xs text-slate-500 block mb-2 uppercase tracking-wider">
                        {t('contact.email')} *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.email.placeholder')}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-gold"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-xs text-slate-500 block mb-2 uppercase tracking-wider">
                        {t('contact.phone')} *
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t('contact.phone.placeholder')}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-gold text-left font-sans"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs text-slate-500 block mb-2 uppercase tracking-wider">
                      {t('contact.message')}
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.message.placeholder')}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-gold"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gold-gradient text-white font-extrabold py-4 leaf-shape shadow-xl disabled:opacity-50 hover:scale-[1.01] transition-transform cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t('contact.send')}</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
