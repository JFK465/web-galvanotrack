import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPosts, getCategories } from "@/lib/blog";
import { siteConfig } from "@/lib/seo-config";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((cat) => ({
    slug: encodeURIComponent(cat.toLowerCase()),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = decodeURIComponent(slug);
  return {
    title: `${categoryName} – Blog | GalvanoTrack`,
    description: `Alle Artikel der Kategorie ${categoryName} auf dem GalvanoTrack Blog – Galvanik, ISO-Compliance & Digitalisierung.`,
    alternates: {
      canonical: `${siteConfig.url}/blog/kategorie/${slug}`,
    },
    openGraph: {
      title: `${categoryName} – Blog | GalvanoTrack`,
      description: `Fachartikel der Kategorie ${categoryName} auf dem GalvanoTrack Blog.`,
      url: `${siteConfig.url}/blog/kategorie/${slug}`,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} – Blog | GalvanoTrack`,
      description: `Fachartikel der Kategorie ${categoryName} auf dem GalvanoTrack Blog.`,
    },
  };
}

export default async function KategoriePage({ params }: Props) {
  const { slug } = await params;
  const categoryName = decodeURIComponent(slug);
  const allPosts = getBlogPosts();
  const categories = getCategories();

  const posts = allPosts.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase(),
  );

  if (
    posts.length === 0 &&
    !categories.some((c) => c.toLowerCase() === categoryName.toLowerCase())
  ) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-zinc-950">
        <div className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-white mb-4">
                Kategorie: {categoryName}
              </h1>
              <p className="text-zinc-400">
                {posts.length} {posts.length === 1 ? "Artikel" : "Artikel"}{" "}
                gefunden
              </p>
            </div>

            {/* Kategorie-Filter */}
            <div className="mb-10 flex flex-wrap gap-3 justify-center">
              <Link
                href="/blog"
                className="px-4 py-2 rounded-lg border border-zinc-700 hover:border-blue-500 hover:bg-blue-900/20 transition-colors text-sm font-medium text-zinc-300 hover:text-white"
              >
                Alle Artikel
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog/kategorie/${encodeURIComponent(cat.toLowerCase())}`}
                  className={`px-4 py-2 rounded-lg border transition-colors text-sm font-medium capitalize ${
                    cat.toLowerCase() === categoryName.toLowerCase()
                      ? "border-blue-500 bg-blue-900/30 text-blue-300"
                      : "border-zinc-700 hover:border-blue-500 hover:bg-blue-900/20 text-zinc-300 hover:text-white"
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>

            {/* Posts */}
            {posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
                  >
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-400">
                          {post.category || "Allgemein"}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-blue-400 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-zinc-500">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("de-DE", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </time>
                        <span>{post.readTime} Min.</span>
                      </div>
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
                <p className="text-zinc-400">
                  Noch keine Artikel in dieser Kategorie.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
