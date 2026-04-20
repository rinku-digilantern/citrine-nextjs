import React from 'react'
import { Metadata } from 'next/dist/types';
import DocctorBanner from '@/src/app/components/AboutDcotorPage/DocctorBanner/DocctorBanner';
import AboutDoctorMarquee from '@/src/app/components/AboutDcotorPage/AboutDoctorMarquee/AboutDoctorMarquee';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import OurVideos from '@/src/app/components/homepage/OurVideos/OurVideos';
import CareerOverview from '@/src/app/components/AboutDcotorPage/CareerOverview/CareerOverview';
import ConferenceSection from '@/src/app/components/AboutDcotorPage/ConferenceSection/ConferenceSection';
import MyCommitment from '@/src/app/components/AboutDcotorPage/MyCommitment/MyCommitment';
import StickyCard from '@/src/app/components/AboutDcotorPage/StickyCard/StickyCard';
import MarqueeCenter from '@/src/app/components/AboutDcotorPage/MarqueeCenter/MarqueeCenter';
import fs from 'fs';
import path from 'path';

function getPageData() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'components', 'webcontent', 'drnitigaur.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  // JSON uses key 'dr-niti-gaur'
  return data['dr-niti-gaur'];
}

import { getSeoData } from '@/src/lib/cms';
import { resolveMetadata } from '@/src/lib/seo-utils';
import DrNitiFaqSection from '@/src/app/components/DrNitiGaurPage/DrNitiFaqSection/DrNitiFaqSection';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('dr-niti-gaur');
  return resolveMetadata('dr-niti-gaur', seo);
}

const Aboutdoctor = async () => {
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
      <DocctorBanner />
      <AboutDoctorMarquee />
      <StickyCard />
      <MarqueeCenter />
      <ConferenceSection />
      <MyCommitment />
      <CareerOverview />
      <OurVideos />
      <DrNitiFaqSection section={pageData.DrNitiFaqSection} />
      <AppointmentSection />
    </>
  )
}
export default Aboutdoctor;