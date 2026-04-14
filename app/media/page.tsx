import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import MediaPage from '@/src/app/components/MediaPage/MediaPage';

interface MediaItem {
  id: number;
  name: string;
  description: string | null;
  image: string;
  logo: string;
  alt_tag: string;
  videolink: string | null;
  url: string;
}

interface MediaApiResponse {
  title: string;
  data: MediaItem[];
}

async function getMediaData(): Promise<MediaApiResponse> {
  try {
    // console.log('Fetching media data from API...');
    const res = await fetch('https://api.citrineclinic.com/api/pressmedia-category', {
      cache: 'no-store'
    });
    
    // console.log('Media API Response status:', res.status);
    
    if (!res.ok) {
      throw new Error('Failed to fetch media data');
    }
    
    const data = await res.json();
    // console.log('Media data fetched successfully, items count:', data.data?.length);
    return data;
  } catch (error) {
    // console.error('Error fetching media data:', error);
    return {
      title: 'Success',
      data: []
    };
  }
}

import { getSeoData } from '@/src/lib/cms';
import { resolveMetadata } from '@/src/lib/seo-utils';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('media');
  return resolveMetadata('media', seo, 'News & Media');
}

const Media = async () => {
    const mediaData = await getMediaData();
    
    return (
        <>
          <Breadcrumb />
          <MediaPage mediaData={mediaData.data} />
          <AppointmentSection />  
        </>
    )
}
export default Media;