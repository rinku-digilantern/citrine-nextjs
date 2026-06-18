import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import FirstSection from '@/src/app/components/ServiceCategoryPage/FirstSection/FirstSection';
import TableofContentcategory from '@/src/app/components/ServiceCategoryPage/TableofContentcategory/TableofContentcategory';
import ColumnSection from '@/src/app/components/ServiceCategoryPage/ColumnSection/ColumnSection';





import { getSeoData } from '@/src/lib/cms';
import { resolveMetadata } from '@/src/lib/seo-utils';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('service-category');
  return resolveMetadata('service-category', seo);
}

const ServiceCategory = async () => {
  const seo = await getSeoData('service-category');

    return (
        <>

      {seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: (typeof seo.faq_schema === 'string' ? seo.faq_schema : JSON.stringify(seo.faq_schema)) }} />
      )}
      {seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: (typeof seo.bred_schema === 'string' ? seo.bred_schema : JSON.stringify(seo.bred_schema)) }} />
      )}

          <FirstSection/>
          <TableofContentcategory />
          <ColumnSection/>
          <AppointmentSection />  
        </>
    )
}
export default ServiceCategory;