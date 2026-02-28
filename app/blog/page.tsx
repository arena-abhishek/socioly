import { getPublishedPosts } from "@/lib/fetchers";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import BreadcrumbSection from "@/components/ui/BreadcrumbSection";

/* ---------------------------------- */
/*  Page Metadata */
/* ---------------------------------- */
export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay updated with the latest digital marketing trends and strategies.",
};

export const revalidate = 60;

/* ---------------------------------- */
/*  Dummy Fallback Data */
/* ---------------------------------- */
const DUMMY_POSTS = [
  {
    id: "1",
    title: "10 Social Media Trends for 2026",
    slug: "social-media-trends-2026",
    excerpt:
      "Discover the latest trends that will shape the social media landscape in the coming year.",
    content: "Full content of the blog post would go here...",
    author: "Sarah Johnson",
    published_at: "2026-01-15",
    cover_image: "https://picsum.photos/seed/trends/1200/600",
    tags: ["Marketing"],
  },
];

/* ---------------------------------- */
/*  Blog Page */
/* ---------------------------------- */
export default async function BlogPage() {
  const postsFromDB = await getPublishedPosts();

  // Use DB posts if available, otherwise fallback to dummy
  const posts =
    postsFromDB && postsFromDB.length > 0 ? postsFromDB : DUMMY_POSTS;

  return (
    <div>
      <BreadcrumbSection
        title="Blog"
        items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <Container className="py-24">
        {/* Heading Section */}
        <div className="max-w-2xl mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Blog
          </h1>
          <p className="text-xl text-slate-600">
            Insights, guides, and industry news to help you grow your digital
            presence.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="max-w-sm rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Image Section */}
              <Link href={`/blog/${post.slug}`} className="relative block h-60">
                <Image
                  src={
                    post.cover_image ||
                    `https://picsum.photos/seed/${post.slug}/800/600`
                  }
                  alt={post.title}
                  fill
                  className="object-cover"
                />

                {/* Category Badge (first tag) */}
                {post.tags && post.tags.length > 0 && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
                    {post.tags[0]}
                  </span>
                )}
              </Link>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-blue-600 text-sm mb-3">
                  {new Intl.DateTimeFormat("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(post.published_at))}
                </p>

                <h2 className="text-xl font-semibold text-gray-900 leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}

{
  /* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
  {posts.map((post) => (
    <article key={post.id} className="group flex flex-col">
      <Link href={`/blog/${post.slug}`} className="relative h-64 mb-6 overflow-hidden rounded-2xl">
        <Image
          src={post.cover_image || `https://picsum.photos/seed/${post.slug}/800/600`}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="flex-grow space-y-4">
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <span>{new Date(post.published_at).toLocaleDateString()}</span>
          <span>•</span>
          <span>{post.author}</span>
        </div>
        <h2 className="text-2xl font-bold leading-tight group-hover:text-indigo-600 transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-slate-600 line-clamp-3">{post.excerpt}</p>
        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-indigo-600 font-semibold hover:underline"
        >
          Read More →
        </Link>
      </div>
    </article>
  ))}
</div> */
}
