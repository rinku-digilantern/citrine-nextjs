import React from 'react'
import { Metadata } from 'next/dist/types';

import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import OfferPage from '@/src/app/components/OfferPage/OfferPage';


export const metadata: Metadata = {
  title: "Offers | Citrine Clinic",
  description: "Citrine Offers | Citrine Clinic",
  alternates: {
    canonical: '/offers',
  },
  openGraph: {
    url: 'https://www.citrineclinic.com/offers',
  },
};


const Offers = () => {
    return (
        <>
          <Breadcrumb />
          <OfferPage/>
          <AppointmentSection />  
        </>
    )
}
export default Offers;