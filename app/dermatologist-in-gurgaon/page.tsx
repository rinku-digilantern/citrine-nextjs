import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import BestDermatologistBanner from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistBanner/BestDermatologistBanner';
import BestDermatologistFirstSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistFirstSection/BestDermatologistFirstSection';
import BestDermatologistFourthSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistFourthSection/BestDermatologistFourthSection';
import BestDermatologistFivethSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistFivethSection/BestDermatologistFivethSection';
import BestDermatologistSixthSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistSixthSection/BestDermatologistSixthSection';
import BestDermatologistEightSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistEightSection/BestDermatologistEightSection';
import BestDermatologistTestimonialSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistTestimonialSection/BestDermatologistTestimonialSection';
import BestDermatologistTenthSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistTenthSection/BestDermatologistTenthSection';
import fs from 'fs';
import path from 'path';
import BestDermatologistFaqSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistFaqSection/BestDermatologistFaqSection';
import DermatologyThirdSection from '@/src/app/components/BestDermatologistInDelhiPage/DermatologyThirdSection/DermatologyThirdSection';
import DermatologyFivethSection from '@/src/app/components/BestDermatologistInDelhiPage/DermatologyFivethSection/DermatologyFivethSection';
import DermatologysixethSection from '@/src/app/components/BestDermatologistInDelhiPage/DermatologysixethSection/DermatologysixethSection';
import DermatologySevenSection from '@/src/app/components/BestDermatologistInDelhiPage/DermatologySevenSection/DermatologySevenSection';
import DermatologyEightSection from '@/src/app/components/BestDermatologistInDelhiPage/DermatologyEightSection/DermatologyEightSection';

function getPageData() {
  const filePath = path.join(process.cwd(), 'src','app', 'components', 'webcontent', 'BestDermatologistInDelhiPageContent.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  return data["dermatologist-in-gurgaon"];
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
  const seo = await getSeoData('dermatologist-in-gurgaon');
  if (!seo) return { title: 'Citrine Clinic' };
  return {
    title: seo.title_tag || 'Citrine Clinic',
    description: seo.description_tag || '',
    keywords: seo.keyword_tag || undefined,
    alternates: {
      canonical: seo.canonical_tag ? `/${seo.canonical_tag}` : '/dermatologist-in-gurgaon',
    },
    openGraph: {
      url: `https://www.citrineclinic.com/${seo.canonical_tag || 'dermatologist-in-gurgaon'}`,
      title: seo.title_tag || '',
      description: seo.description_tag || '',
    },
  };
}

const DermatologistInGurgaon = async () => {
  const seo = await getSeoData('dermatologist-in-gurgaon');

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
      <BestDermatologistFourthSection section={pageData.BestDermatologistFourthSection} />
      <DermatologyThirdSection section={pageData.DermatologyThirdSection} />
      <DermatologyFivethSection section={pageData.DermatologyFivethSection} />
      <DermatologysixethSection section={pageData.DermatologysixethSection}/>
      <DermatologySevenSection section={pageData.DermatologySevenSection}/>
      <BestDermatologistFivethSection section={pageData.BestDermatologistFivethSection} />
      <BestDermatologistSixthSection section={pageData.BestDermatologistSixthSection} />
      <DermatologyEightSection section={pageData.DermatologyEightSection} />
      <BestDermatologistTestimonialSection section={pageData.BestDermatologistTestimonialSection} />
      <BestDermatologistFaqSection section={pageData.BestDermatologistFaqSection} />
      <BestDermatologistTenthSection section={pageData.BestDermatologistTenthSection} />
      <AppointmentSection />
    </>
  );
};

export default DermatologistInGurgaon;