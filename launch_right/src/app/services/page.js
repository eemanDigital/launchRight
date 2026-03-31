import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Services - CAC Registration, Websites, Legal Documents & Software",
  description: "Explore all JurisTech services: CAC business registration, professional websites, legal documents, compliance support, and custom software.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 bg-navy">
        <div className="container-wide">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Our Services
          </h1>
          <p className="text-white/60 text-center mt-4 max-w-2xl mx-auto">
            Everything you need to launch, operate, and grow your business — legally and digitally
          </p>
        </div>
      </div>
      <Services />
      <FinalCTA />
      <Footer />
    </main>
  );
}
