'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './MediaPage.module.css';

interface MediaItem {
  id: number;
  name: string;
  description: string | null;
  image: string;
  logo: string;
  alt_tag: string;
  videolink: string | null;
  url: string;
}

interface MediaPageProps {
  mediaData: MediaItem[];
}

const MediaPage: React.FC<MediaPageProps> = ({ mediaData }) => {
  const [visibleItems, setVisibleItems] = useState(6);
  
  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 3);
  };
  
  const hasMore = visibleItems < mediaData.length;
  
  return (
    <div className={styles.mediaPage}>
      <div className={styles.container}>
        <div className={styles.mediaHeader}>
          <h1 className={`mainHeading ${styles.mainHeading}`}>News & Media</h1>
        </div>
        
        <div className={styles.mediaGrid}>
          {mediaData.slice(0, visibleItems).map((item) => (
            <div key={item.id} className={styles.mediaCard}>
              <a 
                href={item.url} 
                className={styles.cardLink}
                target="_blank"
                rel="noopener noreferrer">
                <div className={styles.imageWrapper}>
                  <Image 
                    src={`https://api.citrineclinic.com/backend/pressmedia/category/${item.image}`}
                    alt={item.alt_tag} width={400} height={300} />
                  <div className={styles.sourceTag}>
                    <Image 
                      src={`https://api.citrineclinic.com/backend/pressmedia/logo/${item.logo}`}
                      alt={item.name}
                      width={180}
                      height={50}/>
                  </div>
                </div>
                <div className={styles.cardContent}>{item.name}</div>
              </a>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className={styles.commonbottom}>
            <button onClick={handleLoadMore} className={styles.loadmore}>
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaPage;