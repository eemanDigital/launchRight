"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="badge-gold badge mb-3 inline-flex">FROM THE BLOG</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight">
              Latest Articles
            </h2>
          </div>
          <Link
            href="/resources/blog"
            className="hidden md:flex items-center gap-1 text-gold font-medium hover:gap-2 transition-all duration-200">
            View all <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-premium bg-white overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = post.coverFallback || "/image/blog-cac-registration-guide.svg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-muted">{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2 tracking-tight">
                  {post.title}
                </h3>

                <p className="text-muted text-sm mb-5 line-clamp-2 leading-relaxed">{post.excerpt}</p>

                <Link
                  href={`/resources/blog/${post.slug}`}
                  className="flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-200">
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
      </div>
    </section>
  );
}
