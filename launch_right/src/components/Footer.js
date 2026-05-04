"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const resourcesLinks = [
    { name: "Blog", href: "/resources/blog" },
    { name: "Free Downloads", href: "/resources#downloads" },
    { name: "Document Generator", href: "/tools/document-generator" },
  ];

  const serviceLinks = [
    { name: "CAC Registration", href: "/services#cac" },
    { name: "Legal Documents", href: "/services#legal" },
    { name: "Compliance", href: "/services#compliance" },
    { name: "Website Dev", href: "/services#web" },
    { name: "Custom Software", href: "/services#software" },
  ];

  const socialLinks = [
    { name: "WhatsApp", href: "https://wa.me/message/KTFL2G2JM3JTP1" },
    { name: "Instagram", href: "https://instagram.com/juristech" },
    { name: "Twitter", href: "https://twitter.com/juristech" },
  ];

  return (
    <footer className="bg-surface-dark">
      <div className="section-divider-gold" />
      <div className="container-wide py-14 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center shadow-sm">
                <CheckCircleIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-navy tracking-tight">
                JurisTech
              </span>
            </div>
            <p className="text-muted text-sm mb-6 max-w-md leading-relaxed">
              Nigerian legal-tech company — CAC registration, websites, legal documents, and software built by a practising lawyer who codes.
            </p>
            <div className="space-y-3 text-sm text-muted">
              <p className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                Suite 412, IT Igbani Street, MKK Plaza, Jabi Abuja
              </p>
              <p className="flex items-center gap-2.5">
                <PhoneIcon className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:08067234189" className="hover:text-navy transition-colors">08067234189</a>
              </p>
              <p className="flex items-center gap-2.5">
                <EnvelopeIcon className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:hello@juristech.com" className="hover:text-navy transition-colors">hello@juristech.com</a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-navy font-semibold text-sm mb-4 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-navy transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-navy font-semibold text-sm mb-4 tracking-wide uppercase">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-navy transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-navy font-semibold text-sm mb-4 tracking-wide uppercase">Resources</h4>
            <ul className="space-y-2.5">
              {resourcesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-navy transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 mt-4 border-t border-gray-100">
              <h4 className="text-navy font-semibold text-sm mb-3 tracking-wide uppercase">Follow Us</h4>
              <div className="space-y-2.5">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-muted hover:text-navy transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-200/80 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-light text-sm">&copy; {new Date().getFullYear()} JurisTech. All rights reserved.</p>
          <div className="flex items-center gap-1 text-muted-light text-xs">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse mr-1.5"></span>
            All systems operational
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
