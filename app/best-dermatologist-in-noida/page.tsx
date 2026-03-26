import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import BestDermatologistBanner from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistBanner/BestDermatologistBanner';
import BestDermatologistFirstSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistFirstSection/BestDermatologistFirstSection';
import BestDermatologistSecondSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistSecondSection/BestDermatologistSecondSection';
import BestDermatologistThirdSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistThirdSection/BestDermatologistThirdSection';
import BestDermatologistFourthSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistFourthSection/BestDermatologistFourthSection';
import BestDermatologistFivethSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistFivethSection/BestDermatologistFivethSection';
import BestDermatologistSixthSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistSixthSection/BestDermatologistSixthSection';
import BestDermatologistSevenSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistSevenSection/BestDermatologistSevenSection';
import BestDermatologistEightSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistEightSection/BestDermatologistEightSection';
import BestDermatologistTestimonialSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistTestimonialSection/BestDermatologistTestimonialSection';
import BestDermatologistNineSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistNineSection/BestDermatologistNineSection';
import BestDermatologistTenthSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistTenthSection/BestDermatologistTenthSection';
import fs from 'fs';
import path from 'path';
import BestDermatologistFaqSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistFaqSection/BestDermatologistFaqSection';




function getPageData() {
  const filePath = path.join(process.cwd(), 'src','app', 'components', 'webcontent', 'BestDermatologistInDelhiPageContent.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  if (!data || !data["best-dermatologist-in-noida"]) {
    throw new Error('best-dermatologist-in-noida content missing in JSON');
  }
  return data["best-dermatologist-in-noida"];
}



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
  const seo = await getSeoData('best-dermatologist-in-noida');
  if (!seo) return { title: 'Citrine Clinic' };
  return {
    title: seo.title_tag || 'Citrine Clinic',
    description: seo.description_tag || '',
    keywords: seo.keyword_tag || undefined,
    alternates: {
      canonical: seo.canonical_tag ? `/${seo.canonical_tag}` : '/best-dermatologist-in-noida',
    },
    openGraph: {
      url: `https://www.citrineclinic.com/${seo.canonical_tag || 'best-dermatologist-in-noida'}`,
      title: seo.title_tag || '',
      description: seo.description_tag || '',
    },
  };
}

const BestDermatologistInNoida = async () => {
  const seo = await getSeoData('best-dermatologist-in-noida');

  const pageData = getPageData();
  return (
    <>

      {seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faq_schema) }} />
      )}
      {seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.bred_schema) }} />
      )}

      <BestDermatologistBanner section={pageData.BestDermatologistBanner} />
      <Breadcrumb />
      <BestDermatologistFirstSection section={pageData.BestDermatologistFirstSection} />
      <BestDermatologistSecondSection section={pageData.BestDermatologistSecondSection} />
      <BestDermatologistThirdSection section={pageData.BestDermatologistThirdSection} />
      <BestDermatologistFourthSection section={pageData.BestDermatologistFourthSection} />
      <BestDermatologistFivethSection section={pageData.BestDermatologistFivethSection} />
      <BestDermatologistSixthSection section={pageData.BestDermatologistSixthSection} />
      <BestDermatologistSevenSection section={pageData.BestDermatologistSevenSection} />
      <BestDermatologistEightSection section={pageData.BestDermatologistEightSection} />
      <BestDermatologistTestimonialSection section={pageData.BestDermatologistTestimonialSection} />
      <BestDermatologistNineSection section={pageData.BestDermatologistNineSection} />
      <BestDermatologistFaqSection section={pageData.BestDermatologistFaqSection} />
      <BestDermatologistTenthSection section={pageData.BestDermatologistTenthSection} />
      <AppointmentSection />
    </>
  );
};

export default BestDermatologistInNoida;
