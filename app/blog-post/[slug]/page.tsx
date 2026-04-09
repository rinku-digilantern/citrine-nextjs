import React from 'react';
import { Metadata } from 'next/dist/types';
import { notFound } from 'next/navigation';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import BlogBanner from '@/src/app/components/BlogDetails/BlogBanner/BlogBanner';
import BlogContent from '@/src/app/components/BlogDetails/BlogContent/BlogContent';
import RecentPost from '@/src/app/components/BlogDetails/RecentPost/RecentPost';

const API_BASE = 'https://api.citrineclinic.com/api';

// ── Data Fetcher ──────────────────────────────────────────────────────────────
// API shape: { success, data: {...}, seo: {...}, recent: [...], prev_url, next_url }
async function getBlogData(slug: string) {
  try {
    const res = await fetch(`${API_BASE}/blog-detail/${slug}`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json.success || !json.data) return null;
    return json;
  } catch {
    return null;
  }
}

// ── Dynamic Metadata ──────────────────────────────────────────────────────────
// Next.js 16: params is a Promise — must be awaited
import { resolveMetadata } from '@/src/lib/seo-utils';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const json = await getBlogData(slug);
  return resolveMetadata('blog-post/' + slug, json?.seo, 'Blog | Citrine Clinic');
}

// ── Page ──────────────────────────────────────────────────────────────────────
// Next.js 16: params is a Promise — must be awaited
export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const json = await getBlogData(slug);
  if (!json) notFound();

  const blog = json.data;
  const recent = Array.isArray(json.recent) ? json.recent : [];

  return (
    <>
      {json.seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json.seo.faq_schema) }} />
      )}
      {json.seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json.seo.bred_schema) }} />
      )}
      <Breadcrumb />
      <BlogBanner
        title={blog.blog_name || ''}
        date={blog.date || ''}
        image={blog.thumb_image
          ? `https://api.citrineclinic.com/backend/blog/${blog.thumb_image}`
          : '/assets/images/blogdetail/blogbanners.webp'}
        imageAlt={blog.alt_tag || blog.blog_name || ''}
      />
      <BlogContent
        blogContent={blog.blog_description || ''}
        finalThoughts={blog.final_thoughts || ''}
        faqHeading={blog.blog_faq_heading || ''}
        faqContent={blog.blog_faq || ''}
        prevUrl={json.prev_url ? `/blog-post/${json.prev_url}` : ''}
        nextUrl={json.next_url ? `/blog-post/${json.next_url}` : ''}
      />
      <RecentPost posts={recent} />
      <AppointmentSection />
    </>
  );
}
