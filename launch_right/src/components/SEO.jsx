export default function SEO({
  title,
  description,
  canonical,
  type = "website",
  image = "/image/logo.png",
}) {
  const siteUrl = "https://juristech.com.ng";
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullImageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JurisTech",
    url: siteUrl,
    logo: `${siteUrl}/image/logo.png`,
    description: "Nigerian business infrastructure company - CAC registration, websites, legal documents, and software development.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-806-723-4189",
      contactType: "customer service",
      availableLanguage: ["English"],
      areaServed: "NG",
    },
    sameAs: [
      "https://wa.me/2348067234189",
      "https://instagram.com/juristech",
      "https://twitter.com/juristech"
    ],
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="JurisTech" />
      <meta property="og:locale" content="en_NG" />
      <meta property="og:locale:alternate" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@juristech" />
      <meta name="twitter:creator" content="@juristech" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      <meta name="geo.region" content="NG-FC" />
      <meta name="geo.placename" content="Abuja" />
      <meta name="geo.position" content="9.0579;7.4951" />
      <meta name="ICBM" content="9.0579, 7.4951" />

      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="JurisTech" />

      <link rel="alternate" type="application/rss+xml" title="JurisTech Blog" href="/feed.xml" />

      <meta name="theme-color" content="#0B1F3A" />
      <meta name="msapplication-TileColor" content="#0B1F3A" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/image/logo.png" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
    </>
  );
}
