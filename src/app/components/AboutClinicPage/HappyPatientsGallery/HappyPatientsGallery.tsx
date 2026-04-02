import React from 'react';
import Image from 'next/image';
import styles from './HappyPatientsGallery.module.css';

const HappyPatientsGallery = () => {
  return (
    <section className={styles.gallerySection}>
     <Image src="/assets/images/about-clinic/happypatient.webp" alt="See The Citrine Difference" width={1440} height={620} priority className={styles.bannerImage}/>
      <div className={styles.container}>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryItem}>
            <div className={styles.contentWrapper}>
              <h2 className={`mainHeading ${styles.mainHeading}`}>
                HAPPY PATIENTS'<br /> GALLERY
              </h2>
              
              <p className={styles.description}>
                Real stories. Visible transformations.
Our patients are at the heart of everything we do, and their results reflect the care, precision, and trust we build every day.
From subtle enhancements to confidence-boosting changes, every journey is personal, and every smile is earned.
Because the most meaningful results are the ones our patients feel as much as they see.</p>
              
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <h3 className={styles.statNumber}>15,000+</h3>
                  <p className={styles.statLabel}>Procedures<br /> Performed Safely</p>
                </div>
                
                <div className={styles.statItem}>
                  <h3 className={styles.statNumber}>100%</h3>
                  <p className={styles.statLabel}>Focus on Patient<br /> Safety & Hygiene</p>
                </div>
                
                <div className={styles.statItem}>
                  <h3 className={styles.statNumber}>5,000+</h3>
                  <p className={styles.statLabel}>Happy & Satisfied<br /> Patients</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div className={styles.marqueeWrapper}>
              <div className={styles.marqueeContent}>
                <Image
                  src="/assets/images/about-clinic/happypatients.webp"
                  alt="Happy Patient"
                  width={1065}
                  height={930}
                  className={styles.galleryImage}
                />
                <Image
                  src="/assets/images/about-clinic/happypatients.webp"
                  alt="Happy Patient"
                  width={1065}
                  height={930}
                  className={styles.galleryImage}
                />
                <Image
                  src="/assets/images/about-clinic/happypatients.webp"
                  alt="Happy Patient"
                  width={1065}
                  height={930}
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.marqueeContent}>
                <Image
                  src="/assets/images/about-clinic/happypatients.webp"
                  alt="Happy Patient"
                  width={1065}
                  height={930}
                  className={styles.galleryImage}
                />
                <Image
                  src="/assets/images/about-clinic/happypatients.webp"
                  alt="Happy Patient"
                  width={1065}
                  height={930}
                  className={styles.galleryImage}
                />
                <Image
                  src="/assets/images/about-clinic/happypatients.webp"
                  alt="Happy Patient"
                  width={1065}
                  height={930}
                  className={styles.galleryImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyPatientsGallery;