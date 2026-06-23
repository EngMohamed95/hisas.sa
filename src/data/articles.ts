export interface ArticleContent {
  title: string;
  excerpt: string;
  badge: string;
  readTime: string;
  date: string;
  body: string[];
}

export interface Article {
  id: number;
  slug: string;
  image: string;
  ar: ArticleContent;
  en: ArticleContent;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: 'luxury-towers-vision-2030',
    image: '/media/project1_1.ef2b9d45d51c07165a83.jpg',
    ar: {
      title: 'مستقبل الأبراج الفاخرة في الخبر والدمام بالتماشي مع رؤية 2030',
      excerpt: 'تسليط الضوء على اتجاهات الاستثمار السكني الفاخر على الواجهات البحرية والطلب المتزايد من النخبة والمستثمرين الدوليين.',
      badge: 'دراسات السوق',
      readTime: '٥ دقائق قراءة',
      date: '١٤ يونيو ٢٠٢٦',
      body: [
        'تشهد مدن المنطقة الشرقية، وبشكل خاص الخبر والدمام، تحولاً متسارعاً في مفهوم السكن الفاخر. لم يعد الطلب مقتصراً على المساحات الكبيرة فقط، بل أصبح مرتبطاً بجودة الحياة، الإطلالة، الخصوصية، والخدمات المتكاملة.',
        'تنسجم هذه التحولات مع مستهدفات رؤية المملكة 2030 في تحسين جودة الحياة ورفع جاذبية المدن السعودية للاستثمار والسكن. وتأتي الأبراج الساحلية الفاخرة كأحد النماذج العقارية القادرة على الجمع بين القيمة الاستثمارية والتجربة السكنية الراقية.',
        'في حصص العقارية، نرى أن المشاريع المطلة على الواجهات البحرية تمثل فرصة نوعية للمستثمرين والباحثين عن نمط حياة متوازن. فالموقع الاستراتيجي، والتصميم المعماري، وإدارة المشروع باحترافية، كلها عناصر تصنع فارقاً حقيقياً في قيمة الأصل العقاري على المدى الطويل.'
      ]
    },
    en: {
      title: 'The Future of Luxury Towers in Al-Khobar and Dammam under Vision 2030',
      excerpt: 'Highlighting trends in luxury coastal residential investments and growing demand from local elites and global investors.',
      badge: 'Market Studies',
      readTime: '5 min read',
      date: 'June 14, 2026',
      body: [
        'The Eastern Province, especially Al-Khobar and Dammam, is witnessing a clear shift in the definition of luxury residential living. Demand is no longer driven by space alone, but by lifestyle quality, views, privacy, and integrated services.',
        'These trends align with Saudi Vision 2030 goals to enhance quality of life and raise the attractiveness of Saudi cities for living and investment. Luxury waterfront towers are a strong real estate model that combines investment value with refined residential experience.',
        'At HISAS Real Estate, we believe waterfront projects represent a distinctive opportunity for investors and residents seeking a balanced lifestyle. Strategic location, architectural design, and professional project governance all create lasting long-term asset value.'
      ]
    }
  },
  {
    id: 2,
    slug: 'wafi-off-plan-license',
    image: '/media/project1_2.c84732b8d920fc7e373c.jpg',
    ar: {
      title: 'برنامج وافي يمنح حصص العقارية رخصة البيع على الخارطة لمشروعها الساحلي الجديد',
      excerpt: 'خطوة تعزز مستوى الموثوقية والأمان المالي للمستثمرين والملاك في حجز وتملك الوحدات السكنية.',
      badge: 'أخبار الشركة',
      readTime: '٣ دقائق قراءة',
      date: '١٤ يونيو ٢٠٢٦',
      body: [
        'يمثل ترخيص البيع على الخارطة من برنامج وافي خطوة مهمة في مسار تطوير المشاريع السكنية، لأنه يمنح المشترين والمستثمرين مستوى أعلى من الشفافية والتنظيم وحماية التدفقات المالية.',
        'تلتزم حصص العقارية بإدارة مشاريعها وفق أطر تنظيمية واضحة، تشمل حسابات الضمان، المتابعة الفنية، والتقارير الدورية التي تعزز ثقة المستثمرين في مراحل التطوير المختلفة.',
        'هذا الترخيص لا يعكس فقط جاهزية المشروع من الناحية النظامية، بل يؤكد أيضاً حرص الشركة على تقديم تجربة تملك واستثمار أكثر أماناً واحترافية، بما يتماشى مع تطور السوق العقاري السعودي.'
      ]
    },
    en: {
      title: 'Wafi Program Grants HISAS Real Estate Off-Plan Sales License for New Coastal Project',
      excerpt: 'A key step reinforcing trust and financial security for early-stage investors booking premium residential units.',
      badge: 'Company News',
      readTime: '3 min read',
      date: 'June 14, 2026',
      body: [
        'Receiving an off-plan sales license from Wafi is an important milestone in residential project development. It gives buyers and investors stronger transparency, governance, and financial protection.',
        'HISAS Real Estate is committed to managing its developments under clear regulatory frameworks, including escrow accounts, technical monitoring, and periodic reporting that strengthen investor confidence.',
        'This license reflects not only regulatory readiness, but also the company’s commitment to delivering a safer and more professional ownership and investment experience in line with the evolution of the Saudi real estate market.'
      ]
    }
  },
  {
    id: 3,
    slug: 'sustainable-luxury-construction',
    image: '/media/project2_1.b7b422fe98293d6a3c2e.jpg',
    ar: {
      title: 'الاستدامة في التشييد: كيف ندمج التقنيات الصديقة للبيئة في أبراجنا الفاخرة',
      excerpt: 'دراسة تطبيقية حول استخدام المواد الذكية والأنظمة الموفرة للطاقة لخفض الانبعاثات وتكاليف التشغيل.',
      badge: 'ابتكار وتطوير',
      readTime: '٤ دقائق قراءة',
      date: '١٤ يونيو ٢٠٢٦',
      body: [
        'أصبحت الاستدامة جزءاً أساسياً من جودة المشاريع العقارية الحديثة، خصوصاً في الأبراج السكنية الفاخرة التي تتطلب كفاءة تشغيلية عالية وتجربة معيشية مريحة على مدار العام.',
        'يعتمد دمج التقنيات الصديقة للبيئة على اختيار مواد أكثر كفاءة، وأنظمة تكييف وإنارة موفرة للطاقة، وحلول ذكية تساعد على تقليل الهدر وتحسين إدارة المبنى بعد التشغيل.',
        'في حصص العقارية، لا ننظر للاستدامة كإضافة شكلية، بل كجزء من قيمة المشروع. فكل تحسين في كفاءة التشغيل ينعكس على راحة السكان، واستقرار التكاليف، وجاذبية الأصل العقاري للمستثمرين.'
      ]
    },
    en: {
      title: 'Sustainable Construction: Integrating Eco-Friendly Tech in Luxury Towers',
      excerpt: 'A case study on using smart materials and energy-efficient systems to reduce emissions and building lifecycle operational costs.',
      badge: 'Innovation',
      readTime: '4 min read',
      date: 'June 14, 2026',
      body: [
        'Sustainability has become a core part of modern real estate quality, especially in luxury residential towers that require operational efficiency and year-round living comfort.',
        'Eco-friendly construction depends on efficient material selection, energy-saving cooling and lighting systems, and smart solutions that reduce waste and improve building management after handover.',
        'At HISAS Real Estate, sustainability is not a cosmetic add-on. It is part of the project’s value. Every improvement in operational efficiency supports resident comfort, cost stability, and long-term investor appeal.'
      ]
    }
  }
];
