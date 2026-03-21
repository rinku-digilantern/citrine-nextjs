import React from 'react';
import Image from "next/image";
import styles from './ResultSection.module.css';

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
}

const ResultSection: React.FC<ResultSectionProps> = ({ 
  title, 
  results,
  showViewMore = true 
}) => {
  // Default data if not provided via props
  const defaultResults: ResultItem[] = [
    {
      id: 1,
      treatment: 'Laser Toning',
      age: '32 Years',
      images: {
        before: '/assets/images/serviceinnerpage/resultleft01.webp',
        after: '/assets/images/serviceinnerpage/resultright01.webp'
      }
    },
    {
      id: 2,
      treatment: 'Laser Toning',
      age: '32 Years',
      images: {
        before: '/assets/images/serviceinnerpage/resultleft02.webp',
        after: '/assets/images/serviceinnerpage/resultright02.webp'
      }
    },
    {
      id: 3,
      treatment: 'Laser Toning',
      age: '32 Years',
      images: {
        before: '/assets/images/serviceinnerpage/resultleft01.webp',
        after: '/assets/images/serviceinnerpage/resultright01.webp'
      }
    }
  ];

  const resultItems = results || defaultResults;
  const sectionTitle = title || 'LASER TONING RESULTS';

  return (
    <section id="result" className={styles.resultSection}>
      <div className={styles.container}>
        <h2 className={styles.mainHeading}>{sectionTitle}</h2>
        
        <div className={styles.resultsGrid}>
          {resultItems.map((item) => (
            <div key={item.id} className={styles.resultCard}>
              <div className={styles.cardHeader}>
                <div className={styles.treatmentName}>{item.treatment}</div>
                <div className={styles.ageInfo}>Age: {item.age}</div>
              </div>
              
              <div className={styles.imagesWrapper}>
                <div className={styles.imageContainer}>
                  <Image
                    src={item.images.before}
                    alt={`${item.treatment} Before`}
                    width={378}
                    height={465}
                    className={styles.resultImage}
                  />
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
            </div>
          ))}
        </div>

        {showViewMore && (
          <div className={styles.viewMoreWrapper}>
           <a href="#" aria-label="View More" className={styles.viewMoreBtn}>VIEW MORE</a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResultSection;
