"use client";
import React from 'react';
import styles from './SkinClinicGurgaonFivethSection.module.css';

interface Props {
  section:
    | {
        leftHeading?: string;
        leftParagraph?: string;
        rightHeading?: string;
        rightParagraph?: string;
      }
    | null;
}

const SkinClinicGurgaonFivethSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;

  const { leftHeading, leftParagraph, rightHeading, rightParagraph = [] } = section;

  return (
    <section className={styles.SkinClinicGurgaonFivethSection}>
      <div className={styles.container}>
        <div className={styles.commonbox}>
        <div className={styles.left}>
          <h2 className={styles.heading}>{leftHeading}</h2>
          <p className={styles.lead}>{leftParagraph}</p>
        </div>

        <div className={styles.right}>
          <h3 className={styles.heading}>{rightHeading}</h3>
          <p className={styles.lead}>{rightParagraph}</p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default SkinClinicGurgaonFivethSection;
