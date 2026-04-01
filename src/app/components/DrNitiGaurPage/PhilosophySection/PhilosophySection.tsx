"use client";
import React from "react";
import styles from "./PhilosophySection.module.css";

interface Props {
  section: {
    mainHeading: string;
    paragraph?: string;
  } | null;
}

const PhilosophySection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.PhilosophySection}>
      <div className={styles.container}>
        <div className={styles.philosophybox}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
          {section.paragraph && <p dangerouslySetInnerHTML={{ __html: section.paragraph }} />}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
