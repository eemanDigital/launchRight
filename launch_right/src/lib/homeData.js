import {
  CodeBracketIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  DocumentCheckIcon,
  RocketLaunchIcon,
  ArrowTrendingUpIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

export const site = {
  name: "JurisTech",
  whatsapp: "https://wa.me/message/KTFL2G2JM3JTP1",
  phone: "08067234189",
  email: "info@juristech.com.ng",
  address: "Suite 412, IT Igbani Street, MKK Plaza, Jabi Abuja",
};

export const services = [
  {
    id: "software",
    icon: CodeBracketIcon,
    title: "Custom Software & Apps",
    description:
      "Bespoke software built by real engineers — mobile apps, POS systems, SaaS platforms, and API integrations.",
    items: ["Mobile Apps", "POS Systems", "Custom SaaS", "API Integrations"],
    href: "/software",
    cta: "Build Software",
  },
  {
    id: "web",
    icon: GlobeAltIcon,
    title: "Website Development",
    description:
      "Professional business websites built for conversion — from landing pages to full e-commerce stores.",
    items: ["Landing Pages", "Business Websites", "E-commerce", "SEO"],
    href: "/website",
    cta: "Get a Website",
  },
  {
    id: "cac",
    icon: BuildingOfficeIcon,
    title: "Business Incorporation (CAC)",
    description:
      "Fast, compliant registration handled by accredited agents — Business Name, LTD, PLC, and NGO.",
    items: ["Business Name", "Private Ltd (LTD)", "PLC", "NGO / Trustees"],
    href: "/pricing",
    cta: "Register Now",
  },
  {
    id: "legal",
    icon: DocumentCheckIcon,
    title: "Legal Documentation",
    description:
      "Lawyer-drafted contracts, agreements, and compliance documents tailored to Nigerian law.",
    items: ["Shareholders Agreements", "Employment Contracts", "Service Agreements", "T&C / Privacy"],
    href: "/tools/document-generator",
    cta: "Draft Contracts",
  },
];

export const allInOne = [
  "Custom Software & Apps",
  "Professional Websites",
  "Business Incorporation (CAC)",
  "Legal Documents",
];

export const oldWay = [
  "Coordinating between a lawyer, CAC agent, and web developer separately",
  "Confusing legal requirements and compliance obligations",
  "Poor quality websites that don't convert customers",
  "Legal documents that don't hold up when needed",
  "Unreliable agents who disappear after payment",
];

export const newWay = [
  "Everything under one roof — lawyer, CAC agent, and developer",
  "Custom software and websites built in-house by real engineers",
  "Legally vetted documents reviewed by qualified lawyers",
  "Business incorporation done right the first time",
  "Full compliance support — CAC, FIRS, SCUML",
  "24–48 hours for Business Name (guaranteed)",
  "Ongoing support for your business growth",
];

export const stages = [
  {
    id: "launch",
    label: "Launch",
    icon: RocketLaunchIcon,
    title: "Starting a Business",
    text: "You have an idea and need to make it legal. We handle incorporation, name search, the legal setup, and a website so your brand launches properly.",
    tags: ["CAC Name Search", "Registered Business", "Starter Website"],
    href: "/services#cac",
    cta: "Start Your Launch",
  },
  {
    id: "scale",
    label: "Scale",
    icon: ArrowTrendingUpIcon,
    title: "Growing an SME",
    text: "Your business is running but you need compliance support, contracts, annual returns, and a professional digital presence to scale.",
    tags: ["Annual Returns", "Contracts & Policies", "Digital Presence"],
    href: "/services#compliance",
    cta: "Scale Your Business",
  },
  {
    id: "build",
    label: "Build",
    icon: CubeIcon,
    title: "Building a Product",
    text: "You're a startup or tech founder who needs both legal infrastructure and technical execution — contracts, compliance, websites, apps, and SaaS.",
    tags: ["Legal Foundation", "Web Apps & SaaS", "API Integrations"],
    href: "/products",
    cta: "Build Your Product",
  },
];

export const steps = [
  {
    n: "01",
    title: "Tell Us Your Needs",
    text: "We listen and recommend the best path for your business goals.",
    tags: ["Free Consultation", "Name Search"],
  },
  {
    n: "02",
    title: "We Handle Everything",
    text: "CAC registration, website development, and legal documents — all in parallel.",
    tags: ["CAC Filing", "Web Design", "Legal Docs"],
  },
  {
    n: "03",
    title: "Launch With Confidence",
    text: "Your business is legally registered, digitally present, and ready from day one.",
    tags: ["Certificate", "Website", "Ongoing Support"],
  },
];

export const stats = [
  { value: "2,000+", label: "Clients Served" },
  { value: "5+", label: "Years Experience" },
  { value: "24–48hrs", label: "Fast Turnaround" },
  { value: "4.9★", label: "Client Rating" },
];

export const testimonials = [
  {
    name: "Madam Julit Onyema",
    role: "Groceries · Kogi State",
    quote:
      "I didn't think it was possible to register my business name in less than 24 hours without leaving my shop. JurisTech made it happen — the certificate came straight to my phone.",
  },
  {
    name: "Maryam Muftaudeen",
    role: "Tech Startup Founder · Abuja",
    quote:
      "We needed company registration, a shareholders agreement, and a website. JurisTech handled everything in-house. Certificate in 12 days.",
  },
  {
    name: "Folake Sanni",
    role: "E-commerce Entrepreneur · Abuja",
    quote:
      "I'd tried twice before with other agents and both times my application was rejected. JurisTech got it right on the first attempt — no extra charges, no excuses.",
  },
];

export const faqs = [
  {
    question: "How long does CAC registration take?",
    answer:
      "Business Name registration is approved in 24–48 hours (guaranteed). Private Limited Company (LTD) and Incorporated Trustees (NGO) typically take 4–15 working days, subject to CAC processing times. We keep you updated at every stage.",
  },
  {
    question: "Who approves my business registration?",
    answer:
      "The Corporate Affairs Commission (CAC) is the only body that approves business registrations in Nigeria. We are accredited agents who file your application correctly — but final approval comes from CAC.",
  },
  {
    question: "What documents do I need?",
    answer:
      "For Business Name: a valid ID (NIN, passport, or driver's license) and a utility bill. For LTD: IDs for all directors and shareholders. We'll send you a precise checklist after you reach out.",
  },
  {
    question: "Can I register from outside Nigeria?",
    answer:
      "Absolutely. We have clients in the UK, US, Canada, UAE, and across Europe. Everything is done digitally — you never need to be physically present in Nigeria.",
  },
  {
    question: "Do you offer free name availability search?",
    answer:
      "Yes! We check if your preferred business name is available BEFORE you pay anything. If it's taken, we suggest alternatives at no extra cost.",
  },
  {
    question: "What's the difference between Business Name and LTD?",
    answer:
      "A Business Name is a sole proprietorship — simple, fast (24–48 hours guaranteed), and low-cost. A Private Limited Company (LTD) is a separate legal entity that can have shareholders, attract investment, and limit personal liability. LTD processing takes 4–15 days (subject to CAC).",
  },
  {
    question: "Will I receive a physical certificate?",
    answer:
      "Your certificate is delivered digitally as an official PDF from CAC — fully valid for bank account opening, contracts, and all legal purposes. Physical copies can be arranged on request.",
  },
  {
    question: "How do I get started?",
    answer:
      "Click any Get Started button on this page to open a WhatsApp chat with our team. Tell us your preferred business name and we'll check if it's available — FREE, with no commitment.",
  },
];

export const gallery = {
  services1: "/images/services-1.jpg",
  services2: "/images/services-2.jpg",
};