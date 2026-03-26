import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import ServiceDetailBannerSection from '@/src/app/components/ServiceDetailPage/ServiceDetailBannerSection/ServiceDetailBannerSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import ServiceDetailFirstSection from '@/src/app/components/ServiceDetailPage/ServiceDetailFirstSection/ServiceDetailFirstSection';
import ServiceDetailSecondSection from '@/src/app/components/ServiceDetailPage/ServiceDetailSecondSection/ServiceDetailSecondSection';
import ServiceDetailThirdSection from '@/src/app/components/ServiceDetailPage/ServiceDetailThirdSection/ServiceDetailThirdSection';
import ServiceDetailFaqSection from '@/src/app/components/ServiceDetailPage/ServiceDetailFaqSection/ServiceDetailFaqSection';





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
  const seo = await getSeoData('service-detail');
  if (!seo) return { title: 'Citrine Clinic' };
  return {
    title: seo.title_tag || 'Citrine Clinic',
    description: seo.description_tag || '',
    keywords: seo.keyword_tag || undefined,
    alternates: {
      canonical: seo.canonical_tag ? `/${seo.canonical_tag}` : '/service-detail',
    },
    openGraph: {
      url: `https://www.citrineclinic.com/${seo.canonical_tag || 'service-detail'}`,
      title: seo.title_tag || '',
      description: seo.description_tag || '',
    },
  };
}

const ServiceDetail = async () => {
  const seo = await getSeoData('service-detail');

    return (
        <>

      {seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faq_schema) }} />
      )}
      {seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.bred_schema) }} />
      )}

          <ServiceDetailBannerSection/>
          <Breadcrumb/>
          <ServiceDetailFirstSection/>
          <ServiceDetailSecondSection/>
          <ServiceDetailThirdSection/>
          <ServiceDetailFaqSection/>
          <AppointmentSection />  
        </>
    )
}
export default ServiceDetail;