import React from 'react'
import { Metadata } from 'next/dist/types';
import AboutClinicBanner from '../../src/app/components/AboutClinicPage/AboutClinicBanner/AboutClinicBanner';
import RedefiningSection from '@/src/app/components/AboutClinicPage/RedefiningSection/RedefiningSection';
import FourColumnSection from '@/src/app/components/AboutClinicPage/FourColumnSection/FourColumnSection';
import CitrineDifferenceBanner from '@/src/app/components/AboutClinicPage/CitrineDifferenceBanner/CitrineDifferenceBanner';
import TeamSection from '@/src/app/components/AboutClinicPage/TeamSection/TeamSection';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import PatientTestimonials from '@/src/app/components/homepage/PatientTestimonials/PatientTestimonials';
import OurVideos from '@/src/app/components/homepage/OurVideos/OurVideos';
import HappyPatientsGallery from '@/src/app/components/AboutClinicPage/HappyPatientsGallery/HappyPatientsGallery';

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
  const seo = await getSeoData('about-clinic');
  if (!seo) return { title: 'Citrine Clinic' };
  return {
    title: seo.title_tag || 'Citrine Clinic',
    description: seo.description_tag || '',
    keywords: seo.keyword_tag || undefined,
    alternates: {
      canonical: seo.canonical_tag ? `/${seo.canonical_tag}` : '/about-clinic',
    },
    openGraph: {
      url: `https://www.citrineclinic.com/${seo.canonical_tag || 'about-clinic'}`,
      title: seo.title_tag || '',
      description: seo.description_tag || '',
    },
  };
}

const About = async () => {
  const seo = await getSeoData('about-clinic');

  return (
    <>

      {seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faq_schema) }} />
      )}
      {seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.bred_schema) }} />
      )}

      <AboutClinicBanner />
      <RedefiningSection />
      <FourColumnSection />
      <HappyPatientsGallery />
      <TeamSection />
      <PatientTestimonials />
      <CitrineDifferenceBanner />
      <OurVideos />
      <AppointmentSection />
    </>
  )
}
export default About;