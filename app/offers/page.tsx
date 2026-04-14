import React from 'react'
import { Metadata } from 'next/dist/types';

import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import OfferPage from '@/src/app/components/OfferPage/OfferPage';






import { getSeoData } from '@/src/lib/cms';
import { resolveMetadata } from '@/src/lib/seo-utils';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('offers');
  return resolveMetadata('offers', seo);
}

const Offers = async () => {
  const seo = await getSeoData('offers');

    return (
        <>

      {seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faq_schema) }} />
      )}
      {seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.bred_schema) }} />
      )}

          <Breadcrumb />
          <OfferPage/>
          <AppointmentSection />  
        </>
    )
}
export default Offers;