import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import TopSection from '@/src/app/components/ServiceInnerPage/TopSection/TopSection';
import TableOfContent from '@/src/app/components/ServiceInnerPage/TableOfContent/TableOfContent';
import FirstSection from '@/src/app/components/ServiceInnerPage/FirstSection/FirstSection';
import SecondSection from '@/src/app/components/ServiceInnerPage/SecondSection/SecondSection';
import ThirdSection from '@/src/app/components/ServiceInnerPage/ThirdSection/ThirdSection';
import FourthSection from '@/src/app/components/ServiceInnerPage/FourthSection/FourthSection';
import FivethSection from '@/src/app/components/ServiceInnerPage/FivethSection/FivethSection';
import FaqSection from '@/src/app/components/ServiceInnerPage/FaqSection/FaqSection';
import SixthSection from '@/src/app/components/ServiceInnerPage/SixthSection/SixthSection';
import SeventhSection from '@/src/app/components/ServiceInnerPage/SeventhSection/SeventhSection';
import EightSection from '@/src/app/components/ServiceInnerPage/EightSection/EightSection';
import NinethSection from '@/src/app/components/ServiceInnerPage/NinethSection/NinethSection';
import TenthSection from '@/src/app/components/ServiceInnerPage/TenthSection/TenthSection';
import EleventhSection from '@/src/app/components/ServiceInnerPage/EleventhSection/EleventhSection';
import ResultSection from '@/src/app/components/ServiceInnerPage/ResultSection/ResultSection';
import ServiceVideoSection from '@/src/app/components/ServiceInnerPage/ServiceVideoSection/ServiceVideoSection';
import ServiceTestimonialSection from '@/src/app/components/ServiceInnerPage/ServiceTestimonialSection/ServiceTestimonialSection';
import TwelveSection from '@/src/app/components/ServiceInnerPage/TwelveSection/TwelveSection';
import ThirteenSection from '@/src/app/components/ServiceInnerPage/ThirteenSection/ThirteenSection';






import { getSeoData } from '@/src/lib/cms';
import { resolveMetadata } from '@/src/lib/seo-utils';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('service-inner');
  return resolveMetadata('service-inner', seo);
}

const ServiceInner = async () => {
  const seo = await getSeoData('service-inner');

    return (
        <>

      {seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faq_schema) }} />
      )}
      {seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.bred_schema) }} />
      )}

          <TopSection/>
          <TableOfContent />
          <FirstSection/>
          <SecondSection/>
          <ThirdSection/>
          <FourthSection/>
          <FivethSection/>
          <SixthSection/>
          <SeventhSection/>
          <EightSection/>
          <NinethSection/>
          <TenthSection />
          <EleventhSection/>
          <ThirteenSection/>
          <TwelveSection/>
          <FaqSection/>
          <ResultSection/>
          <ServiceVideoSection/>
          <ServiceTestimonialSection/>
          <AppointmentSection />  
        </>
    )
}
export default ServiceInner;