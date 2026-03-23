import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import ServiceDetailBannerSection from '@/src/app/components/ServiceDetailPage/ServiceDetailBannerSection/ServiceDetailBannerSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import ServiceDetailFirstSection from '@/src/app/components/ServiceDetailPage/ServiceDetailFirstSection/ServiceDetailFirstSection';
import ServiceDetailSecondSection from '@/src/app/components/ServiceDetailPage/ServiceDetailSecondSection/ServiceDetailSecondSection';
import ServiceDetailThirdSection from '@/src/app/components/ServiceDetailPage/ServiceDetailThirdSection/ServiceDetailThirdSection';
import ServiceDetailFaqSection from '@/src/app/components/ServiceDetailPage/ServiceDetailFaqSection/ServiceDetailFaqSection';

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


const ServiceDetail = () => {
    return (
        <>
          <ServiceDetailBannerSection/>
          <Breadcrumb/>
          <ServiceDetailFirstSection/>
          <ServiceDetailSecondSection/>
          <ServiceDetailThirdSection/>
          <ServiceDetailFaqSection/>
          <AppointmentSection />  
        </>
    )
}
export default ServiceDetail;