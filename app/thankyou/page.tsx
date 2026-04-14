import { Metadata } from 'next';
import React from 'react'
import Link from 'next/link'
import styles from './style.module.css'
import { AiFillCheckCircle } from 'react-icons/ai'

import { getSeoData } from '@/src/lib/cms';
import { resolveMetadata } from '@/src/lib/seo-utils';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('thank-you');
  return resolveMetadata('thankyou', seo);
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
              <AiFillCheckCircle />
              <h1 className={`mainHeading ${styles.mainHeading}`}>Thank You!</h1>
              <p className="para">We have received your request. We will get in touch with you shortly.</p>
              <Link href="/" className={styles.gohome}>Go Home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}