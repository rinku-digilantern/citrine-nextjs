import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import TechnologyBanner from '@/src/app/components/TechnologyInner/TechnologyBanner/TechnologyBanner';
import TechSecondSection from '@/src/app/components/TechnologyInner/TechSecondSection/TechSecondSection';
import TechStickyThirdSection from '@/src/app/components/TechnologyInner/TechStickyThirdSection/TechStickyThirdSection';
import TechFourthSection from '@/src/app/components/TechnologyInner/TechFourthSection/TechFourthSection';
import TechFivethSection from '@/src/app/components/TechnologyInner/TechFivethSection/TechFivethSection';
import TechSixethSection from '@/src/app/components/TechnologyInner/TechSixethSection/TechSixethSection';
import TechResultSection from '@/src/app/components/TechnologyInner/TechResultSection/TechResultSection';
import TechFaqSection from '@/src/app/components/TechnologyInner/TechFaqSection/TechFaqSection';
import TechVideoSection from '@/src/app/components/TechnologyInner/TechVideoSection/TechVideoSection';
import TechTestimonialSection from '@/src/app/components/TechnologyInner/TechTestimonialSection/TechTestimonialSection';


export const metadata: Metadata = {
  title: "Technology Inner | Dr. Niti Gaur | Citrine Clinic",
  description: "technology-inner",
  alternates: {
    canonical: '/technology-inner',
  },
  openGraph: {
    url: 'https://www.citrineclinic.com/technology-inner',
  },
};


const TechnologyInner = () => {
    return (
        <>
          <TechnologyBanner/>
          <TechSecondSection/>
          <TechStickyThirdSection/>
          <TechFourthSection/>
          <TechFivethSection />
          <TechSixethSection />
          <TechResultSection />
          <TechFaqSection/>
          <TechVideoSection/>
          <TechTestimonialSection/>
          <AppointmentSection />  
        </>
    )
}
export default TechnologyInner;