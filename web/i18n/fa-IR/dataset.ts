const translation = {
  knowledge: 'دانش',
  documentCount: ' سند',
  wordCount: ' هزار کلمه',
  appCount: ' برنامه‌های متصل',
  createDataset: 'ایجاد دانش',
  createDatasetIntro: 'داده‌های متنی خود را وارد کنید یا از طریق Webhook در زمان واقعی برای بهبود زمینه LLM بنویسید.',
  deleteDatasetConfirmTitle: 'حذف این دانش؟',
  deleteDatasetConfirmContent:
    'حذف دانش غیر قابل برگشت است. کاربران دیگر نمی‌توانند به دانش شما دسترسی پیدا کنند و تمام تنظیمات درخواست و گزارش‌ها به طور دائم حذف خواهند شد.',
  datasetUsedByApp: 'دانش توسط برخی برنامه‌ها استفاده می‌شود. برنامه‌ها دیگر نمی‌توانند از این دانش استفاده کنند و تمام تنظیمات درخواست و گزارش‌ها به طور دائم حذف خواهند شد.',
  datasetDeleted: 'دانش حذف شد',
  datasetDeleteFailed: 'حذف دانش ناموفق بود',
  didYouKnow: 'آیا می‌دانستید؟',
  intro1: 'دانش می‌تواند در برنامه AgentBase ',
  intro2: 'به عنوان یک زمینه',
  intro3: 'ادغام شود',
  intro4: 'یا می‌تواند ',
  intro5: 'به عنوان یک افزونه مستقل ChatGPT برای انتشار',
  intro6: 'ایجاد شود',
  unavailable: 'در دسترس نیست',
  unavailableTip: 'مدل جاسازی در دسترس نیست، نیاز است مدل جاسازی پیش‌فرض پیکربندی شود',
  datasets: 'دانش',
  datasetsApi: 'دسترسی API',
  retrieval: {
    semantic_search: {
      title: 'جستجوی برداری',
      description: 'تولید جاسازی‌های جستجو و جستجوی بخش متنی که بیشترین شباهت را به نمایش برداری آن دارد.',
    },
    full_text_search: {
      title: 'جستجوی متن کامل',
      description: 'فهرست کردن تمام اصطلاحات در سند، به کاربران اجازه می‌دهد هر اصطلاحی را جستجو کنند و بخش متنی مربوط به آن اصطلاحات را بازیابی کنند.',
    },
    hybrid_search: {
      title: 'جستجوی هیبریدی',
      description: 'جستجوی متن کامل و برداری را همزمان اجرا می‌کند، دوباره رتبه‌بندی می‌کند تا بهترین تطابق برای درخواست کاربر انتخاب شود. کاربران می‌توانند وزن‌ها را تنظیم کنند یا به یک مدل دوباره رتبه‌بندی تنظیم کنند.',
      recommend: 'توصیه',
    },
    invertedIndex: {
      title: 'فهرست معکوس',
      description: 'فهرست معکوس یک ساختار برای بازیابی کارآمد است. توسط اصطلاحات سازماندهی شده، هر اصطلاح به اسناد یا صفحات وب حاوی آن اشاره می‌کند.',
    },
    change: 'تغییر',
    changeRetrievalMethod: 'تغییر روش بازیابی',
  },
  docsFailedNotice: 'اسناد نتوانستند فهرست‌بندی شوند',
  retry: 'تلاش مجدد',
  indexingTechnique: {
    high_quality: 'HQ',
    economy: 'ECO',
  },
  indexingMethod: {
    semantic_search: 'برداری',
    full_text_search: 'متن کامل',
    hybrid_search: 'هیبریدی',
    invertedIndex: 'معکوس',
  },
  mixtureHighQualityAndEconomicTip: 'مدل دوباره رتبه‌بندی برای ترکیب پایگاه‌های دانش با کیفیت بالا و اقتصادی لازم است.',
  inconsistentEmbeddingModelTip: 'مدل دوباره رتبه‌بندی لازم است اگر مدل‌های جاسازی پایگاه‌های دانش انتخابی ناسازگار باشند.',
  retrievalSettings: 'تنظیمات بازیابی',
  rerankSettings: 'تنظیمات دوباره رتبه‌بندی',
  weightedScore: {
    title: 'امتیاز وزنی',
    description: 'با تنظیم وزن‌های اختصاص داده شده، این استراتژی دوباره رتبه‌بندی تعیین می‌کند که آیا اولویت با تطابق معنایی یا کلمات کلیدی است.',
    semanticFirst: 'اولویت معنایی',
    keywordFirst: 'اولویت کلمه کلیدی',
    customized: 'سفارشی‌سازی شده',
    semantic: 'معنایی',
    keyword: 'کلمه کلیدی',
  },
  nTo1RetrievalLegacy: 'بازیابی N-to-1 از سپتامبر به طور رسمی منسوخ خواهد شد. توصیه می‌شود از بازیابی چند مسیر جدید استفاده کنید تا نتایج بهتری بدست آورید.',
  nTo1RetrievalLegacyLink: 'بیشتر بدانید',
  nTo1RetrievalLegacyLinkText: ' بازیابی N-to-1 از سپتامبر به طور رسمی منسوخ خواهد شد.',
  defaultRetrievalTip: 'بازیابی چند مسیره به طور پیش فرض استفاده می شود. دانش از چندین پایگاه دانش بازیابی می شود و سپس دوباره رتبه بندی می شود.',
}

export default translation
