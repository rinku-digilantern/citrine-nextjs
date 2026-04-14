"use client";
import React, { useEffect, useState } from 'react';
import styles from './Conclusion.module.css';
interface Props {
  section: {
    mainHeading: string;
    paragraph: string;
  };
}

const Conclusion: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.Conclusion}>
      <div className={styles.container}>
        <div className={styles.doctorprofile}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
          <p dangerouslySetInnerHTML={{ __html: section.paragraph }} />
        </div>
      </div>
    </section>
  );
};

export default Conclusion;