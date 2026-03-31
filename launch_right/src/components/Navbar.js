"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon, CheckCircleIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/#faq" },
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('/')) {
      window.location.href = href;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const isDark = !isScrolled;

  return (
    <>
      <div className="bg-navy text-white/70 text-sm">
        <div className="container-wide">
          <div className="flex items-center justify-between h-10">
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:08067234189" className="flex items-center gap-2 hover:text-white transition-colors">
                <PhoneIcon className="w-4 h-4 text-gold" />
                08067234189
              </a>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-gold" />
                Suite 412, IT Igbani Street, MKK Plaza, Jabi Abuja
              </div>
            </div>
            <div className="flex items-center gap-4 md:hidden">
              <a href="tel:08067234189" className="flex items-center gap-2 hover:text-white">
                <PhoneIcon className="w-4 h-4 text-gold" />
                08067234189
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
              <span>CAC-Accredited Agent</span>
            </div>
          </div>
        </div>
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm"
            : "bg-navy/95 backdrop-blur-sm"
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center">
                  <CheckCircleIcon className="w-5 h-5 text-white" />
                </div>
                <span className={`text-xl font-semibold ${isDark ? "text-white" : "text-navy"}`}>
                  JurisTech
                </span>
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors ${
                    isDark ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-navy"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://wa.me/message/KTFL2G2JM3JTP1"
                className="btn-primary"
              >
                Get Started
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${isDark ? "text-white" : "text-gray-600"}`}
              aria-label="Toggle menu"
            >
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
            className="fixed inset-0 z-40 bg-navy lg:hidden pt-20"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 -mt-20">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-2xl font-semibold text-white"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="https://wa.me/message/KTFL2G2JM3JTP1"
                className="btn-gold text-lg"
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
