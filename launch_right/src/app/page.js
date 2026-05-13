import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import FAQSchema from "@/components/FAQSchema";

const WhoIsThisFor = dynamic(() => import("@/components/WhoIsThisFor"), {
  loading: () => <div className="min-h-[400px] bg-surface animate-pulse" />,
});
const ProblemSolution = dynamic(() => import("@/components/ProblemSolution"), {
  loading: () => <div className="min-h-[400px] bg-surface animate-pulse" />,
});
const Process = dynamic(() => import("@/components/Process"), {
  loading: () => <div className="min-h-[400px] bg-surface animate-pulse" />,
});
const FounderSection = dynamic(() => import("@/components/FounderSection"), {
  loading: () => <div className="min-h-[400px] bg-surface animate-pulse" />,
});
const ProductsSection = dynamic(() => import("@/components/ProductsSection"), {
  loading: () => <div className="min-h-[400px] bg-surface animate-pulse" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="min-h-[400px] bg-surface animate-pulse" />,
});
const Pricing = dynamic(() => import("@/components/Pricing"), {
  loading: () => <div className="min-h-[400px] bg-surface animate-pulse" />,
});
const BlogPreview = dynamic(() => import("@/components/BlogPreview"), {
  loading: () => <div className="min-h-[400px] bg-surface animate-pulse" />,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="min-h-[400px] bg-surface animate-pulse" />,
});
const FinalCTA = dynamic(() => import("@/components/FinalCTA"), {
  loading: () => <div className="min-h-[400px] bg-surface animate-pulse" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[400px] bg-surface animate-pulse" />,
});

export const metadata = {
  title: "JurisTech — CAC Registration, Websites & Legal Documents Nigeria",
  description:
    "Nigeria's legal-tech company built by a practising lawyer who codes. CAC business registration in 24-48hrs, professional websites, legal documents, and custom software. 2,000+ clients served.",
  metadataBase: new URL("https://juristech.com.ng"),
  alternates: {
    canonical: "https://juristech.com.ng",
  },
  keywords: [
    "CAC registration",
    "Nigeria business registration",
    "legal documents",
    "website development",
    "legal tech",
    "Nigerian lawyer",
  ],
  openGraph: {
    title: "JurisTech — CAC Registration, Websites & Legal Documents Nigeria",
    description:
      "Nigeria's legal-tech company built by a practising lawyer who codes. CAC business registration in 24-48hrs, professional websites, legal documents, and custom software.",
    url: "https://juristech.com.ng",
    siteName: "JurisTech",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/image/og-image.png",
        width: 1200,
        height: 630,
        alt: "JurisTech legal-tech services in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JurisTech — CAC Registration, Websites & Legal Documents Nigeria",
    description:
      "Nigeria's legal-tech company built by a practising lawyer who codes. CAC business registration in 24-48hrs, professional websites, legal documents, and custom software.",
    images: ["/image/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MarqueeBar />
      <WhoIsThisFor />
      <ProblemSolution />
      <Process />
      <FounderSection />
      <ProductsSection />
      <Testimonials />
      <Pricing />
      <BlogPreview />
      <FAQ />
      <FAQSchema />
      <FinalCTA />
      <Footer />
    </main>
  );
}
