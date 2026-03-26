import { Metadata } from 'next';
import { getServiceType, getServiceCategoryData, getServiceDetailData } from '@/src/lib/cms';
import CategoryTemplate from '@/src/app/components/dynamic/CategoryTemplate';
import ServiceDetailTemplate from '@/src/app/components/dynamic/ServiceDetailTemplate';
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
  } else if (typeRes.type === "service") {
    const data = await getServiceDetailData(slug);
    seoData = data?.seo;
  }

  if (!seoData) return {};

  return {
    title: seoData.title_tag,
    description: seoData.description_tag,
    alternates: {
      canonical: seoData.canonical_tag,
    },
    openGraph: {
      title: seoData.title_tag,
      description: seoData.description_tag,
      url: seoData.canonical_tag,
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
  
  if (typeRes.type === "service") {
    const data = await getServiceDetailData(slug);
    if (!data || !data.success) return notFound();
    return (
      <>
        {data.seo?.faq_schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data.seo.faq_schema) }} />
        )}
        {data.seo?.bred_schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data.seo.bred_schema) }} />
        )}
        <ServiceDetailTemplate data={data} />
      </>
    );
  }

  return notFound();
}
