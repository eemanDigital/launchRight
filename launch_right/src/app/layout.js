import "./globals.css";
import FacebookPixel from "@/components/FacebookPixel";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEO from "@/components/SEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import OrganizationSchema from "@/components/OrganizationSchema";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL("https://juristech.com.ng"),
  title: {
    default: "Nigerian Legal-Tech Company — CAC, Websites & Software | JurisTech",
    template: "%s | JurisTech",
  },
  description:
    "Built by a practising Nigerian lawyer who also codes. CAC registration, legal documents, websites, and SaaS products for Nigerian businesses. 2,000+ clients served.",
  keywords: [
    "CAC registration Nigeria",
    "business registration Nigeria",
    "company incorporation Nigeria",
    "CAC agent Nigeria",
    "business name registration",
    "company registration Abuja",
    "website development Nigeria",
    "legal documents Nigeria",
    "legal tech Nigeria",
    "lawyer developer Nigeria",
    "Lukman Asinmi",
    "JurisTech",
  ],
  authors: [{ name: "Lukman Asinmi", url: "https://juristech.com.ng" }],
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
    title: "Nigerian Legal-Tech Company | JurisTech",
    description:
      "Built by a practising Nigerian lawyer who also codes. CAC registration, legal documents, websites, and SaaS products.",
    url: "https://juristech.com.ng",
    images: [
      {
        url: "/image/logo.png",
        width: 1200,
        height: 630,
        alt: "JurisTech - Nigerian Legal-Tech Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@juristech",
    creator: "@juristech",
    title: "Nigerian Legal-Tech Company | JurisTech",
    description:
      "Built by a practising Nigerian lawyer who also codes.",
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
        <LocalBusinessSchema />
        <OrganizationSchema />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0B1F3A" />
      </head>
      <body className="font-body">
        <FacebookPixel />
        <GoogleAnalytics />
        {children}
        <WhatsAppFloat />
        <SpeedInsights />
      </body>
    </html>
  );
}
