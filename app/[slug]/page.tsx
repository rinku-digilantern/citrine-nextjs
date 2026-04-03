import React from 'react';
import { Metadata } from 'next';
import { getServiceType, getServiceCategoryData, getServiceInnerData, getSecondCategoryData } from '@/src/lib/cms';
import CategoryTemplate from '@/src/app/components/dynamic/CategoryTemplate';
import ServiceInnerTemplate from '@/src/app/components/dynamic/ServiceInnerTemplate';
import ConcernPage from '@/src/app/components/ConcernPage/ConcernPage';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const typeRes = await getServiceType(slug);
  
  if (!typeRes || typeRes.title !== "Success") return {};

  let seoData;
  if (typeRes.type === "firstcategory") {
    const data = await getServiceCategoryData(slug);
    seoData = data?.seo;
  } else if (typeRes.type === "secondcategory") {
    const data = await getSecondCategoryData(slug);
    seoData = data?.seo;
  } else if (typeRes.type === "service") {
    const data = await getServiceInnerData(slug);
    seoData = data?.seo || (data?.data ? {
      title_tag: data.data.title_tag,
      description_tag: data.data.description_tag,
      canonical_tag: data.data.canonical_tag
    } : null);
  }

  if (!seoData) return {};

  return {
    title: seoData.title_tag || 'Citrine Clinic',
    description: seoData.description_tag || '',
    alternates: {
      canonical: seoData.canonical_tag ? `/${seoData.canonical_tag}` : undefined,
    },
    openGraph: {
      title: seoData.title_tag || '',
      description: seoData.description_tag || '',
      url: seoData.canonical_tag ? `/${seoData.canonical_tag}` : undefined,
    },
  };
}

export default async function DynamicSlugPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Step 1: Identify type
  const typeRes = await getServiceType(slug);
  if (!typeRes || typeRes.title !== "Success") {
    return notFound();
  }

  // Step 2: Fetch corresponding data
  if (typeRes.type === "firstcategory") {
    const data = await getServiceCategoryData(slug);
    if (!data) return notFound();
    return (
      <>
        {data.seo?.faq_schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data.seo.faq_schema) }} />
        )}
        {data.seo?.bred_schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data.seo.bred_schema) }} />
        )}
        <CategoryTemplate data={data} />
      </>
    );
  } 

  if (typeRes.type === "secondcategory") {
    const data = await getSecondCategoryData(slug);
    if (!data || !data.success) return notFound();

    // Map the servicelist into the structure ConcernPage expects:
    const mappedConcerns = data.data?.servicelist?.map((item: any) => ({
      id: item.ser_id,
      name: item.service_name,
      image: item.service_image,
      short_desc: item.short_desc || '',
      alt_tag: item.alt_tag || item.service_name,
      url: item.url,
      description: item.short_desc || '',
      design_type: '',
      inner: []
    })) || [];

    return (
      <>
        {data.seo?.faq_schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data.seo.faq_schema) }} />
        )}
        {data.seo?.bred_schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data.seo.bred_schema) }} />
        )}
        <Breadcrumb />
        <ConcernPage title={data.data?.service_name} concernsData={mappedConcerns} />
        <AppointmentSection />
      </>
    );
  }
  
  if (typeRes.type === "service") {
    const data = await getServiceInnerData(slug);
    if (!data || !data.success) return notFound();
    
    // Using ServiceInnerTemplate exclusively after merging logic
    return (
      <>
        {data.seo?.faq_schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data.seo.faq_schema) }} />
        )}
        {data.seo?.bred_schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data.seo.bred_schema) }} />
        )}
        <ServiceInnerTemplate data={data} />
      </>
    );
  }

  return notFound();
}
