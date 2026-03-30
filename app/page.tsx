import { Metadata } from 'next';
import AestheticsSection from "@/src/app/components/homepage/AestheticsSection/AestheticsSection";
import AppointmentSection from "@/src/app/components/common/AppointmentSection/AppointmentSection";
import CitrineClinicSection from "@/src/app/components/homepage/CitrineClinicSection/CitrineClinicSection";
import DermatologyTreatment from "@/src/app/components/homepage/DermatologyTreatment/DermatologyTreatment";
import DoctorSection from "@/src/app/components/homepage/DoctorSection/DoctorSection";
import HairSection from "@/src/app/components/homepage/HairSection/HairSection";
import MainBanner from "@/src/app/components/homepage/MainBanner/MainBanner";
import MarqueeSection from "@/src/app/components/homepage/MarqueeSection/MarqueeSection";
import OurOffer from "@/src/app/components/homepage/OurOffer/OurOffer";
import OurVideos from "@/src/app/components/homepage/OurVideos/OurVideos";
import PatientTestimonials from "@/src/app/components/homepage/PatientTestimonials/PatientTestimonials";
import Philosophy from "@/src/app/components/homepage/Philosophy/Philosophy";
import TechnologySection from "@/src/app/components/homepage/TechnologySection/TechnologySection";
import WellnessTreatment from "@/src/app/components/homepage/WellnessTreatment/WellnessTreatment";


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
  const seo = await getSeoData('home');
  if (!seo) return { title: 'Citrine Clinic' };
  return {
    title: seo.title_tag || 'Citrine Clinic',
    description: seo.description_tag || '',
    keywords: seo.keyword_tag || undefined,
    alternates: {
      canonical: seo.canonical_tag ? `/${seo.canonical_tag}` : '/home',
    },
    openGraph: {
      url: `https://www.citrineclinic.com/${seo.canonical_tag || 'home'}`,
      title: seo.title_tag || '',
      description: seo.description_tag || '',
    },
  };
}

export default async function Home() {
  const seo = await getSeoData('home');

  return (
    <>

      {seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faq_schema) }} />
      )}
      {seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.bred_schema) }} />
      )}

      <MainBanner />
      <MarqueeSection />
      <AestheticsSection />
      <DermatologyTreatment />
      <WellnessTreatment />
      <HairSection />
      <TechnologySection />
      {/* <OurOffer /> */}
      <Philosophy />
      <DoctorSection />
      <PatientTestimonials />
      <CitrineClinicSection />
      <OurVideos />
      <AppointmentSection />
    </>
  );
}
