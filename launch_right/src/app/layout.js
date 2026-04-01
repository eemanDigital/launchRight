import "./globals.css";
import FacebookPixel from "@/components/FacebookPixel";

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
        <meta name="theme-color" content="#0A1628" />
      </head>
      <body className="font-body">
        <FacebookPixel />
        {children}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/message/KTFL2G2JM3JTP1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BD5A] transition-all flex items-center justify-center"
            aria-label="Chat on WhatsApp">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.002a9.263 9.263 0 01-5.033-1.484l-.361-.214-3.76.982.998-3.677-.236-.375a9.286 9.286 0 01-1.438-4.946c0-5.139 4.19-9.321 9.334-9.321 2.495 0 4.838.967 6.601 2.722 1.764 1.755 2.734 4.097 2.734 6.599 0 5.139-4.19 9.321-9.334 9.321m8.949-16.459a11.301 11.301 0 00-8.949-4.324c-6.26 0-11.354 5.091-11.354 11.355 0 2.002.523 3.902 1.514 5.57L0 24l6.334-1.652a11.314 11.314 0 005.656 1.505c6.26 0 11.354-5.091 11.354-11.355 0-3.039-1.193-5.893-3.355-8.039" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
