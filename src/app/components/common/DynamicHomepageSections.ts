// This file centralizes dynamic imports for heavy homepage sections using EmblaCarousel
// and can be extended for other heavy components.

import dynamic from 'next/dynamic';

export const DynamicAestheticsSection = dynamic(() => import('../homepage/AestheticsSection/AestheticsSection'), { ssr: false });
export const DynamicDermatologyTreatment = dynamic(() => import('../homepage/DermatologyTreatment/DermatologyTreatment'), { ssr: false });
export const DynamicWellnessTreatment = dynamic(() => import('../homepage/WellnessTreatment/WellnessTreatment'), { ssr: false });
export const DynamicHairSection = dynamic(() => import('../homepage/HairSection/HairSection'), { ssr: false });
export const DynamicPatientTestimonials = dynamic(() => import('../homepage/PatientTestimonials/PatientTestimonials'), { ssr: false });
