// Google Tag Manager — GA4, Google Ads ve Meta etiketleri GTM panelinden yönetilir
// (bkz. GTM_KURULUM_REHBERI.md). Rıza durumu Consent Mode ile GTM'e iletilir.
export const GTM_ID = "GTM-M6T35B87";

/** Masaüstü uygulaması indirme tıklamasını GTM'e "file_download" olayı olarak bildirir. */
export function trackDownload(url) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "file_download",
    file_name: url.split("/").pop(),
    link_url: url,
  });
}
