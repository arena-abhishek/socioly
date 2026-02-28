import {
  getPostBySlug,
  getPublishedPosts,
  getCategories,
  getAllTags,
} from "@/lib/fetchers";

import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BreadcrumbSection from "@/components/ui/BreadcrumbSection";

interface Props {
  params: Promise<{ slug: string }>;
}

/* =========================================
   Dummy Fallback (Only if DB Empty)
========================================= */

const DUMMY_POSTS = [
  {
    id: 1,
    title: "10 Social Media Trends for 2026",
    slug: "social-media-trends-2026",
    excerpt:
      "Discover the trends shaping the future of social media marketing.",
    content: `
      <p>Social media continues to evolve rapidly in 2026.</p>
      <h2>AI Driven Marketing</h2>
      <p>Artificial intelligence is transforming digital strategies.</p>
    `,
    author: "Sarah Johnson",
    published_at: "2026-01-15",
    created_at: "2026-01-01",
    status: "published",
    cover_image: "https://picsum.photos/seed/trends/1200/600",
    category: { name: "Marketing", slug: "marketing" },
    tags: [
      { name: "Social Media", slug: "social-media" },
      { name: "AI", slug: "ai" },
    ],
  },
];

/* =========================================
   SEO Metadata
========================================= */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  let post = await getPostBySlug(slug);

  if (!post) {
    post = DUMMY_POSTS.find((p) => p.slug === slug) as any;
  }

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.cover_image],
    },
  };
}

/* =========================================
   Page Component
========================================= */

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  let post = await getPostBySlug(slug);
  let posts = await getPublishedPosts();
  let categories = await getCategories?.();
  let tags = await getAllTags?.();

  // Fallback logic
  if (!post) {
    // post = DUMMY_POSTS.find((p) => p.slug === slug) as any;
    post = DUMMY_POSTS.find((p) => p.slug === slug);
  }

  if (!posts || posts.length === 0) {
    posts = DUMMY_POSTS;
  }

  if (!categories || categories.length === 0) {
    categories = DUMMY_POSTS.map((p) => p.category);
  }

  if (!tags || tags.length === 0) {
    tags = DUMMY_POSTS.flatMap((p) => p.tags);
  }

  if (!post) notFound();

  const recentPosts = posts
    .filter((p: any) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div>
      <BreadcrumbSection
        title={post.title}
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />
      <article className="py-24 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* ================= MAIN CONTENT ================= */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 space-y-10">
                <Link
                  href="/blog"
                  className="text-sm font-semibold text-indigo-600 hover:underline"
                >
                  ← Back to Blog
                </Link>

                {/* Header */}
                <header className="space-y-5">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    {post.category && (
                      <Link
                        href={`/blog/category/${post.category.slug}`}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full font-semibold"
                      >
                        {post.category.name}
                      </Link>
                    )}
                    <span>
                      {new Date(post.published_at).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                    {post.title}
                  </h1>

                  <p className="text-sm text-slate-500">
                    By{" "}
                    <span className="font-semibold text-slate-700">
                      {post.author}
                    </span>
                  </p>
                </header>

                {/* Cover Image */}
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src={
                      post.cover_image ||
                      `https://picsum.photos/seed/${post.slug}/1200/600`
                    }
                    alt={post.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <section
                  className="prose prose-slate max-w-none prose-lg"
                  dangerouslySetInnerHTML={{
                    __html: post.content || post.excerpt,
                  }}
                />

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="pt-6 border-t">
                    <h3 className="text-lg font-semibold mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-3">
                      {post.tags.map((tag: any) => (
                        <Link
                          key={tag.slug}
                          href={`/blog/tag/${tag.slug}`}
                          className="px-4 py-2 text-sm bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 rounded-full transition"
                        >
                          {tag.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ================= SIDEBAR ================= */}
            <aside className="space-y-8">
              {/* Search */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Search</h3>
                <form action="/blog" className="relative">
                  <input
                    type="search"
                    name="q"
                    placeholder="Search here..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:bg-white border border-transparent focus:border-indigo-500 outline-none transition"
                  />
                </form>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold mb-6">Categories</h3>
                <ul className="space-y-4">
                  {categories.map((cat: any) => (
                    <li key={cat.slug}>
                      <Link
                        href={`/blog/category/${cat.slug}`}
                        className="flex justify-between text-slate-600 hover:text-indigo-600 transition"
                      >
                        <span>{cat.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold mb-6">Recent Posts</h3>
                <div className="space-y-5">
                  {recentPosts.map((rp: any) => (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="flex gap-4 group"
                    >
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden">
                        <Image
                          src={rp.cover_image}
                          alt={rp.title}
                          fill
                          className="object-cover group-hover:scale-105 transition"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold group-hover:text-indigo-600 transition">
                          {rp.title}
                        </h4>
                        <p className="text-xs text-slate-500">
                          {new Date(rp.published_at).toLocaleDateString()}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tag Cloud */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold mb-6">Tag Cloud</h3>
                <div className="flex flex-wrap gap-3">
                  {tags.map((tag: any) => (
                    <Link
                      key={tag.slug}
                      href={`/blog/tag/${tag.slug}`}
                      className="px-3 py-1 text-sm bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 rounded-full transition"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </article>
    </div>
  );
}
/* import { getPostBySlug, getPublishedPosts } from "@/lib/fetchers";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

// Fallback static data for when Supabase is empty
const DUMMY_POSTS = [
  {
    title: "10 Social Media Trends for 2026",
    slug: "social-media-trends-2026",
    excerpt: "Discover the latest trends that will shape the social media landscape in the coming year.",
    content: "Full content of the blog post would go here. We're talking about AI-driven content, short-form video dominance, and the rise of niche communities.",
    author: "Sarah Johnson",
    published_at: "2026-01-15",
    cover_image: "https://picsum.photos/seed/trends/1200/600"
  }
];

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post = await getPostBySlug(slug);

  // Fallback to dummy data if not found in DB (for preview purposes)
  if (!post) {
    post = DUMMY_POSTS.find(p => p.slug === slug) as any;
  }

  if (!post) {
    notFound();
  }

  return (
    <article className="py-24">
      <Container>
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-6 text-center">
            <Link href="/blog" className="text-indigo-600 font-bold uppercase tracking-widest text-sm">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-slate-500">
              <span className="font-bold text-slate-900">{post.author}</span>
              <span>•</span>
              <span>{new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>

          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={post.cover_image || `https://picsum.photos/seed/${post.slug}/1200/600`}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg prose-slate max-w-none">

            <div className="space-y-6 text-xl text-slate-700 leading-relaxed">
              {post.content || post.excerpt}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mt-12">The Future of Digital</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100">
            <div className="bg-slate-50 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-full bg-indigo-100 flex-shrink-0" />
              <div className="space-y-2 text-center md:text-left">
                <h4 className="font-bold text-lg">About {post.author}</h4>
                <p className="text-slate-600">
                  A digital marketing veteran with over a decade of experience in helping brands scale their online presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
 */
