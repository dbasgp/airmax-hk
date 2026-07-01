// src/data/products.ts
// AirMax.hk — DBA air coolers & fans, bilingual showcase (no cart / no payments)
//
// SOURCES & RULES:
// - Data merged from dba.hk (brand site) and cooler.hk (HK retail site).
// - CONFLICT RULE: dba.hk wins on price / specs / coverage. cooler.hk used only to fill gaps.
// - Contact = cooler.hk (+852 2121 0503).
// - Prices: only some products publish a price. Where none was available, priceHkd = null =>
//   the UI should show "Enquire for price" and the WhatsApp CTA. Prices in HK$ (whole dollars).
// - `image` paths point to /public/images/products/. During the scrape step, Claude Code should
//   download the real photos from each product's sourceUrl into that folder.
// - Bilingual: customer-facing strings have { en, zh } (zh = 繁體中文). zh fields are
//   machine-drafted — have a native HK speaker review before launch.
//
// ⚠️ VERIFY BEFORE LAUNCH:
//   - DEBI003X: dba.hk says 1500CMH @ $1,488; cooler.hk says 300呎 @ $1,499. Using dba.hk ($1,488)
//     per your rule. Confirm coverage/airflow.
//   - Airflow figures are CMH (cubic metres/hour) as published. Some look inconsistent — sanity check.

export type Category = "cooler" | "fan";

export interface LocalizedText { en: string; zh: string; }

export interface Product {
  id: string;
  sku: string;
  category: Category;
  name: LocalizedText;
  airflow: string;              // e.g. "4000 CMH"
  coverage: string;             // e.g. "500 sqft" ("" if unknown)
  priceHkd: number | null;      // whole HK$, or null => "enquire for price"
  highlights: LocalizedText[];
  image: string;                // local path, downloaded during scrape
  sourceUrl: string;            // primary product page (dba.hk preferred)
  altSourceUrl?: string;        // cooler.hk equivalent, if any
  enquiry: LocalizedText;       // pre-filled WhatsApp message
}

export const contact = {
  whatsapp: "85221210503",           // cooler.hk sales line, wa.me format (no + or spaces)
  whatsappDisplay: "+852 2121 0503",
  email: "info@cooler.hk",
};

export const waLink = (text: string) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const uiStrings = {
  enquire:        { en: "Enquire on WhatsApp", zh: "WhatsApp 查詢" },
  enquireForPrice:{ en: "Enquire for price",   zh: "查詢價格" },
  viewRange:      { en: "View the range",      zh: "瀏覽產品系列" },
  coolers:        { en: "Air Coolers",         zh: "冷風機" },
  fans:           { en: "Industrial Fans",     zh: "工業風扇" },
  coverage:       { en: "Coverage",            zh: "適用面積" },
  airflow:        { en: "Airflow",             zh: "風量" },
  from:           { en: "From",                zh: "由" },
};

// Helper to build a standard enquiry message for a product
const mkEnquiry = (enName: string, zhName: string): LocalizedText => ({
  en: `Hi AirMax, I'm interested in the ${enName}. Could you share price, availability and delivery in Hong Kong?`,
  zh: `你好 AirMax，我想查詢${zhName}的價格、供貨及香港送貨詳情。`,
});

export const products: Product[] = [
  // ── SMALL / SMART COOLERS ──────────────────────────────────────
  {
    id: "debi003x", sku: "DEBI003X", category: "cooler",
    name: { en: "Air Cooler DEBI003X", zh: "DEBI003X 冷風機" },
    airflow: "1500 CMH", coverage: "300 sqft", priceHkd: 1488,
    highlights: [
      { en: "Compact smart cooler for small spaces", zh: "小型智能冷風機，適合細空間" },
      { en: "Low power draw", zh: "低耗電量" },
    ],
    image: "/images/products/debi003x.jpg",
    sourceUrl: "https://www.dba.hk/products/air-cooler-debi003x-1500cmh",
    altSourceUrl: "https://www.cooler.hk/products/debi003x",
    enquiry: mkEnquiry("DEBI003X air cooler", "DEBI003X 冷風機"),
  },
  {
    id: "debi003a", sku: "DEBI003A", category: "cooler",
    name: { en: "Air Cooler DEBI003A", zh: "DEBI003A 冷風機" },
    airflow: "4000 CMH", coverage: "500 sqft", priceHkd: 2980,
    highlights: [
      { en: "Ion plasma air purification", zh: "離子等離子空氣淨化" },
      { en: "25L water tank, 4-way auto swing", zh: "25 公升水箱，四方向自動擺風" },
      { en: "Ice compartment + timer", zh: "製冰格 + 定時功能" },
    ],
    image: "/images/products/debi003a.jpg",
    sourceUrl: "https://www.dba.hk/products/air-cooler-debi003a",
    altSourceUrl: "https://www.cooler.hk/products/debi003a-%E6%99%BA%E8%83%BD%E5%86%B7%E9%A2%A8%E6%A9%9F-500%E5%91%8E%E9%81%A9%E7%94%A8",
    enquiry: mkEnquiry("DEBI003A air cooler (500 sqft)", "DEBI003A 冷風機（500 呎適用）"),
  },
  {
    id: "debi003b", sku: "DEBI003B", category: "cooler",
    name: { en: "Air Cooler DEBI003B", zh: "DEBI003B 冷風機" },
    airflow: "4500 CMH", coverage: "", priceHkd: null,
    highlights: [{ en: "Mid-range evaporative cooler", zh: "中階蒸發式冷風機" }],
    image: "/images/products/debi003b.jpg",
    sourceUrl: "https://www.dba.hk/products/debi003b",
    enquiry: mkEnquiry("DEBI003B air cooler", "DEBI003B 冷風機"),
  },
  {
    id: "debi003a-h", sku: "DEBI003A-H", category: "cooler",
    name: { en: "Air Cooler DEBI003A-H (Smart)", zh: "DEBI003A-H 智能冷風機" },
    airflow: "5000 CMH", coverage: "500 sqft", priceHkd: 3980,
    highlights: [
      { en: "Tuya WiFi app control", zh: "Tuya WiFi 應用程式控制" },
      { en: "UV-C steriliser + anion generator", zh: "UV-C 殺菌燈 + 負離子產生器" },
      { en: "45L water tank", zh: "45 公升水箱" },
    ],
    image: "/images/products/debi003a-h.jpg",
    sourceUrl: "https://www.dba.hk/products/debi003a-h",
    altSourceUrl: "https://www.cooler.hk/products/debi003a-h",
    enquiry: mkEnquiry("DEBI003A-H smart air cooler (500 sqft)", "DEBI003A-H 智能冷風機（500 呎適用）"),
  },
  {
    id: "debi003a-h-ext", sku: "DEBI003A-H-EXT", category: "cooler",
    name: { en: "Air Cooler DEBI003A-H (Extended)", zh: "DEBI003A-H（提升版）智能冷風機" },
    airflow: "5000 CMH", coverage: "500 sqft", priceHkd: 4280,
    highlights: [
      { en: "Extended-version smart cooler", zh: "提升版智能冷風機" },
      { en: "Tuya WiFi + UV-C + anion", zh: "Tuya WiFi + UV-C + 負離子" },
    ],
    image: "/images/products/debi003a-h-ext.jpg",
    // dba.hk equivalent not confirmed; cooler.hk is the source for this SKU:
    sourceUrl: "https://www.cooler.hk/products/5000cmh-air-cooler-debi003a-h-extended-version",
    enquiry: mkEnquiry("DEBI003A-H Extended smart air cooler", "DEBI003A-H（提升版）智能冷風機"),
  },
  {
    id: "debi003c-h", sku: "DEBI003C-H", category: "cooler",
    name: { en: "Air Cooler DEBI003C-H", zh: "DEBI003C-H 冷風機" },
    airflow: "5500 CMH", coverage: "", priceHkd: null,
    highlights: [{ en: "Smart cooler with sterilisation", zh: "智能冷風機，備殺菌功能" }],
    image: "/images/products/debi003c-h.jpg",
    sourceUrl: "https://www.dba.hk/products/debi003c-h",
    enquiry: mkEnquiry("DEBI003C-H air cooler", "DEBI003C-H 冷風機"),
  },

  // ── COMMERCIAL COOLERS ─────────────────────────────────────────
  {
    id: "debi002c", sku: "DEBI002C", category: "cooler",
    name: { en: "Air Cooler DEBI002C (Commercial)", zh: "DEBI002C 商用冷風機" },
    airflow: "5500 CMH", coverage: "550 sqft", priceHkd: 3200,
    highlights: [{ en: "Commercial cooler for ~550 sqft", zh: "商用冷風機，約 550 呎適用" }],
    image: "/images/products/debi002c.jpg",
    sourceUrl: "https://www.dba.hk/products/air-cooler-debi002c",
    altSourceUrl: "https://www.cooler.hk/products/air-cooler-debi002c",
    enquiry: mkEnquiry("DEBI002C commercial air cooler (550 sqft)", "DEBI002C 商用冷風機（550 呎適用）"),
  },
  {
    id: "debi002", sku: "DEBI002", category: "cooler",
    name: { en: "Air Cooler DEBI002", zh: "DEBI002 冷風機" },
    airflow: "6000 CMH", coverage: "", priceHkd: null,
    highlights: [{ en: "Commercial evaporative cooler", zh: "商用蒸發式冷風機" }],
    image: "/images/products/debi002.jpg",
    sourceUrl: "https://www.dba.hk/products/air-cooler-debi002n",
    enquiry: mkEnquiry("DEBI002 air cooler", "DEBI002 冷風機"),
  },
  {
    id: "debi002b", sku: "DEBI002B", category: "cooler",
    name: { en: "Air Cooler DEBI002B", zh: "DEBI002B 冷風機" },
    airflow: "7000 CMH", coverage: "", priceHkd: null,
    highlights: [{ en: "Higher-output commercial cooler", zh: "較高風量商用冷風機" }],
    image: "/images/products/debi002b.jpg",
    sourceUrl: "https://www.dba.hk/products/air-cooler-debi002b",
    enquiry: mkEnquiry("DEBI002B air cooler", "DEBI002B 冷風機"),
  },
  {
    id: "debi002n", sku: "DEBI002N", category: "cooler",
    name: { en: "Air Cooler DEBI002N", zh: "DEBI002N 冷風機" },
    airflow: "8000 CMH", coverage: "", priceHkd: null,
    highlights: [{ en: "High-airflow commercial cooler", zh: "高風量商用冷風機" }],
    image: "/images/products/debi002n.jpg",
    sourceUrl: "https://www.dba.hk/products/debi002n",
    enquiry: mkEnquiry("DEBI002N air cooler", "DEBI002N 冷風機"),
  },
  {
    id: "debi002c-h-black", sku: "DEBI002C-H-BLACK", category: "cooler",
    name: { en: "Air Cooler DEBI002C-H (Black)", zh: "DEBI002C-H（黑）商用冷風機" },
    airflow: "9000 CMH", coverage: "1000 sqft", priceHkd: 4200,
    highlights: [
      { en: "Commercial cooler for ~1000 sqft", zh: "商用冷風機，約 1000 呎適用" },
      { en: "Digital control, 3 wind speeds", zh: "數碼控制，三段風速" },
    ],
    image: "/images/products/debi002c-h-black.jpg",
    sourceUrl: "https://www.dba.hk/products/air-cooler-debi002c-h-black",
    altSourceUrl: "https://www.cooler.hk/products/air-cooler-debi002c-h-black",
    enquiry: mkEnquiry("DEBI002C-H (Black) commercial air cooler (1000 sqft)", "DEBI002C-H（黑）商用冷風機（1000 呎適用）"),
  },
  {
    id: "debi002c-h-white", sku: "DEBI002C-H-WHITE", category: "cooler",
    name: { en: "Air Cooler DEBI002C-H (White)", zh: "DEBI002C-H（白）商用冷風機" },
    airflow: "9000 CMH", coverage: "1000 sqft", priceHkd: 4200,
    highlights: [
      { en: "Commercial cooler for ~1000 sqft", zh: "商用冷風機，約 1000 呎適用" },
      { en: "Digital control, 3 wind speeds", zh: "數碼控制，三段風速" },
    ],
    image: "/images/products/debi002c-h-white.jpg",
    sourceUrl: "https://www.dba.hk/products/air-cooler-debi002c-h",
    altSourceUrl: "https://www.cooler.hk/products/air-cooler-debi002c-h",
    enquiry: mkEnquiry("DEBI002C-H (White) commercial air cooler (1000 sqft)", "DEBI002C-H（白）商用冷風機（1000 呎適用）"),
  },

  // ── LARGE / INDUSTRIAL COOLERS ─────────────────────────────────
  {
    id: "debi001c", sku: "DEBI001C", category: "cooler",
    name: { en: "Air Cooler DEBI001C", zh: "DEBI001C 商用冷風機" },
    airflow: "12000 CMH", coverage: "1200 sqft", priceHkd: null,
    highlights: [{ en: "Large commercial cooler for ~1200 sqft", zh: "大型商用冷風機，約 1200 呎適用" }],
    image: "/images/products/debi001c.jpg",
    sourceUrl: "https://www.dba.hk/products/air-cooler-debi001c-12000cmh",
    altSourceUrl: "https://www.cooler.hk/products/debi001c-%E5%95%86%E7%94%A8%E5%86%B7%E9%A2%A8%E6%A9%9F-1200%E5%91%8E%E9%81%A9%E7%94%A8",
    enquiry: mkEnquiry("DEBI001C commercial air cooler (1200 sqft)", "DEBI001C 商用冷風機（1200 呎適用）"),
  },
  {
    id: "debi001c-black", sku: "DEBI001C-BLACK", category: "cooler",
    name: { en: "Air Cooler DEBI001C (Black)", zh: "DEBI001C（黑色）商用冷風機" },
    airflow: "12000 CMH", coverage: "1200 sqft", priceHkd: null,
    highlights: [{ en: "Large commercial cooler, black", zh: "大型商用冷風機，黑色" }],
    image: "/images/products/debi001c-black.jpg",
    sourceUrl: "https://www.dba.hk/products/air-cooler-debi001c-black-12000cmh",
    altSourceUrl: "https://www.cooler.hk/products/debi001c-%E9%BB%91%E8%89%B2-%E5%95%86%E7%94%A8%E5%86%B7%E9%A2%A8%E6%A9%9F-1200%E5%91%8E%E9%81%A9%E7%94%A8",
    enquiry: mkEnquiry("DEBI001C (Black) commercial air cooler (1200 sqft)", "DEBI001C（黑色）商用冷風機（1200 呎適用）"),
  },
  {
    id: "debi001b", sku: "DEBI001B", category: "cooler",
    name: { en: "Air Cooler DEBI001B", zh: "DEBI001B 冷風機" },
    airflow: "12000 CMH", coverage: "", priceHkd: null,
    highlights: [{ en: "Large-space evaporative cooler", zh: "大空間蒸發式冷風機" }],
    image: "/images/products/debi001b.jpg",
    sourceUrl: "https://www.dba.hk/products/debi001b",
    enquiry: mkEnquiry("DEBI001B air cooler", "DEBI001B 冷風機"),
  },
  {
    id: "debi001c-h", sku: "DEBI001C-H", category: "cooler",
    name: { en: "Air Cooler DEBI001C-H", zh: "DEBI001C-H 冷風機" },
    airflow: "18000 CMH", coverage: "", priceHkd: null,
    highlights: [{ en: "Industrial-grade high airflow", zh: "工業級高風量" }],
    image: "/images/products/debi001c-h.jpg",
    sourceUrl: "https://www.dba.hk/products/debi001c-h-1",
    enquiry: mkEnquiry("DEBI001C-H industrial air cooler", "DEBI001C-H 工業冷風機"),
  },
  {
    id: "debi001-h", sku: "DEBI001-H", category: "cooler",
    name: { en: "Air Cooler DEBI001-H", zh: "DEBI001-H 冷風機" },
    airflow: "18000 CMH", coverage: "", priceHkd: null,
    highlights: [{ en: "Industrial-grade high airflow", zh: "工業級高風量" }],
    image: "/images/products/debi001-h.jpg",
    sourceUrl: "https://www.dba.hk/products/debi001-h",
    enquiry: mkEnquiry("DEBI001-H industrial air cooler", "DEBI001-H 工業冷風機"),
  },
  {
    id: "dba-s240k", sku: "DBA-S240K", category: "cooler",
    name: { en: "Air Cooler DBA-S240K", zh: "DBA-S240K 冷風機" },
    airflow: "", coverage: "", priceHkd: null,
    highlights: [{ en: "Large-capacity evaporative cooler", zh: "大容量蒸發式冷風機" }],
    image: "/images/products/dba-s240k.jpg",
    sourceUrl: "https://www.dba.hk/products/dba-s240k-1",
    enquiry: mkEnquiry("DBA-S240K air cooler", "DBA-S240K 冷風機"),
  },
  {
    id: "dba-s280k", sku: "DBA-S280K", category: "cooler",
    name: { en: "Air Cooler DBA-S280K", zh: "DBA-S280K 冷風機" },
    airflow: "", coverage: "", priceHkd: null,
    highlights: [{ en: "Large-capacity evaporative cooler", zh: "大容量蒸發式冷風機" }],
    image: "/images/products/dba-s280k.jpg",
    sourceUrl: "https://www.dba.hk/products/dba-s280k",
    enquiry: mkEnquiry("DBA-S280K air cooler", "DBA-S280K 冷風機"),
  },

  // ── INDUSTRIAL FANS ────────────────────────────────────────────
  {
    id: "dba-f250k", sku: "DBA-F250K", category: "fan",
    name: { en: "Portable Fan DBA-F250K", zh: "DBA-F250K 移動風扇" },
    airflow: "25000 CMH", coverage: "", priceHkd: null,
    highlights: [{ en: "High-volume portable industrial fan", zh: "大風量移動工業風扇" }],
    image: "/images/products/dba-f250k.jpg",
    sourceUrl: "https://www.dba.hk/products/portable-fan-dba-f250k-25000cmh",
    enquiry: mkEnquiry("DBA-F250K portable industrial fan", "DBA-F250K 移動工業風扇"),
  },
  {
    id: "dba-f380k", sku: "DBA-F380K", category: "fan",
    name: { en: "Portable Fan DBA-F380K", zh: "DBA-F380K 移動風扇" },
    airflow: "38000 CMH", coverage: "", priceHkd: null,
    highlights: [{ en: "Highest-volume portable industrial fan", zh: "最大風量移動工業風扇" }],
    image: "/images/products/dba-f380k.jpg",
    sourceUrl: "https://www.dba.hk/products/dba-f380k",
    enquiry: mkEnquiry("DBA-F380K portable industrial fan", "DBA-F380K 移動工業風扇"),
  },
];

// Helpers
export const coolers = products.filter((p) => p.category === "cooler");
export const fans = products.filter((p) => p.category === "fan");
export const formatHkd = (v: number) => `HK$${v.toLocaleString("en-HK")}`;