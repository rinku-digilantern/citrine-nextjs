import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import styles from './TopSection.module.css';

const TopSection = () => {
  return (
    <section className={styles.TopSection}>
       <Image src={`/assets/images/serviceinnerpage/serviceinnertopbg.webp`} className={styles.topImage} width={1440} height={580} alt="ServiceInner Page" />
      <div className={styles.topContainer}>
        {/* Main Content Row */}
        <div className={styles.contentRow}>
          {/* Left Content */}
          <div className={styles.leftContent}>
             {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.homeLink}>Home</Link>
          <span className={styles.separator}>›</span>
          <span className={styles.currentPage}>Service</span>
          <span className={styles.separator}>›</span>
          <span className={styles.currentPage}>Laser Toning in Gurgaon</span>
        </div>

            <h1 className={styles.mainHeading}>Laser Toning in Gurgaon</h1>
            <p className={styles.description}>Laser toning is one of the most effective non-surgical treatments for improving skin tone and reducing pigmentation. The procedure uses advanced laser technology to gently break down excess melanin and stimulate skin renewal. At Citrine Clinic in Gurgaon, dermatologists design customized laser toning treatments based on the patient’s skin concerns and type.</p>
            <div className={styles.buttonrow}>
              <Link href="/" aria-label="Book an Appointment" className={styles.bookbtn}>Book an Appointment</Link>
            </div>
          </div>
          {/* Right Image */}
          <div className={styles.rightContent}>
            <Image 
              src="/assets/images/serviceinnerpage/topimagerights.webp" 
              width={680} 
              height={500} 
              alt="Treatment" 
              className={styles.treatmentImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
