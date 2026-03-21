import React from 'react'
import { Metadata } from 'next/dist/types';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import TreatmentPage from '@/src/app/components/TreatmentPage/TreatmentPage';

interface TreatmentItem {
  id: number;
  name: string;
  image: string;
  short_desc: string | null;
  alt_tag: string | null;
  design_type: string;
  inner: any[];
  description: string;
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
  canonical_tag: string | null;
  faq_schema: string | null;
  bred_schema: string | null;
  url: string;
}

interface TreatmentsApiResponse {
  title: string;
  data: TreatmentItem[];
  cat: CategoryData;
  seo: SeoData;
}

async function getTreatmentsData(): Promise<TreatmentsApiResponse> {
  try {
    console.log('Fetching treatments data from API...');
    const res = await fetch('https://api.citrineclinic.com/api/service/treatments', {
      cache: 'no-store'
    });
    
    // console.log('Treatments API Response status:', res.status);
    
    if (!res.ok) {
      throw new Error('Failed to fetch treatments data');
    }
    
    const data = await res.json();
    // console.log('Treatments data fetched successfully, items count:', data.data?.length);
    return data;
  } catch (error) {
    // console.error('Error fetching treatments data:', error);
    return {
      title: 'Success',
      data: [],
      cat: {
        id: 0,
        name: 'Treatments',
        image: null,
        type: 'image',
        alt_tag: null,
        description: null
      },
      seo: {
        id: 0,
        page_name: 'Treatments',
        title_tag: 'Skin Treatments in Gurgaon | Skin Specialist | Citrine Clinic',
        keyword_tag: null,
        description_tag: 'Are you looking for the best skin treatments clinic in Gurgaon? Visit Citrine Clinic, we are offering affordable skin problem treatments in Gurgaon.',
        canonical_tag: null,
        faq_schema: null,
        bred_schema: null,
        url: 'treatments'
      }
    };
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const treatmentsData = await getTreatmentsData();
  const title = treatmentsData.seo?.title_tag || 'Skin Treatments in Gurgaon | Skin Specialist | Citrine Clinic';
  const description = treatmentsData.seo?.description_tag || 'Are you looking for the best skin treatments clinic in Gurgaon? Visit Citrine Clinic, we are offering affordable skin problem treatments in Gurgaon.';
  
  return {
    title,
    description,
    alternates: {
      canonical: '/treatments',
    },
    openGraph: {
      url: 'https://www.citrineclinic.com/treatments',
      title,
      description,
    },
  };
}

const Treatments = async () => {
    const treatmentsData = await getTreatmentsData();
    
    return (
        <>
          <Breadcrumb />
          <TreatmentPage 
            treatmentsData={treatmentsData.data}
            categoryName={treatmentsData.cat?.name || 'Treatments'}/>
          <AppointmentSection />  
        </>
    )
}
export default Treatments;