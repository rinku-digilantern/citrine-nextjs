import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import TechnologyBanner from '@/src/app/components/TechnologyInner/TechnologyBanner/TechnologyBanner';
import TechSecondSection from '@/src/app/components/TechnologyInner/TechSecondSection/TechSecondSection';
import TechStickyThirdSection from '@/src/app/components/TechnologyInner/TechStickyThirdSection/TechStickyThirdSection';
import TechFourthSection from '@/src/app/components/TechnologyInner/TechFourthSection/TechFourthSection';
import TechFivethSection from '@/src/app/components/TechnologyInner/TechFivethSection/TechFivethSection';
import TechSixethSection from '@/src/app/components/TechnologyInner/TechSixethSection/TechSixethSection';
import TechResultSection from '@/src/app/components/TechnologyInner/TechResultSection/TechResultSection';
import TechFaqSection from '@/src/app/components/TechnologyInner/TechFaqSection/TechFaqSection';
import TechVideoSection from '@/src/app/components/TechnologyInner/TechVideoSection/TechVideoSection';
import TechTestimonialSection from '@/src/app/components/TechnologyInner/TechTestimonialSection/TechTestimonialSection';






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
  const seo = await getSeoData('technology-inner');
  if (!seo) return { title: 'Citrine Clinic' };
  return {
    title: seo.title_tag || 'Citrine Clinic',
    description: seo.description_tag || '',
    keywords: seo.keyword_tag || undefined,
    alternates: {
      canonical: seo.canonical_tag ? `/${seo.canonical_tag}` : '/technology-inner',
    },
    openGraph: {
      url: `https://www.citrineclinic.com/${seo.canonical_tag || 'technology-inner'}`,
      title: seo.title_tag || '',
      description: seo.description_tag || '',
    },
  };
}

const TechnologyInner = async () => {
  const seo = await getSeoData('technology-inner');

    return (
        <>

      {seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faq_schema) }} />
      )}
      {seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.bred_schema) }} />
      )}

          <TechnologyBanner/>
          <TechSecondSection/>
          <TechStickyThirdSection/>
          <TechFourthSection/>
          <TechFivethSection />
          <TechSixethSection />
          <TechResultSection />
          <TechFaqSection/>
          <TechVideoSection/>
          <TechTestimonialSection/>
          <AppointmentSection />  
        </>
    )
}
export default TechnologyInner;