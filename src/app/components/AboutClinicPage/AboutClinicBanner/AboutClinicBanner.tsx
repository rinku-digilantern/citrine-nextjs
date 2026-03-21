import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import styles from './AboutClinicBanner.module.css';

const AboutClinicBanner = () => {
  return (
    <section className={styles.bannerSection}>
       <Image src={`/assets/images/about-clinic/clinicbanner.webp`} className={styles.bannerImage} width={1440} height={450} alt="Citrine Clinic" />
      <div className={styles.bannerContainer}>
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.homeLink}>
            Home
          </Link>
          <span className={styles.separator}>&gt;</span>
          <span className={styles.currentPage}>About Clinic</span>
        </div>
      </div>
    </section>
  );
};

export default AboutClinicBanner;
