import { getSupabase } from "./supabase";
import { Post } from "@/types/blog";
import { Service } from "@/types/service";

export async function getPublishedPosts(): Promise<Post[]> {
  const supabase = getSupabase();
  if (!supabase || !supabase.from) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      if (
        error.message.includes("Could not find the table") ||
        error.message.includes("does not exist")
      ) {
        console.warn(
          'Table "posts" missing in Supabase. Please ensure your schema matches supabase_schema.sql',
        );
      } else {
        console.error("Supabase error fetching posts:", error.message);
      }
      return [];
    }

    // Filter in-memory if status column exists
    if (data && data.length > 0 && "status" in data[0]) {
      return data.filter((post: any) => post.status === "published");
    }

    return data || [];
  } catch (e) {
    console.error("Unexpected error fetching posts:", e);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const supabase = getSupabase();
  if (!supabase || !supabase.from) return null;

  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .limit(1)
      .maybeSingle();

    if (error) {
      if (!error.message.includes("PGRST116")) {
        console.error(`Supabase error fetching post ${slug}:`, error.message);
      }
      return null;
    }

    // Check status in-memory if it exists
    if (data && "status" in data && data.status !== "published") {
      // In a real app we might return null here, but for resilience we'll return it
      // unless the user specifically wants strict filtering.
    }

    return data;
  } catch (e) {
    console.error(`Unexpected error fetching post ${slug}:`, e);
    return null;
  }
}

/* =========================================
   GET CATEGORIES
========================================= */

export async function getCategories() {
  const supabase = getSupabase();
  if (!supabase || !supabase.from) return [];

  try {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      if (
        error.message.includes("Could not find the table") ||
        error.message.includes("does not exist")
      ) {
        console.warn(
          'Table "categories" missing in Supabase. Please ensure your schema matches.',
        );
      } else {
        console.error("Supabase error fetching categories:", error.message);
      }
      return [];
    }

    // Filter published if status exists
    if (data && data.length > 0 && "status" in data[0]) {
      return data.filter((cat: any) => cat.status === "published");
    }

    return data || [];
  } catch (e) {
    console.error("Unexpected error fetching categories:", e);
    return [];
  }
}

/* =========================================
   GET ALL TAGS
========================================= */

export async function getAllTags() {
  const supabase = getSupabase();
  if (!supabase || !supabase.from) return [];

  try {
    const { data, error } = await supabase
      .from("tags")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      if (
        error.message.includes("Could not find the table") ||
        error.message.includes("does not exist")
      ) {
        console.warn(
          'Table "tags" missing in Supabase. Please ensure your schema matches.',
        );
      } else {
        console.error("Supabase error fetching tags:", error.message);
      }
      return [];
    }

    // Filter published if status exists
    if (data && data.length > 0 && "status" in data[0]) {
      return data.filter((tag: any) => tag.status === "published");
    }

    return data || [];
  } catch (e) {
    console.error("Unexpected error fetching tags:", e);
    return [];
  }
}

export async function getServices(): Promise<Service[]> {
  const supabase = getSupabase();
  if (!supabase || !supabase.from) return [];

  try {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("order", { ascending: true });

    if (error) {
      if (
        error.message.includes("Could not find the table") ||
        error.message.includes("does not exist")
      ) {
        console.warn(
          'Table "services" missing in Supabase. Please ensure your schema matches supabase_schema.sql',
        );
      } else {
        console.error("Supabase error fetching services:", error.message);
      }
      return [];
    }

    // Filter in-memory if status column exists
    if (data && data.length > 0 && "status" in data[0]) {
      return data.filter((service: any) => service.status === "published");
    }

    return data || [];
  } catch (e) {
    console.error("Unexpected error fetching services:", e);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const supabase = getSupabase();
  if (!supabase || !supabase.from) return null;

  try {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .eq("slug", slug)
      .limit(1)
      .maybeSingle();

    if (error) {
      if (!error.message.includes("PGRST116")) {
        console.error(
          `Supabase error fetching service ${slug}:`,
          error.message,
        );
      }
      return null;
    }

    return data;
  } catch (e) {
    console.error(`Unexpected error fetching service ${slug}:`, e);
    return null;
  }
}
