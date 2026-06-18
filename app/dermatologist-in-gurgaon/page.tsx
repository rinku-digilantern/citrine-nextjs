import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import BestDermatologistBanner from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistBanner/BestDermatologistBanner';
import BestDermatologistFirstSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistFirstSection/BestDermatologistFirstSection';
import BestDermatologistFourthSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistFourthSection/BestDermatologistFourthSection';
import BestDermatologistFivethSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistFivethSection/BestDermatologistFivethSection';
import BestDermatologistSixthSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistSixthSection/BestDermatologistSixthSection';
import BestDermatologistTestimonialSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistTestimonialSection/BestDermatologistTestimonialSection';
import BestDermatologistTenthSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistTenthSection/BestDermatologistTenthSection';
import fs from 'fs';
import path from 'path';
import BestDermatologistFaqSection from '@/src/app/components/BestDermatologistInDelhiPage/BestDermatologistFaqSection/BestDermatologistFaqSection';
import DermatologyThirdSection from '@/src/app/components/BestDermatologistInDelhiPage/DermatologyThirdSection/DermatologyThirdSection';
import DermatologyFivethSection from '@/src/app/components/BestDermatologistInDelhiPage/DermatologyFivethSection/DermatologyFivethSection';
import DermatologysixethSection from '@/src/app/components/BestDermatologistInDelhiPage/DermatologysixethSection/DermatologysixethSection';
import DermatologySevenSection from '@/src/app/components/BestDermatologistInDelhiPage/DermatologySevenSection/DermatologySevenSection';
import DermatologyEightSection from '@/src/app/components/BestDermatologistInDelhiPage/DermatologyEightSection/DermatologyEightSection';

function getPageData() {
  const filePath = path.join(process.cwd(), 'src','app', 'components', 'webcontent', 'BestDermatologistInDelhiPageContent.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  return data["dermatologist-in-gurgaon"];
}

import { getSeoData } from '@/src/lib/cms';
import { resolveMetadata } from '@/src/lib/seo-utils';
import DermatologySecondSection from '@/src/app/components/BestDermatologistInDelhiPage/DermatologySecondSection/DermatologySecondSection';
import DermatologynewFourthSection from '@/src/app/components/BestDermatologistInDelhiPage/DermatologynewFourthSection/DermatologynewFourthSection';
import DermatologyNewFivethSection from '@/src/app/components/BestDermatologistInDelhiPage/DermatologyNewFivethSection/DermatologyNewFivethSection';
import DermatologyNewSixthSection from '@/src/app/components/BestDermatologistInDelhiPage/DermatologyNewSixthSection/DermatologyNewSixthSection';
import DermatologyNewSeventhSection from '@/src/app/components/BestDermatologistInDelhiPage/DermatologyNewSeventhSection/DermatologyNewSeventhSection';
import DermatologyNewEightthSection from '@/src/app/components/BestDermatologistInDelhiPage/DermatologyNewEightthSection/DermatologyNewEightthSection';
import DermatologyNewNinethSection from '@/src/app/components/BestDermatologistInDelhiPage/DermatologyNewNinethSection/DermatologyNewNinethSection';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('dermatologist-in-gurgaon');
  return resolveMetadata('dermatologist-in-gurgaon', seo);
}

const DermatologistInGurgaon = async () => {
  const seo = await getSeoData('dermatologist-in-gurgaon');

  const pageData = getPageData();
  return (
    <>

      {seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: (typeof seo.faq_schema === 'string' ? seo.faq_schema : JSON.stringify(seo.faq_schema)) }} />
      )}
      {seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: (typeof seo.bred_schema === 'string' ? seo.bred_schema : JSON.stringify(seo.bred_schema)) }} />
      )}

      <BestDermatologistBanner section={pageData.BestDermatologistBanner} />
      <Breadcrumb />
      <BestDermatologistFirstSection section={pageData.BestDermatologistFirstSection} />
      <BestDermatologistFourthSection section={pageData.BestDermatologistFourthSection} />
      <DermatologySecondSection section={pageData.DermatologySecondSection} />
      <DermatologynewFourthSection section={pageData.DermatologynewFourthSection} />
      <DermatologyNewFivethSection section={pageData.DermatologyNewFivethSection} />
      <DermatologyNewSixthSection section={pageData.DermatologyNewSixthSection} />
      <DermatologyNewSeventhSection section={pageData.DermatologyNewSeventhSection} />
      <DermatologyNewEightthSection section={pageData.DermatologyNewEightthSection} />
      <DermatologyNewNinethSection section={pageData.DermatologyNewNinethSection} />
      <DermatologyThirdSection section={pageData.DermatologyThirdSection} />
      <DermatologyFivethSection section={pageData.DermatologyFivethSection} />
      <DermatologysixethSection section={pageData.DermatologysixethSection}/>
      <DermatologySevenSection section={pageData.DermatologySevenSection}/>
      <BestDermatologistSixthSection section={pageData.BestDermatologistSixthSection} />
      <DermatologyEightSection section={pageData.DermatologyEightSection} />
      <BestDermatologistTestimonialSection section={pageData.BestDermatologistTestimonialSection} />
      <BestDermatologistFaqSection section={pageData.BestDermatologistFaqSection} />
      <BestDermatologistFivethSection section={pageData.BestDermatologistFivethSection} />
      <BestDermatologistTenthSection section={pageData.BestDermatologistTenthSection} />
      <AppointmentSection />
    </>
  );
};

export default DermatologistInGurgaon;