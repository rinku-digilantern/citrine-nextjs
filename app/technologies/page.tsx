import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import TechnologyListPage from '@/src/app/components/TechnologyListPage/TechnologyListPage';


export const metadata: Metadata = {
  title: "Technologies | Dr. Niti Gaur | Citrine Clinic",
  description: "Technologies",
  alternates: {
    canonical: '/technologies',
  },
  openGraph: {
    url: 'https://www.citrineclinic.com/technologies',
  },
};


const Technologies = () => {
    return (
        <>
          <Breadcrumb />
          <TechnologyListPage/>
          <AppointmentSection />  
        </>
    )
}
export default Technologies;