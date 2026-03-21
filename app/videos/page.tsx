import React from 'react'
import { Metadata } from 'next/dist/types';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import VideoPage from '@/src/app/components/VideoPage/VideoPage';

export const metadata: Metadata = {
  title: "Videos, Procedure and Patient Journeys | Citrine Clinic Gurgaon",
  description: "Explore treatment videos, real patient journeys, and expert insights from Citrine Clinic Gurgaon on advanced skin, hair, and aesthetic procedures.",
  alternates: {
    canonical: '/videos',
  },
  openGraph: {
    url: 'https://www.citrineclinic.com/videos',
  },
};

const Videos = () => {
    return (
        <>
          <Breadcrumb />
          <VideoPage />
          <AppointmentSection />  
        </>
    )
}
export default Videos;