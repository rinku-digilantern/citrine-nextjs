import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import ResultsPage from '@/src/app/components/ResultsPage/ResultsPage';


export const metadata: Metadata = {
  title: "Results | Dr. Niti Gaur | Citrine Clinic",
  description: "results with Citrine Clinic and get yourself best treatments that give refreshed and rejuvenated skin.",
  alternates: {
    canonical: '/results',
  },
  openGraph: {
    url: 'https://www.citrineclinic.com/results',
  },
};


const Results = () => {
    return (
        <>
          <Breadcrumb />
          <ResultsPage/>
          <AppointmentSection />  
        </>
    )
}
export default Results;