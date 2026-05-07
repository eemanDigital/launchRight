export default function ProductSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "JurisTech Legal-Tech Products",
    description: "Software products built by JurisTech for Nigerian businesses and professionals.",
    itemListElement: [
      {
        "@type": "Product",
        "@id": "https://juristech.com.ng/products#vendpadi",
        position: 1,
        name: "VendPadi",
        description: "The WhatsApp storefront for Nigerian merchants. Create a product catalogue and receive orders through WhatsApp — no website required.",
        brand: {
          "@type": "Brand",
          name: "JurisTech",
        },
        category: "E-commerce Platform",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "NGN",
          availability: "https://schema.org/PreOrder",
          url: "https://juristech.com.ng/products",
        },
        applicationCategory: "BusinessApplication",
        operatingSystem: "WhatsApp",
      },
      {
        "@type": "Product",
        "@id": "https://juristech.com.ng/products#casemaster",
        position: 2,
        name: "case-master-app",
        description: "Law firm management platform built for Nigerian practice. Litigation tracking, client management, document generation, and compliance.",
        brand: {
          "@type": "Brand",
          name: "JurisTech",
        },
        category: "Legal Practice Management",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "NGN",
          availability: "https://schema.org/PreOrder",
          url: "https://juristech.com.ng/products",
        },
        applicationCategory: "BusinessApplication",
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://juristech.com.ng/products#doc-generator",
        position: 3,
        name: "Legal Document Generator",
        description: "Generate Nigeria-compliant legal documents in minutes. Answer questions, get lawyer-reviewed documents instantly. Supports tenancy agreements, NDAs, service contracts, and more.",
        brand: {
          "@type": "Brand",
          name: "JurisTech",
        },
        category: "Legal Document Generator",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "NGN",
          availability: "https://schema.org/InStock",
          url: "https://juristech.com.ng/tools/document-generator",
        },
        applicationCategory: "LegalApplication",
        operatingSystem: "Web",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "342",
        },
        featureList: [
          "6 document types available",
          "Nigeria-specific clauses",
          "Instant PDF download",
          "Free to use",
          "Lawyer-reviewed templates",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
