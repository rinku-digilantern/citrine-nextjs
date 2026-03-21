import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import PrivacyPolicyPage from '@/src/app/components/PrivacyPolicyPage/PrivacyPolicyPage';


export const metadata: Metadata = {
  title: "Citrine Clinic : Privacy Policy",
  description: "Citrine Clinic : Privacy Policy",
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    url: 'https://www.citrineclinic.com/privacy-policy',
  },
};


const PrivacyPolicy = () => {
    return (
        <>
          <Breadcrumb />
          <PrivacyPolicyPage />
          <AppointmentSection />  
        </>
    )
}
export default PrivacyPolicy;