export interface Category {
  id?: number;
  name: string;
  slug: string;
  created_at?: string;
  status?: string;
}

export interface Tag {
  id?: number;
  name: string;
  slug: string;
  created_at?: string;
  status?: string;
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  cover_image?: string;

  created_at: string;
  published_at?: string;
  status: string;

  // 🔥 ADD THESE (Fixes your error)
  category?: Category | null;
  tags?: Tag[];
}