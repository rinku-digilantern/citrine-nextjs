import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import styles from './TechnologyBanner.module.css';

const TechnologyBanner = () => {
  return (
    <section className={styles.TechnologyBanner}>
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
          <span className={styles.currentPage}>Techonology</span>
          <span className={styles.separator}>›</span>
          <span className={styles.currentPage}>Ultherapy Treatment In Gurgaon</span>
        </div>

            <h1 className={styles.mainHeading}>Ultherapy Treatment In Gurgaon</h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipiscing elit nunc neq 
ue laoreet, tristique massa interdum, efficitur ligula. Donec sollice aetudin semper commodo. Quisque eget semper erat a hendrerit elit. Proin laoreet nisi felis ut vehicula nisi fringilla a. Pellentesque luctus libero et sem interdum feugiat. </p>
            <div className={styles.buttonrow}>
              <Link href="/" aria-label="Book an Appointment" className={styles.bookbtn}>Book an Appointment</Link>
            </div>
          </div>
          {/* Right Image */}
          <div className={styles.rightContent}>
            <Image 
              src="/assets/images/technologyinner/techno01.webp" 
              width={650} 
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

export default TechnologyBanner;
