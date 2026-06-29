import React from 'react'
import { Metadata } from 'next/dist/types';
import OfferDetails from '@/src/app/components/OfferDetails/OfferDetails';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import { resolveMetadata } from '@/src/lib/seo-utils';

function createSlug(name: string) {
  if (!name) return '';
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

async function getOfferDetailsBySlug(slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offers`, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.data) return null;

    const isId = /^\d+$/.test(slug);

    let foundOffer = null;
    let foundCategoryId = null;
    let foundCategoryName = null;
    let foundCategoryDesc = null;

    for (const category of data.data) {
      for (const offer of category.offers || []) {
        if (isId && offer.offer_id.toString() === slug) {
          foundOffer = offer;
          foundCategoryId = category.category_id;
          foundCategoryName = category.category_name;
          foundCategoryDesc = category.category_description;
          break;
        } else if ((offer.slug && offer.slug === slug) || (!offer.slug && createSlug(offer.offer_name) === slug)) {
          foundOffer = offer;
          foundCategoryId = category.category_id;
          foundCategoryName = category.category_name;
          foundCategoryDesc = category.category_description;
          break;
        }
      }
      if (foundOffer) break;
    }

    if (foundOffer) {
      try {
        const singleRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offers/${foundOffer.offer_id}`, { cache: 'no-store' });
        if (singleRes.ok) {
          const singleData = await singleRes.json();
          if (singleData.data) {
            return singleData.data;
          }
        }
      } catch (e) {
        // Ignored
      }
      return {
        ...foundOffer,
        category: {
          category_id: foundCategoryId,
          category_name: foundCategoryName,
          category_description: foundCategoryDesc
        }
      };
    }
    return null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const offer = await getOfferDetailsBySlug(slug);

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

const OfferDetail = async ({ params }: PageProps) => {
  const { slug } = await Promise.resolve(params);
  const offer = await getOfferDetailsBySlug(slug);

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