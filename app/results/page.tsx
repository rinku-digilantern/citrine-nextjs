import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import ResultsPage from '@/src/app/components/ResultsPage/ResultsPage';






import { getSeoData } from '@/src/lib/cms';
import { resolveMetadata } from '@/src/lib/seo-utils';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('results');
  return resolveMetadata('results', seo);
}

const Results = async () => {
  const seo = await getSeoData('results');

    return (
        <>

      {seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: (typeof seo.faq_schema === 'string' ? seo.faq_schema : JSON.stringify(seo.faq_schema)) }} />
      )}
      {seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: (typeof seo.bred_schema === 'string' ? seo.bred_schema : JSON.stringify(seo.bred_schema)) }} />
      )}

          <Breadcrumb />
          <ResultsPage/>
          <AppointmentSection />  
        </>
    )
}
export default Results;