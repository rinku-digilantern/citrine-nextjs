import React, { Suspense } from 'react'
import { Metadata } from 'next/dist/types';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import Blogpage from '@/src/app/components/BlogPage/Blogpage';

interface BlogItem {
  id: number;
  blog_type: string;
  dr_name: string | null;
  blog_name: string;
  short_desc: string;
  image: string;
  date: string;
  alt_tag: string | null;
  url: string;
}

interface SeoData {
  id: number;
  page_name: string;
  title_tag: string;
  keyword_tag: string | null;
  description_tag: string;
  canonical_tag: string;
  url: string;
}

interface BlogApiResponse {
  title: string;
  data: BlogItem[];
  seo: SeoData;
}

async function getBlogData(): Promise<BlogApiResponse> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.citrineclinic.com/api';
    const res = await fetch(`${baseUrl}/blog`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blog data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    return {
      title: 'Success',
      data: [],
      seo: {
        id: 0,
        page_name: 'Blog',
        title_tag: 'Read Our Latest Blogs | Citrine Clinic',
        keyword_tag: null,
        description_tag: 'Read our latest blogs on skin care, hair care, and much more.',
        canonical_tag: 'https://www.citrineclinic.com/blog',
        url: 'blog'
      }
    };
  }
}

import { getSeoData } from '@/src/lib/cms';
import { resolveMetadata } from '@/src/lib/seo-utils';
import BlogShimmer from '@/src/app/components/BlogPage/BlogShimmer';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('blog');
  return resolveMetadata('blog', seo);
}

const BlogListWrapper = async () => {
  const blogData = await getBlogData();
  return <Blogpage blogsData={blogData.data} />;
};

const Blog = () => {
  return (
    <>
      <Breadcrumb />
      <Suspense fallback={<BlogShimmer />}>
        <BlogListWrapper />
      </Suspense>
      <AppointmentSection />
    </>
  )
}
export default Blog;