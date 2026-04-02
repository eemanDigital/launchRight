export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://juristech.com.ng/#website",
    name: "JurisTech - Business Registration in Nigeria",
    url: "https://juristech.com.ng",
    description:
      "CAC business registration in 48 hours. Trusted by 2,000+ entrepreneurs. 100% online. Money-back guarantee.",
    publisher: {
      "@id": "https://juristech.com.ng/#organization",
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://juristech.com.ng/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      {
        "@type": "ContactAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://wa.me/2348067234189",
        },
        description: "Contact via WhatsApp",
      },
    ],
    inLanguage: "en-NG",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
