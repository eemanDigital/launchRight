export default function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "JurisTech Services",
    description: "Professional services for Nigerian businesses — CAC registration, legal documents, websites, and software development.",
    itemListElement: [
      {
        "@type": "Service",
        "@id": "https://juristech.com.ng/services#cac-registration",
        position: 1,
        name: "CAC Business Registration",
        description: "Business Name registration in 24-48 hours, Private Limited Company registration in 4-15 days. CAC-accredited agent handling the entire process.",
        provider: {
          "@id": "https://juristech.com.ng/#organization",
        },
        serviceType: "Business Registration",
        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "NGN",
          lowPrice: "35000",
          highPrice: "300000",
          offerCount: "5",
        },
      },
      {
        "@type": "Service",
        "@id": "https://juristech.com.ng/services#legal-documents",
        position: 2,
        name: "Legal Document Preparation",
        description: "Nigeria-compliant legal documents including shareholders agreements, employment contracts, terms & conditions, NDAs, and service contracts. Reviewed by qualified lawyers.",
        provider: {
          "@id": "https://juristech.com.ng/#organization",
        },
        serviceType: "Legal Services",
        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "NGN",
          price: "25000",
        },
      },
      {
        "@type": "Service",
        "@id": "https://juristech.com.ng/services#website-development",
        position: 3,
        name: "Website Development",
        description: "Professional websites for Nigerian businesses. Custom designs, mobile-responsive, SEO-optimized, with WhatsApp integration and payment gateway setup.",
        provider: {
          "@id": "https://juristech.com.ng/#organization",
        },
        serviceType: "Web Development",
        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "NGN",
          lowPrice: "45000",
          highPrice: "200000",
          offerCount: "3",
        },
      },
      {
        "@type": "Service",
        "@id": "https://juristech.com.ng/services#software-development",
        position: 4,
        name: "Custom Software Development",
        description: "Custom software solutions for Nigerian businesses including POS systems, mobile apps, inventory management, and bespoke business applications.",
        provider: {
          "@id": "https://juristech.com.ng/#organization",
        },
        serviceType: "Software Development",
        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "NGN",
          lowPrice: "150000",
          highPrice: "500000",
          offerCount: "3",
        },
      },
      {
        "@type": "Service",
        "@id": "https://juristech.com.ng/services#compliance",
        position: 5,
        name: "Business Compliance Support",
        description: "CAC annual returns filing, FIRS tax registration, SCUML compliance, and ongoing regulatory support for Nigerian businesses.",
        provider: {
          "@id": "https://juristech.com.ng/#organization",
        },
        serviceType: "Compliance Services",
        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "NGN",
          price: "15000",
        },
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
