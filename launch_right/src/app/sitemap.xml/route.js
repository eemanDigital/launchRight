import { blogPosts } from "@/data/blogPosts";

const BASE_URL = "https://juristech.com.ng";

const staticPages = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/services", priority: "0.9", changefreq: "weekly" },
  { loc: "/pricing", priority: "0.9", changefreq: "weekly" },
  { loc: "/contact", priority: "0.8", changefreq: "monthly" },
  { loc: "/about", priority: "0.8", changefreq: "monthly" },
  { loc: "/products", priority: "0.8", changefreq: "monthly" },
  { loc: "/website", priority: "0.8", changefreq: "monthly" },
  { loc: "/software", priority: "0.7", changefreq: "monthly" },
  { loc: "/resources", priority: "0.7", changefreq: "weekly" },
  { loc: "/resources/blog", priority: "0.8", changefreq: "weekly" },
  { loc: "/business-launch", priority: "0.9", changefreq: "monthly" },
  { loc: "/tools/document-generator", priority: "0.9", changefreq: "monthly" },
];

const generateXML = () => {
  const staticEntries = staticPages
    .map(
      (page) => `
    <url>
      <loc>${BASE_URL}${page.loc}</loc>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`
    )
    .join("");

  const blogEntries = blogPosts
    .map(
      (post) => `
    <url>
      <loc>${BASE_URL}/resources/blog/${post.slug}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/1.1">
${staticEntries}${blogEntries}
</urlset>`;
};

export default function Sitemap() {
  const xml = generateXML();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

export async function GET() {
  return Sitemap();
}
