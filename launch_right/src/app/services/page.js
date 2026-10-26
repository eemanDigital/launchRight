import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ServicePageHero from "@/components/ServicePageHero";
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
    siteName: "JurisTech",
    type: "website",
    locale: "en_NG",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services — Custom Software, Websites & Business Incorporation",
    description:
      "Custom software, professional websites, business incorporation, and legal documents — all from one Nigerian studio.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://juristech.com.ng/services",
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
      <ServicePageHero />
      <Services />
      <FAQSchema />
      <FinalCTA variant="services" />
      <Footer />
    </main>
  );
}
