"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowDownTrayIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";

const freeDownloads = [
  {
    title: "CAC Registration Checklist 2025",
    desc: "Everything you need to prepare before registering your business with CAC",
    format: "PDF",
    size: "240 KB",
  },
  {
    title: "Nigerian Business Compliance Calendar",
    desc: "Key dates for CAC annual returns, FIRS filings, and other compliance deadlines",
    format: "PDF",
    size: "180 KB",
  },
  {
    title: "5 Contracts Every Nigerian Business Needs",
    desc: "A guide to the essential legal documents that protect your business from day one",
    format: "PDF",
    size: "320 KB",
  },
];

export default function ResourcesPage() {
  const latestPosts = blogPosts.slice(0, 3);

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
              Learn, Download, Build
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Free guides, tools, and resources for Nigerian entrepreneurs.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="container-wide py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-navy">Latest Articles</h2>
            <p className="text-gray-500 mt-1">Guides on Nigerian business law and compliance</p>
          </div>
          <Link
            href="/resources/blog"
            className="hidden md:flex items-center gap-1 text-gold font-medium hover:gap-2 transition-all">
            View all articles <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="h-40 bg-gradient-to-br from-navy/90 to-navy-light flex items-center justify-center">
                <span className="text-4xl">{post.category === "CAC Guide" ? "📋" : post.category === "Legal Tips" ? "⚖️" : "📝"}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h3 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                <Link
                  href={`/resources/blog/${post.slug}`}
                  className="flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
                  Read more <ArrowRightIcon className="w-3 h-3" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="/resources/blog" className="btn-secondary">
            View all articles
          </Link>
        </div>
      </section>

      {/* Free Downloads */}
      <section id="downloads" className="bg-white border-t border-gray-100">
        <div className="container-wide py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-navy">Free Downloads</h2>
            <p className="text-gray-500 mt-2">Practical checklists and guides for Nigerian businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {freeDownloads.map((download, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface rounded-2xl p-6 border border-gray-100 hover:border-gold/30 transition-all group">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <ArrowDownTrayIcon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-bold text-navy mb-2">{download.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{download.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{download.format} · {download.size}</span>
                  <button className="text-gold text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Download <ArrowDownTrayIcon className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Explainers */}
      <section className="container-wide py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-navy">Video Explainers</h2>
          <p className="text-gray-500 mt-2">Coming soon — visual guides to Nigerian business registration</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            "How to Register a Business Name",
            "Understanding CAC Annual Returns",
            "Business Name vs LTD Explained",
          ].map((title, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 group cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <PlayCircleIcon className="w-8 h-8 text-navy" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-navy">{title}</p>
                <p className="text-xs text-gray-400 mt-1">Coming soon</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-navy py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Try Our Free Legal Document Generator
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            Generate Nigeria-compliant legal documents instantly. No login required.
          </p>
          <Link href="/tools/document-generator" className="btn-gold">
            Try It Free <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
