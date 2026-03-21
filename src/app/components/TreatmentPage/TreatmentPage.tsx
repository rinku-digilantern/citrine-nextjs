'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './TreatmentPage.module.css';
import Link from 'next/link';

interface TreatmentItem {
  id: number;
  name: string;
  image: string;
  short_desc: string | null;
  alt_tag: string | null;
  design_type: string;
  inner: any[];
  // description: string;
  url: string;
}

interface TreatmentPageProps {
  treatmentsData: TreatmentItem[];
  categoryName: string;
}

const TreatmentPage: React.FC<TreatmentPageProps> = ({ treatmentsData, categoryName }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  // Safety check for undefined or null data
  const safeData = treatmentsData || [];
  const visibleTreatments = safeData.slice(0, visibleCount);
  const hasMore = visibleCount < safeData.length;

  // Helper function to strip HTML tags for description preview
  const stripHtml = (html: string | null) => {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
  };

  return (
    <section className={styles.TreatmentPage}>
      <div className={styles.wrapper}>

            <div className={styles.treatmentheader}>
                <h1 className={`mainHeading ${styles.mainHeading}`}>{categoryName}</h1>
            </div>

            <div className={styles.treatmentrow}>
              {visibleTreatments.map((treatment) => (
                <div key={treatment.id} className={styles.serviceitem}>
                  <div className={styles.img}>
                    <Image 
                      src={`https://api.citrineclinic.com/backend/service/image/${treatment.image}`}
                      alt={treatment.alt_tag || treatment.name}
                      width={600} 
                      height={450} 
                    />
                  </div>
                  <div className={styles.details}>
                    <Link href={`/treatments/${treatment.url}`}>
                      <div className={styles.trtitle}>{treatment.name}</div>
                    </Link>
                    {/* <p>{treatment.short_desc ? stripHtml(treatment.short_desc) : stripHtml(treatment.description)}</p> */}
                    <Link href={`/treatments/${treatment.url}`} className={styles.viewmore}>
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

        {hasMore && (
          <div className={styles.treatmentbottom}>
            <button onClick={handleLoadMore} className={styles.loadmore}>
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TreatmentPage;