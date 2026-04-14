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

import { getSeoData } from '@/src/lib/cms';
import { resolveMetadata } from '@/src/lib/seo-utils';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('about-clinic');
  return resolveMetadata('about-clinic', seo);
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