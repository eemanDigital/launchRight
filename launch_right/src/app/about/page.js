import Navbar from "@/components/Navbar";
import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata = {
  title: "About JurisTech — Lawyer, CAC Agent & Software Developer",
  description:
    "Learn about JurisTech — a Nigerian legal-tech company combining legal expertise, CAC accreditation, and technology. Founded by Lukman Asinmi, a practising lawyer and MERN developer.",
  openGraph: {
    title: "About JurisTech — Lawyer, CAC Agent & Software Developer",
    description:
      "Nigerian legal-tech company founded by a practising lawyer who codes. CAC-accredited agent, MERN stack developer.",
    url: "https://juristech.com.ng/about",
    type: "website",
  },
};

export default function About() {
  return (
    <>
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
