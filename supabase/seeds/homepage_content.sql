-- supabase/seeds/homepage_content.sql
-- ─────────────────────────────────────────────────────────────────
-- Ye file INITIAL DATA insert karti hai.
-- Images mein apne Supabase Storage ke public URLs daalo.
-- Run: Supabase Dashboard → SQL Editor → paste & run
-- ─────────────────────────────────────────────────────────────────

-- ── HERO ─────────────────────────────────────────────────────────
insert into homepage_content (section, content)
values (
  'hero',
  jsonb_build_object(
    'sub_title', 'Amazing Solutions For Business',
    'title',     'Trusted IT Support Designed to Safeguard Your Business',
    'cta_text',  'Our Services',
    'cta_href',  '/services',
    'video_url', 'https://youtu.be/WUB2pSkwN2M',
    'images', jsonb_build_array(
      'https://YOUR_PROJECT.supabase.co/storage/v1/object/public/homepage/hero/img-1.jpg',
      'https://YOUR_PROJECT.supabase.co/storage/v1/object/public/homepage/hero/img-2.jpg',
      'https://YOUR_PROJECT.supabase.co/storage/v1/object/public/homepage/hero/img-3.jpg',
      'https://YOUR_PROJECT.supabase.co/storage/v1/object/public/homepage/hero/img-4.jpg'
    ),
    'stats', jsonb_build_array(
      jsonb_build_object('number', '20.5K',  'label', 'Projects Done'),
      jsonb_build_object('number', '100.5K', 'label', 'Happy Clients'),
      jsonb_build_object('number', '150.5K', 'label', 'Team Members')
    )
  )
)
on conflict (section) do update
  set content    = excluded.content,
      updated_at = now();


-- ── ABOUT ─────────────────────────────────────────────────────────
insert into homepage_content (section, content)
values (
  'about',
  jsonb_build_object(
    'tabs', jsonb_build_array(

      jsonb_build_object(
        'id',          'about-tab-1',
        'nav_label',   'Problem Solving',
        'image',       'https://YOUR_PROJECT.supabase.co/storage/v1/object/public/homepage/about/tab-1.jpg',
        'sub_title',   'About Us',
        'title',       'Where CX Meets Excellence',
        'description', 'At Exato, we proudly bear the title of Experience Integrator. With a commitment to our mission, we have partnered with over 100 businesses, helping them achieve exceptional CX and EX results.',
        'list_items',  jsonb_build_array(
          'Strategic Partnerships',
          'Innovation-Driven Excellence',
          'Proven Outcomes',
          'Dedication to the Future'
        ),
        'cta_text', 'Know More',
        'cta_href', '/about'
      ),

      jsonb_build_object(
        'id',          'about-tab-2',
        'nav_label',   'Our Mission',
        'image',       'https://YOUR_PROJECT.supabase.co/storage/v1/object/public/homepage/about/tab-2.jpg',
        'sub_title',   'Our Mission',
        'title',       'Industry-Focused Technology Solutions',
        'description', 'Exato serves key sectors including BFSI, Healthcare, Retail, Telecom, Manufacturing, and IT/ITeS delivering solutions with measurable impact.',
        'list_items',  jsonb_build_array(
          'Retail: AI-driven product recommendations & loyalty analytics',
          'Telecom: Customer churn prediction & omnichannel CX deployment',
          'Manufacturing: Supply chain optimization & predictive revenue models'
        ),
        'cta_text', 'Know More',
        'cta_href', '/about'
      ),

      jsonb_build_object(
        'id',          'about-tab-3',
        'nav_label',   'Our Vision',
        'image',       'https://YOUR_PROJECT.supabase.co/storage/v1/object/public/homepage/about/tab-3.jpg',
        'sub_title',   'Our Vision',
        'title',       'Engage. Understand. Innovate: The AI-Powered Conversation Revolution',
        'description', 'Leveraging LLM models, Generative AI, and NLP engines, we craft conversations that truly understand and engage.',
        'list_items',  jsonb_build_array(
          'Next-Gen Conversations: Global Adaptability, Context-Aware',
          'Mending the Fragmented Landscape: Bridging CX and EX Gaps',
          'Empowering Your Business: Tangible Outcomes with Our Solutions'
        ),
        'cta_text', 'Know More',
        'cta_href', '/about'
      )

    )
  )
)
on conflict (section) do update
  set content    = excluded.content,
      updated_at = now();