import { Metadata } from 'next';
import React from 'react'
import Link from 'next/link'
import styles from './style.module.css'
import { AiFillCheckCircle } from 'react-icons/ai'
import type { Metadata } from "next";
import metadataConfig from "@/app/metadata";
export const generateMetadata = (): Metadata => metadataConfig["/thank-you"];


const API_BASE = 'https://api.citrineclinic.com/api';

async function getSeoData(slug: string) {
  try {
    const res = await fetch(`${API_BASE}/seo-tag/${slug}`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json || !json.seo) return null;
    return json.seo;
  } catch {
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('thank-you');
  if (!seo) return { title: 'Citrine Clinic' };
  return {
    title: seo.title_tag || 'Citrine Clinic',
    description: seo.description_tag || '',
    keywords: seo.keyword_tag || undefined,
    alternates: {
      canonical: seo.canonical_tag ? `/${seo.canonical_tag}` : '/thank-you',
    },
    openGraph: {
      url: `https://www.citrineclinic.com/${seo.canonical_tag || 'thank-you'}`,
      title: seo.title_tag || '',
      description: seo.description_tag || '',
    },
  };
}

export default async function ThankYou() {
  const seo = await getSeoData('thank-you');

  return (
    <>

      {seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faq_schema) }} />
      )}
      {seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.bred_schema) }} />
      )}

    <section className={styles.thankpage}>
      <div className="wrapper">
        <div className={`row ${styles.row}`}>
          <div className={`col col-12 col-md-8 col-lg-7 ${styles.col}`}>
            <AiFillCheckCircle/>
            <h1 className={`mainHeading ${styles.mainHeading}`}>Thank You!</h1>
            <p className="para">We have received your request. We will get in touch with you shortly.</p>
            <Link href="/" className={styles.gohome}>Go Home</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
