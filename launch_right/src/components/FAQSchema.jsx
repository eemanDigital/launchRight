export default function FAQSchema() {
  const faqData = [
    {
      "@type": "Question",
      name: "How long does CAC registration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CAC business name registration takes 3-5 working days. Private Limited Company registration takes 7-15 working days. We also offer expedited services for urgent registrations.",
      },
    },
    {
      "@type": "Question",
      name: "What documents do I need for CAC registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Business Name: Valid ID, passport photo, business name suggestions, and address proof. For Company Registration: Director details, shareholder information, registered office address, and object clauses.",
      },
    },
    {
      "@type": "Question",
      name: "Can I register a business from outside Nigeria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We specialize in helping diaspora Nigerians and foreign investors register businesses in Nigeria. We handle the entire process remotely and can assist with corporate structures and compliance.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in your website packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All our website packages include custom design, mobile responsiveness, SSL certificate, domain setup, WhatsApp integration, and post-launch support. E-commerce packages also include payment gateway integration.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer payment plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer flexible payment plans for packages above ₦100,000. Typically, we require a 50% deposit to begin work, with the balance paid upon completion.",
      },
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
