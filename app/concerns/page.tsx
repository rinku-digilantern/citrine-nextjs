import React from 'react'
import { Metadata } from 'next/dist/types';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import ConcernPage from '@/src/app/components/ConcernPage/ConcernPage';

// TypeScript interfaces
interface InnerConcern {
  id: number;
  name: string;
  image: string;
  alt_tag: string;
  design_type: string;
  url: string;
}

interface ConcernItem {
  id: number;
  name: string;
  image: string;
  short_desc: string | null;
  alt_tag: string;
  design_type: string;
  inner: InnerConcern[];
  description: string | null;
  url: string;
}

interface CategoryData {
  id: number;
  name: string;
  image: string | null;
  type: string;
  alt_tag: string | null;
  description: string | null;
}

interface SeoData {
  id: number;
  page_name: string;
  title_tag: string;
  keyword_tag: string | null;
  description_tag: string;
  canonical_tag: string;
  faq_schema: string | null;
  bred_schema: string | null;
  url: string;
}

interface ConcernsApiResponse {
  title: string;
  data: ConcernItem[];
  cat: CategoryData;
  seo: SeoData;
}

// Fetch concerns data from API
async function getConcernsData(): Promise<ConcernsApiResponse | null> {
  try {
    const res = await fetch('https://api.citrineclinic.com/api/service/concerns', {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch concerns data');
    }
    
    const data = await res.json();
    // console.log('Concerns API Response:', data);
    return data;
  } catch (error) {
    // console.error('Error fetching concerns data:', error);
    return null;
  }
}

import { getSeoData } from '@/src/lib/cms';
import { resolveMetadata } from '@/src/lib/seo-utils';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('concerns');
  return resolveMetadata('concerns', seo, "Concerns | Citrine Clinic");
}

const Concerns = async () => {
    const concernsData = await getConcernsData();
    
    return (
        <>
          <Breadcrumb />
          <ConcernPage concernsData={concernsData?.data || []} />
          <AppointmentSection />  
        </>
    )
}
export default Concerns;