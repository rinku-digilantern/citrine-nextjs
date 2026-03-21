import React from 'react';
import styles from './CitrineDifferenceBanner.module.css';
import Link from 'next/link';

const CitrineDifferenceBanner = () => {
  return (
    <section className={styles.bannerSection}>
      <picture className={styles.bannerImage}>
        <source media="(max-width: 768px)" srcSet="/assets/images/about-clinic/mobileseethebanner.webp" />
        <img
          src="/assets/images/about-clinic/seethebanner.webp"
          alt="See The Citrine Difference"
          className={styles.bannerImageElement}
          loading="eager"
          fetchPriority="high"
        />
      </picture>
      <div className={styles.overlay}>
          <div className={styles.rightSide}>
          <div className={styles.content}>
            <h2 className={`mainHeading ${styles.mainHeading}`}>
              SEE THE CITRINE<br />
              DIFFERENCE YOUR<br />
              SELF.
            </h2>
            
            <p className={styles.description}>
              From first consultation to final results—our patients<br />
              share their real experiences.
            </p>
            
            <Link href="/testimonials" className={styles.ctaButton}>
              EXPLORE REAL RESULTS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitrineDifferenceBanner;
