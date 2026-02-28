import Container from "@/components/ui/Container";

export default function TermsPage() {
  return (
    <div className="py-24">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-slate-600 mb-6">Last updated: February 23, 2026</p>
          
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
            <p>By accessing or using our services, you agree to be bound by these terms of service.</p>
            
            <h2 className="text-2xl font-bold">2. Use of Services</h2>
            <p>You agree to use our services only for lawful purposes and in accordance with these terms.</p>
            
            <h2 className="text-2xl font-bold">3. Intellectual Property</h2>
            <p>All content and materials available on our services are the property of Socioly or its licensors.</p>
          </section>
        </div>
      </Container>
    </div>
  );
}
