import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import ProblemSolution from "@/components/ProblemSolution";
import Process from "@/components/Process";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import ProductsSection from "@/components/ProductsSection";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import FounderSection from "@/components/FounderSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSchema from "@/components/FAQSchema";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SEO
        title="Nigerian Legal-Tech Company — CAC, Websites & Software | JurisTech"
        description="Built by a practising Nigerian lawyer who also codes. CAC registration, legal documents, websites, and SaaS products for Nigerian businesses."
        canonical="/"
        type="website"
        schema="organization"
      />
      <Navbar />
      <Hero />
      <MarqueeBar />
      <WhoIsThisFor />
      <ProblemSolution />
      <Process />
      <ProductsSection />
      <Testimonials />
      <BlogPreview />
      <Pricing />
      <FAQ />
      <FAQSchema />
      <FounderSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
