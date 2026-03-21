import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import FirstSection from '@/src/app/components/ServiceCategoryPage/FirstSection/FirstSection';
import TableofContentcategory from '@/src/app/components/ServiceCategoryPage/TableofContentcategory/TableofContentcategory';
import ColumnSection from '@/src/app/components/ServiceCategoryPage/ColumnSection/ColumnSection';

export const metadata: Metadata = {
  title: "Acne Treatment in Gurgaon | Citrine Clinic",
  description: "Say goodbye to acne! Explore acne treatment in Gurgaon at Citrine Clinic. Transform your skin today for a radiant you. Contact Now!",
  alternates: {
    canonical: '/acne',
  },
  openGraph: {
    url: 'https://www.citrineclinic.com/acne',
  },
};


const ServiceCategory = () => {
    return (
        <>
          <FirstSection/>
          <TableofContentcategory />
          <ColumnSection/>
          <AppointmentSection />  
        </>
    )
}
export default ServiceCategory;