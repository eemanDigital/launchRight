import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
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
      <PageHero
        eyebrow="OUR SERVICES"
        title={
          <>
            Everything you need to launch,{" "}
            <span className="text-gradient-brand">operate &amp; grow.</span>
          </>
        }
        subtitle="Custom software, professional websites, CAC incorporation and Nigeria-compliant legal documents — all from one accountable team."
        period="LEGAL · DIGITAL · TECHNICAL"
      />
      <Services />
      <FAQSchema />
      <FinalCTA />
      <Footer />
    </main>
  );
}
