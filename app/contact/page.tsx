import React from 'react'
import { Metadata } from 'next/dist/types';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import ContactPage from '@/src/app/components/ContactPage/ContactPage';


export const metadata: Metadata = {
  title: "Contact us | Citrine Clinic",
  description: "Contact us to know more about the skin care treatment procedures, cost and every other thing that you need to know.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    url: 'https://www.citrineclinic.com/contact',
  },
};


const Contact = () => {
    return (
        <>
          <Breadcrumb />
          <ContactPage />
        </>
    )
}
export default Contact;