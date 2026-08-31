import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import FAQSchema from "@/components/FAQSchema";

const WhoIsThisFor = dynamic(() => import("@/components/WhoIsThisFor"), {
  loading: () => <div className="min-h-[400px] bg-surface animate-pulse" />,
});
const Pillars = dynamic(() => import("@/components/Pillars"), {
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
  title:
    "JurisTech — Custom Software, Websites & Business Incorporation Nigeria",
  description:
    "Nigeria's full-service digital studio led by a practising lawyer who codes. Custom software development, professional websites, CAC business incorporation in 24-48hrs, and legal documents. 2,000+ clients served.",
  metadataBase: new URL("https://juristech.com.ng"),
  alternates: {
    canonical: "https://juristech.com.ng",
  },
  keywords: [
    "custom software development",
    "Nigeria software development",
    "website development",
    "CAC registration",
    "Nigeria business incorporation",
    "legal documents",
    "Nigerian lawyer developer",
    "software house Nigeria",
  ],
  openGraph: {
    title:
      "JurisTech — Custom Software, Websites & Business Incorporation Nigeria",
    description:
      "Nigeria's full-service digital studio built by a practising lawyer who codes. Custom software, professional websites, CAC business incorporation, and legal documents.",
    url: "https://juristech.com.ng",
    siteName: "JurisTech",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "JurisTech — Custom Software, Websites & Business Incorporation Nigeria",
    description:
      "Nigeria's full-service digital studio. Custom software, professional websites, and business incorporation — led by a lawyer who codes.",
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
      <Pillars />
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
