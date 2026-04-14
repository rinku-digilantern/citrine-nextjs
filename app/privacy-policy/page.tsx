import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import PrivacyPolicyPage from '@/src/app/components/PrivacyPolicyPage/PrivacyPolicyPage';






import { getSeoData } from '@/src/lib/cms';
import { resolveMetadata } from '@/src/lib/seo-utils';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('privacy-policy');
  return resolveMetadata('privacy-policy', seo);
}

const PrivacyPolicy = async () => {
  const seo = await getSeoData('privacy-policy');

    return (
        <>

      {seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faq_schema) }} />
      )}
      {seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.bred_schema) }} />
      )}

          <Breadcrumb />
          <PrivacyPolicyPage />
          <AppointmentSection />  
        </>
    )
}
export default PrivacyPolicy;