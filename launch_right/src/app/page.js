import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import ProblemSolution from "@/components/ProblemSolution";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import ServiceLinks from "@/components/ServiceLinks";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSchema from "@/components/FAQSchema";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SEO
        title="Register Your Business in Nigeria | JurisTech"
        description="CAC business registration in 48 hours. Trusted by 2,000+ entrepreneurs. 100% online. Money-back guarantee."
        canonical="/"
        type="website"
        schema="organization"
      />
      <Navbar />
      <Hero />
      <MarqueeBar />
      <ProblemSolution />
      <Process />
      <Testimonials />
      <Pricing />
      <ServiceLinks />
      <FAQ />
      <FAQSchema />
      <FinalCTA />
      <Footer />
    </main>
  );
}
