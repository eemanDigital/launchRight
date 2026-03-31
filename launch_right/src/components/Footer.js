"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/#faq" },
  ];

  const socialLinks = [
    { name: "WhatsApp", href: "https://wa.me/message/KTFL2G2JM3JTP1" },
    { name: "Instagram", href: "https://instagram.com/juristech" },
    { name: "Twitter", href: "https://twitter.com/juristech" },
  ];

  return (
    <footer className="bg-surface-dark py-12 border-t border-gray-100">
      <div className="container-wide">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center">
                <CheckCircleIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-navy">
                JurisTech
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-4 max-w-md">
              Nigerian business infrastructure company — CAC registration, websites, legal documents, and software development.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <p className="flex items-start gap-2">
                <MapPinIcon className="w-4 h-4 mt-0.5 text-gold" />
                Suite 412, IT Igbani Street, MKK Plaza, Jabi Abuja
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-gold" />
                <a href="tel:08067234189" className="hover:text-navy">08067234189</a>
              </p>
              <p className="flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4 text-gold" />
                <a href="mailto:hello@juristech.com" className="hover:text-navy">hello@juristech.com</a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-navy font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-navy transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-navy font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-navy transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-200 text-center text-gray-400 text-sm"
        >
          <p>© 2025 JurisTech. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
