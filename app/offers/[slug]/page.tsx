import React from 'react'
import { Metadata } from 'next/dist/types';
import OfferDetails from '@/src/app/components/OfferDetails/OfferDetails';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const res = await fetch(`https://api.citrineclinic.com/api/offers/${slug}`, { cache: 'no-store' });
    const apiData = res.ok ? await res.json() : null;
    const offer = apiData?.data;

    if (!offer) {
      return {
        title: "Offer Detail | Dr. Niti Gaur | Citrine Clinic",
        description: "Fix your appointment with Citrine Clinic and get yourself best treatments that give refreshed and rejuvenated skin.",
      };
    }

    const title = offer.seo_title || offer.title || offer.offer_name || "Offer Detail | Dr. Niti Gaur | Citrine Clinic";
    const description = offer.seo_description || offer.description || "Fix your appointment with Citrine Clinic and get yourself best treatments that give refreshed and rejuvenated skin.";

    return {
      title,
      description,
      alternates: {
        canonical: `/offers/${slug}`,
      },
      openGraph: {
        url: `https://www.citrineclinic.com/offers/${slug}`,
        title,
        description,
      },
    };
  } catch {
    return {
      title: "Offer Detail | Dr. Niti Gaur | Citrine Clinic",
      description: "Fix your appointment with Citrine Clinic and get yourself best treatments that give refreshed and rejuvenated skin.",
    };
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