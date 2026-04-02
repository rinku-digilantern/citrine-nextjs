import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import fs from 'fs';
import path from 'path';
import SkinClinicGurgaonBanner from '@/src/app/components/SkinClinicInGurgaonPage/SkinClinicGurgaonBanner/SkinClinicGurgaonBanner';
import SkinClinicGurgaonFaqSection from '@/src/app/components/SkinClinicInGurgaonPage/SkinClinicGurgaonFaqSection/SkinClinicGurgaonFaqSection';
import SkinClinicGurgaonFirstSection from '@/src/app/components/SkinClinicInGurgaonPage/SkinClinicGurgaonFirstSection/SkinClinicGurgaonFirstSection';
import SkinClinicGurgaonSecondSection from '@/src/app/components/SkinClinicInGurgaonPage/SkinClinicGurgaonSecondSection/SkinClinicGurgaonSecondSection';
import SkinClinicGurgaonThirdSection from '@/src/app/components/SkinClinicInGurgaonPage/SkinClinicGurgaonThirdSection/SkinClinicGurgaonThirdSection';
import SkinClinicGurgaonFourthSection from '@/src/app/components/SkinClinicInGurgaonPage/SkinClinicGurgaonFourthSection/SkinClinicGurgaonFourthSection';
import SkinClinicGurgaonSeventhSection from '@/src/app/components/SkinClinicInGurgaonPage/SkinClinicGurgaonSeventhSection/SkinClinicGurgaonSeventhSection';
import SkinClinicGurgaonSixthSection from '@/src/app/components/SkinClinicInGurgaonPage/SkinClinicGurgaonSixthSection/SkinClinicGurgaonSixthSection';
import SkinClinicGurgaonFivethSection from '@/src/app/components/SkinClinicInGurgaonPage/SkinClinicGurgaonFivethSection/SkinClinicGurgaonFivethSection';

const API_BASE = 'https://api.citrineclinic.com/api';

function getPageData() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'components', 'webcontent', 'SkinClinicGurgaon.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  return data['skin-clinic-in-gurgaon'];
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
  const seo = await getSeoData('skin-clinic-in-gurgaon');
  const pageData = getPageData();
  const thirdSection = pageData?.SkinClinicGurgaonThirdSection
    ? {
        image: pageData.SkinClinicGurgaonThirdSection.image,
        heading: pageData.SkinClinicGurgaonThirdSection.mainHeading || pageData.SkinClinicGurgaonThirdSection.heading,
        paragraph: pageData.SkinClinicGurgaonThirdSection.paragraph1 || pageData.SkinClinicGurgaonThirdSection.paragraph,
      }
    : null;
  if (!seo) return { title: 'Citrine Clinic' };
  return {
    title: seo.title_tag || 'Citrine Clinic',
    description: seo.description_tag || '',
    keywords: seo.keyword_tag || undefined,
    alternates: {
      canonical: seo.canonical_tag ? `/${seo.canonical_tag}` : '/skin-clinic-in-gurgaon',
    },
    openGraph: {
      url: `https://www.citrineclinic.com/${seo.canonical_tag || 'skin-clinic-in-gurgaon'}`,
      title: seo.title_tag || '',
      description: seo.description_tag || '',
    },
  };
}

const SkinClinicInGurgaon = async () => {
  const seo = await getSeoData('skin-clinic-in-gurgaon');
  const pageData = getPageData();

  return (
    <>
      {seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faq_schema) }} />
      )}
      {seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.bred_schema) }} />
      )}
       
      <SkinClinicGurgaonBanner section={pageData?.SkinClinicGurgaonBanner} />
      <Breadcrumb />
      <SkinClinicGurgaonFirstSection section={pageData?.SkinClinicGurgaonFirstSection} />
      <SkinClinicGurgaonSecondSection section={pageData?.SkinClinicGurgaonSecondSection} />
      <SkinClinicGurgaonThirdSection section={pageData?.SkinClinicGurgaonThirdSection} />
      <SkinClinicGurgaonFourthSection section={pageData?.SkinClinicGurgaonFourthSection} />
      <SkinClinicGurgaonFivethSection section={pageData?.SkinClinicGurgaonFivethSection} />
      <SkinClinicGurgaonSixthSection section={pageData?.SkinClinicGurgaonSixthSection} />
      <SkinClinicGurgaonSeventhSection section={pageData?.SkinClinicGurgaonSeventhSection} />
      <SkinClinicGurgaonFaqSection section={pageData?.SkinClinicGurgaonFaqSection} />
      <AppointmentSection />
    </>
  )
}
export default SkinClinicInGurgaon;