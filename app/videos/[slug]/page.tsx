import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import VideoDetailsPage from '@/src/app/components/VideoDetailsPage/VideoDetailsPage';

interface PageProps {
  params: { slug: string };
}

// API Response interfaces
interface VideoItem {
  id: number;
  service_id: number | null;
  name: string;
  image: string;
  video: string;
  alt_tag: string;
}

interface VideoDetailsData {
  id: number;
  name: string;
  banner_image: string | null;
  video_type: string;
  video_link: string | null;
  description: string | null;
  alt_tag: string;
  title_tag: string;
  keyword_tag: string | null;
  description_tag: string;
  canonical_tag: string | null;
  url: string;
  servicelist: VideoItem[];
}

interface ApiResponse {
  success: boolean;
  data: VideoDetailsData;
  video: VideoItem[];
  seo: string;
}

async function getVideoDetails(slug: string): Promise<ApiResponse | null> {
  try {
    // console.log('Fetching video details for slug:', slug);
    const url = `https://api.citrineclinic.com/api/video-details/${slug}`;
    // console.log('API URL:', url);
    
    const res = await fetch(url, {
      cache: 'no-store' // Disable cache for debugging
    });

    // console.log('Response status:', res.status);
    // console.log('Response ok:', res.ok);

    if (!res.ok) {
      const errorText = await res.text();
    //   console.error('API Error Response:', errorText);
      return null;
    }

    const data = await res.json();
    // console.log('API Response:', JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    // console.error('Error fetching video details:', error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);
  const videoData = await getVideoDetails(slug);

  if (!videoData || !videoData.success) {
    return {
      title: 'Video Not Found',
      description: 'The requested video could not be found.',
    };
  }

  const { data } = videoData;

  return {
    title: data.title_tag || data.name,
    description: data.description_tag || data.description || data.name,
    keywords: data.keyword_tag || undefined,
    alternates: {
      canonical: data.canonical_tag || `/videos/${slug}`,
    },
    openGraph: {
      url: `https://www.citrineclinic.com/videos/${slug}`,
      title: data.title_tag || data.name,
      description: data.description_tag || data.description || data.name,
    },
  };
}

const VideoDetails = async ({ params }: PageProps) => {
  // Await params in Next.js 15+
  const { slug } = await Promise.resolve(params);
  const videoData = await getVideoDetails(slug);

  console.log('VideoDetails component - slug:', slug);
  console.log('VideoDetails component - videoData:', videoData);

  if (!videoData || !videoData.success) {
    return (
      <>
        <Breadcrumb />
        <div style={{ textAlign: 'center'}}>Slug: {slug}</div>
        <AppointmentSection />
      </>
    );
  }

  return (
    <>
      <Breadcrumb />
      <VideoDetailsPage videoData={videoData.data} />
      <AppointmentSection />
    </>
  );
};

export default VideoDetails;