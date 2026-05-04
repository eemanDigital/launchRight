"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  CheckCircleIcon,
  MapPinIcon,
  PhoneIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = !isScrolled && pathname === "/";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Pricing", href: "/pricing" },
  ];

  const dropdownItems = {
    resources: [
      { name: "Blog", href: "/resources/blog", icon: "📝", desc: "Legal tips & business guides" },
      { name: "Free Downloads", href: "/resources#downloads", icon: "📥", desc: "Checklists & templates" },
      { name: "Document Generator", href: "/tools/document-generator", icon: "⚖️", desc: "Generate legal docs free" },
    ],
  };

  const linkBaseClasses = (path) =>
    `text-sm font-medium transition-colors duration-200 relative py-1 ${
      pathname === path
        ? "text-gold"
        : isDark
          ? "text-white/75 hover:text-white"
          : "text-gray-600 hover:text-navy"
    }`;

  return (
    <>
      <div className={`transition-colors duration-300 ${isDark ? "bg-navy-deep/80" : "bg-navy"} text-white/70 text-sm`}>
        <div className="container-wide">
          <div className="flex items-center justify-between h-10">
            <div className="hidden md:flex items-center gap-6">
              <a
                href="tel:08067234189"
                className="flex items-center gap-2 hover:text-white transition-colors">
                <PhoneIcon className="w-4 h-4 text-gold" />
                08067234189
              </a>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="truncate">Suite 412, IT Igbani Street, MKK Plaza, Jabi Abuja</span>
              </div>
            </div>
            <div className="flex items-center gap-4 md:hidden">
              <a
                href="tel:08067234189"
                className="flex items-center gap-2 hover:text-white">
                <PhoneIcon className="w-4 h-4 text-gold" />
                08067234189
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
              <span>Lawyer · CAC Agent · Developer</span>
            </div>
          </div>
        </div>
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-100/80 shadow-sm"
            : isDark
              ? "bg-transparent"
              : "bg-white/90 backdrop-blur-xl border-b border-gray-100/80 shadow-sm"
        }`}>
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-sm group-hover:shadow-gold/30 transition-shadow">
                <CheckCircleIcon className="w-5 h-5 text-white" />
              </div>
              <span
                className={`text-xl font-semibold tracking-tight transition-colors ${isDark ? "text-white" : "text-navy"}`}>
                JurisTech
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={linkBaseClasses(link.href)}>
                  {link.name}
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("resources")}
                onMouseLeave={() => setActiveDropdown(null)}>
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-1 ${
                    pathname.startsWith("/resources") || pathname.startsWith("/tools")
                      ? "text-gold"
                      : isDark
                        ? "text-white/75 hover:text-white"
                        : "text-gray-600 hover:text-navy"
                  }`}>
                  Resources
                  <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "resources" ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === "resources" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-xl shadow-xl border border-gray-100/80 p-2 overflow-hidden">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                      {dropdownItems.resources.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50/80 transition-colors group"
                          onClick={() => setActiveDropdown(null)}>
                          <span className="text-lg mt-0.5">{item.icon}</span>
                          <div>
                            <p className="text-sm font-medium text-navy group-hover:text-gold transition-colors">{item.name}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/about"
                className={linkBaseClasses("/about")}>
                About
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors duration-200 ${
                  isDark ? "text-white/75 hover:text-white" : "text-gray-600 hover:text-navy"
                }`}>
                Contact
              </Link>
              <a
                href="https://wa.me/message/KTFL2G2JM3JTP1"
                className="btn-primary text-sm py-2.5 px-5">
                Start Project
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${isDark ? "text-white hover:bg-white/10" : "text-gray-600 hover:bg-gray-100"}`}
              aria-label="Toggle menu">
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-lg lg:hidden">
            <div className="flex flex-col h-full px-6 pt-24 pb-8">
              <div className="flex-1 space-y-1">
                {[
                  ...navLinks,
                  { name: "About", href: "/about" },
                  { name: "Contact", href: "/contact" },
                ].map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 text-lg font-medium transition-colors ${
                        pathname === link.href ? "text-gold" : "text-white/80 hover:text-white"
                      }`}>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="pt-6 mt-4 border-t border-white/10">
                  <p className="text-white/40 text-xs uppercase tracking-wider font-medium mb-3">Resources</p>
                  <div className="space-y-1">
                    {dropdownItems.resources.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 py-2.5 text-white/70 hover:text-gold transition-colors">
                        <span className="text-base">{item.icon}</span>
                        <span className="text-sm">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                href="https://wa.me/message/KTFL2G2JM3JTP1"
                className="btn-gold w-full justify-center text-base py-3.5">
                Start Project
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
