"use client";
import React, { useEffect, useState } from 'react';
import styles from './BestDermatologistFirstSection.module.css';
interface Props {
  section: {
    mainHeading: string;
    paragraph: string;
  };
}

const BestDermatologistFirstSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.BestDermatologistFirstSection}>
      <div className={styles.container}>
        <div className={styles.doctorprofile}>
          <h1 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h1>
          <p dangerouslySetInnerHTML={{ __html: section.paragraph }} />
        </div>
      </div>
    </section>
  );
};

export default BestDermatologistFirstSection;