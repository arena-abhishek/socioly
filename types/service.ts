export interface ServiceDescription {
  overview: string[];
  features: string[];
  goal: string;
  process?: string[];
  faq?: { question: string; answer: string }[];
}
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: ServiceDescription;
  content: string;
  icon: string;
  image: string;
  status: "published" | "draft";
  order: number;
}
