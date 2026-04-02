import "./globals.css";
import FacebookPixel from "@/components/FacebookPixel";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: "Register Your Business in Nigeria | JurisTech",
  description:
    "CAC business registration in 48 hours. Trusted by 2,000+ entrepreneurs. 100% online. Money-back guarantee.",
  keywords:
    "CAC registration Nigeria, business registration Nigeria, company incorporation, CAC agent Nigeria, business name registration",
  openGraph: {
    title: "Register Your Business in Nigeria | JurisTech",
    description:
      "CAC business registration in 48 hours. Trusted by 2,000+ entrepreneurs. 100% online. Money-back guarantee.",
    type: "website",
    locale: "en_NG",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
