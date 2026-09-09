const SITE_URL = "https://juristech.com.ng";

export const metadata = {
  title: "Business Launch — JurisTech Lab Limited",
  description:
    "Company registration, professional website, essential legal documents and digital setup — handled in one launch package. ₦225,000. Start your business properly with JurisTech Lab.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Business Launch — JurisTech Lab Limited",
    description:
      "Don't just register your business. Build it properly. Company registration, professional website, legal documents and digital setup in one package.",
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
