import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Our Services — CAC Registration, Websites, Legal Documents & Software",
  description:
    "Explore all JurisTech services: CAC business registration in 24-48hrs, professional websites, Nigeria-compliant legal documents, compliance support, and custom software development.",
  openGraph: {
    title: "Our Services — CAC Registration, Websites & Legal Documents",
    description:
      "CAC registration, professional websites, legal documents, and software development — all from one Nigerian legal-tech company.",
    url: "https://juristech.com.ng/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServiceSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <Navbar />
      <div className="pt-24 pb-12 bg-navy">
        <div className="container-wide">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Our Services
          </h1>
          <p className="text-white/60 text-center mt-4 max-w-2xl mx-auto">
            Everything you need to launch, operate, and grow your business — legally
            and digitally
          </p>
        </div>
      </div>
      <Services />
      <FAQSchema />
      <FinalCTA />
      <Footer />
    </main>
  );
}
