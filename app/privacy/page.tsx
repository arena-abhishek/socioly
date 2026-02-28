import Container from "@/components/ui/Container";

export default function PrivacyPage() {
  return (
    <div className="py-24">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-slate-600 mb-6">Last updated: February 23, 2026</p>
          
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.</p>
            
            <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users.</p>
            
            <h2 className="text-2xl font-bold">3. Information Sharing</h2>
            <p>We do not share your personal information with third parties except as described in this policy or with your consent.</p>
          </section>
        </div>
      </Container>
    </div>
  );
}
