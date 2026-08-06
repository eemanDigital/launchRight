import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Our Services — Custom Software, Websites & Business Incorporation",
  description:
    "Explore all JurisTech services: custom software and apps, professional websites, CAC business incorporation in 24-48hrs, Nigeria-compliant legal documents, and compliance support.",
  openGraph: {
    title: "Our Services — Custom Software, Websites & Business Incorporation",
    description:
      "Custom software, professional websites, business incorporation, and legal documents — all from one Nigerian studio.",
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
      <div className="pt-28 pb-12 bg-navy">
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
