"use client";
import React, { useEffect, useState } from 'react';
import styles from './SkinClinicGurgaonFirstSection.module.css';
interface Props {
  section: {
    mainHeading: string;
    paragraph: string;
    paragraph2: string;
    paragraph3: string;
  };
}

const SkinClinicGurgaonFirstSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.SkinClinicGurgaonFirstSection}>
      <div className={styles.container}>
        <div className={styles.doctorprofile}>
          <h1 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h1>
          <p dangerouslySetInnerHTML={{ __html: section.paragraph }} />
          <p dangerouslySetInnerHTML={{ __html: section.paragraph2 }} />
          <p dangerouslySetInnerHTML={{ __html: section.paragraph3 }} />
        </div>
      </div>
    </section>
  );
};

export default SkinClinicGurgaonFirstSection;