export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://juristech.com.ng/#organization",
    name: "JurisTech",
    url: "https://juristech.com.ng",
    logo: {
      "@type": "ImageObject",
      url: "https://juristech.com.ng/image/logo.png",
      width: 200,
      height: 200,
    },
    description:
      "Nigerian business infrastructure company offering CAC registration, professional websites, legal documents, and custom software development.",
    foundingDate: "2023",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Suite 412, IT Igbani Street, MKK Plaza",
        addressLocality: "Jabi",
        addressRegion: "Abuja",
        postalCode: "900108",
        addressCountry: "NG",
      },
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+234-806-723-4189",
        contactType: "customer service",
        availableLanguage: ["English", "Yoruba", "Hausa", "Igbo"],
        areaServed: "NG",
      },
      {
        "@type": "ContactPoint",
        telephone: "+234-806-723-4189",
        contactType: "sales",
        availableLanguage: ["English"],
        areaServed: "NG",
      },
    ],
    sameAs: [
      "https://wa.me/2348067234189",
      "https://instagram.com/juristech",
      "https://twitter.com/juristech",
    ],
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    serviceType: [
      "CAC Business Registration",
      "Company Incorporation",
      "Website Development",
      "Legal Document Preparation",
      "Software Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
