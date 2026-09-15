"use client";

import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  PlayIcon,
  HomeIcon,
  Squares2X2Icon,
  CubeIcon,
  TagIcon,
  BookOpenIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { trackWhatsAppClick } from "@/lib/analytics";
import Link from "next/link";

export default function Hero() {
  const pathname = usePathname();

  const stats = [
    { value: "2,000+", label: "Clients Served" },
    { value: "5+", label: "Years Experience" },
    { value: "24-48h", label: "Fast Turnaround" },
    { value: "4.9", label: "Client Rating" },
  ];

  const navItems = [
    { icon: HomeIcon, label: "Home", href: "/" },
    { icon: Squares2X2Icon, label: "Services", href: "/services" },
    { icon: CubeIcon, label: "Products", href: "/products" },
    { icon: TagIcon, label: "Pricing", href: "/pricing" },
    { icon: BookOpenIcon, label: "Resources", href: "/resources" },
    { icon: UserIcon, label: "About", href: "/about" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    if (href === "/resources")
      return (
        pathname.startsWith("/resources") || pathname.startsWith("/tools")
      );
    return pathname === href;
  };

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.06, delayChildren: 0.5 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden">
      <div className="absolute inset-0 hero-gradient-mesh" />

      {/* Ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-green/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0,82,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,82,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-deep to-transparent" />

      <div className="relative container-ultra pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2.5">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">
              Nigeria&apos;s Full-Stack Digital Studio
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-extrabold text-white leading-[1.04] tracking-tight break-words">
            Build Your Business{" "}
            <span className="text-gradient-gold block">
              Digitally &amp; Legally
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-white/65 leading-relaxed">
            Custom software, professional websites, and business incorporation
            — led by a practising lawyer who codes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/message/KTFL2G2JM3JTP1"
              className="btn-gold text-base shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30"
              onClick={() => trackWhatsAppClick("Hero CTA - Start Project")}>
              Start Your Project
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <Link
              href="/tools/document-generator"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 backdrop-blur-sm border border-white/15 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/25 transition-all duration-300">
              <PlayIcon className="w-4 h-4" />
              Explore Our Tools
            </Link>
          </motion.div>

          {/* Nav menu — horizontal pill strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 hidden lg:block">
            <motion.p className="text-white/35 text-[11px] font-bold uppercase tracking-[0.28em] mb-5">
              Explore JurisTech
            </motion.p>
            <motion.nav
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl">
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                const snakeColor = active
                  ? "rgba(255,255,255,0.95)"
                  : "rgba(0,82,255,0.9)";
                return (
                  <motion.div key={item.href} variants={fadeUp}>
                    <span className="group relative inline-flex rounded-full p-[1.5px] overflow-hidden">
                      {/* Snake-like border: rotating conic segment */}
                      <span
                        className="absolute -inset-[150%] animate-spin [animation-duration:2.6s] pointer-events-none group-hover:[animation-duration:0.9s]"
                        style={{
                          animationDelay: `${-index * 0.5}s`,
                          backgroundImage: `conic-gradient(from 0deg, transparent 0deg, ${snakeColor} 70deg, transparent 140deg)`,
                        }}
                      />
                      <Link
                        href={item.href}
                        className={`relative inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full transition-colors duration-300 ${
                          active
                            ? "bg-gradient-to-r from-gold to-gold-light text-white font-bold shadow-lg shadow-gold/25 scale-[1.04]"
                            : "bg-navy text-white/70 font-medium hover:text-white group-hover:bg-white/[0.06]"
                        }`}>
                        <item.icon
                          className={`w-3.5 h-3.5 ${
                            active ? "text-white" : "text-gold"
                          }`}
                        />
                        {item.label}
                      </Link>
                    </span>
                  </motion.div>
                );
              })}
            </motion.nav>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-16 w-full max-w-3xl pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="flex flex-col items-center">
                  <p className="text-white text-2xl sm:text-3xl font-bold tracking-tight font-display">
                    {stat.value}
                    {stat.suffix || ""}
                  </p>
                  <p className="text-white/45 text-[11px] mt-1.5 font-medium uppercase tracking-widest">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}