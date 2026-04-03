'use client';

import React from 'react';
import TopSection from '@/src/app/components/ServiceInnerPage/TopSection/TopSection';
import TableOfContent from '@/src/app/components/ServiceInnerPage/TableOfContent/TableOfContent';
import FirstSection from '@/src/app/components/ServiceInnerPage/FirstSection/FirstSection';
import SecondSection from '@/src/app/components/ServiceInnerPage/SecondSection/SecondSection';
import FaqSection from '@/src/app/components/ServiceInnerPage/FaqSection/FaqSection';
import ResultSection from '@/src/app/components/ServiceInnerPage/ResultSection/ResultSection';
import ServiceVideoSection from '@/src/app/components/ServiceInnerPage/ServiceVideoSection/ServiceVideoSection';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import ColumnSection from '@/src/app/components/ServiceCategoryPage/ColumnSection/ColumnSection';
import ServiceDetailFirstSection from '@/src/app/components/ServiceDetailPage/ServiceDetailFirstSection/ServiceDetailFirstSection';
import ServiceDetailThirdSection from '@/src/app/components/ServiceDetailPage/ServiceDetailThirdSection/ServiceDetailThirdSection';
import ServiceTechnologySection from '@/src/app/components/ServiceInnerPage/ServiceTechnologySection/ServiceTechnologySection';
import ServiceTestimonialSection from '@/src/app/components/ServiceInnerPage/ServiceTestimonialSection/ServiceTestimonialSection';


interface ServiceInnerTemplateProps {
  data: any;
}

const toSlug = (text: string | null | undefined) => (text || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const parseFaqs = (html: string | null) => {
  if (!html) return [];
  const items: any[] = [];
  const parts = html.split(/<h3[^>]*>/i).filter(Boolean);
  parts.forEach((part, index) => {
    const subParts = part.split(/<\/h3>/i);
    if (subParts.length === 2) {
      items.push({
        id: index + 1,
        question: subParts[0].replace(/<[^>]+>/g, '').trim(),
        answer: subParts[1].trim(),
      });
    }
  });
  return items;
};

const ServiceInnerTemplate: React.FC<ServiceInnerTemplateProps> = ({ data }) => {
  const service = data.data || {};
  const sectionList = service.section || [];

  const parsedSections = sectionList.map((sec: any) => {
    try {
      return { ...sec, desc: JSON.parse(sec.section_desc) };
    } catch (e) {
      console.error("Failed to parse section_desc", e);
      return { ...sec, desc: {} };
    }
  });

  // Build Table of Contents sections
  const tocSections = parsedSections
    .filter((sec: any) => sec.desc.service_heading)
    .map((sec: any) => ({
      id: sec.desc.service_section_id || toSlug(sec.desc.service_heading),
      title: (sec.desc.service_heading || '').toUpperCase()
    }));

  if (service.faq) tocSections.push({ id: 'faq', title: 'FAQs' });
  if (data.result && data.result.length > 0) tocSections.push({ id: 'result', title: 'RESULTS' });
  if (data.video && data.video.length > 0) tocSections.push({ id: 'videos', title: 'VIDEOS' });
  if (service.technology && service.technology.length > 0) tocSections.push({ id: 'technology', title: 'TECHNOLOGY' });
  if (service.testimonial && service.testimonial.length > 0) tocSections.push({ id: 'testimonial', title: 'TESTIMONIALS' });


  const imageBase = 'http://localhost:8000/backend/service/section/';

  return (
    <>
      <TopSection data={{
        name: service.service_name,
        bannerTitle: service.service_name,
        image: service.service_banner_image ? `http://localhost:8000/backend/service/banner/${service.service_banner_image}` : '',
        rightImage: service.service_banner_image ? `http://localhost:8000/backend/service/banner/${service.service_banner_image}` : (service.service_image ? `http://localhost:8000/backend/service/image/${service.service_image}` : ''),
        description: service.description2 || '',
        headingtag: service.heading_tag
      }} />

      <TableOfContent sections={tocSections} />

      {parsedSections.map((sec: any, index: number) => {
        const desc = sec.desc;
        const type = desc.type;
        const classAdd = desc.class_add || '';
        const sectionId = desc.service_section_id || toSlug(desc.section_heading || desc.service_heading || `section-${index}`);

        // Helper to extract list items (used by multiple types/classes)
        const getListItems = () => (desc.threeparagraph_new?.contents || [])
          .filter(Boolean)
          .map((c: string, idx: number) => ({
            id: idx,
            text: c.replace(/<[^>]+>/g, '').trim()
          }));

        // Option 1: Component selection based on classAdd
        if (classAdd.includes('firstSection')) {
          return (
            <div key={index} id={sectionId}>
              <FirstSection
                title={desc.section_heading}
                items={getListItems()}
                headingtag={desc.heading_tag}
              />
            </div>
          );
        }

        if (classAdd.includes('secondSection')) {
          return (
            <div key={index} id={sectionId}>
              <SecondSection
                title={desc.section_heading}
                content={desc.content_top ? [desc.content_top] : undefined}
                image={desc.image ? `${imageBase}${desc.image}` : undefined}
                videoUrl={desc.video_url}
                headingtag={desc.heading_tag}
              />
            </div>
          );
        }

        if (classAdd.includes('fullTextSection')) {
          return (
            <div key={index} id={sectionId}>
              <ServiceDetailFirstSection
                heading={desc.section_heading}
                content={desc.content_top}
                headingtag={desc.heading_tag || 'h2'}
              />
            </div>
          );
        }

        if (classAdd.includes('twoParagraphSection')) {
          return (
            <div key={index} id={sectionId}>
              <ServiceDetailThirdSection
                heading={desc.section_heading}
                section1={desc.content_top}
                section2={desc.content_bottom}
                headingtag={desc.heading_tag}
              />
            </div>
          );
        }

        if (classAdd.includes('columnSection')) {
          const treatments = (desc.button_multinames || []).map((name: string, i: number) => ({
            name: name.toUpperCase(),
            link: desc.button_multiurls?.[i] ? `/${desc.button_multiurls[i]}` : '#'
          }));

          return (
            <div key={index} id={sectionId}>
              <ColumnSection
                sections={[{
                  id: sectionId,
                  heading: (desc.section_heading || desc.service_heading || '').toUpperCase(),
                  description: desc.content_top || '',
                  image: desc.right_image ? `${imageBase}${desc.right_image}` : (desc.left_image ? `${imageBase}${desc.left_image}` : ''),
                  imageAlt: desc.section_heading || '',
                  imagePosition: type === 'rightimageleftcontentsection' ? 'right' : 'left',
                  tabs: treatments.length > 0 ? [{
                    id: 'related',
                    label: 'RELATED TREATMENTS',
                    treatments: treatments
                  }] : [],
                  buttons: [],
                  headingtag: desc.heading_tag
                }]}
              />
            </div>
          );
        }

        // Option 2: Fallback to type-based selection
        switch (type) {
          case 'quickoverview':
            return (
              <div key={index} id={sectionId}>
                <FirstSection
                  title={desc.section_heading}
                  items={getListItems()}
                  headingtag={desc.heading_tag}
                />
              </div>
            );

          case 'videosection':
            return (
              <div key={index} id={sectionId}>
                <SecondSection
                  title={desc.section_heading}
                  content={desc.content_top ? [desc.content_top] : undefined}
                  image={desc.image ? `${imageBase}${desc.image}` : undefined}
                  videoUrl={desc.video_url}
                  headingtag={desc.heading_tag}
                />
              </div>
            );

          case 'fulltext':
            return (
              <div key={index} id={sectionId}>
                <ServiceDetailFirstSection
                  heading={desc.section_heading}
                  content={desc.content_top}
                  headingtag={desc.heading_tag || 'h2'}
                />
              </div>
            );

          case 'threeparagraphsection':
            const items = getListItems();
            if (items.length > 0) {
              return (
                <div key={index} id={sectionId}>
                  <FirstSection
                    title={desc.section_heading}
                    items={items}
                    headingtag={desc.heading_tag}
                  />
                </div>
              );
            }
            return (
              <div key={index} id={sectionId}>
                <ServiceDetailFirstSection
                  heading={desc.section_heading}
                  content={desc.content_top}
                  headingtag={desc.heading_tag}
                />
              </div>
            );

          case 'twoparagraphsection':
            return (
              <div key={index} id={sectionId}>
                <ServiceDetailThirdSection
                  heading={desc.section_heading}
                  section1={desc.content_top}
                  section2={desc.content_bottom}
                  headingtag={desc.heading_tag}
                />
              </div>
            );

          case 'rightimageleftcontentsection':
          case 'leftimageleftcontentsection':
            const treatments = (desc.button_multinames || []).map((name: string, i: number) => ({
              name: name.toUpperCase(),
              link: desc.button_multiurls?.[i] ? `/${desc.button_multiurls[i]}` : '#'
            }));

            return (
              <div key={index} id={sectionId}>
                <ColumnSection
                  sections={[{
                    id: sectionId,
                    heading: (desc.section_heading || desc.service_heading || '').toUpperCase(),
                    description: desc.content_top || '',
                    image: desc.right_image ? `${imageBase}${desc.right_image}` : (desc.left_image ? `${imageBase}${desc.left_image}` : ''),
                    imageAlt: desc.section_heading || '',
                    imagePosition: type === 'rightimageleftcontentsection' ? 'right' : 'left',
                    tabs: treatments.length > 0 ? [{
                      id: 'related',
                      label: 'RELATED TREATMENTS',
                      treatments: treatments
                    }] : [],
                    buttons: [],
                    headingtag: desc.heading_tag
                  }]}
                />
              </div>
            );

          default:
            return null;
        }
      })}

      {service.faq && (
        <div id="faq">
          <FaqSection faqData={parseFaqs(service.faq)} headingtag={service.heading_tag} />
        </div>
      )}

      {data.result && data.result.length > 0 && (
        <div id="result">
          <ResultSection
            title={`${service.service_name} Results`}
            results={data.result.map((r: any) => ({
              id: r.id,
              treatment: service.service_name,
              age: '',
              images: {
                before: `http://localhost:8000/backend/result/${r.image}`,
                after: `http://localhost:8000/backend/result/${r.image}`
              }
            }))}
            headingtag={service.heading_tag}
          />
        </div>
      )}

      {service.technology && service.technology.length > 0 && (
        <div id="technology">
          <ServiceTechnologySection technology={service.technology} headingtag={service.heading_tag} />
        </div>
      )}

      {service.testimonial && service.testimonial.length > 0 && (
        <div id="testimonial">
          <ServiceTestimonialSection
            title="DON'T JUST TAKE OUR WORD FOR IT"
            testimonials={service.testimonial.map((t: any) => ({
              id: t.id,
              title: "PATIENT TESTIMONIAL",
              text: t.description,
              author: t.name,
              rating: parseInt(t.rating)
            }))}
            headingtag={service.heading_tag}
          />
        </div>
      )}

      {data.video && data.video.length > 0 && (
        <div id="videos">
          <ServiceVideoSection
            videos={data.video.map((v: any) => ({
              thumbnail: `http://localhost:8000/backend/service_video/image/${v.image}`,
              alt: v.alt_tag || v.title || service.service_name,
              videoUrl: v.video
            }))}
            headingtag={service.heading_tag}
          />
        </div>
      )}


      <AppointmentSection />
    </>
  );
};

export default ServiceInnerTemplate;
