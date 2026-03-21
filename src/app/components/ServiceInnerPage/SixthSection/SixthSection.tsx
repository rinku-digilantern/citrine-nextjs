import React from "react";
import Image from "next/image";
import Link from 'next/link';
import styles from "./SixthSection.module.css";

const SixthSection: React.FC = () => {
  const candidatesLeft = [
    "Individuals with uneven skin tone or dull complexion",
    "People dealing with melasma or pigmentation patches",
    "Those with acne marks or post-inflammatory pigmentation",
    "Individuals looking for non-surgical skin rejuvenation",
  ];

  const candidatesRight = [
    "People who want brighter and clearer skin texture",
    "Adults with mild to moderate sun damage",
    "Individuals with realistic expectations from treatment",
  ];

  return (
    <section id="undergo" className={styles.sixthSection}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>
          WHO CAN UNDERGO LASER TONING
        </h2>
        <p className={styles.subtitle}>
          Laser toning is suitable for many individuals looking to improve skin tone and clarity.
        </p>

        <div className={styles.candidatesGrid}>
          <div className={styles.columnLeft}>
            {candidatesLeft.map((candidate, index) => (
              <div key={index} className={styles.candidateItem}>
                <span className={styles.arrow}>
                  <Image src="/assets/images/serviceinnerpage/arrow.webp" alt="Check Icon" width={28} height={20} />
                </span>
                <span className={styles.candidateText}>{candidate}</span>
              </div>
            ))}
          </div>

          <div className={styles.columnRight}>
            {candidatesRight.map((candidate, index) => (
              <div key={index} className={styles.candidateItem}>
                <span className={styles.arrow}>
                  <Image src="/assets/images/serviceinnerpage/arrow.webp" alt="Check Icon" width={28} height={20} />
                </span>
                <span className={styles.candidateText}>{candidate}</span>
              </div>
            ))}
          </div>
        </div>

        <p className={styles.footerText}>
          However, a dermatologist consultation is essential to determine whether the treatment
          is appropriate for a particular skin type.
        </p>
        <div className={styles.buttonrow}>
            <Link href="/" aria-label="Book an Appointment" className={styles.bookbtn}>Book an Appointment</Link>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
