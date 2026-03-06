import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <Container className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-600 font-medium">Loading Exato...</p>
      </Container>
    </div>
  );
}
