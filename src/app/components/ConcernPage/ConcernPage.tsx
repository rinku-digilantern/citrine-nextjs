'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ConcernPage.module.css';
import Link from 'next/link';

// TypeScript interface for props
interface InnerConcern {
  id: number;
  name: string;
  image: string;
  alt_tag: string;
  design_type: string;
  url: string;
}

interface ConcernItem {
  id: number;
  name: string;
  image: string;
  short_desc: string | null;
  alt_tag: string;
  design_type: string;
  inner: InnerConcern[];
  description: string | null;
  url: string;
}

interface ConcernPageProps {
  concernsData: ConcernItem[];
}

// Helper function to strip HTML tags
const stripHtml = (html: string | null): string => {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').trim();
};

const ConcernPage: React.FC<ConcernPageProps> = ({ concernsData }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  // Safety check for undefined or null data
  const safeData = concernsData || [];

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  const visibleConcerns = safeData.slice(0, visibleCount);
  const hasMore = visibleCount < safeData.length;

  return (
    <section className={styles.TreatmentPage}>
      <div className={styles.wrapper}>

            <div className={styles.treatmentheader}>
                <h1 className={`mainHeading ${styles.mainHeading}`}>Concerns</h1>
            </div>

            <div className={styles.treatmentrow}>
              {visibleConcerns.map((concern) => (
                <div key={concern.id} className={styles.serviceitem}>
                  <div className={styles.img}>
                    <Image 
                      src={`https://api.citrineclinic.com/backend/service/image/${concern.image}`}
                      alt={concern.alt_tag || concern.name} 
                      width={500} 
                      height={400} 
                    />
                  </div>
                  <div className={styles.details}>
                    <Link href={`/${concern.url}`}>
                      <div className={styles.trtitle}>{concern.name}</div>
                    </Link>
                    {/* <p>{stripHtml(concern.description)}</p> */}
                    <Link href={`/${concern.url}`} className={styles.viewmore}>
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

export default ConcernPage;