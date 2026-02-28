import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24">
      <Container className="text-center space-y-8">
        <h1 className="text-9xl font-black text-slate-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          404
        </h1>
        <div className="relative z-10 space-y-4">
          <h2 className="text-4xl font-bold">Page Not Found</h2>
          <p className="text-xl text-slate-600 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Button size="lg" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </Container>
    </div>
  );
}
