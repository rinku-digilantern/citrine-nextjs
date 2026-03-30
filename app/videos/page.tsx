import React from 'react'
import { Metadata } from 'next';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import VideoPage from '@/src/app/components/VideoPage/VideoPage';

const API_BASE = 'https://api.citrineclinic.com/api';

async function getSeoData(slug: string) {
  try {
    const res = await fetch(`${API_BASE}/seo-tag/${slug}`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json || !json.seo) return null;
    return json.seo;
  } catch {
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('videos');
  if (!seo) return { title: 'Videos, Procedure and Patient Journeys | Citrine Clinic Gurgaon' };

  return {
    title: seo.title_tag || 'Videos, Procedure and Patient Journeys | Citrine Clinic Gurgaon',
    description: seo.description_tag || 'Explore treatment videos, real patient journeys, and expert insights from Citrine Clinic Gurgaon on advanced skin, hair, and aesthetic procedures.',
    keywords: seo.keyword_tag || undefined,
    alternates: {
      canonical: seo.canonical_tag ? `/${seo.canonical_tag}` : '/videos',
    },
    openGraph: {
      url: `https://www.citrineclinic.com/${seo.canonical_tag || 'videos'}`,
      title: seo.title_tag || '',
      description: seo.description_tag || '',
    },
  };
}

export default async function Videos() {
    const seo = await getSeoData('videos');

    return (
        <>
          {seo?.faq_schema && (
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faq_schema) }} />
          )}
          {seo?.bred_schema && (
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.bred_schema) }} />
          )}
          <Breadcrumb />
          <VideoPage />
          <AppointmentSection />  
        </>
    )
}
