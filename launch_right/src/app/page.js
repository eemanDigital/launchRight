import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";

import ProblemSolution from "@/components/ProblemSolution";
import Requirements from "@/components/Requirements";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import AboutJurisTech from "@/components/AboutJurisTech";
import FounderSection from "@/components/FounderSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MarqueeBar />

      <Requirements />
      <ProblemSolution />
      <Services />
      <Process />
      <WhyUs />
      <Testimonials />
      <AboutJurisTech />
      <FounderSection />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
