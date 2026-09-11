import React from 'react';
import { Metadata } from 'next';
import { getServiceType, getServiceCategoryData, getServiceInnerData, getSecondCategoryData } from '@/src/lib/cms';
import ServiceCategoryPage from '@/src/app/components/ServiceCategoryPage/ServiceCategoryPage';
import ServiceInnerTemplate from '@/src/app/components/dynamic/ServiceInnerTemplate';
import ConcernPage from '@/src/app/components/ConcernPage/ConcernPage';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import { notFound } from 'next/navigation';

import { resolveMetadata, cmsImageUrl, pickImage } from '@/src/lib/seo-utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const typeRes = await getServiceType(slug);

  if (!typeRes || typeRes.title !== "Success") return resolveMetadata(slug, null);

  let seoData;
  let ogImage: string | null = null;

  if (typeRes.type === "firstcategory") {
    const data = await getServiceCategoryData(slug);
    seoData = data?.seo;
    ogImage = pickImage(
      cmsImageUrl('service/banner', data?.data?.banner_image),
      cmsImageUrl('service/image', data?.data?.service_image)
    );
  } else if (typeRes.type === "secondcategory") {
    const data = await getSecondCategoryData(slug);
    seoData = data?.seo;
    ogImage = cmsImageUrl('service/banner', data?.data?.banner_image);
  } else if (typeRes.type === "service") {
    const data = await getServiceInnerData(slug);
    seoData = data?.seo || (data?.data ? {
      title_tag: data.data.title_tag,
      description_tag: data.data.description_tag,
      canonical_tag: data.data.canonical_tag
    } : null);
    ogImage = pickImage(
      cmsImageUrl('service/banner', data?.data?.service_banner_image),
      cmsImageUrl('service/image', data?.data?.service_image)
    );
  }

  return resolveMetadata(slug, seoData, 'Citrine Clinic', ogImage);
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
    // `seo` is server-only. Keeping it out of the client component's props stops
    // Next.js serialising the schema a second time into the RSC payload.
    const { seo: _seo, ...pageData } = data;
    return (
      <>
        {data.seo?.faq_schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: (typeof data.seo.faq_schema === 'string' ? data.seo.faq_schema : JSON.stringify(data.seo.faq_schema)) }} />
        )}
        {data.seo?.bred_schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: (typeof data.seo.bred_schema === 'string' ? data.seo.bred_schema : JSON.stringify(data.seo.bred_schema)) }} />
        )}
        <ServiceCategoryPage data={pageData} />
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
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: (typeof data.seo.faq_schema === 'string' ? data.seo.faq_schema : JSON.stringify(data.seo.faq_schema)) }} />
        )}
        {data.seo?.bred_schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: (typeof data.seo.bred_schema === 'string' ? data.seo.bred_schema : JSON.stringify(data.seo.bred_schema)) }} />
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

    // `seo` is server-only — see the firstcategory branch above.
    const { seo: _seo, ...pageData } = data;

    // Using ServiceInnerTemplate exclusively after merging logic
    return (
      <>
        {data.seo?.faq_schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: (typeof data.seo.faq_schema === 'string' ? data.seo.faq_schema : JSON.stringify(data.seo.faq_schema)) }} />
        )}
        {data.seo?.bred_schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: (typeof data.seo.bred_schema === 'string' ? data.seo.bred_schema : JSON.stringify(data.seo.bred_schema)) }} />
        )}
        <ServiceInnerTemplate data={pageData} />
      </>
    );
  }

  return notFound();
}
