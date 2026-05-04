import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocGenClientWrapper from "@/components/DocGenClientWrapper";

export const metadata = {
  title: "Legal Document Generator | JurisTech",
  description: "Generate Nigeria-compliant legal documents in minutes. Free templates for tenancy agreements, NDAs, employment letters, and more.",
};

export default function DocumentGenerator() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <div className="pt-24 pb-12 bg-navy">
        <div className="container-wide">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Legal Document Generator
            </h1>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
              Generate Nigeria-compliant legal documents in minutes. Free to download.
            </p>
          </div>
        </div>
      </div>

      <DocGenClientWrapper />

      <Footer />
    </main>
  );
}
