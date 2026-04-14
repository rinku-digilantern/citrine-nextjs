import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import TestimonialPage from '@/src/app/components/TestimonialPage/TestimonialPage';

// Testimonial interface
interface Testimonial {
  id: number;
  name: string;
  designation: string | null;
  source: string;
  description: string;
  short_name: string;
  rating: string;
}

// SEO interface
interface SeoData {
  id: number;
  page_name: string;
  title_tag: string;
  keyword_tag: string | null;
  description_tag: string;
  canonical_tag: string;
  url: string;
}

// API Response interface
interface TestimonialsApiResponse {
  title: string;
  data: Testimonial[];
  length: number;
  seo: SeoData;
}

async function getTestimonials(): Promise<TestimonialsApiResponse | null> {
  try {
    // console.log('Fetching testimonials from API...');
    const res = await fetch('https://api.citrineclinic.com/api/testimonials', {
      cache: 'no-store' // Disable cache for now to test
    });

    if (!res.ok) {
      const errorText = await res.text();
      // console.error('Testimonials API Error:', errorText);
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
}

import { getSeoData } from '@/src/lib/cms';
import { resolveMetadata } from '@/src/lib/seo-utils';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('testimonials');
  return resolveMetadata('testimonials', seo, "Citrine Clinic Testimonials | Real Patient Reviews & Feedback");
}

const Testimonials = async () => {
  const testimonialsData = await getTestimonials();

  return (
    <>
      <Breadcrumb />
      <TestimonialPage testimonialsData={testimonialsData?.data || []} />
      <AppointmentSection />  
    </>
  );
};

export default Testimonials;