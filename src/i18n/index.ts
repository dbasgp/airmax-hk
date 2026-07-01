export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'zh';

export const ui = {
  zh: {
    // Navigation
    'nav.home': '首頁',
    'nav.products': '產品系列',
    'nav.why': '為何選擇 AirMax',
    'nav.enquiry': '查詢',
    'nav.about': '關於我們',
    'nav.lang': 'EN',

    // Hero
    'hero.headline': '即時降溫。',
    'hero.sub': '香港冷風機專家 — 家居、商用、工業，一應俱全。',
    'hero.cta.range': '瀏覽產品系列',
    'hero.cta.whatsapp': 'WhatsApp 查詢',

    // Product range
    'range.title': '產品系列',
    'range.label': '冷風機 ＆ 風扇',
    'range.sub': '涵蓋 300 至 18,000+ CMH，適合各種空間。',
    'range.coolers': '冷風機',
    'range.fans': '工業風扇',
    'range.coverage': '適用面積',
    'range.airflow': '風量',
    'range.price.from': '由 HK$',
    'range.price.enquire': '查詢價格',
    'range.cta': 'WhatsApp 查詢',
    'range.detail': '查看詳情',
    'range.sqft': '呎',

    // Product detail
    'detail.specs': '規格',
    'detail.highlights': '產品特點',
    'detail.enquire': 'WhatsApp 查詢',
    'detail.back': '返回產品系列',
    'detail.sku': '型號',
    'detail.airflow': '風量',
    'detail.coverage': '適用面積',
    'detail.price': '參考售價',
    'detail.price.enquire': '查詢價格',
    'detail.img.alt': '產品圖片',

    // Why AirMax
    'why.label': '為何選擇我們',
    'why.title': '為何選擇 AirMax',
    'why.sub': '蒸發式冷卻技術，節能環保，適合香港氣候。',
    'why.f1.title': '強力降溫',
    'why.f1.desc': '蒸發式冷卻可降溫達 10°C，耗電量遠低於傳統冷氣。',
    'why.f2.title': '空氣淨化',
    'why.f2.desc': '部分型號配備離子等離子及 UV-C 殺菌，改善室內空氣質素。',
    'why.f3.title': '智能控制',
    'why.f3.desc': 'Tuya WiFi 應用程式，隨時隨地遙控調節。',
    'why.f4.title': '靜音運行',
    'why.f4.desc': '低噪音設計，適合辦公室及住宅環境。',
    'why.f5.title': '廣泛覆蓋',
    'why.f5.desc': '覆蓋 300 至 1,200+ 呎，適合各種空間需求。',
    'why.f6.title': '節能環保',
    'why.f6.desc': '無需冷媒，耗電量比傳統冷氣低達 80%。',
    'why.cta': 'WhatsApp 查詢',

    // Enquiry
    'enquiry.label': '聯絡我們',
    'enquiry.title': '查詢',
    'enquiry.sub': '填寫以下表格，我們會即時透過 WhatsApp 回覆。',
    'enquiry.name': '姓名',
    'enquiry.name.ph': '您的姓名',
    'enquiry.product': '有意購買產品',
    'enquiry.product.ph': '選擇產品',
    'enquiry.message': '留言（可選）',
    'enquiry.message.ph': '有任何問題？',
    'enquiry.submit': '開啟 WhatsApp',
    'enquiry.direct': '直接聯絡',
    'enquiry.or': '或',

    // About
    'about.label': '關於',
    'about.title': '關於 AirMax',
    'about.body': 'AirMax 是 DBA 在香港的消費者品牌，專注提供高效冷風機及工業風扇。我們的產品於香港設計及測試，配合本地氣候環境，為家居、商業及工業用戶提供切實可行的降溫方案。',
    'about.contact.title': '聯絡我們',
    'about.whatsapp': 'WhatsApp',
    'about.email': '電郵',
    'about.phone': '電話',

    // Footer
    'footer.tagline': '香港冷風機專家',
    'footer.links': '快速連結',
    'footer.contact': '聯絡',
    'footer.rights': '版權所有',

    // General
    'img.placeholder': '產品圖片即將上線',
    'all.products': '所有產品',
  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.why': 'Why AirMax',
    'nav.enquiry': 'Enquiry',
    'nav.about': 'About',
    'nav.lang': '中文',

    // Hero
    'hero.headline': 'Cool any space.',
    'hero.sub': 'Air coolers for home, office and warehouse — made for Hong Kong.',
    'hero.cta.range': 'View the range',
    'hero.cta.whatsapp': 'WhatsApp us',

    // Product range
    'range.title': 'Product Range',
    'range.label': 'Coolers & Fans',
    'range.sub': 'From 300 to 18,000+ CMH — find the right fit for your space.',
    'range.coolers': 'Air Coolers',
    'range.fans': 'Industrial Fans',
    'range.coverage': 'Coverage',
    'range.airflow': 'Airflow',
    'range.price.from': 'From HK$',
    'range.price.enquire': 'Enquire for price',
    'range.cta': 'Enquire on WhatsApp',
    'range.detail': 'View details',
    'range.sqft': 'sqft',

    // Product detail
    'detail.specs': 'Specifications',
    'detail.highlights': 'Highlights',
    'detail.enquire': 'Enquire on WhatsApp',
    'detail.back': 'Back to range',
    'detail.sku': 'SKU',
    'detail.airflow': 'Airflow',
    'detail.coverage': 'Coverage',
    'detail.price': 'Reference price',
    'detail.price.enquire': 'Enquire for price',
    'detail.img.alt': 'Product image',

    // Why AirMax
    'why.label': 'Why us',
    'why.title': 'Why AirMax',
    'why.sub': 'Evaporative cooling technology — energy-efficient and built for Hong Kong.',
    'why.f1.title': 'Real cooling power',
    'why.f1.desc': 'Drop temperatures by up to 10°C at a fraction of the cost of air conditioning.',
    'why.f2.title': 'Air purification',
    'why.f2.desc': 'Select models include ion plasma and UV-C sterilisation for better indoor air quality.',
    'why.f3.title': 'Smart control',
    'why.f3.desc': 'Tuya WiFi app lets you adjust settings from anywhere.',
    'why.f4.title': 'Quiet operation',
    'why.f4.desc': 'Low-noise design suitable for offices and homes.',
    'why.f5.title': 'Wide coverage',
    'why.f5.desc': 'Models from 300 to 1,200+ sqft — pick the right size for your space.',
    'why.f6.title': 'Energy efficient',
    'why.f6.desc': 'No refrigerant. Up to 80% less electricity than traditional air conditioning.',
    'why.cta': 'Enquire on WhatsApp',

    // Enquiry
    'enquiry.label': 'Contact',
    'enquiry.title': 'Enquiry',
    'enquiry.sub': 'Fill in the form and we\'ll reply on WhatsApp straight away.',
    'enquiry.name': 'Name',
    'enquiry.name.ph': 'Your name',
    'enquiry.product': 'Product interest',
    'enquiry.product.ph': 'Select a product',
    'enquiry.message': 'Message (optional)',
    'enquiry.message.ph': 'Any questions?',
    'enquiry.submit': 'Open WhatsApp',
    'enquiry.direct': 'Get in touch directly',
    'enquiry.or': 'or',

    // About
    'about.label': 'About',
    'about.title': 'About AirMax',
    'about.body': 'AirMax is DBA\'s consumer brand in Hong Kong, specialising in high-performance air coolers and industrial fans. Our products are designed and tested for the local climate, offering practical cooling solutions for homes, offices and industrial spaces.',
    'about.contact.title': 'Contact',
    'about.whatsapp': 'WhatsApp',
    'about.email': 'Email',
    'about.phone': 'Phone',

    // Footer
    'footer.tagline': 'Hong Kong · Air Cooler Specialists',
    'footer.links': 'Quick links',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved',

    // General
    'img.placeholder': 'Product image coming soon',
    'all.products': 'All products',
  },
} as const;

type TranslationKey = keyof typeof ui.en;

export function t(locale: Locale, key: TranslationKey): string {
  return (ui[locale] as Record<string, string>)[key] ?? (ui.en as Record<string, string>)[key] ?? key;
}

export function lp(locale: Locale, path = ''): string {
  return `/${locale}${path}`;
}

export function altLocale(locale: Locale): Locale {
  return locale === 'zh' ? 'en' : 'zh';
}

export function altPath(locale: Locale, currentPath: string): string {
  const other = altLocale(locale);
  const withoutLang = currentPath.replace(/^\/(zh|en)/, '');
  return `/${other}${withoutLang}`;
}

export const staticPaths = () => [
  { params: { lang: 'zh' } },
  { params: { lang: 'en' } },
];
