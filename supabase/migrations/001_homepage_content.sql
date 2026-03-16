-- supabase/migrations/001_homepage_content.sql
-- ─────────────────────────────────────────────────────────────────
-- Run: Supabase Dashboard → SQL Editor → paste & run
-- ─────────────────────────────────────────────────────────────────

-- 1. TABLE
create table if not exists homepage_content (
  id         uuid default gen_random_uuid() primary key,
  section    text unique not null,
  content    jsonb not null,
  updated_at timestamptz default now()
);

-- 2. AUTO-UPDATE TIMESTAMP
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger homepage_content_updated_at
  before update on homepage_content
  for each row execute function update_updated_at();

-- 3. RLS
alter table homepage_content enable row level security;

-- Next.js frontend — sirf READ (public/anon)
create policy "Public can read"
  on homepage_content for select
  using (true);

-- Admin panel React app — login ke baad WRITE
-- Admin Supabase Auth se login karega (email/password)
-- Login hone ke baad auth.role() = 'authenticated'
create policy "Authenticated admin can write"
  on homepage_content for all
  using (auth.role() = 'authenticated');

-- ─────────────────────────────────────────────────────────────────
-- 4. STORAGE BUCKET
-- ─────────────────────────────────────────────────────────────────
insert into storage.buckets (id, name, public)
values ('homepage', 'homepage', true)
on conflict do nothing;

-- Authenticated (admin) upload kar sake
create policy "Admin can upload images"
  on storage.objects for insert
  with check (
    bucket_id = 'homepage'
    and auth.role() = 'authenticated'
  );

-- Public images read kar sake (Next.js frontend ke liye)
create policy "Public can view images"
  on storage.objects for select
  using (bucket_id = 'homepage');