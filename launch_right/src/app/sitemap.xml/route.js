const BASE_URL = "https://juristech.com.ng";

const staticPages = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/services", priority: "0.9", changefreq: "weekly" },
  { loc: "/pricing", priority: "0.9", changefreq: "weekly" },
  { loc: "/about", priority: "0.8", changefreq: "monthly" },
  { loc: "/website", priority: "0.8", changefreq: "monthly" },
  { loc: "/software", priority: "0.8", changefreq: "monthly" },
];

const generateXML = () => {
  const today = new Date().toISOString().split("T")[0];

  const urlEntries = staticPages
    .map(
      (page) => `
    <url>
      <loc>${BASE_URL}${page.loc}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
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
