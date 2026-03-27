"use client";
import React from "react";
import styles from "./DermatologyEightSection.module.css";

interface Props {
  section: {
    mainHeading: string;
    list?: string[];
  } | null;
}

const DermatologyEightSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.DermatologyEightSection}>
      <div className={styles.container}>
        <div className={styles.doctorprofile}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
          {section.list && (
            <ul className={styles.BestDermatologistList}>
              {section.list.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
           </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default DermatologyEightSection;
