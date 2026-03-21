import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';


export const metadata: Metadata = {
  title: "Book An Appointment | Dr. Niti Gaur | Citrine Clinic",
  description: "Fix your appointment with Citrine Clinic and get yourself best treatments that give refreshed and rejuvenated skin.",
  alternates: {
    canonical: '/book-an-appointment',
  },
  openGraph: {
    url: 'https://www.citrineclinic.com/book-an-appointment',
  },
};


const BookAnAppointment = () => {
    return (
        <>
          <Breadcrumb />
          <AppointmentSection />  
        </>
    )
}
export default BookAnAppointment;