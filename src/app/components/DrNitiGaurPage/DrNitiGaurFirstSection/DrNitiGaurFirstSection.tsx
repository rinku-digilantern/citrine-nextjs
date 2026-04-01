"use client";
import React, { useEffect, useState } from 'react';
import styles from './DrNitiGaurFirstSection.module.css';
interface Props {
  section: {
    mainHeading: string;
    paragraph: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
    paragraph5: string;
  };
}

const DrNitiGaurFirstSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.DrNitiGaurFirstSection}>
      <div className={styles.container}>
        <div className={styles.doctorprofile}>
          <h1 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h1>
          <p className={styles.desc}>MBBS, MD - DERMATOLOGY, VENEREOLOGY & LEPROLOGY<br/>
DERMATOLOGIST, COSMETOLOGIST, TRICHOLOGIST, TEDx SPEAKER</p>
          <p dangerouslySetInnerHTML={{ __html: section.paragraph }} />
          <p dangerouslySetInnerHTML={{ __html: section.paragraph2 }} />
          <p dangerouslySetInnerHTML={{ __html: section.paragraph3 }} />
          <p dangerouslySetInnerHTML={{ __html: section.paragraph4 }} />
          <p dangerouslySetInnerHTML={{ __html: section.paragraph5 }} />
        </div>
      </div>
    </section>
  );
};

export default DrNitiGaurFirstSection;