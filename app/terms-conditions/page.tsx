import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import TermsConditionsPage from '@/src/app/components/TermsConditionsPage/TermsConditionsPage';


export const metadata: Metadata = {
  title: "Citrine Clinic: Terms and Conditions",
  description: "Read the comprehensive terms and conditions for our medical services. Learn about your rights, our responsibilities, and important information regarding your care by Citrine Clinic.",
  alternates: {
    canonical: '/terms-conditions',
  },
  openGraph: {
    url: 'https://www.citrineclinic.com/terms-conditions',
  },
};


const TermsConditions = () => {
    return (
        <>
          <Breadcrumb />
          <TermsConditionsPage />
          <AppointmentSection />  
        </>
    )
}
export default TermsConditions;