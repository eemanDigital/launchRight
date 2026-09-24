"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);
  const featured = latestPosts[0];
  const sidePosts = latestPosts.slice(1);

  return (
    <section className="section-pad bg-surface relative overflow-hidden">
      {/* wave top */}
      <svg className="wave-divider wave-divider--top absolute top-0 left-0 text-white" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,30 C240,0 480,60 720,35 C960,10 1200,55 1440,25 L1440,0 L0,0 Z" />
      </svg>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-soft to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide">
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            <span className="eyebrow-label mb-4">FROM THE BLOG</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
              Insights &amp; <span className="text-gradient-brand">Guides</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            <Link
              href="/resources/blog"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-white text-navy text-sm font-bold px-5 py-2.5 border border-line shadow-sm hover:border-gold/40 hover:text-gold transition-all duration-200">
              View all <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* ——— Featured article ——— */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group">
            <Link href={`/resources/blog/${featured.slug}`} className="block">
              <div className="relative mb-6 rounded-3xl overflow-hidden aspect-[16/9] bg-white shadow-soft group-hover:shadow-cover transition-shadow duration-300">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = featured.coverFallback || "/image/blog-cac-registration-guide.svg";
                  }}
                />
                {/* navy cover wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
                {/* rim glow */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="chip-pill text-xs !py-1.5">
                      <span className="chip-check">✓</span>
                      {featured.category}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mt-2 tracking-tight group-hover:text-blue-2 transition-colors">
                    {featured.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">{featured.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <CalendarDaysIcon className="w-3.5 h-3.5 text-gold" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ClockIcon className="w-3.5 h-3.5 text-gold" />
                    {featured.readTime}
                  </span>
                </div>
                <span className="text-navy/60 text-sm font-bold group-hover:text-gold flex items-center gap-1.5 transition-all duration-300">
                  Read article
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          </motion.article>

          {/* ——— Side articles ——— */}
          <div className="flex flex-col gap-0 bg-white rounded-3xl border border-line shadow-soft px-6 py-4">
            {sidePosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group flex-1">
                <Link href={`/resources/blog/${post.slug}`} className="flex gap-5 py-5 h-full items-center">
                  <div className="relative flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-white border border-line-soft">
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = post.coverFallback || "/image/blog-cac-registration-guide.svg";
                      }}
                    />
                    {/* index orb */}
                    <span className="absolute -bottom-1.5 -right-1.5 w-8 h-8 rounded-full bg-navy text-white text-[10px] font-black flex items-center justify-center border-2 border-white shadow-soft">
                      {index + 1}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold tracking-widest text-gold uppercase">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-muted">{post.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-navy mb-1.5 group-hover:text-gold transition-colors line-clamp-2 tracking-tight leading-snug">
                      {post.title}
                    </h3>

                    <span className="text-navy/40 text-xs font-bold group-hover:text-gold flex items-center gap-1 transition-all duration-300">
                      Read <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>

                {index < sidePosts.length - 1 && (
                  <div className="border-t border-dashed border-line" />
                )}
              </motion.article>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 md:hidden">
          <Link href="/resources/blog" className="btn-secondary rounded-full">
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
}