import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts, getCategories } from "@/lib/blog";
import { siteConfig } from "@/lib/seo-config";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blog | Galvanik & Oberflaechentechnik",
  description: "Fachartikel zur Digitalisierung in der Galvanik, ISO-Compliance, Rueckverfolgbarkeit und Best Practices fuer Galvanik-Betriebe.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const categories = getCategories();

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-zinc-950">
        <div className="py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-white mb-4">
                  Blog & Fachartikel
                </h1>
                <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                  Praxiswissen zur Digitalisierung in der Galvanik, ISO-Compliance
                  und Rueckverfolgbarkeit. Von Experten fuer Galvanik-Betriebe.
                </p>
              </div>

              {/* Categories */}
              {categories.length > 0 && (
                <div className="mb-12">
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Link
                      href="/blog"
                      className="px-4 py-2 rounded-lg border border-zinc-700 hover:border-blue-500 hover:bg-blue-900/20 transition-colors text-sm font-medium text-zinc-300 hover:text-white"
                    >
                      Alle Artikel
                    </Link>
                    {categories.map((cat) => (
                      <Link
                        key={cat}
                        href={`/blog/kategorie/${cat}`}
                        className="px-4 py-2 rounded-lg border border-zinc-700 hover:border-blue-500 hover:bg-blue-900/20 transition-colors text-sm font-medium text-zinc-300 hover:text-white capitalize"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Blog Posts Grid */}
              {posts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <article
                      key={post.slug}
                      className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
                    >
                      {/* Content */}
                      <div className="p-6">
                        {/* Category Badge */}
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-400">
                            {post.category || "Allgemein"}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="hover:text-blue-400 transition-colors"
                          >
                            {post.title}
                          </Link>
                        </h2>

                        {/* Excerpt */}
                        <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                          {post.description}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-sm text-zinc-500">
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("de-DE", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </time>
                          <span>{post.readTime} Min. Lesezeit</span>
                        </div>

                        {/* Read More Link */}
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300 font-medium text-sm"
                        >
                          Artikel lesen →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-zinc-400 mb-4">
                    Noch keine Blog-Beitraege verfuegbar.
                  </p>
                  <p className="text-sm text-zinc-500">
                    Wir arbeiten bereits an ersten Fachartikeln.
                  </p>
                </div>
              )}

              {/* CTA */}
              <div className="mt-16 bg-gradient-to-br from-blue-900/20 to-blue-900/5 rounded-xl p-8 text-center border border-blue-800/30">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Galvanik digitalisieren
                </h2>
                <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
                  Entdecken Sie, wie GalvanoTrack Ihnen hilft, Zeit zu sparen
                  und ISO-konform zu dokumentieren.
                </p>
                <Link
                  href="/demo"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Kostenlos testen →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
