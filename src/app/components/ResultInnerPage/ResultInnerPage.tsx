'use client';
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from './ResultInnerPage.module.css';

interface ResultImage {
  before: string;
  after: string;
}

interface ResultItem {
  id: number;
  treatment: string;
  age: string;
  images: ResultImage;
}

interface ResultSectionProps {
  title?: string;
  results?: ResultItem[];
  showViewMore?: boolean;
  initialItemsToShow?: number;
  itemsPerLoad?: number;
}

const ResultInnerPage: React.FC<ResultSectionProps> = ({ 
  results,
  showViewMore = true,
  initialItemsToShow = 6,
  itemsPerLoad = 2
}) => {
  const [visibleItems, setVisibleItems] = useState(initialItemsToShow);
  // Default data if not provided via props
  const defaultResults: ResultItem[] = [
    {
      id: 1,
      treatment: 'Laser Toning',
      age: '32 Years',
      images: {
        before: '/assets/images/results/resultleft01.webp',
        after: '/assets/images/results/resultright01.webp'
      }
    },
    {
      id: 2,
      treatment: 'Laser Toning',
      age: '32 Years',
      images: {
        before: '/assets/images/results/resultleft02.webp',
        after: '/assets/images/results/resultright02.webp'
      }
    },
    {
      id: 3,
      treatment: 'Laser Toning',
      age: '32 Years',
      images: {
        before: '/assets/images/results/resultleft01.webp',
        after: '/assets/images/results/resultright01.webp'
      }
    },
    {
      id: 4,
      treatment: 'Laser Toning',
      age: '32 Years',
      images: {
        before: '/assets/images/results/resultleft02.webp',
        after: '/assets/images/results/resultright02.webp'
      }
    },
    {
      id: 5,
      treatment: 'Laser Toning',
      age: '32 Years',
      images: {
        before: '/assets/images/results/resultleft01.webp',
        after: '/assets/images/results/resultright01.webp'
      }
    },
    {
      id: 6,
      treatment: 'Laser Toning',
      age: '32 Years',
      images: {
        before: '/assets/images/results/resultleft02.webp',
        after: '/assets/images/results/resultright02.webp'
      }
    },
    {
      id: 7,
      treatment: 'Laser Toning',
      age: '32 Years',
      images: {
        before: '/assets/images/results/resultleft01.webp',
        after: '/assets/images/results/resultright01.webp'
      }
    },
    {
      id: 8,
      treatment: 'Laser Toning',
      age: '32 Years',
      images: {
        before: '/assets/images/results/resultleft02.webp',
        after: '/assets/images/results/resultright02.webp'
      }
    },
    {
      id: 9,
      treatment: 'Laser Toning',
      age: '32 Years',
      images: {
        before: '/assets/images/results/resultleft01.webp',
        after: '/assets/images/results/resultright01.webp'
      }
    }
  ];

  const resultItems = results || defaultResults;

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + itemsPerLoad);
  };

  const visibleResults = resultItems.slice(0, visibleItems);
  const hasMoreItems = visibleItems < resultItems.length;

  return (
    <section className={styles.ResultInnerPage}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>Laser Toning Real Results</h2>
        
        <div className={styles.resultsGrid}>
          {visibleResults.map((item) => (
            <div key={item.id} className={styles.resultCard}>
              <div className={styles.cardHeader}>
                <div className={styles.treatmentName}><Link href="/">{item.treatment}</Link></div>
                <div className={styles.ageInfo}>Age: {item.age}</div>
              </div>
              
              <div className={styles.imagesWrapper}>
                <div className={styles.imageContainer}>
                  <Image
                    src={item.images.before}
                    alt={`${item.treatment} Before`}
                    width={378}
                    height={465}
                    className={styles.resultImage}/>
                </div>
                
                <div className={styles.imageContainer}>
                  <Image
                    src={item.images.after}
                    alt={`${item.treatment} After`}
                    width={378}
                    height={465}
                    className={styles.resultImage}/>
                </div>
              </div>
              <div className={styles.disclaimer}>✱ Opinions/Results may vary from person to person.</div>
            </div>
          ))}
        </div>

        {showViewMore && hasMoreItems && (
          <div className={styles.viewMoreWrapper}>
           <button 
             onClick={handleLoadMore} 
             aria-label="Load More" 
             className={styles.viewMoreBtn}
           >
             LOAD MORE
           </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResultInnerPage;
