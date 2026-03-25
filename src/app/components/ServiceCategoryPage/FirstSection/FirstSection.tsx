import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import styles from './FirstSection.module.css';

interface FirstSectionProps {
  data?: {
    name: string;
    image: string;
    description: string;
  };
}

const FirstSection: React.FC<FirstSectionProps> = ({ data }) => {
  const content = data || {
    name: "Acne Treatment in Gurgaon",
    image: "/assets/images/servicecategory/acne.webp",
    description: "Acne is a pilosebaceous gland disorder characterised by the formation of blackheads, whiteheads (comedones), papules, pustules, nodules, and cysts."
  };

  return (
    <section className={styles.FirstSection}>
       <Image src="/assets/images/serviceinnerpage/serviceinnertopbg.webp" className={styles.topImage} width={1440} height={580} alt="Background" />
      <div className={styles.topContainer}>
        <div className={styles.contentRow}>
          <div className={styles.leftContent}>
            {/* Breadcrumb */}
            <div className={styles.breadcrumb}>
              <Link href="/" className={styles.homeLink}>Home</Link>
              <span className={styles.separator}>›</span>
              <span className={styles.currentPage}>{content.name}</span>
            </div>
            
            <h1 className={styles.mainHeading}>{content.name}</h1>
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: content.description }} />
            <div className={styles.buttonrow}>
              <Link href="/" aria-label="Book an Appointment" className={styles.bookbtn}>Book an Appointment</Link>
            </div>
          </div>
          <div className={styles.rightContent}>
            <Image 
              src={content.image || "/assets/images/servicecategory/acne.webp"} 
              width={666} 
              height={500} 
              alt={content.name} 
              className={styles.treatmentImage}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
