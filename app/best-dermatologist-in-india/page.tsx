import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import BestDermatologistBanner from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistBanner/BestDermatologistBanner';
import BestDermatologistFirstSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistFirstSection/BestDermatologistFirstSection';
import BestDermatologistSecondSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistSecondSection/BestDermatologistSecondSection';
import BestDermatologistThirdSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistThirdSection/BestDermatologistThirdSection';
import BestDermatologistFourthSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistFourthSection/BestDermatologistFourthSection';
import BestDermatologistFivethSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistFivethSection/BestDermatologistFivethSection';
import BestDermatologistSixthSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistSixthSection/BestDermatologistSixthSection';
import BestDermatologistSevenSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistSevenSection/BestDermatologistSevenSection';
import BestDermatologistEightSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistEightSection/BestDermatologistEightSection';
import BestDermatologistTestimonialSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistTestimonialSection/BestDermatologistTestimonialSection';
import BestDermatologistNineSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistNineSection/BestDermatologistNineSection';
import BestDermatologistTenthSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistTenthSection/BestDermatologistTenthSection';
import fs from 'fs';
import path from 'path';
import BestDermatologistFaqSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistFaqSection/BestDermatologistFaqSection';
import Conclusion from '@/src/app/components/BestDermatologistInDelhiPage/Conclusion/Conclusion';

export const metadata: Metadata = {
  title: "Best Skin Specialist in India | Best Dermatologist in India",
  description: "Consult the best dermatologist in India at Citrine Clinic. Get expert skin & hair treatments from top skin specialists and doctors for healthy, glowing skin.",
  alternates: {
    canonical: '/best-dermatologist-in-india',
  },
  openGraph: {
    url: 'https://www.citrineclinic.com/best-dermatologist-in-india',
  },
};


function getPageData() {
  const filePath = path.join(process.cwd(), 'src','app', 'components', 'webcontent', 'BestDermatologistInDelhiPageContent.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  if (!data || !data["best-dermatologist-in-india"]) {
    throw new Error('best-dermatologist-in-india content missing in JSON');
  }
  return data["best-dermatologist-in-india"];
}


const BestDermatologistInIndia = () => {
  const pageData = getPageData();
  return (
    <>
      <BestDermatologistBanner section={pageData.BestDermatologistBanner} />
      <Breadcrumb />
      <BestDermatologistFirstSection section={pageData.BestDermatologistFirstSection} />
      <BestDermatologistSecondSection section={pageData.BestDermatologistSecondSection} />
      <BestDermatologistThirdSection section={pageData.BestDermatologistThirdSection} />
      <BestDermatologistFourthSection section={pageData.BestDermatologistFourthSection} />
      <BestDermatologistFivethSection section={pageData.BestDermatologistFivethSection} />
      <BestDermatologistSixthSection section={pageData.BestDermatologistSixthSection} />
      <BestDermatologistSevenSection section={pageData.BestDermatologistSevenSection} />
      <BestDermatologistEightSection section={pageData.BestDermatologistEightSection} />
      <Conclusion section={pageData.Conclusion} />
      <BestDermatologistTestimonialSection section={pageData.BestDermatologistTestimonialSection} />
      <BestDermatologistFaqSection section={pageData.BestDermatologistFaqSection} />
      <AppointmentSection />
    </>
  );
};

export default BestDermatologistInIndia;
