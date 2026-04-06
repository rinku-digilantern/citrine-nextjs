'use client';

import React from 'react';
import FirstSection from './FirstSection/FirstSection';
import TableofContentcategory from './TableofContentcategory/TableofContentcategory';
import ColumnSection from './ColumnSection/ColumnSection';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';

import FaqSection from '@/src/app/components/ServiceInnerPage/FaqSection/FaqSection';
import ResultSection from '@/src/app/components/ServiceInnerPage/ResultSection/ResultSection';
import ServiceTechnologySection from '@/src/app/components/ServiceInnerPage/ServiceTechnologySection/ServiceTechnologySection';
import ServiceTestimonialSection from '@/src/app/components/ServiceInnerPage/ServiceTestimonialSection/ServiceTestimonialSection';
import ServiceVideoSection from '@/src/app/components/ServiceInnerPage/ServiceVideoSection/ServiceVideoSection';

interface ServiceCategoryPageProps {
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

const ServiceCategoryPage: React.FC<ServiceCategoryPageProps> = ({ data }) => {
  const service = data.data || {};
  
  let sectionList = service.section || [];
  
  if (sectionList.length === 0 && Array.isArray(data.data)) {
      // Map older style to the new section format for consistency in the UI
      return (
        <>
            <FirstSection data={{
                name: data.cat?.name || '',
                image: data.cat?.image ? `https://api.citrineclinic.com/backend/service/image/${data.cat.image}` : '',
                description: data.cat?.description || ''
            }} />
            <TableofContentcategory sections={data.data.map((item: any) => ({
                id: item.url || toSlug(item.name),
                title: (item.name || '').toUpperCase()
            }))} />
            <ColumnSection sections={data.data.map((item: any) => ({
                id: item.url || toSlug(item.name),
                heading: (item.name || '').toUpperCase(),
                description: item.short_desc || '',
                image: item.image ? `https://api.citrineclinic.com/backend/service/image/${item.image}` : '',
                imageAlt: item.alt_tag || item.name,
                imagePosition: (item.design_type === 'right' ? 'right' : 'left'),
                tabs: [],
                buttons: item.url && item.url !== '#' ? [{ label: 'VIEW MORE', link: `/${item.url}`, isActive: true }] : []
            })) as any} />
            <AppointmentSection />
        </>
      );
  }

  const imageBase = 'http://localhost:8000/backend/service/section/';

  const formattedSections = sectionList.map((sec: any, index: number) => {
    let desc: any = {};
    try {
      desc = typeof sec.section_desc === 'string' ? JSON.parse(sec.section_desc) : sec.section_desc || {};
    } catch (e) {
      // console.error("Failed to parse section_desc", e);
    }
    
    const sectionId = desc.service_section_id || toSlug(desc.section_heading || desc.service_heading || `section-${index}`);
    
    let finalTabs: any[] = [];
    if (desc.multi_heading_section && desc.multi_heading_section.headings) {
      const multi = desc.multi_heading_section;
      Object.keys(multi.headings).forEach(key => {
        const label = multi.headings[key];
        const subHeadings = multi.sub_headings?.[key] || [];
        const subUrls = multi.sub_urls?.[key] || [];
        const t = subHeadings.map((name: string, i: number) => ({
          name: (name || '').toUpperCase(),
          link: subUrls[i] ? `/${subUrls[i]}` : '#'
        })).filter((item: any) => item.name);

        if (t.length > 0) {
          finalTabs.push({
            id: key,
            label: (label || '').toUpperCase(),
            treatments: t
          });
        }
      });
    } else {
        const treatments = (desc.button_multinames || []).map((name: string, i: number) => ({
            name: (name || '').toUpperCase(),
            link: desc.button_multiurls?.[i] ? `/${desc.button_multiurls[i]}` : '#'
        })).filter((t: any) => t.name);

        if (treatments.length > 0) {
            finalTabs.push({
                id: 'related',
                label: 'RELATED TREATMENTS',
                treatments: treatments
            });
        }
    }

    // Parse buttons (button_multinames)
    const finalButtons = (desc.button_multinames || []).map((name: string, i: number) => ({
        label: (name || '').toUpperCase(),
        link: desc.button_multiurls?.[i] ? `/${desc.button_multiurls[i]}` : '#',
        isActive: i === 0
    })).filter((b: any) => b.label);

    return {
      id: sectionId,
      heading: (desc.section_heading || desc.service_heading || '').toUpperCase(),
      description: desc.content_top || '',
      image: desc.right_image ? `${imageBase}${desc.right_image}` : (desc.left_image ? `${imageBase}${desc.left_image}` : ''),
      imageAlt: desc.section_heading || '',
      imagePosition: desc.type === 'rightimageleftcontentsection' ? 'right' : 'left',
      tabs: finalTabs,
      buttons: finalButtons,
      headingtag: desc.heading_tag
    };
  });

  return (
    <>
      <FirstSection data={{
        name: service.service_name,
        image: service.service_banner_image ? `http://localhost:8000/backend/service/banner/${service.service_banner_image}` : (service.service_image ? `http://localhost:8000/backend/service/image/${service.service_image}` : ''),
        description: service.description2 || ''
      }} />
      <TableofContentcategory sections={formattedSections.map((s: any) => ({ id: s.id, title: s.heading }))} />
      <ColumnSection sections={formattedSections as any} />

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

      {data.technology && data.technology.length > 0 && (
        <div id="technology">
          <ServiceTechnologySection technology={data.technology} headingtag={service.heading_tag} />
        </div>
      )}

      {data.testimonial && data.testimonial.length > 0 && (
        <div id="testimonial">
          <ServiceTestimonialSection
            title="DON'T JUST TAKE OUR WORD FOR IT"
            testimonials={data.testimonial.map((t: any) => ({
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

export default ServiceCategoryPage;
