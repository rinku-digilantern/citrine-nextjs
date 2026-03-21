import AestheticsSection from "@/src/app/components/homepage/AestheticsSection/AestheticsSection";
import AppointmentSection from "@/src/app/components/homepage/AppointmentSection/AppointmentSection";
import CitrineClinicSection from "@/src/app/components/homepage/CitrineClinicSection/CitrineClinicSection";
import DermatologyTreatment from "@/src/app/components/homepage/DermatologyTreatment/DermatologyTreatment";
import DoctorSection from "@/src/app/components/homepage/DoctorSection/DoctorSection";
import HairSection from "@/src/app/components/homepage/HairSection/HairSection";
import MainBanner from "@/src/app/components/homepage/MainBanner/MainBanner";
import MarqueeSection from "@/src/app/components/homepage/MarqueeSection/MarqueeSection";
import OurOffer from "@/src/app/components/homepage/OurOffer/OurOffer";
import OurVideos from "@/src/app/components/homepage/OurVideos/OurVideos";
import PatientTestimonials from "@/src/app/components/homepage/PatientTestimonials/PatientTestimonials";
import Philosophy from "@/src/app/components/homepage/Philosophy/Philosophy";
import TechnologySection from "@/src/app/components/homepage/TechnologySection/TechnologySection";
import WellnessTreatment from "@/src/app/components/homepage/WellnessTreatment/WellnessTreatment";

export default function Home() {
  return (
   <>
      <MainBanner />
      <MarqueeSection />
      <AestheticsSection />
      <DermatologyTreatment />
      <WellnessTreatment />
      <HairSection />
      <TechnologySection />
      <OurOffer />
      <Philosophy />
      <DoctorSection />
      <PatientTestimonials />
      <CitrineClinicSection/>
      <OurVideos />
      <AppointmentSection />
    </>
  );
}
