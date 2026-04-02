import "./globals.css";
import FacebookPixel from "@/components/FacebookPixel";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEO from "@/components/SEO";

export const metadata = {
  metadataBase: new URL("https://juristech.com.ng"),
  title: {
    default: "Register Your Business in Nigeria | JurisTech",
    template: "%s | JurisTech",
  },
  description:
    "CAC business registration in 48 hours. Trusted by 2,000+ entrepreneurs. 100% online. Money-back guarantee.",
  keywords: [
    "CAC registration Nigeria",
    "business registration Nigeria",
    "company incorporation Nigeria",
    "CAC agent Nigeria",
    "business name registration",
    "company registration Abuja",
    "website development Nigeria",
    "legal documents Nigeria",
    "CAC registration cost",
    "register business name Nigeria",
  ],
  authors: [{ name: "JurisTech", url: "https://juristech.com.ng" }],
  creator: "JurisTech",
  publisher: "JurisTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    alternateLocale: "en_US",
    siteName: "JurisTech",
    title: "Register Your Business in Nigeria | JurisTech",
    description:
      "CAC business registration in 48 hours. Trusted by 2,000+ entrepreneurs. 100% online. Money-back guarantee.",
    url: "https://juristech.com.ng",
    images: [
      {
        url: "/image/logo.png",
        width: 1200,
        height: 630,
        alt: "JurisTech - Business Registration in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@juristech",
    creator: "@juristech",
    title: "Register Your Business in Nigeria | JurisTech",
    description:
      "CAC business registration in 48 hours. Trusted by 2,000+ entrepreneurs.",
    images: ["/image/logo.png"],
  },
  robots: {
    index: "index",
    follow: "follow",
    googleBot: {
      index: "index",
      follow: "follow",
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-NG">
      <head>
        <SEO
          title={metadata.title.default}
          description={metadata.description}
          canonical="/"
          type="website"
          schema="organization"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0B1F3A" />
      </head>
      <body className="font-body">
        <FacebookPixel />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
