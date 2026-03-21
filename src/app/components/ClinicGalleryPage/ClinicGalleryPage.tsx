'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ClinicGalleryPage.module.css';

interface GalleryItem {
  id: number;
  gallery_image: string;
  full_image: string;
  alt_tag: string;
}

interface ClinicGalleryPageProps {
  galleryData: GalleryItem[];
}

const ClinicGalleryPage: React.FC<ClinicGalleryPageProps> = ({ galleryData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (galleryData && galleryData.length > 0) {
      setLoading(false);
    }
  }, [galleryData]);

  // Show all items at once
  const displayedItems = galleryData;

  return (
    <div className={styles.galleryPage}>
      <div className={styles.wrapper}>
        <div className={styles.galleryHeader}>
          <h1 className={`mainHeading ${styles.mainHeading}`}>Clinic Gallery</h1>
        </div>
            {loading ? (
              <div className="loader"></div>
            ) : (
            <>
            <div className={styles.galleryRow}>
              {displayedItems.map((item) => (
                <div key={item.id} className={styles.galleryItem}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={`https://api.citrineclinic.com/backend/gallery/${item.gallery_image}`}
                      alt={item.alt_tag}
                      width={720}
                      height={470}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.imageTitle}>{item.alt_tag}</div>
                </div>
              ))}
            </div>
            {/* Load More removed: all items shown at once */}
          </>
        )}
      </div>
    </div>
  );
};

export default ClinicGalleryPage;
