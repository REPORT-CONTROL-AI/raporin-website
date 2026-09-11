// CDN tarafından eklenen kurallar uygulamanın robots çıktısıyla çelişebilir.
// Gerçek tarama erişimi için canlı yanıt ve CDN bot olayları birlikte kontrol edilir.
// Arama erişimi, model eğitimi izninden ayrı değerlendirilir (bkz. GEO-GUIDE.md).
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
];

const PRIVATE_PATHS = ["/api/", "/private/", "/reset-password", "/verify-email"];

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: PRIVATE_PATHS,
      },
      // Yapay zeka arama motorlarının siteyi kaynak gösterebilmesi için açık izin.
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/', disallow: PRIVATE_PATHS })),
    ],
    sitemap: 'https://raporin.com/sitemap.xml',
    host: 'https://raporin.com',
  };
}
