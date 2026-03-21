import React from 'react'
import { Metadata } from 'next/dist/types';
import DocctorBanner from '@/src/app/components/AboutDcotorPage/DocctorBanner/DocctorBanner';
import AboutDoctorMarquee from '@/src/app/components/AboutDcotorPage/AboutDoctorMarquee/AboutDoctorMarquee';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import OurVideos from '@/src/app/components/homepage/OurVideos/OurVideos';
import CareerOverview from '@/src/app/components/AboutDcotorPage/CareerOverview/CareerOverview';
import ConferenceSection from '@/src/app/components/AboutDcotorPage/ConferenceSection/ConferenceSection';
import MyCommitment from '@/src/app/components/AboutDcotorPage/MyCommitment/MyCommitment';
import StickyCard from '@/src/app/components/AboutDcotorPage/StickyCard/StickyCard';
import MarqueeCenter from '@/src/app/components/AboutDcotorPage/MarqueeCenter/MarqueeCenter';

export const metadata: Metadata = {
  title: "Dr. Niti Gaur | Best Female Dermatologist in Gurgaon | Citrine Clinic",
  description: "Dr. Niti Gaur is the best female dermatologist in Gurgaon for advanced skin and hair treatments with proven results at an affordable cost. Book your appointment today!",
  alternates: {
    canonical: '/about-doctor',
  },
  openGraph: {
    url: 'https://www.citrineclinic.com/about-doctor',
  },
};


const Aboutdoctor = () => {
    return (
        <>
         <DocctorBanner/>
         <AboutDoctorMarquee/>
         <StickyCard/>
         <MarqueeCenter/>
         <ConferenceSection/>
         <MyCommitment />
         <CareerOverview />
         <OurVideos />
         <AppointmentSection />
        </>
    )
}
export default Aboutdoctor;