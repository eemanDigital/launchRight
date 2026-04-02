import Navbar from "@/components/Navbar";
import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata = {
  title: "About JurisTech - Lawyer, CAC Agent & Software Developer",
  description:
    "Learn about JurisTech - a Nigerian business infrastructure company combining legal expertise, CAC accreditation, and technology.",
  openGraph: {
    title: "About JurisTech | JurisTech",
    description:
      "Nigerian business infrastructure company - Lawyer, CAC Agent & Software Developer",
    url: "https://juristech.com.ng/about",
  },
};

export default function About() {
  return (
    <>
      <SEO
        title={metadata.title}
        description={metadata.description}
        canonical="/about"
        type="website"
        schema="organization"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />
      <Navbar />
      <AboutPage />
      <Footer />
    </>
  );
}
