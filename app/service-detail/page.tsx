import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import ServiceDetailBannerSection from '@/src/app/components/ServiceDetailPage/ServiceDetailBannerSection/ServiceDetailBannerSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import ServiceDetailFirstSection from '@/src/app/components/ServiceDetailPage/ServiceDetailFirstSection/ServiceDetailFirstSection';
import ServiceDetailSecondSection from '@/src/app/components/ServiceDetailPage/ServiceDetailSecondSection/ServiceDetailSecondSection';
import ServiceDetailThirdSection from '@/src/app/components/ServiceDetailPage/ServiceDetailThirdSection/ServiceDetailThirdSection';
import ServiceDetailFaqSection from '@/src/app/components/ServiceDetailPage/ServiceDetailFaqSection/ServiceDetailFaqSection';





import { getSeoData } from '@/src/lib/cms';
import { resolveMetadata } from '@/src/lib/seo-utils';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('service-detail');
  return resolveMetadata('service-detail', seo);
}

const ServiceDetail = async () => {
  const seo = await getSeoData('service-detail');

    return (
        <>

      {seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faq_schema) }} />
      )}
      {seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.bred_schema) }} />
      )}

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