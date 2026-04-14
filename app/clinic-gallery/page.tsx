import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import ClinicGalleryPage from '@/src/app/components/ClinicGalleryPage/ClinicGalleryPage';

interface GalleryItem {
  id: number;
  gallery_image: string;
  full_image: string;
  alt_tag: string;
}

interface GalleryApiResponse {
  title: string;
  data: GalleryItem[];
}

async function getGalleryData(): Promise<GalleryApiResponse> {
  try {
    // console.log('Fetching gallery data from API...');
    const res = await fetch('https://api.citrineclinic.com/api/gallery', {
      cache: 'no-store'
    });
    
    // console.log('Gallery API Response status:', res.status);
    
    if (!res.ok) {
      throw new Error('Failed to fetch gallery data');
    }
    
    const data = await res.json();
    // console.log('Gallery data fetched successfully, items count:', data.data?.length);
    return data;
  } catch (error) {
    // console.error('Error fetching gallery data:', error);
    return {
      title: 'Success',
      data: []
    };
  }
}

import { getSeoData } from '@/src/lib/cms';
import { resolveMetadata } from '@/src/lib/seo-utils';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('clinic-gallery');
  return resolveMetadata('clinic-gallery', seo, "Clinic Gallery | Citrine Clinic");
}

const ClinicGallery = async () => {
    const galleryData = await getGalleryData();
    
    return (
        <>
          <Breadcrumb />
          <ClinicGalleryPage galleryData={galleryData.data} />
          <AppointmentSection />  
        </>
    )
}
export default ClinicGallery;