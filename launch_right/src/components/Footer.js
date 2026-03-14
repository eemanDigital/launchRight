"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  const contactLinks = [
    { name: "WhatsApp", href: "https://wa.me/2348000000000", icon: "💬" },
    { name: "Email", href: "mailto:hello@juristech.com", icon: "✉️" },
    { name: "Instagram", href: "https://instagram.com/juristech", icon: "📸" },
    { name: "Twitter/X", href: "https://twitter.com/juristech", icon: "𝕏" },
  ];

  return (
    <footer className="bg-[#F0EDE8] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#C9972B] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.08 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>
                </svg>
              </div>
              <span className="text-2xl">
                <span className="font-['Cormorant_Garamond'] font-bold text-[#C9972B]">Juris</span>
                <span className="font-['DM_Sans'] font-semibold text-[#0A1628]">Tech</span>
              </span>
            </div>
            <p className="text-[#6B7280] text-sm mb-4">Legalise Your Vision.</p>
            <div className="bg-[#C9972B]/10 px-4 py-2 rounded-full inline-block">
              <span className="text-[#C9972B] text-sm font-semibold">CAC-Accredited Agent</span>
            </div>
          </div>

          <div>
            <h4 className="text-[#0A1628] font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#6B7280] hover:text-[#C9972B] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#0A1628] font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              {contactLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B7280] hover:text-[#C9972B] transition-colors flex items-center gap-2"
                  >
                    <span>{link.icon}</span> {link.name}
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
          className="border-t border-[#C9972B]/20 pt-8 text-center text-[#6B7280] text-sm"
        >
          <p>© 2025 JurisTech | Privacy Policy | Terms of Service</p>
        </motion.div>
      </div>
    </footer>
  );
}