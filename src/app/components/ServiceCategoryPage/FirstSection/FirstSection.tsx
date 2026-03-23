import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import styles from './FirstSection.module.css';

const FirstSection = () => {
  return (
    <section className={styles.FirstSection}>
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
              <span className={styles.currentPage}>Acne Treatment in Gurgaon</span>
            </div>
            
            <h1 className={styles.mainHeading}>Acne Treatment in Gurgaon</h1>
            <p className={styles.description}>Acne is a pilosebaceous gland disorder characterised by the formation of blackheads, whiteheads (comedones), papules, pustules, nodules, and cysts. The lesions usually appear over 
the face but can involve the upper chest, back, and upper arms where the sebaceous glands are active. The condition is very common in teenagers; however, it may affect middle-aged adults, as is the rising trend in metropolitans. In some cases.</p>
            <div className={styles.buttonrow}>
              <Link href="/" aria-label="Book an Appointment" className={styles.bookbtn}>Book an Appointment</Link>
            </div>
          </div>
          {/* Right Image */}
          <div className={styles.rightContent}>
            <Image 
              src="/assets/images/servicecategory/acne.webp" 
              width={666} 
              height={500} 
              alt="Treatment" 
              className={styles.treatmentImage}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
