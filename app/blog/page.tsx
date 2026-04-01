import React from 'react'
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
    // console.log('Fetching blog data from API...');
    const res = await fetch('https://api.citrineclinic.com/api/blog', {
      cache: 'no-store'
    });

    // console.log('Blog API Response status:', res.status);

    if (!res.ok) {
      throw new Error('Failed to fetch blog data');
    }

    const data = await res.json();
    // console.log('Blog data fetched successfully, items count:', data.data?.length);
    return data;
  } catch (error) {
    // console.error('Error fetching blog data:', error);
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

export async function generateMetadata(): Promise<Metadata> {
  const blogData = await getBlogData();

  return {
    title: blogData.seo.title_tag,
    description: blogData.seo.description_tag,
    alternates: {
      canonical: '/blog',
    },
    openGraph: {
      url: blogData.seo.canonical_tag,
      title: blogData.seo.title_tag,
      description: blogData.seo.description_tag,
    },
  };
}

const Blog = async () => {
  const blogData = await getBlogData();

  return (
    <>
      <Breadcrumb />
      <Blogpage blogsData={blogData.data} />
      <AppointmentSection />
    </>
  )
}
export default Blog;