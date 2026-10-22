"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const categories = [
  "All",
  "CAC Guide",
  "CAC & Compliance",
  "Legal Tips",
  "Founder Notes",
];

const fallbackCover = "/image/blog-cac-registration-guide.svg";

function BlogCover({ post, className }) {
  return (
    <img
      src={post.cover}
      alt=""
      className={className}
      loading="lazy"
      onError={(event) => {
        if (event.currentTarget.src.endsWith(fallbackCover)) return;
        event.currentTarget.src = fallbackCover;
      }}
    />
  );
}

function SectionHeading({ count }) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
      <div>
        <span className="eyebrow-label">Latest articles</span>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          Practical ideas for your next step
        </h2>
      </div>
      <span className="shrink-0 pb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted sm:text-xs">
        {count} {count === 1 ? "article" : "articles"}
      </span>
    </div>
  );
}

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);
  const [featured, ...articles] = filteredPosts;

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("en-NG", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />

      <section className="relative overflow-hidden bg-navy text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-lighter"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full border-[52px] border-white/[0.035]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-green-2/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-wide relative flex min-h-[310px] flex-col items-center justify-center px-5 pb-12 pt-32 text-center sm:min-h-[360px] sm:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-2">
              JurisTech insights
            </p>
            <h1 className="mt-5 text-5xl font-black uppercase leading-none tracking-[0.02em] text-white sm:text-6xl lg:text-7xl">
              The <span className="text-green-2">Blog</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              Practical guidance on Nigerian business, CAC registration,
              compliance, and legal technology—written to help you make your
              next move with confidence.
            </p>
          </motion.div>
          <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-green-2 via-white/20 to-green-2" />
        </div>
      </section>

      <section aria-label="Browse blog categories" className="border-b border-line bg-white">
        <div className="container-wide flex flex-col items-center gap-4 py-5 sm:flex-row sm:justify-center sm:gap-7">
          <span className="shrink-0 font-serif text-lg italic text-navy/70">
            Browse the blog:
          </span>
          <div className="flex max-w-full flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-full px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] transition-colors sm:px-4 sm:text-[11px] ${
                  activeCategory === category
                    ? "bg-navy text-white"
                    : "text-muted hover:bg-green-pale hover:text-navy"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          {featured ? (
            <>
              <motion.article
                key={`featured-${featured.slug}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="relative mx-auto mb-20 max-w-6xl"
              >
                <div className="relative grid items-center md:grid-cols-[1.05fr_0.95fr]">
                  <Link
                    href={`/resources/blog/${featured.slug}`}
                    className="group relative z-0 block aspect-[4/3] overflow-hidden rounded-2xl bg-surface shadow-card sm:aspect-[1.25] md:rounded-r-none"
                    aria-label={`Read ${featured.title}`}
                  >
                    <BlogCover
                      post={featured}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </Link>

                  <div className="relative z-10 -mt-8 ml-4 rounded-2xl border border-line bg-white p-6 shadow-cover sm:ml-8 sm:p-8 md:ml-0 md:-translate-x-8 lg:p-10">
                    <span className="inline-flex items-center rounded-full bg-green-pale px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-green-dark">
                      Featured · {featured.category}
                    </span>
                    <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl">
                      <Link
                        href={`/resources/blog/${featured.slug}`}
                        className="transition-colors hover:text-green-dark"
                      >
                        {featured.title}
                      </Link>
                    </h2>
                    <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-muted sm:text-base">
                      {featured.excerpt}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDaysIcon className="h-4 w-4 text-green-dark" />
                        {formatDate(featured.date)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <ClockIcon className="h-4 w-4 text-green-dark" />
                        {featured.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/resources/blog/${featured.slug}`}
                      className="group mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-green-2 hover:text-navy"
                    >
                      Read article
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  <span className="absolute -left-3 top-5 z-20 grid h-16 w-16 rotate-[-10deg] place-items-center rounded-full bg-green-2 text-center text-[9px] font-black uppercase leading-tight tracking-wider text-navy shadow-pop sm:-left-5 sm:h-20 sm:w-20">
                    Read
                    <br />
                    the latest
                  </span>
                </div>
              </motion.article>

              <SectionHeading count={filteredPosts.length} />
              {articles.length > 0 ? (
                <div
                  key={activeCategory}
                  className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {articles.map((post, index) => (
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      className="group"
                    >
                      <Link
                        href={`/resources/blog/${post.slug}`}
                        className="block"
                      >
                        <div className="relative aspect-[1.12] overflow-hidden rounded-xl bg-surface">
                          <BlogCover
                            post={post}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          />
                          <span className="absolute left-0 top-5 -translate-x-1 rounded-r-md bg-white/95 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.16em] text-navy shadow-sm">
                            {post.category}
                          </span>
                        </div>
                        <div className="pt-4">
                          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
                            <span>{formatDate(post.date)}</span>
                            <span className="h-1 w-1 rounded-full bg-green-2" />
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight text-navy transition-colors group-hover:text-green-dark">
                            {post.title}
                          </h3>
                          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                            {post.excerpt}
                          </p>
                          <span className="mt-4 inline-flex items-center gap-2 font-serif text-sm italic text-navy transition-colors group-hover:text-green-dark">
                            Read more
                            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="mt-8 rounded-2xl bg-green-pale px-6 py-8 text-center">
                  <p className="text-sm text-muted">
                    That&apos;s all the latest content in this category. Browse
                    another topic to discover more articles.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="py-20 text-center">
              <h2 className="text-2xl font-extrabold text-navy">
                No articles in this category yet
              </h2>
              <p className="mt-3 text-muted">
                Browse all articles to explore the latest JurisTech insights.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className="mt-6 rounded-full bg-navy px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-2 hover:text-navy"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-green-pale py-14 sm:py-16">
        <div className="container-wide flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-green-dark">
              Need practical help?
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy">
              Take the next step with JurisTech.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Explore our business registration, legal, and digital services.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-green-2 hover:text-navy"
          >
            Explore our services
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
