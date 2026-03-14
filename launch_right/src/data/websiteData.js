export const websiteData = {
  // Navigation
  navLinks: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],

  // Company Info
  company: {
    name: "LaunchRight",
    tagline: "Your Complete Digital & Legal Partner",
    logo: "⚖️",
    email: "info@legaltechsolutions.ng",
    phone: "+234 123 456 7890",
    whatsapp: "+2341234567890",
    address: "123 Business Street, Lagos, Nigeria",
    cacRegNo: "RC-1234567",
  },

  // Hero Section
  hero: {
    headline: "Transform Your Business with Complete Digital & Legal Solutions",
    subheadline:
      "Web Design + CAC Registration + Branding + Digital Marketing = One Trusted Partner",
    ctaText: "Book Free Consultation",
    stats: [
      { value: "500+", label: "Businesses Registered" },
      { value: "300+", label: "Websites Built" },
      { value: "4.9/5", label: "Client Rating" },
      { value: "98%", label: "Satisfaction Rate" },
    ],
  },

  // Main Services
  mainServices: [
    {
      id: 1,
      title: "CAC Business Registration",
      description:
        "Complete legal registration of your business with CAC. Get your company incorporated quickly and compliantly.",
      icon: "⚖️",
      features: [
        "Business Name Registration",
        "Limited Liability Company (LLC)",
        "Incorporated Trustees",
        "Annual Returns Filing",
        "Compliance Management",
      ],
      startingPrice: "₦85,000",
      ctaText: "Register Now",
    },
    {
      id: 2,
      title: "Professional Web Design",
      description:
        "Custom websites that convert visitors into customers. Responsive, fast, and SEO-optimized.",
      icon: "💻",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "E-commerce Integration",
        "CMS Setup",
        "Maintenance Support",
      ],
      startingPrice: "₦250,000",
      ctaText: "Get Quote",
    },
    {
      id: 3,
      title: "Branding & Digital Identity",
      description:
        "Create a powerful brand presence across all digital platforms.",
      icon: "🎨",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Social Media Kits",
        "Business Cards",
        "Stationery Design",
      ],
      startingPrice: "₦150,000",
      ctaText: "Design Package",
    },
    {
      id: 4,
      title: "Digital Marketing",
      description:
        "Grow your business online with targeted marketing strategies.",
      icon: "📈",
      features: [
        "Social Media Marketing",
        "Google Ads",
        "Content Creation",
        "Email Marketing",
        "Analytics & Reporting",
      ],
      startingPrice: "₦100,000/mo",
      ctaText: "Start Campaign",
    },
  ],

  // Portfolio Categories
  portfolio: {
    categories: [
      { id: "web", name: "Web Design", count: 120 },
      { id: "branding", name: "Branding", count: 85 },
      { id: "ecommerce", name: "E-commerce", count: 45 },
      { id: "corporate", name: "Corporate", count: 60 },
    ],
    projects: [
      {
        id: 1,
        title: "Afara Logistics Ltd",
        category: "web",
        description: "Complete logistics company website with booking system",
        image: "/portfolio/afara.jpg",
        services: ["Web Design", "CAC Registration", "Branding"],
        url: "https://afaralogistics.com",
      },
      {
        id: 2,
        title: "TechSavvy Solutions",
        category: "web",
        description: "Tech startup website with product showcase",
        image: "/portfolio/techsavvy.jpg",
        services: ["Web Design", "SEO", "Digital Marketing"],
        url: "https://techsavvy.ng",
      },
      {
        id: 3,
        title: "Fashion House NG",
        category: "ecommerce",
        description: "E-commerce store for fashion brand",
        image: "/portfolio/fashion.jpg",
        services: ["E-commerce", "Branding", "Digital Marketing"],
        url: "https://fashionhouseng.com",
      },
      {
        id: 4,
        title: "Green Farms Ltd",
        category: "corporate",
        description: "Corporate website for agricultural business",
        image: "/portfolio/greenfarms.jpg",
        services: ["Web Design", "CAC Registration", "Content Creation"],
        url: "https://greenfarms.ng",
      },
    ],
  },

  // Process
  process: [
    {
      step: 1,
      title: "Consultation",
      description:
        "We discuss your business idea, preferred structure, and gather all CAC registration requirements.",
      icon: "🗣️",
      substeps: [
        "Business type & structure clarification",
        "Documentation and requirements check",
        "Understanding your website needs",
      ],
    },
    {
      step: 2,
      title: "Name Search & Planning",
      description:
        "We conduct CAC name availability search and create a clear roadmap for registration and website development.",
      icon: "📋",
      substeps: [
        "CAC name availability search",
        "Registration timeline planning",
        "Website structure & content outline",
      ],
    },
    {
      step: 3,
      title: "Registration Execution",
      description:
        "We process your CAC registration, prepare all legal documents, and begin building your website.",
      icon: "⚙️",
      substeps: [
        "CAC document preparation",
        "Registration submission & monitoring",
        "Website design and development",
      ],
    },
    {
      step: 4,
      title: "Approval & Project Delivery",
      description:
        "Once approved, we deliver all CAC documents, finalize your website, and prepare your official business launch.",
      icon: "🚀",
      substeps: [
        "CAC certificate & documents delivery",
        "Website launch & final optimization",
        "Business activation guidance",
      ],
    },
    {
      step: 5,
      title: "Post-Launch Support",
      description:
        "We provide ongoing guidance, updates, and support to help your business operate smoothly.",
      icon: "🛠️",
      substeps: [
        "Website maintenance & updates",
        "Business support & advisory",
        "Long-term growth assistance",
      ],
    },
  ],
  // Team
  team: [
    {
      id: 1,
      name: "Chinedu Okoro",
      role: "Legal Expert & CAC Agent",
      bio: "Over 10 years experience in business registration and legal compliance.",
      image: "/team/chinedu.jpg",
    },
    {
      id: 2,
      name: "Amina Yusuf",
      role: "Lead Web Developer",
      bio: "Specialized in creating high-converting websites with modern technologies.",
      image: "/team/amina.jpg",
    },
    {
      id: 3,
      name: "David Thompson",
      role: "Creative Director",
      bio: "Branding expert with a keen eye for design and user experience.",
      image: "/team/david.jpg",
    },
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Chioma Okafor",
      company: "TechSavvy Solutions",
      text: "LegalTech Solutions handled everything - from CAC registration to website design. Professional and efficient!",
      rating: 5,
      service: "Web Design + CAC",
    },
    {
      id: 2,
      name: "Emeka Adebayo",
      company: "Afara Logistics",
      text: "Their team transformed our business. The website brings in 3x more leads than before.",
      rating: 5,
      service: "Full Package",
    },
    {
      id: 3,
      name: "Fatima Bello",
      company: "Fashion House NG",
      text: "Excellent service! My e-commerce store is now making sales from day one.",
      rating: 5,
      service: "E-commerce + Branding",
    },
  ],

  // Blog Categories
  blogCategories: [
    { id: "legal", name: "Legal Tips", color: "bg-red-100 text-red-800" },
    { id: "web", name: "Web Design", color: "bg-blue-100 text-blue-800" },
    {
      id: "marketing",
      name: "Marketing",
      color: "bg-green-100 text-green-800",
    },
    {
      id: "business",
      name: "Business",
      color: "bg-purple-100 text-purple-800",
    },
  ],

  // FAQ
  faqs: {
    legal: [
      {
        q: "How long does CAC registration take?",
        a: "Business Name: 3-5 days, LLC: 5-7 days, Incorporated Trustees: 7-10 days.",
      },
      {
        q: "What documents are required?",
        a: "Valid ID, passport photo, utility bill for address verification.",
      },
    ],
    web: [
      {
        q: "How much does a website cost?",
        a: "Prices start from ₦250,000 for basic websites to ₦2M+ for complex solutions.",
      },
      {
        q: "Do you provide hosting?",
        a: "Yes, we provide reliable hosting with SSL certificates and regular backups.",
      },
    ],
  },

  // Contact Info
  contact: {
    phone: "+234 123 456 7890",
    email: "info@legaltechsolutions.ng",
    whatsapp: "+2341234567890",
    address: "123 Business Street, Lagos, Nigeria",
  },
};
