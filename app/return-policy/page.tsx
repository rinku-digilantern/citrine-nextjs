import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import ReturnPolicyPage from '@/src/app/components/ReturnPolicyPage/ReturnPolicyPage';

export const metadata: Metadata = {
  title: "Return Policy | Citrine Clinic",
  description: "Return Policy | Citrine Clinic",
  alternates: {
    canonical: '/return-policy',
  },
  openGraph: {
    url: 'https://www.citrineclinic.com/return-policy',
  },
};


const ReturnPolicy = () => {
    return (
        <>
          <Breadcrumb />
          <ReturnPolicyPage/>
          <AppointmentSection />  
        </>
    )
}
export default ReturnPolicy;