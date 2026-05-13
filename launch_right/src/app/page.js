import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import ProblemSolution from "@/components/ProblemSolution";
import Process from "@/components/Process";
import FounderSection from "@/components/FounderSection";
import ProductsSection from "@/components/ProductsSection";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FAQSchema from "@/components/FAQSchema";

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
