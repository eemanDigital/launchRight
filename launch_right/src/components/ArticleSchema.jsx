export default function ArticleSchema({ post }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: "Lukman Asinmi",
      url: "https://juristech.com.ng/about",
    },
    publisher: {
      "@type": "Organization",
      name: "JurisTech",
      url: "https://juristech.com.ng",
      logo: {
        "@type": "ImageObject",
        url: "https://juristech.com.ng/image/logo.png",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://juristech.com.ng/resources/blog/${post.slug}`,
    },
    image: post.cover
      ? `https://juristech.com.ng${post.cover}`
      : "https://juristech.com.ng/image/og-image.png",
    keywords: [post.category, "Nigeria", "CAC", "business registration", "legal"],
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${parseInt(post.readTime)}M`,
    inLanguage: "en-NG",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
