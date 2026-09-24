"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
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

      <PageHero
        eyebrow="RESOURCES"
        title={
          <>
            Learn, Download,{" "}
            <span className="text-gradient-brand">Build.</span>
          </>
        }
        subtitle="Free guides, tools, and resources for Nigerian entrepreneurs."
        period="GUIDES · TOOLS · CHECKLISTS"
      />

      {/* Blog Section */}
      <section className="container-wide py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="eyebrow-label mb-3 inline-flex">LATEST</span>
            <h2 className="text-2xl font-extrabold text-navy tracking-tight">Latest Articles</h2>
            <p className="text-muted mt-1">Guides on Nigerian business law and compliance</p>
          </div>
          <Link
            href="/resources/blog"
            className="hidden md:flex items-center gap-2 rounded-full border border-green-2/40 text-green-2 font-semibold text-sm px-5 py-2.5 hover:bg-green-2/10 transition-all">
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
              className="bg-white rounded-2xl overflow-hidden border border-line hover:shadow-pop hover:-translate-y-1 transition-all group">
              <div className="h-40 bg-gradient-to-br from-navy to-navy-light relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-2/50 rounded-full blur-2xl" />
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-2/50 rounded-full blur-2xl" />
                </div>
                <span className="text-4xl relative">{post.category === "CAC Guide" ? "📋" : post.category === "Legal Tips" ? "⚖️" : "📝"}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-light">{post.readTime}</span>
                </div>
                <h3 className="font-bold text-navy mb-2 group-hover:text-green-2 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                <Link
                  href={`/resources/blog/${post.slug}`}
                  className="flex items-center gap-1.5 text-green-2 text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Read more <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="/resources/blog" className="btn-secondary rounded-full">
            View all articles
          </Link>
        </div>
      </section>

      {/* Free Downloads */}
      <section id="downloads" className="bg-white border-t border-line">
        <div className="container-wide py-16">
          <div className="text-center mb-10">
            <span className="eyebrow-label mb-3 inline-flex">FREE DOWNLOADS</span>
            <h2 className="text-2xl font-extrabold text-navy tracking-tight">Free Downloads</h2>
            <p className="text-muted mt-2">Practical checklists and guides for Nigerian businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {freeDownloads.map((download, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface rounded-2xl p-6 border border-line hover:border-green-2/40 hover:shadow-pop transition-all group">
                <div className="w-12 h-12 bg-green-2/15 border border-green-2/30 rounded-xl flex items-center justify-center mb-4">
                  <ArrowDownTrayIcon className="w-6 h-6 text-green-2" />
                </div>
                <h3 className="font-bold text-navy mb-2 tracking-tight">{download.title}</h3>
                <p className="text-muted text-sm mb-4">{download.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-light">{download.format} · {download.size}</span>
                  <button className="text-green-2 text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
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
          <span className="eyebrow-label mb-3 inline-flex">VIDEO EXPLAINERS</span>
          <h2 className="text-2xl font-extrabold text-navy tracking-tight">Video Explainers</h2>
          <p className="text-muted mt-2">Coming soon — visual guides to Nigerian business registration</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            "How to Register a Business Name",
            "Understanding CAC Annual Returns",
            "Business Name vs LTD Explained",
          ].map((title, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-line group cursor-pointer hover:shadow-pop transition-all">
              <div className="h-48 bg-gradient-to-br from-blue-soft to-blue-pale flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-2/30 rounded-full blur-2xl" />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-2/30 rounded-full blur-2xl" />
                </div>
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg relative">
                  <PlayCircleIcon className="w-8 h-8 text-blue-2" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-navy">{title}</p>
                <p className="text-xs text-muted-light mt-1">Coming soon</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="band-cover py-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient-cover" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-blue-2/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-green-2/20 rounded-full blur-3xl" />
        </div>
        <div className="relative container-wide text-center">
          <h2 className="text-2xl font-extrabold text-white mb-4 tracking-tight">
            Try Our Free Legal Document Generator
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            Generate Nigeria-compliant legal documents instantly. No login required.
          </p>
          <Link href="/tools/document-generator" className="btn-gradient-green">
            Try It Free <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
