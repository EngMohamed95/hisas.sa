import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.whyUs': 'لماذا حصص',
    'nav.projects': 'مشاريعنا',
    'nav.investment': 'الاستثمار',
    'nav.blog': 'المقالات',
    'nav.contact': 'تواصل معنا',
    'nav.downloadProfile': 'تحميل الملف التعريفي',
    
    // Hero
    'hero.title': 'نطور بثقة',
    'hero.subtitle': 'شريكك الاستراتيجي في صياغة مستقبل التطوير العقاري الفاخر والأبراج السكنية النوعية بالمملكة العربية السعودية.',
    'hero.cta': 'استكشف الفرص الاستثمارية',
    'hero.secondaryCta': 'تواصل معنا الآن',
    'hero.stat.units': 'وحدة سكنية فاخرة',
    'hero.stat.projects': 'مشاريع تطويرية',
    'hero.stat.investors': 'مستثمرين',
    'hero.stat.experience': 'عاماً من التميز العقاري',

    // Vision Leader
    'vision.leader.title': 'برؤية قائد نبني ما يستحقه الوطن',
    'vision.leader.text1': 'في حصص العقارية، نستمد إلهامنا وعزمنا من رؤية سمو ولي العهد الأمير محمد بن سلمان – حفظه الله – الذي جعل صناعة المستقبل نهجاً، والطموح واجباً، والوطن في القمة حيث يجب أن يكون. برؤيته تحوّل المستحيل إلى منجز، والحلم إلى أرقام وخطط تُنفّذ على أرض الواقع.',
    'vision.leader.text2': 'ومن هذا الإيمان، انطلقت حصص بروح رؤية 2030: شريكةً في صناعة النهضة، لا مجرد شاهدة عليها. نُشيّد أبراجاً تعكس هويتنا وقيمنا، وتنطق بفخامة رؤيتنا، وتبقى أثراً يروي من نحن ويعبّر عن وطن لا يعرف التوقف. فنحن نؤمن كما يؤمن قائد الرؤية أن: "طموحنا عنان السماء".',

    // About
    'about.title': 'عن الشركة',
    'about.subtitle': 'حصص العقارية.. ريادة في تطوير الأبراج الفاخرة',
    'about.text': 'حصص العقارية هي مطور عقاري سعودي رائد متخصص في تشييد الأبراج السكنية الفاخرة والمشاريع الساحلية ذات الإطلالات البحرية الخلابة. نسعى لخلق قيمة عقارية مستدامة لعملائنا وعوائد استثمارية استثنائية لشركائنا من خلال تبني أعلى المعايير الهندسية والجمالية. تلتزم الشركة بتقديم حلول تطويرية متكاملة تنسجم كلياً مع مستهدفات التنمية العمرانية الشاملة في ضوء رؤية المملكة 2030.',
    'about.map': 'تغطية جغرافية استراتيجية ممتدة بين العاصمة الرياض والمنطقة الشرقية (الخبر).',
    'about.vision.title': 'رؤيتنا',
    'about.vision.text': 'أن نكون الخيار الأول والاسم الموثوق في المملكة لتطوير الأبراج السكنية الساحلية الفاخرة، وصناعة معالم معمارية تدمج الفخامة بجودة الحياة.',
    'about.mission.title': 'رسالتنا',
    'about.mission.text': 'تقديم مشاريع سكنية فاخرة تفوق تطلعات المستثمرين والعملاء، عبر بيئة عمل منظمة واحترافية ترتكز على الجودة، والابتكار، والالتزام المطلق بالشفافية والبيئة المستدامة.',

    // Services
    'services.title': 'خدماتنا الاستراتيجية',
    'services.subtitle': 'حلول تطويرية متكاملة تغطي كامل دورة حياة المشروع العقاري',
    'services.1.title': 'تطوير المشاريع العقارية',
    'services.1.desc': 'ندير هندسة وتشييد المشاريع السكنية الفاخرة من المفهوم الأولي ودراسات الجدوى المالية حتى التسليم النهائي للملاك.',
    'services.2.title': 'إدارة مراحل التطوير',
    'services.2.desc': 'إشراف هندسي وقانوني متكامل يضمن استخراج التصاريح، إدارة المصممين، مراقبة الجودة، وضبط الميزانيات والجداول الزمنية للتنفيذ.',
    'services.3.title': 'البيع على الخارطة (وافي)',
    'services.3.desc': 'طرح المشاريع السكنية للتملك والاستثمار المبكر بترخيص رسمي من برنامج "وافي" وتحت تنظيمات الهيئة العامة للعقار.',

    // Statistics Section
    'stats.title': 'حصص في أرقام',
    'stats.subtitle': 'حقائق تؤكد مكانتنا ومستوى الثقة التي نتمتع بها في السوق السعودي',
    'stats.units.count': '750+',
    'stats.projects.count': '7+',
    'stats.investors.count': '5+',
    'stats.value.count': '1.8B+',
    'stats.value.label': 'قيمة المحفظة العقارية (ريال)',

    // CEO Message
    'ceo.title': 'كلمة الرئيس التنفيذي',
    'ceo.name': 'أ. مشعل بن صالح الحواس',
    'ceo.text': 'في حصص العقارية، نؤمن عميقاً أن العقار ليس مجرد جدران خرسانية تُبنى للبيع، بل هو قيمة مستدامة تُشيد، وثقة راسخة تُزرع، وتجربة معيشية استثنائية تُحترم. تنطلق رؤيتنا من فهم دقيق لاحتياجات السوق العقاري الفاخر في المملكة، وتصميم فرص استثمارية فريدة لشركائنا. نعدكم بأن تكون مشاريعنا القادمة نموذجاً يحتذى به في التميز الهندسي، وأن تظل الشفافية والصدق معاييرنا الثابتة.',

    // Hero Slides
    'hero.slide1.title': 'نطور بثقة',
    'hero.slide1.highlight': 'أبراج سكنية فاخرة',
    'hero.slide1.subtitle': 'شريكك الاستراتيجي في صياغة مستقبل التطوير العقاري الفاخر بالمملكة العربية السعودية.',
    'hero.slide2.title': 'إطلالات بحرية ساحرة',
    'hero.slide2.highlight': 'مشروع الخبر نارمي',
    'hero.slide2.subtitle': 'مشروع ساحلي فاخر على واجهة الخبر البحرية يلبي تطلعات النخبة والمستثمرين.',
    'hero.slide3.title': 'بيئة معيشية ذكية',
    'hero.slide3.highlight': 'مشروع H Square الرياض',
    'hero.slide3.subtitle': 'مجمع سكني ذكي متكامل الخدمات في شمال الرياض بالتماشي مع رؤية 2030.',

    // Why Choose Us
    'whyUs.title': 'لماذا حصص العقارية؟',
    'whyUs.subtitle': 'مقومات التميز التي تجعلنا الخيار الأول للمستثمرين والنخبة',
    'whyUs.1.title': 'خبرة عقارية عميقة',
    'whyUs.1.desc': 'فهم عميق ودراسة مستمرة لتغيرات واتجاهات السوق العقاري السعودي الاستثماري.',
    'whyUs.2.title': 'مواقع استراتيجية نادرة',
    'whyUs.2.desc': 'نركز استثماراتنا في الأراضي ذات الأهمية العالية والمطلة مباشرة على الواجهات البحرية والمحاور الرئيسية.',
    'whyUs.3.title': 'معايير جودة صارمة',
    'whyUs.3.desc': 'نطبق أدوات رقابة جودة عالمية في اختيار المواد، أساليب التشييد، والتشطيبات الفاخرة.',
    'whyUs.4.title': 'تحالفات موثوقة',
    'whyUs.4.desc': 'شراكات قوية مع أبرز بيوت التصميم العالمية والاستشاريين الهندسيين وشركات المقاولات المصنفة.',
    'whyUs.5.title': 'عائد استثماري مستهدف',
    'whyUs.5.desc': 'تصميم هياكل مالية استثمارية مدروسة تحقق للمستثمرين عوائد رأسمالية وتشغيلية مجدية.',

    // Projects
    'projects.title': 'مشاريعنا الريادية',
    'projects.subtitle': 'أيقونات معمارية فاخرة تعيد رسم ملامح السكن والاستثمار الحديث',
    'projects.category.all': 'كل المشاريع',
    'projects.category.1': 'مشروع نارمي',
    'projects.category.2': 'مشروع H Square',
    'projects.brand.alvera': 'مشروع نارمي (Narmi Project)',
    'projects.brand.alvera.desc': 'مشروع نارمي يعيد صياغة السكن الساحلي الفاخر على كورنيش الخبر، حيث يلتقي التصميم الهندسي المبتكر بالإطلالة البحرية المفتوحة لخلق بيئة معيشية استثنائية للنخبة.',
    'projects.brand.nexus': 'مشروع H Square (H Square Project)',
    'projects.brand.nexus.desc': 'مشروع H Square يمثل نبض الفخامة في قلب العاصمة الرياض، مجمع سكني ذكي متكامل الخدمات يدمج بين الخصوصية التامة وجودة الحياة العصرية بالتماشي مع رؤية المملكة 2030.',
    'projects.explore': 'عرض تفاصيل المشروع',
    'projects.location.label': 'الموقع:',
    'projects.location.khobar': 'واجهة الخبر البحرية',
    'projects.location.riyadh': 'شمال الرياض - حي النخيل',
    'projects.units.label': 'عدد الوحدات:',
    'projects.status.label': 'الحالة:',
    'projects.status.active': 'متاح للحجز والاستثمار',
    'projects.status.upcoming': 'قريباً',

    // Partners
    'partners.title': 'شركاء النجاح الاستراتيجيين',
    'partners.subtitle': 'نتحالف مع كبرى الجهات الحكومية والشركات القيادية لتحقيق رؤيتنا التنموية',
    'partners.text': 'نؤمن في حصص العقارية أن النجاح المستدام هو ثمرة تحالفات قوية. نفخر بالعمل جنباً إلى جنب مع أجهزة حكومية وشركات تطوير رائدة تدعم مسيرتنا في إثراء المشهد العمراني بالمملكة.',

    // Investment Opportunity Calculator
    'invest.title': 'بوابة الفرص الاستثمارية',
    'invest.subtitle': 'احسب عوائدك المتوقعة مع الاستثمار في شركة حصص العقارية',
    'invest.calc.label': 'قيمة الاستثمار المستهدف (ريال سعودي)',
    'invest.calc.roi': 'معدل العائد الداخلي المتوقع (IRR)',
    'invest.calc.duration': 'مدة الاستثمار المتوقعة',
    'invest.calc.profit': 'الأرباح الرأسمالية المتوقعة',
    'invest.calc.total': 'إجمالي التدفقات النقدية عند التصفية',
    'invest.calc.btn': 'طلب مناقشة هيكلة الفرصة الاستثمارية',
    'invest.stat.roi': '18% - 24%',
    'invest.stat.roi.label': 'العوائد السنوية المستهدفة بمشاريعنا الساحلية',

    // Blog / News
    'blog.title': 'المركز الإعلامي وعقارات ورؤى',
    'blog.subtitle': 'آخر أخبار حصص العقارية',
    'blog.readMore': 'اقرأ المقال بالكامل',
    'blog.date': '١٤ يونيو ٢٠٢٦',
    'blog.1.title': 'مستقبل الأبراج الفاخرة في الخبر والدمام بالتماشي مع رؤية 2030',
    'blog.1.desc': 'تسليط الضوء على اتجاهات الاستثمار السكني الفاخر على الواجهات البحرية والطلب المتزايد من النخبة والمستثمرين الدوليين.',
    'blog.2.title': 'برنامج وافي يمنح حصص العقارية رخصة البيع على الخارطة لمشروعها الساحلي الجديد',
    'blog.2.desc': 'خطوة تعزز مستوى الموثوقية والأمان المالي للمستثمرين والملاك في حجز وتملك الوحدات السكنية.',
    'blog.3.title': 'الاستدامة في التشييد: كيف ندمج التقنيات الصديقة للبيئة في أبراجنا الفاخرة',
    'blog.3.desc': 'دراسة تطبيقية حول استخدام المواد الذكية والأنظمة الموفرة للطاقة لخفض الانبعاثات وتكاليف التشغيل.',
    
    // Contact
    'contact.title': 'تواصل معنا وابدأ نقاشاً استثمارياً',
    'contact.subtitle': 'فريقنا المتخصص مستعد لإجابة استفسارات الملاك والمستثمرين وتقديم استشارات مخصصة',
    'contact.classification': 'تصنيف التواصل المفضل',
    'contact.classification.investor': 'مستثمر عقاري مهتم بالفرص',
    'contact.classification.buyer': 'مشتري مهتم بالوحدات السكنية',
    'contact.classification.partner': 'شراكة تطويرية / مقاولات',
    'contact.name': 'الاسم الكامل',
    'contact.name.placeholder': 'أدخل اسمك الكريم هنا',
    'contact.email': 'البريد الإلكتروني',
    'contact.email.placeholder': 'example@domain.com',
    'contact.phone': 'رقم الهاتف الجوال',
    'contact.phone.placeholder': '5xxxxxxx',
    'contact.message': 'تفاصيل طلبك أو رسالتك',
    'contact.message.placeholder': 'يرجى كتابة تفاصيل استفسارك أو رغبتك الاستثمارية هنا...',
    'contact.send': 'إرسال الطلب بشكل آمن',
    'contact.success': 'تم إرسال رسالتك بنجاح! سيتصل بك مدير الاستثمار الخاص بك خلال 24 ساعة.',
    
    // Address Info
    'info.address.title': 'المقر الرئيسي للشركة',
    'info.address.desc': 'المملكة العربية السعودية، الرياض، حي النخيل، طريق الملك عبدالله، مكاتب حصص العقارية',
    'info.phone': 'رقم التواصل الموحد',
    'info.email': 'البريد الإلكتروني الرسمي',
    'info.cr': 'السجل التجاري',
    'info.socials': 'حسابات التواصل الرسمي',

    // Misc / Global
    'misc.darkMode': 'الوضع المظلم',
    'misc.lightMode': 'الوضع المضيء',
    'misc.whatsapp': 'تواصل مباشر عبر الواتساب',
    'misc.backToTop': 'العودة للأعلى',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.whyUs': 'Why HISAS',
    'nav.projects': 'Our Projects',
    'nav.investment': 'Investment',
    'nav.blog': 'Articles',
    'nav.contact': 'Contact Us',
    'nav.downloadProfile': 'Download Profile',
    
    // Hero
    'hero.title': 'We Develop with Confidence',
    'hero.subtitle': 'Your strategic partner in shaping the future of luxury residential development and iconic towers in the Kingdom of Saudi Arabia.',
    'hero.cta': 'Explore Investment Opportunities',
    'hero.secondaryCta': 'Contact Us Now',
    'hero.stat.units': 'Luxury Residential Units',
    'hero.stat.projects': 'Development Projects',
    'hero.stat.investors': 'Investors',
    'hero.stat.experience': 'Years of Real Estate Excellence',

    // Vision Leader
    'vision.leader.title': 'Building what our Nation deserves, with the Vision of a Leader',
    'vision.leader.text1': 'At HISAS Real Estate, we derive our inspiration and determination from the vision of His Royal Highness Crown Prince Mohammed bin Salman - may God protect him - who made building the future an approach, ambition a duty, and the nation at the peak where it belongs. With his vision, the impossible turned into achievements, and dreams into figures and plans executed on the ground.',
    'vision.leader.text2': 'From this belief, HISAS launched in the spirit of Vision 2030: a partner in shaping the renaissance, not just a witness to it. We build towers that reflect our identity and values, speak to the luxury of our vision, and remain a legacy that tells who we are and represents a nation that knows no stopping. We believe, as the leader of the vision believes, that: "Our ambition is the sky."',

    // About
    'about.title': 'About Company',
    'about.subtitle': 'HISAS Real Estate.. Leading Luxury Tower Development',
    'about.text': 'HISAS Real Estate is a premier Saudi developer specialized in crafting luxury high-rise residential towers and coastal projects with stunning waterfront views. We seek to generate sustainable property value for our clients and exceptional capital gains for our investment partners by adhering to top-tier structural and aesthetic standards. The company is committed to providing integrated development solutions that align fully with the comprehensive urban development goals of Saudi Vision 2030.',
    'about.map': 'Strategic geographic footprint spanning the capital Riyadh and the Eastern Province (Al-Khobar).',
    'about.vision.title': 'Our Vision',
    'about.vision.text': 'To be the premier choice and trusted developer for luxury coastal residential towers in the Kingdom, building landmarks that fuse architectural elegance with quality of life.',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'To deliver premium residential projects that exceed the expectations of both clients and investors, through a highly professional, organized work environment focusing on quality, design innovation, and absolute commitment to transparency and sustainability.',

    // Services
    'services.title': 'Strategic Services',
    'services.subtitle': 'Integrated solutions covering the entire lifecycle of real estate development',
    'services.1.title': 'Real Estate Project Development',
    'services.1.desc': 'We manage the engineering and construction of luxury residential projects from initial concept and financial feasibility studies to final keys delivery.',
    'services.2.title': 'Development Phase Management',
    'services.2.desc': 'Full engineering, legal, and operational oversight, covering permits, designer coordination, quality control, cost management, and scheduling.',
    'services.3.title': 'Off-Plan Sales (Wafi)',
    'services.3.desc': 'Offering premium residential units for early ownership and investment under official licensing from the "Wafi" program and Real Estate General Authority.',

    // Statistics Section
    'stats.title': 'HISAS in Numbers',
    'stats.subtitle': 'Concrete figures affirming our position and the trust we command in the Saudi market',
    'stats.units.count': '750+',
    'stats.projects.count': '7+',
    'stats.investors.count': '5+',
    'stats.value.count': '1.8B+',
    'stats.value.label': 'Real Estate Portfolio Value (SAR)',

    // CEO Message
    'ceo.title': 'CEO Message',
    'ceo.name': 'Mr. Meshal bin Saleh Al-Hawas',
    'ceo.text': 'At HISAS Real Estate, we deeply believe that real estate is not merely concrete walls built for sale, but a lasting value erected, a firm trust planted, and an exceptional living experience respected. Our vision originates from a precise understanding of the luxury market needs in the Kingdom, creating highly-rewarding investment structures for our partners. We promise you that our upcoming projects will stand as architectural benchmarks, and that transparency and integrity will remain our unchanging standards.',

    // Hero Slides
    'hero.slide1.title': 'We Develop with Confidence',
    'hero.slide1.highlight': 'Luxury Residential Towers',
    'hero.slide1.subtitle': 'Your strategic partner in shaping the future of luxury real estate development in Saudi Arabia.',
    'hero.slide2.title': 'Enchanting Waterfront Views',
    'hero.slide2.highlight': 'Narme Project Khobar',
    'hero.slide2.subtitle': 'Bold high-rise architectural icon on Al-Khobar waterfront tailored for elites and investors.',
    'hero.slide3.title': 'Smart Living Environments',
    'hero.slide3.highlight': 'H Square Riyadh',
    'hero.slide3.subtitle': 'Integrated-service smart residential complex in North Riyadh aligning with Vision 2030.',

    // Why Choose Us
    'whyUs.title': 'Why HISAS Real Estate?',
    'whyUs.subtitle': 'Elements of excellence that make us the premium developer for investors and elites',
    'whyUs.1.title': 'Deep Market Expertise',
    'whyUs.1.desc': 'A thorough understanding and continuous study of the shifts and trends in the Saudi investment real estate market.',
    'whyUs.2.title': 'Strategic Prime Locations',
    'whyUs.2.desc': 'We focus our investments in premium high-value land parcels directly overlooking waterfronts and main arterial routes.',
    'whyUs.3.title': 'Rigorous Quality Standards',
    'whyUs.3.desc': 'We apply global quality control tools in material selection, construction techniques, and premium luxury finishes.',
    'whyUs.4.title': 'Trusted Alliances',
    'whyUs.4.desc': 'Strong partnerships with leading global design houses, engineering consultants, and top-tier classified contractors.',
    'whyUs.5.title': 'Targeted Financial Returns',
    'whyUs.5.desc': 'Designing carefully studied investment vehicles that achieve lucrative capital appreciation and operating yields for investors.',

    // Projects
    'projects.title': 'Our Pioneering Projects',
    'projects.subtitle': 'Luxury architectural icons reshaping the landscape of modern living and investment',
    'projects.category.all': 'All Projects',
    'projects.category.1': 'Narmi Project',
    'projects.category.2': 'H Square Project',
    'projects.brand.alvera': 'Narmi Project',
    'projects.brand.alvera.desc': 'Narmi Project redefines luxury coastal living on Al-Khobar Corniche, where innovative engineering design meets open waterfront views to create an exceptional living environment for elites.',
    'projects.brand.nexus': 'H Square Project',
    'projects.brand.nexus.desc': 'H Square Project represents the heartbeat of luxury in the center of Riyadh, an integrated smart residential complex combining absolute privacy with modern quality of life in line with Saudi Vision 2030.',
    'projects.explore': 'Explore Project Details',
    'projects.location.label': 'Location:',
    'projects.location.khobar': 'Al-Khobar Waterfront',
    'projects.location.riyadh': 'North Riyadh - Al Nakheel',
    'projects.units.label': 'Units:',
    'projects.status.label': 'Status:',
    'projects.status.active': 'Open for Reservations',
    'projects.status.upcoming': 'Upcoming',

    // Partners
    'partners.title': 'Strategic Success Partners',
    'partners.subtitle': 'Partnering with major government authorities and leading developers to achieve our developmental vision',
    'partners.text': 'At HISAS Real Estate, we believe that sustainable success is the result of strong alliances. We take pride in working alongside key government regulators and master developers who support our path to enrich the Kingdom\'s urban landscape.',

    // Investment Opportunity Calculator
    'invest.title': 'Investment Gateway',
    'invest.subtitle': 'Calculate your target yields with investment in HISAS Real Estate',
    'invest.calc.label': 'Target Investment Amount (SAR)',
    'invest.calc.roi': 'Expected Internal Rate of Return (IRR)',
    'invest.calc.duration': 'Expected Investment Period',
    'invest.calc.profit': 'Expected Capital Profit',
    'invest.calc.total': 'Total Exit Cash Flows',
    'invest.calc.btn': 'Request Discussion on Investment Structuring',
    'invest.stat.roi': '18% - 24%',
    'invest.stat.roi.label': 'Targeted annual returns on our coastal waterfront projects',

    // Blog / News
    'blog.title': 'Media Center & Insights',
    'blog.subtitle': 'Latest updates from HISAS Real Estate',
    'blog.readMore': 'Read Full Article',
    'blog.date': 'June 14, 2026',
    'blog.1.title': 'The Future of Luxury Towers in Al-Khobar & Dammam under Vision 2030',
    'blog.1.desc': 'Highlighting trends in luxury coastal residential investments and growing demand from local elites and global investors.',
    'blog.2.title': 'Wafi Program Grants HISAS Real Estate Off-Plan Sales License for New Coastal Project',
    'blog.2.desc': 'A key step reinforcing trust and financial security for early-stage investors booking premium residential units.',
    'blog.3.title': 'Sustainable Construction: Integrating Eco-Friendly Tech in Luxury Towers',
    'blog.3.desc': 'A case study on using smart materials and energy-efficient systems to reduce emissions and building lifecycle operational costs.',

    // Contact
    'contact.title': 'Connect & Start an Investment Conversation',
    'contact.subtitle': 'Our expert team is ready to answer inquiries from owners and investors and deliver bespoke advice',
    'contact.classification': 'Preferred Contact Category',
    'contact.classification.investor': 'Real Estate Investor looking for opportunities',
    'contact.classification.buyer': 'Buyer interested in residential units',
    'contact.classification.partner': 'Development Partner / General Contractor',
    'contact.name': 'Full Name',
    'contact.name.placeholder': 'Enter your full name',
    'contact.email': 'Email Address',
    'contact.email.placeholder': 'example@domain.com',
    'contact.phone': 'Mobile Phone Number',
    'contact.phone.placeholder': '5xxxxxxx',
    'contact.message': 'Request or Message Details',
    'contact.message.placeholder': 'Please write down your investment details or inquiries here...',
    'contact.send': 'Send Secure Request',
    'contact.success': 'Your message has been successfully submitted! Your dedicated investment advisor will contact you within 24 hours.',

    // Address Info
    'info.address.title': 'Corporate Headquarters',
    'info.address.desc': 'King Abdullah Road, An Nakheel Dist., Riyadh, Kingdom of Saudi Arabia, HISAS Real Estate Executive Offices',
    'info.phone': 'Unified Contact Number',
    'info.email': 'Official Corporate Email',
    'info.cr': 'Commercial Registration',
    'info.socials': 'Official Social Media Accounts',

    // Misc / Global
    'misc.darkMode': 'Dark Mode',
    'misc.lightMode': 'Light Mode',
    'misc.whatsapp': 'Chat via WhatsApp',
    'misc.backToTop': 'Back To Top',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    if (saved === 'ar' || saved === 'en') return saved;
    return 'ar'; // Default is Arabic as a Saudi firm
  });

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', language);
    if (language === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.classList.add('rtl');
      html.classList.remove('ltr');
    } else {
      html.setAttribute('dir', 'ltr');
      html.classList.add('ltr');
      html.classList.remove('rtl');
    }
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['ar'][key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
