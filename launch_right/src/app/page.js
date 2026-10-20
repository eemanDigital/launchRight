import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import FAQSchema from "@/components/FAQSchema";
import AboutPreviewSection from "@/components/home/AboutPreviewSection";
import ServicesSection from "@/components/home/ServicesSection";
import AllInOneSection from "@/components/home/AllInOneSection";
import OldVsNew from "@/components/home/OldVsNew";
import HowWeWork from "@/components/home/HowWeWork";
import WhoFor from "@/components/home/WhoFor";
import StatsBand from "@/components/home/StatsBand";
import HomeCTA from "@/components/home/HomeCTA";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";

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
      <AboutPreviewSection />
      {/* <ServicesSection /> */}
      <AllInOneSection />
      <OldVsNew />
      <HowWeWork />
      <WhoFor />
      <StatsBand />
      <HomeCTA />
      <TestimonialsSection />
      <FAQSection />
      <FAQSchema />
      <Footer />
    </main>
  );
}
