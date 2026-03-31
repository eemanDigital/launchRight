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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MarqueeBar />
      <ProblemSolution />
      <Process />
      <Testimonials />
      <Pricing />
      <ServiceLinks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
