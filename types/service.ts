export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  icon: string;
  image: string;
  status: 'published' | 'draft';
  order: number;
}
