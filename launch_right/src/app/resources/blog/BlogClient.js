"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const categories = [
  "All",
  "Legal Tips",
  "CAC Guide",
  "CAC & Compliance",
  "Tech",
  "Founder Notes",
];

const catTint = {
  "CAC Guide": "bg-blue-2/10 text-blue-2 border-blue-2/30",
  "CAC & Compliance": "bg-blue-2/10 text-blue-2 border-blue-2/30",
  "Legal Tips": "bg-green-2/10 text-green-2 border-green-2/30",
  Tech: "bg-green-2/10 text-green-2 border-green-2/30",
  "Founder Notes": "bg-navy/[0.06] text-navy border-navy/20",
};

const iconFor = (category) => {
  switch (category) {
    case "CAC Guide":
      return "📋";
    case "CAC & Compliance":
      return "📊";
    case "Legal Tips":
      return "⚖️";
    case "Tech":
      return "💻";
    default:
      return "📝";
  }
};

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory);

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("en-NG", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <PageHero
        eyebrow="THE BLOG"
        title={
          <>
            Legal <span className="text-gradient-brand">Playbooks</span> for
            Nigerian Founders
          </>
        }
        subtitle="Practical guides on CAC registration, business compliance, legal documents, and legal-tech — written by a lawyer who codes."
        period="FREE · PRACTICAL · NIGERIA-FOCUSED"
      />

      <div className="container-wide pt-14 pb-20">
        {/* Filter rail */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                activeCategory === cat
                  ? "bg-navy text-white border-navy shadow-pop"
                  : "bg-white text-muted border-line hover:text-navy hover:border-blue-2/40"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Masthead */}
        <div className="flex items-end justify-between mb-2 px-1">
          <span className="eyebrow-label inline-flex">LATEST EDITION</span>
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-light">
            {filteredPosts.length} {filteredPosts.length === 1 ? "ARTICLE" : "ARTICLES"}
          </span>
        </div>
        <div className="h-px bg-gradient-to-r from-navy/20 via-blue-2/30 to-transparent mb-1" />
        <div className="h-px bg-line" />

        {/* Issue index — editorial rows, no cards */}
        <div key={activeCategory} className="divide-y divide-line">
          {filteredPosts.map((post, index) => {
            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                <Link
                  href={`/resources/blog/${post.slug}`}
                  className="group relative grid grid-cols-12 items-center gap-x-4 sm:gap-x-8 py-8 md:py-9 px-1 md:px-3 transition-colors hover:bg-navy/[0.02]">
                  {/* hover accent bar */}
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-2 to-transparent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                  {/* index number */}
                  <span className="hidden lg:block col-span-1">
                    <span className="text-[11px] font-bold tracking-[0.25em] text-navy/25 group-hover:text-blue-2 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>

                  {/* category + icon */}
                  <div className="col-span-4 lg:col-span-2 flex flex-col gap-3 md:flex-row md:items-center">
                    <span className="w-11 h-11 rounded-xl bg-navy/[0.04] border border-line flex items-center justify-center text-lg group-hover:bg-navy group-hover:border-navy transition-colors duration-300">
                      {iconFor(post.category)}
                    </span>
                    <span
                      className={`inline-block self-start md:self-auto px-2.5 py-1 rounded-full text-[11px] font-semibold border capitalize ${catTint[post.category] ?? catTint["Founder Notes"]}`}>
                      {post.category}
                    </span>
                  </div>

                  {/* content */}
                  <div className="col-span-8 lg:col-span-7 space-y-2">
                    <h2 className="text-lg md:text-xl font-bold text-navy tracking-tight leading-snug group-hover:text-green-2 transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-muted text-sm line-clamp-2 max-w-2xl">
                      {post.excerpt}
                    </p>
                    <p className="text-xs text-muted-light font-semibold tracking-wide flex items-center gap-2">
                      <span>{formatDate(post.date)}</span>
                      <span className="w-1 h-1 rounded-full bg-line" />
                      <span>{post.readTime}</span>
                    </p>
                  </div>

                  {/* read arrow */}
                  <div className="hidden md:flex col-span-2 lg:col-span-1 items-center justify-end">
                    <span className="w-11 h-11 rounded-full border border-line bg-white flex items-center justify-center group-hover:bg-green-2 group-hover:border-green-2 group-hover:shadow-pop transition-all duration-300">
                      <ArrowRightIcon className="w-5 h-5 text-muted group-hover:text-white transition-colors duration-300" />
                    </span>
                  </div>

                  {/* mobile read link */}
                  <span className="md:hidden col-span-12 mt-3 inline-flex items-center gap-2 text-green-2 text-sm font-semibold">
                    Read article
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <span className="text-5xl block mb-4">📂</span>
            <p className="text-muted text-lg">
              No playbooks in this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}