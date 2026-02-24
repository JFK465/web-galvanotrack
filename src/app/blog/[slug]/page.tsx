import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getRelatedPosts, getBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/seo-config";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(slug);

  return (
    <>
      <ArticleSchema post={post} url={`/blog/${post.slug}`} />
      <Navbar />
      <main className="pt-20 min-h-screen bg-zinc-950">
        <article className="py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <Breadcrumbs
                items={[
                  { name: "Blog", href: "/blog" },
                  { name: post.title, href: `/blog/${post.slug}` },
                ]}
              />

              {/* Post Header */}
              <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-400">
                    {post.category || "Allgemein"}
                  </span>
                  <time className="text-sm text-zinc-500" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("de-DE", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <span className="text-sm text-zinc-500">{post.readTime} Min. Lesezeit</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {post.title}
                </h1>

                <p className="text-xl text-zinc-400">{post.description}</p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">
                      {post.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{post.author}</p>
                    <p className="text-sm text-zinc-500">GalvanoTrack Team</p>
                  </div>
                </div>
              </header>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Content */}
              <div className="prose prose-invert prose-lg max-w-none">
                <MDXRemote source={post.content} />
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-8 bg-blue-900/20 rounded-xl border border-blue-800/30">
                <h3 className="text-xl font-bold text-white mb-4">
                  Galvanik digitalisieren mit GalvanoTrack
                </h3>
                <p className="text-zinc-400 mb-6">
                  Entdecken Sie, wie unsere Software Ihnen hilft, Zeit zu sparen
                  und ISO-konform zu dokumentieren.
                </p>
                <Link
                  href="/demo"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Kostenlos testen
                </Link>
              </div>

              {/* Related Posts */}
              {related.length > 0 && (
                <div className="mt-16 pt-12 border-t border-zinc-800">
                  <h2 className="text-2xl font-bold text-white mb-8">
                    Verwandte Artikel
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {related.map((relatedPost) => (
                      <article
                        key={relatedPost.slug}
                        className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                      >
                        <span className="text-xs text-blue-400 mb-2 block">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                          <Link
                            href={`/blog/${relatedPost.slug}`}
                            className="hover:text-blue-400 transition-colors"
                          >
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="text-sm text-zinc-400 line-clamp-2">
                          {relatedPost.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
