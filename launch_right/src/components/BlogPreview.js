"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";
import { ArrowRightIcon, CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);
  const featured = latestPosts[0];
  const sidePosts = latestPosts.slice(1);

  return (
    <section className="section-pad bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gold/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide">
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            <span className="badge-gold badge mb-3 inline-flex">FROM THE BLOG</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight">
              Insights &amp; Guides
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            <Link
              href="/resources/blog"
              className="hidden md:flex items-center gap-1.5 text-gold font-medium hover:gap-2.5 transition-all duration-200">
              View all <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Featured article */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group">
            <Link href={`/resources/blog/${featured.slug}`} className="block">
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[16/9] bg-white">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = featured.coverFallback || "/image/blog-cac-registration-guide.svg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${featured.categoryColor} bg-white/90 backdrop-blur-sm`}>
                    {featured.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-3 tracking-tight group-hover:text-gold-light transition-colors">
                    {featured.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">{featured.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-muted-light">
                  <span className="flex items-center gap-1.5">
                    <CalendarDaysIcon className="w-3.5 h-3.5" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ClockIcon className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <span className="text-navy/50 text-sm font-medium group-hover:text-gold flex items-center gap-1.5 transition-all duration-300">
                  Read article
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          </motion.article>

          {/* Side articles */}
          <div className="flex flex-col gap-0">
            {sidePosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group flex-1">
                <Link href={`/resources/blog/${post.slug}`} className="flex gap-5 py-6 h-full items-start">
                  <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden bg-white">
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = post.coverFallback || "/image/blog-cac-registration-guide.svg";
                      }}
                    />
                  </div>

                  <div className="flex flex-col justify-center min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${post.categoryColor}`}>
                        {post.category}
                      </span>
                      <span className="text-[10px] text-muted-light">{post.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-navy mb-1.5 group-hover:text-gold transition-colors line-clamp-2 tracking-tight leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-muted text-xs leading-relaxed line-clamp-2 mb-2">{post.excerpt}</p>

                    <span className="text-navy/40 text-xs font-medium group-hover:text-gold flex items-center gap-1 transition-all duration-300">
                      Read <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>

                {index < sidePosts.length - 1 && (
                  <div className="border-t border-gray-100" />
                )}
              </motion.article>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 md:hidden">
          <Link href="/resources/blog" className="btn-secondary">
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
}