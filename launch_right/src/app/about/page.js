import Navbar from "@/components/Navbar";
import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About JurisTech - Lawyer, CAC Agent & Software Developer",
  description: "Learn about JurisTech - a Nigerian business infrastructure company combining legal expertise, CAC accreditation, and technology.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <AboutPage />
      <Footer />
    </>
  );
}
