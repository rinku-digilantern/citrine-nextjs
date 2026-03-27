"use client";
import React from "react";
import styles from "./DermatologyFivethSection.module.css";

interface Props {
  section: {
    mainHeading: string;
    paragraph: string;
  } | null;
}

const DermatologyFivethSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.DermatologyFivethSection}>
      <div className={styles.container}>
        <div className={styles.doctorprofile}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
          <p dangerouslySetInnerHTML={{ __html: section.paragraph }} />
        </div>
      </div>
    </section>
  );
};

export default DermatologyFivethSection;
