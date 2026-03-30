import React from 'react';
import ServiceDetailBannerSection from '@/src/app/components/ServiceDetailPage/ServiceDetailBannerSection/ServiceDetailBannerSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import ServiceDetailFirstSection from '@/src/app/components/ServiceDetailPage/ServiceDetailFirstSection/ServiceDetailFirstSection';
import ServiceDetailSecondSection from '@/src/app/components/ServiceDetailPage/ServiceDetailSecondSection/ServiceDetailSecondSection';
import ServiceDetailThirdSection from '@/src/app/components/ServiceDetailPage/ServiceDetailThirdSection/ServiceDetailThirdSection';
import ServiceDetailFaqSection from '@/src/app/components/ServiceDetailPage/ServiceDetailFaqSection/ServiceDetailFaqSection';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';

interface ServiceDetailTemplateProps {
  data: any;
}

const ServiceDetailTemplate: React.FC<ServiceDetailTemplateProps> = ({ data }) => {
  const service = data.data;
  const sections = service.section || [];
  const bgimageUrl = 'https://api.citrineclinic.com/backend/service/section/';

  return (
    <>
      <ServiceDetailBannerSection
        title={service.name_desc || service.service_name}
        image={service.service_banner_image ? `https://api.citrineclinic.com/backend/service/banner/${service.service_banner_image}` : undefined}
      />

      <Breadcrumb />

      {/* Main Service Description Section */}
      <ServiceDetailFirstSection
        heading={service.service_name}
        description={service.description}
        headingtag="h1"
      // image={service.service_image ? `https://api.citrineclinic.com/backend/service/section/${service.service_image}` : undefined}
      />

      {sections.map((sec: any, idx: number) => {
        // Special condition: Render the FAQ Section ONLY if class matches
        if (sec.class_add === 'lightpink, innerfaqsection') {
          return (
            <ServiceDetailFaqSection
              key={idx}
              heading={sec.section_heading}
              content={sec.section1}
              classAdd={sec.class_add}
              faqData={data.faq}
            />
          );
        }

        // Fulltext sections now use ServiceDetailFirstSection component as per user request
        if (sec.type === 'fulltext') {
          return (
            <ServiceDetailFirstSection
              key={idx}
              heading={sec.section_heading}
              content={sec.section1}
              classAdd={sec.class_add}
              headingtag={sec.heading_tag || 'div'}
            />
          );
        }

        // Column / Image layouts use ServiceDetailThirdSection
        if (['twoparagraph', 'twoparagraphdifflayout'].includes(sec.type)) {
          return (
            <ServiceDetailThirdSection
              key={idx}
              heading={sec.section_heading || sec.service_heading}
              description={sec.service_comman}
              section1={sec.type === 'imagetext' ? `<img src="${bgimageUrl + sec.image}" alt="${sec.section_heading}" />` : sec.section1}
              section2={sec.section2 || (sec.type === 'imagetext' ? sec.section1 : undefined)}
              headingtag={sec.heading_tag || 'div'}
            />
          );
        }

        // Fallback to SecondSection (centered style) for other segments
        if (['imagetext', 'rightimagetext'].includes(sec.type)) {
        return (
          <ServiceDetailSecondSection
            key={idx}
            heading={sec.section_heading}
            content={sec.section1}
            classAdd={sec.class_add}
            image={sec.image ? `https://api.citrineclinic.com/backend/service/section/${sec.image}` : undefined}
            headingtag={sec.heading_tag || 'div'}
          />
        );
        }
      })}

      <AppointmentSection />
    </>
  );
};

export default ServiceDetailTemplate;
