import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import ExplorePage from '@/src/app/components/ExplorePage/ExplorePage';


export const metadata: Metadata = {
  title: "Explore | Dr. Niti Gaur | Citrine Clinic",
  description: "Explore the services and treatments offered by Citrine Clinic and get yourself best treatments that give refreshed and rejuvenated skin.",
  alternates: {
    canonical: '/explore',
  },
  openGraph: {
    url: 'https://www.citrineclinic.com/explore',
  },
};


const Explore = () => {
    return (
        <>
          <Breadcrumb />
          <ExplorePage/>
          <AppointmentSection />  
        </>
    )
}
export default Explore;