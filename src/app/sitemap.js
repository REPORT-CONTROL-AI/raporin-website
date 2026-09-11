import { blogPosts } from "../lib/blogPosts";
import { solutionSlugs, solutionPages } from "../lib/solutionPages";

const baseUrl = "https://raporin.com";

// Statik sayfalar. Yeni bir sayfa eklendiğinde buraya da eklenmelidir.
const staticRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/download", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/referanslar", changeFrequency: "monthly", priority: 0.7 },
  { path: "/en", changeFrequency: "monthly", priority: 0.6 },
  { path: "/en/about", changeFrequency: "monthly", priority: 0.5 },
  { path: "/en/download", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.4 },
  { path: "/kvkk", changeFrequency: "yearly", priority: 0.4 },
  { path: "/kvkk/kullanim-kosullari-ve-uyelik-sozlesmesi", changeFrequency: "yearly", priority: 0.4 },
  { path: "/kvkk/eczaneler-icin-aydinlatma-metni", changeFrequency: "yearly", priority: 0.4 },
  { path: "/kvkk/uygulama-cerez-aydinlatma-metni", changeFrequency: "yearly", priority: 0.3 },
  { path: "/kvkk/cerez-politikasi", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  const pages = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    changeFrequency,
    priority,
  }));

  const solutions = solutionSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    ...(solutionPages[slug].updatedAt ? { lastModified: new Date(solutionPages[slug].updatedAt) } : {}),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    ...(post.updatedAt || post.publishedAt ? { lastModified: new Date(post.updatedAt || post.publishedAt) } : {}),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...solutions, ...posts];
}
