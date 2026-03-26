import React from 'react'
import { Metadata } from 'next/dist/types';
import DocctorBanner from '@/src/app/components/AboutDcotorPage/DocctorBanner/DocctorBanner';
import AboutDoctorMarquee from '@/src/app/components/AboutDcotorPage/AboutDoctorMarquee/AboutDoctorMarquee';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import OurVideos from '@/src/app/components/homepage/OurVideos/OurVideos';
import CareerOverview from '@/src/app/components/AboutDcotorPage/CareerOverview/CareerOverview';
import ConferenceSection from '@/src/app/components/AboutDcotorPage/ConferenceSection/ConferenceSection';
import MyCommitment from '@/src/app/components/AboutDcotorPage/MyCommitment/MyCommitment';
import StickyCard from '@/src/app/components/AboutDcotorPage/StickyCard/StickyCard';
import MarqueeCenter from '@/src/app/components/AboutDcotorPage/MarqueeCenter/MarqueeCenter';

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
  const seo = await getSeoData('dr-niti-gaur');
  if (!seo) return { title: 'Citrine Clinic' };
  return {
    title: seo.title_tag || 'Citrine Clinic',
    description: seo.description_tag || '',
    keywords: seo.keyword_tag || undefined,
    alternates: {
      canonical: seo.canonical_tag ? `/${seo.canonical_tag}` : '/dr-niti-gaur',
    },
    openGraph: {
      url: `https://www.citrineclinic.com/${seo.canonical_tag || 'dr-niti-gaur'}`,
      title: seo.title_tag || '',
      description: seo.description_tag || '',
    },
  };
}

const Aboutdoctor = async () => {
  const seo = await getSeoData('dr-niti-gaur');

  return (
    <>
      {seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faq_schema) }} />
      )}
      {seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.bred_schema) }} />
      )}
      <DocctorBanner />
      <AboutDoctorMarquee />
      <StickyCard />
      <MarqueeCenter />
      <ConferenceSection />
      <MyCommitment />
      <CareerOverview />
      <OurVideos />
      <AppointmentSection />
    </>
  )
}
export default Aboutdoctor;