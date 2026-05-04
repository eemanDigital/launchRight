import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | JurisTech Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  const renderContent = (content) => {
    const lines = content.split("\n");
    return lines.map((line, i) => {
      if (line.startsWith("## ")) {
        return (
          <h2 key={i} className="text-2xl font-bold text-navy mt-10 mb-4">
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={i} className="font-semibold text-navy mt-4 mb-2">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      }
      if (line.startsWith("- ")) {
        const content = line.replace("- ", "");
        const boldMatch = content.match(/\*\*(.+?)\*\*/);
        if (boldMatch) {
          const parts = content.split(/\*\*(.+?)\*\*/);
          return (
            <li key={i} className="ml-6 mb-2 text-gray-600 leading-relaxed">
              {parts.map((part, j) =>
                j % 2 === 1 ? (
                  <strong key={j} className="text-navy">
                    {part}
                  </strong>
                ) : (
                  <span key={j}>{part}</span>
                )
              )}
            </li>
          );
        }
        return (
          <li key={i} className="ml-6 mb-2 text-gray-600 leading-relaxed">
            {content}
          </li>
        );
      }
      if (line.startsWith("[**") && line.includes("](")) {
        const match = line.match(/\[\*\*(.+?)\*\*\]\((.+?)\)/);
        if (match) {
          return (
            <div key={i} className="my-8">
              <a href={match[2]} className="btn-green inline-flex">
                {match[1]} <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          );
        }
      }
      if (line.trim() === "") {
        return <div key={i} className="h-4" />;
      }
      const textWithLinks = line.replace(
        /\[(.+?)\]\((.+?)\)/g,
        '<a href="$2" class="text-gold underline hover:text-gold-light">$1</a>'
      );
      return (
        <p key={i} className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: textWithLinks }} />
      );
    });
  };

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <div className="pt-24 pb-8 bg-navy">
        <div className="container-wide">
          <Link
            href="/resources/blog"
            className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors mb-6">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${post.categoryColor}`}>
              {post.category}
            </span>
            <span className="text-white/40 text-sm">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>

          <p className="text-white/60 mt-4 text-lg">
            {post.excerpt}
          </p>

          <p className="text-white/40 text-sm mt-4">
            {new Date(post.date).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>

      <div className="container-wide py-12">
        <article className="prose-blog max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-gray-100">
          {renderContent(post.content)}
        </article>

        {nextPost && (
          <div className="max-w-3xl mx-auto mt-12">
            <Link
              href={`/resources/blog/${nextPost.slug}`}
              className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all group">
              <p className="text-xs text-gray-400 mb-2">Next Article</p>
              <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors">
                {nextPost.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{nextPost.excerpt}</p>
            </Link>
          </div>
        )}
      </div>

      <div className="bg-navy py-12">
        <div className="container-wide text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            Need Help With Your Business Registration?
          </h3>
          <p className="text-white/60 mb-6 max-w-lg mx-auto">
            We handle CAC registration, legal documents, and website development — all under one roof.
          </p>
          <a href="https://wa.me/message/KTFL2G2JM3JTP1" className="btn-gold">
            Chat With Us <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
