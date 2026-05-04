"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const categories = ["All", "Legal Tips", "CAC Guide", "CAC & Compliance", "Tech", "Founder Notes"];

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <div className="pt-24 pb-12 bg-navy">
        <div className="container-wide">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gold font-semibold text-sm uppercase tracking-wider">
              Resources
            </motion.span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
              The JurisTech Blog
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Practical guides on Nigerian business law, CAC registration, compliance, and legal-tech.
            </p>
          </div>
        </div>
      </div>

      <div className="container-wide py-12">
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-navy text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-navy/90 to-navy-light flex items-center justify-center">
                <span className="text-5xl">{post.category === "CAC Guide" ? "📋" : post.category === "Legal Tips" ? "⚖️" : post.category === "CAC & Compliance" ? "📊" : post.category === "Tech" ? "💻" : "📝"}</span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>

                <h2 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {new Date(post.date).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                  <Link
                    href={`/resources/blog/${post.slug}`}
                    className="flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
                    Read more <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No posts in this category yet. Check back soon!</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
