const SITE_URL = "https://juristech.com.ng";

export const metadata = {
  title: "Business Launch — JurisTech Lab Limited",
  description:
    "Don't just register your business. Get it ready to do business. Company registration, essential legal documents, professional digital presence and customer-facing business tools in one streamlined launch. ₦225,000.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Business Launch — JurisTech Lab Limited",
    description:
      "Don't just register your business. Get it ready to do business. Legal foundation, professional business presence and customer tools handled by one team in one launch package. ₦225,000.",
    url: `${SITE_URL}/business-launch`,
    type: "website",
    locale: "en_NG",
  },
  alternates: {
    canonical: `${SITE_URL}/business-launch`,
  },
};

export default function BusinessLaunchLayout({ children }) {
  return children;
}
