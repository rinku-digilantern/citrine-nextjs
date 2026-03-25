import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import styles from './TopSection.module.css';

interface TopSectionProps {
  data?: {
    name: string;
    bannerTitle?: string;
    image: string;
    rightImage?: string;
    description: string;
  };
}

const TopSection: React.FC<TopSectionProps> = ({ data }) => {
  const content = data || {
    name: "Laser Toning in Gurgaon",
    bannerTitle: "LASER TONING",
    image: "/assets/images/serviceinnerpage/serviceinnertopbg.webp",
    rightImage: "/assets/images/serviceinnerpage/topimagerights.webp",
    description: "Laser toning is one of the most effective non-surgical treatments..."
  };

  return (
    <div className={styles.TopSectionWrapper}>
      {/* Hero Banner Part */}
      <section className={styles.BannerPart}>
         <Image 
          src={content.image || "/assets/images/serviceinnerpage/serviceinnertopbg.webp"} 
          className={styles.topImage} 
          width={1440} 
          height={400} 
          alt={content.bannerTitle || content.name} 
          priority
        />
        <div className={styles.bannerContainer}>
          <h2 className={styles.bannerHeading}>{content.bannerTitle || content.name.toUpperCase()}</h2>
        </div>
      </section>

      {/* About Section Part */}
      <section className={styles.AboutPart}>
        <div className={styles.container}>
          <div className={styles.contentRow}>
            <div className={styles.leftContent}>
               <div className={styles.breadcrumb}>
                <Link href="/" className={styles.homeLink}>Home</Link>
                <span className={styles.separator}>›</span>
                <span className={styles.currentPage}>Service</span>
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
                src={content.rightImage || "/assets/images/serviceinnerpage/topimagerights.webp"} 
                width={680} 
                height={500} 
                alt={content.name} 
                className={styles.treatmentImage}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopSection;
