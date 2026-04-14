import React from 'react'
import { Metadata } from 'next';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import VideoPage from '@/src/app/components/VideoPage/VideoPage';

import { getSeoData } from '@/src/lib/cms';
import { resolveMetadata } from '@/src/lib/seo-utils';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('videos');
  return resolveMetadata('videos', seo, 'Videos, Procedure and Patient Journeys | Citrine Clinic Gurgaon');
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
