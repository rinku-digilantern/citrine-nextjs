'use client';

import React from 'react';
import TopSection from '@/src/app/components/ServiceInnerPage/TopSection/TopSection';
import TableOfContent from '@/src/app/components/ServiceInnerPage/TableOfContent/TableOfContent';
import { extractCity, replaceCity } from '@/src/app/utils/htmlUtils';
import FirstSection from '@/src/app/components/ServiceInnerPage/FirstSection/FirstSection';
import SecondSection from '@/src/app/components/ServiceInnerPage/SecondSection/SecondSection';
import FaqSection from '@/src/app/components/ServiceInnerPage/FaqSection/FaqSection';
import ResultSection from '@/src/app/components/ServiceInnerPage/ResultSection/ResultSection';
import ServiceVideoSection from '@/src/app/components/ServiceInnerPage/ServiceVideoSection/ServiceVideoSection';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import ColumnSection from '@/src/app/components/ServiceCategoryPage/ColumnSection/ColumnSection';

import ServiceTechnologySection from '@/src/app/components/ServiceInnerPage/ServiceTechnologySection/ServiceTechnologySection';
import ServiceTestimonialSection from '@/src/app/components/ServiceInnerPage/ServiceTestimonialSection/ServiceTestimonialSection';


import ThirdSection from '@/src/app/components/ServiceInnerPage/ThirdSection/ThirdSection';
import FourthSection from '@/src/app/components/ServiceInnerPage/FourthSection/FourthSection';
import FivethSection from '@/src/app/components/ServiceInnerPage/FivethSection/FivethSection';
import SixthSection from '@/src/app/components/ServiceInnerPage/SixthSection/SixthSection';
import SeventhSection from '@/src/app/components/ServiceInnerPage/SeventhSection/SeventhSection';
import EightSection from '@/src/app/components/ServiceInnerPage/EightSection/EightSection';
import NinethSection from '@/src/app/components/ServiceInnerPage/NinethSection/NinethSection';
import NinethSectionAlt from '@/src/app/components/ServiceInnerPage/NinethSectionAlt/NinethSectionAlt';
import NinethSectionAlt2 from '@/src/app/components/ServiceInnerPage/NinethSectionAlt2/NinethSectionAlt2';
import EleventhSection from '@/src/app/components/ServiceInnerPage/EleventhSection/EleventhSection';
import TwelveSection from '@/src/app/components/ServiceInnerPage/TwelveSection/TwelveSection';
import ThirteenSection from '@/src/app/components/ServiceInnerPage/ThirteenSection/ThirteenSection';

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

  const parsedSections = sectionList
    .map((sec: any) => {
      try {
        return { ...sec, desc: JSON.parse(sec.section_desc) };
      } catch (e) {
        console.error("Failed to parse section_desc", e);
        return { ...sec, desc: {} };
      }
    })
    .sort((a: any, b: any) => {
      const orderA = a.desc?.secorderby != null ? parseInt(a.desc.secorderby) : 9999;
      const orderB = b.desc?.secorderby != null ? parseInt(b.desc.secorderby) : 9999;
      return orderA - orderB;
    });

  // Extract city name from name_desc (e.g. "Pigmentation Treatment in Gurgaon" → "Gurgaon")
  const cityName = extractCity(service.name_desc) || 'Delhi';

  // Helper: apply city replacement to a desc object's string fields
  const applyCity = (desc: any): any => {
    const fields = ['section_heading','service_heading','content_top','content_middle','content_bottom','left_content','right_content'];
    const updated = { ...desc };
    fields.forEach(f => { if (updated[f]) updated[f] = replaceCity(updated[f], cityName); });
    if (updated.threeparagraph_new?.contents) {
      updated.threeparagraph_new = {
        ...updated.threeparagraph_new,
        contents: updated.threeparagraph_new.contents.map((c: string | null) => c ? replaceCity(c, cityName) : c),
        headings: updated.threeparagraph_new.headings?.map((h: string | null) => h ? replaceCity(h, cityName) : h)
      };
    }
    return updated;
  };

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
  if (data.technology && data.technology.length > 0) tocSections.push({ id: 'technology', title: 'TECHNOLOGY' });
  if (data.testimonial && data.testimonial.length > 0) tocSections.push({ id: 'testimonial', title: 'TESTIMONIALS' });


  const imageBase = `${process.env.NEXT_PUBLIC_BACKEND_URL}/backend/service/section/`;

  let noHeadingCardGridCount = 0;
  let leftHeadingCount = 0;
  let sectionIndex = 0;
  const getBgStyle = () => {
    const isLight = sectionIndex % 2 === 0;
    sectionIndex++;
    return {
      '--section-bg': isLight ? '#FFFAF2' : '#F6EADB',
      '--card-bg': isLight ? '#FFFFFF' : '#FFFAF2',
    } as React.CSSProperties;
  };

  return (
    <>
      <TopSection data={{
        name: replaceCity(service.service_name, cityName),
        bannerTitle: replaceCity(service.service_name, cityName),
        image: service.service_banner_image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/backend/service/banner/${service.service_banner_image}` : '',
        rightImage: service.service_banner_image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/backend/service/banner/${service.service_banner_image}` : (service.service_image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/backend/service/image/${service.service_image}` : ''),
        description: replaceCity(service.description2 || '', cityName),
        headingtag: service.heading_tag
      }} />

      <TableOfContent sections={tocSections} />

      {parsedSections.map((sec: any, index: number) => {
        const desc = applyCity(sec.desc);
        const type = desc.type;
        const classAdd = desc.class_add || '';
        const sectionId = desc.service_section_id || toSlug(desc.section_heading || desc.service_heading || `section-${index}`);

        // Count previous occurrences of this type to distinguish repeated types
        const typeIndex = parsedSections.slice(0, index).filter((s: any) => s.desc?.type === type).length;

        // Helper to extract list items (used by multiple types/classes)
        const getListItems = () => (desc.threeparagraph_new?.contents || [])
          .filter(Boolean)
          .map((c: string, idx: number) => ({
            id: idx,
            text: c.replace(/<[^>]+>/g, '').trim()
          }));

        if (classAdd.includes('eleventhSection')) {
          return (
            <div key={index} id={sectionId} style={getBgStyle()}>
              <EleventhSection data={desc} headingtag={desc.heading_tag || service.heading_tag} />
            </div>
          );
        }

        switch (type) {
          case 'quickoverview':
            if (typeIndex === 0 || classAdd.includes('firstSection')) {
              return (
                <div key={index} id={sectionId} style={getBgStyle()}>
                  <FirstSection data={desc} headingtag={desc.heading_tag || service.heading_tag} />
                </div>
              );
            } else {
              return (
                <div key={index} id={sectionId} style={getBgStyle()}>
                  <SixthSection data={desc} headingtag={desc.heading_tag || service.heading_tag} />
                </div>
              );
            }

          case 'videosection':
            if (classAdd.includes('secondSection') || type === 'videosection') {
              return (
                <div key={index} id={sectionId} style={getBgStyle()}>
                  <SecondSection data={desc} headingtag={desc.heading_tag || service.heading_tag} />
                </div>
              );
            }
            break;

          case 'fulltext':
            return (
              <div key={index} id={sectionId} style={getBgStyle()}>
                <ThirdSection data={desc} headingtag={desc.heading_tag || service.heading_tag} />
              </div>
            );

          case 'threeparagraphnoheading':
          case 'threeparagraphdifferentlayout': {
            const currentCount = noHeadingCardGridCount;
            noHeadingCardGridCount++;
            if (currentCount % 3 === 0) {
              return (
                <div key={index} id={sectionId} style={getBgStyle()}>
                  <ThirteenSection data={desc} headingtag={desc.heading_tag || service.heading_tag} />
                </div>
              );
            } else if (currentCount % 3 === 1) {
              return (
                <div key={index} id={sectionId} style={getBgStyle()}>
                  <FourthSection data={desc} headingtag={desc.heading_tag || service.heading_tag} />
                </div>
              );
            } else {
              return (
                <div key={index} id={sectionId} style={getBgStyle()}>
                  <FivethSection data={desc} headingtag={desc.heading_tag || service.heading_tag} />
                </div>
              );
            }
          }

          case 'tabparagraphsection':
            return (
              <div key={index} id={sectionId} style={getBgStyle()}>
                <SeventhSection data={desc} headingtag={desc.heading_tag || service.heading_tag} />
              </div>
            );

          case 'fulltextdifferentlayout':
            return (
              <div key={index} id={sectionId} style={getBgStyle()}>
                <EightSection data={desc} headingtag={desc.heading_tag || service.heading_tag} />
              </div>
            );

          case 'threeparagraphleftheading': {
            const leftIdx = leftHeadingCount;
            leftHeadingCount++;
            if (leftIdx % 3 === 0) {
              return (
                <div key={index} id={sectionId} style={getBgStyle()}>
                  <NinethSection data={desc} headingtag={desc.heading_tag || service.heading_tag} />
                </div>
              );
            } else if (leftIdx % 3 === 1) {
              return (
                <div key={index} id={sectionId} style={getBgStyle()}>
                  <NinethSectionAlt data={desc} headingtag={desc.heading_tag || service.heading_tag} />
                </div>
              );
            } else {
              return (
                <div key={index} id={sectionId} style={getBgStyle()}>
                  <NinethSectionAlt2 data={desc} headingtag={desc.heading_tag || service.heading_tag} />
                </div>
              );
            }
          }

          case 'twoparagraphsection':
            return (
              <div key={index} id={sectionId} style={getBgStyle()}>
                <EleventhSection data={desc} headingtag={desc.heading_tag || service.heading_tag} />
              </div>
            );

          case 'threeparagraphsection':
            return (
              <div key={index} id={sectionId} style={getBgStyle()}>
                <TwelveSection data={desc} headingtag={desc.heading_tag || service.heading_tag} subheadingtag={desc.sub_heading_tag} />
              </div>
            );

          case 'rightimageleftcontentsection':
          case 'leftimageleftcontentsection':
            // Parse tabs (multi_heading_section)
            let finalTabs: any[] = [];
            const multi = desc.multi_heading_section;
            
            if (multi && multi.headings) {
              const keys = Object.keys(multi.headings);
              keys.forEach(key => {
                const label = multi.headings[key];
                const rawSubHeadings = multi.sub_headings?.[key];
                const subHeadings = Array.isArray(rawSubHeadings) ? rawSubHeadings : [];
                const subUrls = Array.isArray(multi.sub_urls?.[key]) ? multi.sub_urls[key] : [];
                
                const t = subHeadings.map((name: any, i: number) => ({
                  name: (name && typeof name === 'string' ? name : '').toUpperCase(),
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
            }

            // Fallback to button_multinames if no tabs from multi_heading_section
            if (finalTabs.length === 0) {
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
              isActive: i === 0 // Make the first button active by default for styling
            })).filter((b: any) => b.label);

            return (
              <div key={index} id={sectionId} style={getBgStyle()}>
                <ColumnSection
                  sections={[{
                    id: sectionId,
                    heading: (desc.section_heading || desc.service_heading || '').toUpperCase(),
                    description: desc.content_top || '',
                    image: desc.right_image ? `${imageBase}${desc.right_image}` : (desc.left_image ? `${imageBase}${desc.left_image}` : ''),
                    imageAlt: desc.section_heading || '',
                    imagePosition: type === 'rightimageleftcontentsection' ? 'right' : 'left',
                    tabs: finalTabs,
                    buttons: finalButtons,
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
        <div id="faq" style={getBgStyle()}>
          <FaqSection faqData={parseFaqs(service.faq)} headingtag={service.heading_tag} />
        </div>
      )}

      {data.result && data.result.length > 0 && (
        <div id="result" style={getBgStyle()}>
          <ResultSection
            title={`${service.service_name} Results`}
            results={data.result.map((r: any) => ({
              id: r.id,
              treatment: service.service_name,
              age: '',
              images: {
                before: `${process.env.NEXT_PUBLIC_BACKEND_URL}/backend/result/${r.image}`,
                after: `${process.env.NEXT_PUBLIC_BACKEND_URL}/backend/result/${r.image}`
              }
            }))}
            headingtag={service.heading_tag}
          />
        </div>
      )}

      {data.technology && data.technology.length > 0 && (
        <div id="technology" style={getBgStyle()}>
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
        <div id="videos" style={getBgStyle()}>
          <ServiceVideoSection
            videos={data.video.map((v: any) => ({
              thumbnail: `${process.env.NEXT_PUBLIC_BACKEND_URL}/backend/service_video/image/${v.image}`,
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
