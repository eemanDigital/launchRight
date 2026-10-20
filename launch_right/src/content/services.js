// content/services.js — edit copy here, layout lives in components/ServicesSections.js

export const servicesIntro = {
  eyebrow: "What we build",
  heading: "Everything your business needs to launch & grow",
  text: "Four services, one accountable team — custom software, professional websites, CAC incorporation, and lawyer-drafted legal documents. No juggling agencies, no missed deadlines.",
};

export const services = [
  {
    num: "01",
    title: "Custom Software & Apps",
    description:
      "Bespoke software built by real engineers — mobile apps, POS systems, SaaS platforms, and API integrations.",
    points: ["Mobile Apps", "POS Systems", "Custom SaaS", "API Integrations"],
    cta: { label: "Build Software", href: "/software" },
    tone: "light",
  },
  {
    num: "02",
    title: "Website Development",
    description:
      "Professional business websites built for conversion — from landing pages to full e-commerce stores.",
    points: ["Landing Pages", "Business Websites", "E-commerce", "SEO"],
    cta: { label: "Get a Website", href: "/website" },
    tone: "green",
  },
  {
    num: "03",
    title: "Business Incorporation (CAC)",
    description:
      "Fast, compliant registration handled by accredited agents — Business Name, LTD, PLC, and NGO.",
    points: ["Business Name", "Private Ltd (LTD)", "PLC", "NGO / Trustees"],
    cta: { label: "Register Now", href: "/pricing" },
    tone: "navy",
  },
  {
    num: "04",
    title: "Legal Documentation",
    description:
      "Lawyer-drafted contracts, agreements, and compliance documents tailored to Nigerian law.",
    points: [
      "Shareholders Agreements",
      "Employment Contracts",
      "Service Agreements",
      "T&C / Privacy",
    ],
    cta: { label: "Draft Contracts", href: "/tools/document-generator" },
    tone: "blue",
  },
];

export const about = {
  eyebrow: "Who we are",
  heading: "We Deliver Flawless Business Growth",
  text: "From CAC approval to launch day — measured on the outcomes that matter to your business.",
  metrics: [
    { label: "Client Satisfaction", value: 98 },
    { label: "On-Time Delivery", value: 95 },
  ],
  team: {
    title: "Lawyer-Led Team",
    subtitle: "Legal · Digital — all under one roof",
    avatars: ["L", "A", "D", "V", "W"],
  },
  cta: { label: "View All Services", href: "/services" },
};

export const allInOne = {
  eyebrow: "All-in-one",
  heading: "Everything your business needs, under one roof.",
  text: "From custom software and professional websites to CAC registration and legal documents, JurisTech handles the full stack so you can focus on running your business.",
  cta: { label: "Explore all services", href: "/services" },
  list: [
    "Custom Software & Apps",
    "Professional Websites",
    "Business Incorporation (CAC)",
    "Legal Documents",
  ],
};
