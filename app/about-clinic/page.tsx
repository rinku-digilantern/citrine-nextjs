import React from 'react'
import { Metadata } from 'next/dist/types';
import AboutClinicBanner from '../../src/app/components/AboutClinicPage/AboutClinicBanner/AboutClinicBanner';
import RedefiningSection from '@/src/app/components/AboutClinicPage/RedefiningSection/RedefiningSection';
import FourColumnSection from '@/src/app/components/AboutClinicPage/FourColumnSection/FourColumnSection';
import CitrineDifferenceBanner from '@/src/app/components/AboutClinicPage/CitrineDifferenceBanner/CitrineDifferenceBanner';
import TeamSection from '@/src/app/components/AboutClinicPage/TeamSection/TeamSection';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import PatientTestimonials from '@/src/app/components/homepage/PatientTestimonials/PatientTestimonials';
import OurVideos from '@/src/app/components/homepage/OurVideos/OurVideos';
import HappyPatientsGallery from '@/src/app/components/AboutClinicPage/HappyPatientsGallery/HappyPatientsGallery';

export const metadata: Metadata = {
  title: "Best Skin Doctor in Gurgaon | Dr. Niti Gaur | Citrine Clinic",
  description: "Dr. Niti Gaur is the best skin doctor in Gurgaon, offers advanced, personalised skin and cosmetic treatments at Citrine Clinic. Schedule your consultation now.",
  alternates: {
    canonical: '/about-clinic',
  },
  openGraph: {
    url: 'https://www.citrineclinic.com/about-clinic',
  },
};


const About = () => {
    return (
        <>
            <AboutClinicBanner />
            <RedefiningSection />
            <FourColumnSection/>
            <HappyPatientsGallery />
            <TeamSection/>
            <PatientTestimonials />
            <CitrineDifferenceBanner/>
            <OurVideos />
            <AppointmentSection />
        </>
    )
}
export default About;