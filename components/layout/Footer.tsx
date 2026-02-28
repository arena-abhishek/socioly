"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#0e1b4d] text-white overflow-hidden">

      {/* ===== Footer Top ===== */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* Logo + Social */}
            <div className="flex flex-col items-center lg:items-start gap-5">
              <Image
                src="/assets/img/logo-white.png"
                alt="Socioly Logo"
                width={150}
                height={40}
              />

              <div className="flex gap-4">
                {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="h-10 w-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300"
                    >
                      <span className="text-sm">{item[0]}</span>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Call */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center">
                ☎
              </div>
              <div>
                <p className="text-sm text-white/60">Call Now</p>
                <a
                  href="tel:+919240255048"
                  className="text-lg font-semibold hover:text-indigo-400 transition"
                >
                  +91 9240255048
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center">
                ✉
              </div>
              <div>
                <p className="text-sm text-white/60">Email Us</p>
                <a
                  href="mailto:info@socioly.com"
                  className="text-lg font-semibold hover:text-indigo-400 transition"
                >
                  info@socioly.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Footer Middle ===== */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-6">About Socioly</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Socioly is a cutting-edge social media marketing agency focused
              on helping businesses grow their online presence and drive
              engagement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold border border-white/20 rounded-full px-5 py-2 hover:bg-indigo-600 hover:border-indigo-600 transition"
            >
              Get in Touch →
            </Link>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <div className="flex flex-col gap-3 text-white/70 text-sm">
              {[
                "Paid Search Marketing",
                "SEO Optimization",
                "Email Marketing",
                "CRO",
                "Influencer Marketing",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="hover:text-indigo-400 transition"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="flex flex-col gap-3 text-white/70 text-sm">
              <Link href="/about" className="hover:text-indigo-400 transition">
                About Us
              </Link>
              <Link href="/services" className="hover:text-indigo-400 transition">
                Our Services
              </Link>
              <Link href="/blog" className="hover:text-indigo-400 transition">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-indigo-400 transition">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Stay Connected</h3>
            <p className="text-white/60 text-sm mb-4">
              Monday – Saturday: <span className="text-indigo-400">10am – 7pm</span>
            </p>

            <form className="space-y-4">
              <div className="flex rounded-full overflow-hidden border border-white/20">
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  className="flex-1 bg-transparent px-4 py-2 text-sm outline-none"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 px-4 hover:bg-indigo-700 transition"
                >
                  →
                </button>
              </div>

              <label className="flex items-center gap-2 text-xs text-white/60 cursor-pointer">
                <input type="checkbox" className="accent-indigo-600" />
                I agree with the Privacy Policy
              </label>
            </form>
          </div>
        </div>
      </div>

      {/* ===== Footer Bottom ===== */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Socioly. All rights reserved.
      </div>

      {/* ===== Decorative Vectors ===== */}
      <Image
        src="/assets/img/footer-vector-1.svg"
        alt=""
        width={300}
        height={300}
        className="absolute bottom-0 left-0 opacity-10 pointer-events-none"
      />
      <Image
        src="/assets/img/footer-vector-2.svg"
        alt=""
        width={300}
        height={300}
        className="absolute top-0 right-0 opacity-10 pointer-events-none"
      />
    </footer>
  );
}

/* import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-black tracking-tighter text-indigo-600">
              SOCIOLY
            </Link>
            <p className="text-slate-600 max-w-xs">
              Empowering brands through innovative digital marketing and social media excellence.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-600 hover:text-indigo-600 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-slate-600 hover:text-indigo-600 transition-colors">Services</Link></li>
              <li><Link href="/blog" className="text-slate-600 hover:text-indigo-600 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-indigo-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services/social-media" className="text-slate-600 hover:text-indigo-600 transition-colors">Social Media Management</Link></li>
              <li><Link href="/services/seo" className="text-slate-600 hover:text-indigo-600 transition-colors">Search Engine Optimization</Link></li>
              <li><Link href="/services/content" className="text-slate-600 hover:text-indigo-600 transition-colors">Content Marketing</Link></li>
              <li><Link href="/services/ads" className="text-slate-600 hover:text-indigo-600 transition-colors">Paid Advertising</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-slate-600 mb-4">Get the latest insights delivered to your inbox.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-grow rounded-lg border border-slate-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />
              <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-bold text-white hover:bg-indigo-700 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Socioly. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
 */