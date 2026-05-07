import "./globals.css";
import FacebookPixel from "@/components/FacebookPixel";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import OrganizationSchema from "@/components/OrganizationSchema";
import WebsiteSchema from "@/components/WebsiteSchema";
import { SpeedInsights } from "@vercel/speed-insights/next";

const SITE_URL = "https://juristech.com.ng";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "JurisTech — CAC Registration, Websites & Legal Documents Nigeria",
    template: "%s | JurisTech",
  },
  description:
    "Nigeria's legal-tech company built by a practising lawyer who codes. CAC business registration in 24-48hrs, professional websites, legal documents, and custom software. 2,000+ clients served.",
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
    "CAC accredited agent",
    "Nigerian business compliance",
    "Lukman Asinmi",
    "JurisTech",
  ],
  authors: [{ name: "Lukman Asinmi", url: SITE_URL }],
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
    alternateLocale: ["en_US"],
    siteName: "JurisTech",
    title: "JurisTech — CAC Registration, Websites & Legal Documents Nigeria",
    description:
      "Nigeria's legal-tech company built by a practising lawyer who codes. CAC registration, professional websites, legal documents, and custom software.",
    url: SITE_URL,
    images: [
      {
        url: "/image/og-image.png",
        width: 1200,
        height: 630,
        alt: "JurisTech — CAC Registration, Websites & Legal Documents Nigeria",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@juristech",
    creator: "@juristech",
    title: "JurisTech — CAC Registration, Websites & Legal Documents Nigeria",
    description:
      "Nigeria's legal-tech company built by a practising lawyer who codes. CAC registration, websites, legal documents, and software.",
    images: ["/image/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1628",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-NG">
      <head>
        <LocalBusinessSchema />
        <OrganizationSchema />
        <WebsiteSchema />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/image/logo.png" />
        <link rel="manifest" href="/browserconfig.xml" />
        <meta name="geo.region" content="NG-FC" />
        <meta name="geo.placename" content="Abuja" />
        <meta name="geo.position" content="9.0579;7.4951" />
        <meta name="ICBM" content="9.0579, 7.4951" />
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
