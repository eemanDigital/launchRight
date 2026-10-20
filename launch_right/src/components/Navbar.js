"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PHONE = "08067234189";
const EMAIL = "info@juristech.com.ng";
const ADDRESS = "Suite 412, IT Igbani Street, MKK Plaza, Jabi Abuja";
const WHATSAPP = "https://wa.me/message/KTFL2G2JM3JTP1";

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.16c-.24.68-1.42 1.31-1.95 1.36-.53.05-1.03.24-3.53-.74-2.98-1.17-4.85-4.25-5-4.45-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.15 1.02-2.44.27-.29.59-.36.79-.36.19 0 .39 0 .56.01.19.01.44-.07.68.52.24.59.83 2.05.9 2.2.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.75 1.23 1.6 1.99 1.11.99 2.05 1.29 2.34 1.44.29.15.46.12.63-.07.17-.2.72-.84.92-1.13.2-.29.39-.24.65-.14.27.09 1.7.8 1.99.95.29.15.48.22.56.35.07.12.07.71-.17 1.39Z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5.2" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.1" cy="6.9" r="1.05" fill="currentColor" stroke="none" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.53 3h3.02l-6.6 7.55L21.75 21h-5.9l-4.62-6.04L5.94 21H2.92l7.06-8.07L2.25 3h6.05l4.18 5.52L17.53 3Zm-1.06 16.2h1.67L7.6 4.71H5.8l10.67 14.49Z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6.94 5.01a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.46h3.34V21H3.3V8.46Zm5.48 0h3.2v1.71h.05a3.5 3.5 0 0 1 3.15-1.73c3.37 0 3.99 2.22 3.99 5.1V21h-3.34v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V21H8.78V8.46Z" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M14.5 8.5V6.8c0-.8.2-1.2 1.3-1.2h1.6V2.6L14.5 2.5c-2.6 0-4 1.5-4 4.1v1.9H8V12h2.5v9h4V12h2.6l.4-3.5h-3Z" />
  </svg>
);

const socialLinks = [
  { name: "WhatsApp", href: WHATSAPP, Icon: WhatsAppIcon },
  { name: "Facebook", href: "https://facebook.com/juristech", Icon: FacebookIcon },
  { name: "Instagram", href: "https://instagram.com/juristech", Icon: InstagramIcon },
  { name: "Twitter", href: "https://twitter.com/juristech", Icon: TwitterIcon },
  { name: "LinkedIn", href: "https://linkedin.com/company/juristech", Icon: LinkedinIcon },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/products" },
  { name: "Blogs", href: "/resources/blog" },
  { name: "About Us", href: "/about" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* ——— Contact bar ——— */}
        <div
          className={`overflow-hidden bg-white border-b border-border transition-all duration-500 ease-in-out ${
            isScrolled ? "max-h-0 opacity-0" : "max-h-9 opacity-100"
          }`}>
          <div className="relative">
            <div className="container-wide relative flex items-center justify-between h-9">
              {/* Contact items */}
              <div className="hidden lg:flex items-center gap-6 min-w-0">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-1.5 text-xs text-text-light hover:text-navy transition-colors whitespace-nowrap">
                  <PhoneIcon className="w-3.5 h-3.5 text-blue-2 flex-shrink-0" />
                  {PHONE}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-1.5 text-xs text-text-light hover:text-navy transition-colors whitespace-nowrap">
                  <EnvelopeIcon className="w-3.5 h-3.5 text-green-2 flex-shrink-0" />
                  {EMAIL}
                </a>
                <span className="flex items-center gap-1.5 text-xs text-text-light min-w-0">
                  <MapPinIcon className="w-3.5 h-3.5 text-blue-2 flex-shrink-0" />
                  <span className="truncate">{ADDRESS}</span>
                </span>
              </div>

              {/* Compact on mobile: phone only */}
              <a
                href={`tel:${PHONE}`}
                className="lg:hidden flex items-center gap-1.5 text-xs text-text-light">
                <PhoneIcon className="w-3.5 h-3.5 text-blue-2" />
                {PHONE}
              </a>

              {/* Angled social cluster — full-bleed to the right edge */}
              <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-[19rem] items-center justify-end pl-12 pr-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] topbar-social-clip bg-navy">
                {socialLinks.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="w-6 h-6 rounded-full bg-white/10 border border-white/20 grid place-items-center text-white/70 hover:bg-white hover:text-navy hover:border-white transition-all duration-300">
                    <Icon className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ——— Navigation bar ——— */}
        <nav
          className={`bg-white transition-shadow duration-300 ${
            isScrolled
              ? "border-b border-border shadow-[0_4px_20px_rgba(9,33,84,0.06)]"
              : "border-b border-border-light"
          }`}>
          <div className="container-wide">
            <div className="flex items-center justify-between gap-6 h-[58px]">
              {/* Logo: rounded icon tile + wordmark */}
              <Link
                href="/"
                className="group flex items-center gap-2.5 flex-shrink-0"
                aria-label="JurisTech — home">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-2 to-blue grid place-items-center shadow-[0_4px_12px_rgba(7,88,247,0.28)] transition-transform duration-300 group-hover:scale-105">
                  <span className="text-white text-[13px] font-black tracking-tighter">
                    JT
                  </span>
                </span>
                <span className="leading-none">
                  <span className="block text-[15px] font-bold text-navy tracking-tight">
                    JurisTech<span className="text-green-2">.</span>
                  </span>
                  <span className="block mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-light">
                    Legal · Digital
                  </span>
                </span>
              </Link>

              {/* Centre links */}
              <div className="hidden lg:flex flex-1 items-center justify-center gap-8">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative text-[13.5px] font-medium transition-colors duration-200 py-1 ${
                        isActive
                          ? "text-navy"
                          : "text-text-light hover:text-navy"
                      }`}>
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-blue"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* CTA */}
              <a href={WHATSAPP} className="btn-pill hidden lg:inline-flex flex-shrink-0">
                Get A Quote
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden -mr-1 p-2 rounded-lg text-navy hover:bg-surface transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}>
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white lg:hidden">
            <div className="flex flex-col h-full px-6 pt-28 pb-8 overflow-y-auto">
              <nav className="flex-1 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 text-lg font-medium transition-colors ${
                        pathname === link.href
                          ? "text-blue"
                          : "text-text-light hover:text-navy"
                      }`}>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-border space-y-3 text-sm text-text-light">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-2.5 hover:text-navy transition-colors">
                  <PhoneIcon className="w-4 h-4 text-blue-2" />
                  {PHONE}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2.5 hover:text-navy transition-colors">
                  <EnvelopeIcon className="w-4 h-4 text-green-2" />
                  {EMAIL}
                </a>
                <p className="flex items-start gap-2.5">
                  <MapPinIcon className="w-4 h-4 text-blue-2 mt-0.5 flex-shrink-0" />
                  {ADDRESS}
                </p>
              </div>

              <div className="flex items-center gap-2.5 mt-6">
                {socialLinks.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="w-9 h-9 rounded-full border border-border bg-surface grid place-items-center text-text-light hover:text-white hover:bg-blue hover:border-blue transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              <a href={WHATSAPP} className="btn-pill w-full mt-6">
                Get A Quote
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}