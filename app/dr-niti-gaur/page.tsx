import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import DrNitiGaurBanner from '@/src/app/components/DrNitiGaurPage/DrNitiGaurBanner/DrNitiGaurBanner';
import fs from 'fs';
import path from 'path';
import DrNitiGaurFirstSection from '@/src/app/components/DrNitiGaurPage/DrNitiGaurFirstSection/DrNitiGaurFirstSection';
import PhilosophySection from '@/src/app/components/DrNitiGaurPage/PhilosophySection/PhilosophySection';
import DrNitiFaqSection from '@/src/app/components/DrNitiGaurPage/DrNitiFaqSection/DrNitiFaqSection';
import DrNitiGaurTestimonialSection from '@/src/app/components/DrNitiGaurPage/DrNitiGaurTestimonialSection/DrNitiGaurTestimonialSection';
const API_BASE = 'https://api.citrineclinic.com/api';

function getPageData() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'components', 'webcontent', 'drnitigaur.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  // JSON uses key 'dr-niti-gaur'
  return data['dr-niti-gaur'];
}

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
  const pageData = getPageData();
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

const DrNitiGaur = async () => {
  const seo = await getSeoData('dr-niti-gaur');
  const pageData = getPageData();

  return (
    <>
      {seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faq_schema) }} />
      )}
      {seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.bred_schema) }} />
      )}
      <DrNitiGaurBanner section={pageData.DrNitiGaurBanner} />
      <Breadcrumb />
      <DrNitiGaurFirstSection section={pageData.DrNitiGaurFirstSection} />
      <PhilosophySection section={pageData.PhilosophySection} />
      <DrNitiGaurTestimonialSection section={pageData.DrNitiGaurTestimonialSection} />
      <DrNitiFaqSection section={pageData.DrNitiFaqSection} />
      <AppointmentSection />
    </>
  )
}
export default DrNitiGaur;