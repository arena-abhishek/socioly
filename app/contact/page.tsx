/* import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import BreadcrumbSection from "@/components/ui/BreadcrumbSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Socioly for a free consultation or audit.",
};

export default function ContactPage() {
  return (
    <div >
      <BreadcrumbSection
        title="Contact Us"
        items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />


      <Container className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Let's start a{" "}
                <span className="text-indigo-600">conversation</span>.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Ready to grow your brand? Fill out the form and our team will
                get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-2">Our Office</h3>
                <p className="text-slate-600">
                  123 Digital Way, Suite 400
                  <br />
                  San Francisco, CA 94103
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Contact Info</h3>
                <p className="text-slate-600">
                  hello@socioly.com
                  <br />
                  +1 (555) 000-0000
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold uppercase tracking-wider text-slate-500"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold uppercase tracking-wider text-slate-500"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="service"
                  className="text-sm font-bold uppercase tracking-wider text-slate-500"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all bg-white"
                >
                  <option>Social Media Management</option>
                  <option>SEO Optimization</option>
                  <option>Content Marketing</option>
                  <option>Paid Advertising</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold uppercase tracking-wider text-slate-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
 */

import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import { contactContent } from "@/lib/constants/contact";
import BreadcrumbSection from "@/components/ui/BreadcrumbSection";

export const metadata = {
  title: "Contact Us | Your Brand",
  description:
    "Get in touch with us for support, inquiries, or business collaboration.",
  openGraph: {
    title: "Contact Us",
    description: "Contact our team anytime.",
  },
};

export default function ContactPage() {
  return (
    <div>
      <BreadcrumbSection
        title="Contact Us"
        items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <main className="bg-white h-full">
        <ContactInfo data={contactContent} />

        {/* MAP + FLOATING FORM */}
        <section className="w-full">
          {/* Map */}
          <div className="w-full h-[450px] md:h-[550px]">
            <iframe
              src={contactContent.mapEmbed}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>

          {/* Form */}
       <div className="relative -mt-32 md:-mt-40 mb-32 md:mb-24 px-4 flex justify-center">
            <div className="w-full max-w-4xl">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
