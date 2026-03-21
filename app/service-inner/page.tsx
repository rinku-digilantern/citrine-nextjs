import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
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


export const metadata: Metadata = {
  title: "Book An Appointment | Dr. Niti Gaur | Citrine Clinic",
  description: "Fix your appointment with Citrine Clinic and get yourself best treatments that give refreshed and rejuvenated skin.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: '',
  },
};


const ServiceInner = () => {
    return (
        <>
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