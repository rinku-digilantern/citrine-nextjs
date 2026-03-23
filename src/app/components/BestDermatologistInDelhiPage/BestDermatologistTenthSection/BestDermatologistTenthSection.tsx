"use client";
import React from "react";
import styles from "./BestDermatologistTenthSection.module.css";

interface Props {
  section: { mainHeading: string; paragraph: string } | null;
}

const BestDermatologistTenthSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.BestDermatologistTenthSection}>
      <div className={styles.container}>
        <div className={styles.doctorprofile}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
          <p dangerouslySetInnerHTML={{ __html: section.paragraph }} />
        </div>
      </div>
    </section>
  );
};

export default BestDermatologistTenthSection;
