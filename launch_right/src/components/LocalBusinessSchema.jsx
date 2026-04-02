export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://juristech.com.ng/#business",
    name: "JurisTech",
    image: "https://juristech.com.ng/image/logo.png",
    url: "https://juristech.com.ng",
    telephone: "+234-806-723-4189",
    email: "hello@juristech.com.ng",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 412, IT Igbani Street, MKK Plaza, Jabi",
      addressLocality: "Abuja",
      addressRegion: "FCT",
      postalCode: "900108",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.0579,
      longitude: 7.4951,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "₦35,000 - ₦500,000",
    paymentAccepted: "Cash, Bank Transfer, USSD, Card",
    currenciesAccepted: "NGN",
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    serviceType: [
      "Business Registration",
      "Company Incorporation",
      "Website Development",
      "Legal Services",
      "Software Development",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Business Registration Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Name Registration",
          },
          price: "35000",
          priceCurrency: "NGN",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Company Registration (LTD)",
          },
          price: "74999",
          priceCurrency: "NGN",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
          },
          price: "45000",
          priceCurrency: "NGN",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
