module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
const { jsxDEV: _jsxDEV } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
/*#__PURE__*/ _jsxDEV("article", {
    className: "py-24 bg-gray-50",
    children: /*#__PURE__*/ _jsxDEV(Container, {
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "grid lg:grid-cols-3 gap-12",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "lg:col-span-2",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        className: "bg-white rounded-3xl shadow-sm p-8 md:p-12 space-y-10",
                        children: [
                            /*#__PURE__*/ _jsxDEV(Link, {
                                href: "/blog",
                                className: "text-sm font-semibold text-indigo-600 hover:underline",
                                children: "← Back to Blog"
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                lineNumber: 9,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ _jsxDEV("header", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex items-center gap-3 text-xs text-slate-500",
                                        children: [
                                            post.category && /*#__PURE__*/ _jsxDEV(Link, {
                                                href: `/blog/category/${post.category.slug}`,
                                                className: "px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full font-semibold",
                                                children: post.category.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                                lineNumber: 20,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                children: new Date(post.published_at).toLocaleDateString("en-US", {
                                                    month: "long",
                                                    day: "numeric",
                                                    year: "numeric"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                                lineNumber: 27,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/blog/[slug]/page.tsx",
                                        lineNumber: 18,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ _jsxDEV("h1", {
                                        className: "text-3xl md:text-4xl font-bold text-slate-900 leading-tight",
                                        children: post.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        className: "text-sm text-slate-500",
                                        children: [
                                            "By ",
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                className: "font-semibold text-slate-700",
                                                children: post.author
                                            }, void 0, false, {
                                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                                lineNumber: 41,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/blog/[slug]/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "relative aspect-video rounded-2xl overflow-hidden",
                                children: /*#__PURE__*/ _jsxDEV(Image, {
                                    src: post.cover_image || `https://picsum.photos/seed/${post.slug}/1200/600`,
                                    alt: post.title,
                                    fill: true,
                                    priority: true,
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ _jsxDEV("section", {
                                className: "prose prose-slate max-w-none prose-lg",
                                dangerouslySetInnerHTML: {
                                    __html: post.content || post.excerpt
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            post.tags && post.tags.length > 0 && /*#__PURE__*/ _jsxDEV("div", {
                                className: "pt-6 border-t",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h3", {
                                        className: "text-lg font-semibold mb-4",
                                        children: "Tags"
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex flex-wrap gap-3",
                                        children: post.tags.map((tag)=>/*#__PURE__*/ _jsxDEV(Link, {
                                                href: `/blog/tag/${tag.slug}`,
                                                className: "px-4 py-2 text-sm bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 rounded-full transition",
                                                children: tag.name
                                            }, tag.slug, false, {
                                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/blog/[slug]/page.tsx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.tsx",
                    lineNumber: 6,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ _jsxDEV("aside", {
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "bg-white p-6 rounded-2xl shadow-sm",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Search"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ _jsxDEV("form", {
                                    action: "/blog",
                                    className: "relative",
                                    children: /*#__PURE__*/ _jsxDEV("input", {
                                        type: "search",
                                        name: "q",
                                        placeholder: "Search here...",
                                        className: "w-full px-4 py-3 rounded-xl bg-gray-100 focus:bg-white border border-transparent focus:border-indigo-500 outline-none transition"
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/[slug]/page.tsx",
                            lineNumber: 91,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "bg-white p-6 rounded-2xl shadow-sm",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    className: "text-lg font-semibold mb-6",
                                    children: "Categories"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ _jsxDEV("ul", {
                                    className: "space-y-4",
                                    children: categories.map((cat)=>/*#__PURE__*/ _jsxDEV("li", {
                                            children: /*#__PURE__*/ _jsxDEV(Link, {
                                                href: `/blog/category/${cat.slug}`,
                                                className: "flex justify-between text-slate-600 hover:text-indigo-600 transition",
                                                children: /*#__PURE__*/ _jsxDEV("span", {
                                                    children: cat.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, cat.slug, false, {
                                            fileName: "[project]/app/blog/[slug]/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/[slug]/page.tsx",
                            lineNumber: 104,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "bg-white p-6 rounded-2xl shadow-sm",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    className: "text-lg font-semibold mb-6",
                                    children: "Recent Posts"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "space-y-5",
                                    children: recentPosts.map((rp)=>/*#__PURE__*/ _jsxDEV(Link, {
                                            href: `/blog/${rp.slug}`,
                                            className: "flex gap-4 group",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "relative w-20 h-20 rounded-xl overflow-hidden",
                                                    children: /*#__PURE__*/ _jsxDEV(Image, {
                                                        src: rp.cover_image,
                                                        alt: rp.title,
                                                        fill: true,
                                                        className: "object-cover group-hover:scale-105 transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/[slug]/page.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("h4", {
                                                            className: "text-sm font-semibold group-hover:text-indigo-600 transition",
                                                            children: rp.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/[slug]/page.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            className: "text-xs text-slate-500",
                                                            children: new Date(rp.published_at).toLocaleDateString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blog/[slug]/page.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, rp.slug, true, {
                                            fileName: "[project]/app/blog/[slug]/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/[slug]/page.tsx",
                            lineNumber: 121,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "bg-white p-6 rounded-2xl shadow-sm",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    className: "text-lg font-semibold mb-6",
                                    children: "Tag Cloud"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "flex flex-wrap gap-3",
                                    children: tags.map((tag)=>/*#__PURE__*/ _jsxDEV(Link, {
                                            href: `/blog/tag/${tag.slug}`,
                                            className: "px-3 py-1 text-sm bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 rounded-full transition",
                                            children: tag.name
                                        }, tag.slug, false, {
                                            fileName: "[project]/app/blog/[slug]/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/[slug]/page.tsx",
                            lineNumber: 152,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/blog/[slug]/page.tsx",
                    lineNumber: 88,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.tsx",
            lineNumber: 3,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/blog/[slug]/page.tsx",
        lineNumber: 2,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0))
}, void 0, false, {
    fileName: "[project]/app/blog/[slug]/page.tsx",
    lineNumber: 1,
    columnNumber: 1
}, ("TURBOPACK compile-time value", void 0)); /* import { getPostBySlug, getPublishedPosts } from "@/lib/fetchers";
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
}),
"[project]/app/blog/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6e80c67a._.js.map