import React from 'react'
import { Metadata } from 'next/dist/types';
import OfferDetails from '@/src/app/components/OfferDetails/OfferDetails';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';


import { resolveMetadata } from '@/src/lib/seo-utils';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const res = await fetch(`https://api.citrineclinic.com/api/offers/${slug}`, { cache: 'no-store' });
    const apiData = res.ok ? await res.json() : null;
    const offer = apiData?.data;

    const seoData = offer ? {
      title_tag: offer.seo_title || offer.title || offer.offer_name,
      description_tag: offer.seo_description || offer.description,
      canonical_tag: offer.canonical_tag
    } : null;

    return resolveMetadata('offers/' + slug, seoData, "Offer Detail | Dr. Niti Gaur | Citrine Clinic");
  } catch {
    return resolveMetadata('offers/' + slug, null, "Offer Detail | Dr. Niti Gaur | Citrine Clinic");
  }
}



interface PageProps {
  params: { slug: string };
}

async function getOfferDetails(offer_id: string) {
  try {
    const res = await fetch(`https://api.citrineclinic.com/api/offers/${offer_id}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}


const OfferDetail = async ({ params }: PageProps) => {
  const { slug } = await Promise.resolve(params);
  const apiData = await getOfferDetails(slug);
  const offer = apiData?.data;

  return (
    <>
      <Breadcrumb />
      {!offer ? (
        <div style={{ textAlign: 'center', padding: 40 }}>Offer not found.</div>
      ) : (
        <OfferDetails offer={offer} />
      )}
    </>
  );
};

export default OfferDetail;