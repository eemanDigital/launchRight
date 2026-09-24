"use client";

import { motion } from "framer-motion";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
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
    { name: "Custom Software", href: "/services#software" },
    { name: "Website Dev", href: "/services#web" },
    { name: "CAC Registration", href: "/services#cac" },
    { name: "Legal Documents", href: "/services#legal" },
    { name: "Compliance", href: "/services#compliance" },
  ];

  const socialLinks = [
    { name: "WhatsApp", href: "https://wa.me/message/KTFL2G2JM3JTP1" },
    { name: "Instagram", href: "https://instagram.com/juristech" },
    { name: "Twitter", href: "https://twitter.com/juristech" },
  ];

  const linkColumns = [
    { title: "Quick Links", links: quickLinks },
    { title: "Services", links: serviceLinks },
    { title: "Resources", links: resourcesLinks },
  ];

  return (
    <footer className="bg-navy-deep relative overflow-hidden">
      {/* faint mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[440px] h-[440px] bg-blue-2/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[440px] h-[440px] bg-green-2/10 rounded-full blur-3xl" />
        {/* hairline top gradient */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative container-wide py-14 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              {/* JT monogram */}
              <span className="w-11 h-11 rounded-full bg-gradient-to-br from-navy-light to-navy border border-white/15 flex items-center justify-center shadow-lg shadow-black/30">
                <span className="text-white font-black text-sm tracking-tighter">
                  JT
                </span>
              </span>
              <div>
                <p className="text-white font-bold tracking-tight">
                  JurisTech<span className="text-green-2">.</span>
                </p>
                <p className="text-[10px] text-white/40 tracking-widest uppercase">
                  Legal · Digital · Technical
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm mb-6 max-w-md leading-relaxed">
              We build custom software, professional websites, and handle
              business incorporation — a full-service Nigerian studio led by a
              practising lawyer who codes.
            </p>
            <div className="space-y-3 text-sm text-white/50">
              <p className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 mt-0.5 text-green-2 flex-shrink-0" />
                Suite 412, IT Igbani Street, MKK Plaza, Jabi Abuja
              </p>
              <p className="flex items-center gap-2.5">
                <PhoneIcon className="w-4 h-4 text-green-2 flex-shrink-0" />
                <a
                  href="tel:08067234189"
                  className="hover:text-white transition-colors">
                  08067234189
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <EnvelopeIcon className="w-4 h-4 text-green-2 flex-shrink-0" />
                <a
                  href="mailto:info@juristech.com.ng"
                  className="hover:text-white transition-colors">
                  info@juristech.com.ng
                </a>
              </p>
            </div>
          </div>

          {linkColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white/80 font-semibold text-sm mb-4 tracking-wide uppercase">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/45 hover:text-green-2 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4 tracking-wide uppercase">
              Follow Us
            </h4>
            <div className="space-y-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white/45 hover:text-green-2 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="https://wa.me/message/KTFL2G2JM3JTP1"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 text-white/80 text-xs font-semibold px-4 py-2 hover:bg-white/10 hover:border-green-2/40 hover:text-white transition-colors">
              <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4 text-green-2" />
              Chat with us
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} JurisTech. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-white/30 text-xs">
            <span className="w-2 h-2 bg-green-2 rounded-full animate-pulse mr-1.5"></span>
            All systems operational
          </div>
        </motion.div>
      </div>
    </footer>
  );
}