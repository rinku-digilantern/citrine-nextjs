import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import RefundPolicyPage from '@/src/app/components/RefundPolicyPage/RefundPolicyPage';


export const metadata: Metadata = {
  title: "Refund Policy | Citrine Clinic",
  description: "Refund Policy | Citrine Clinic",
  alternates: {
    canonical: '/refund-policy',
  },
  openGraph: {
    url: 'https://www.citrineclinic.com/refund-policy',
  },
};


const RefundPolicy = () => {
    return (
        <>
          <Breadcrumb />
          <RefundPolicyPage/>
          <AppointmentSection />  
        </>
    )
}
export default RefundPolicy;