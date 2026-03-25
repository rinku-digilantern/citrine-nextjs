"use client";
import React from "react";
import styles from "./BestDermatologistNineSection.module.css";

interface Props {
  section: { mainHeading: string; paragraph: string; list?: string[] } | null;
}

const BestDermatologistNineSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.BestDermatologistNineSection}>
      <div className={styles.container}>
        <div className={styles.doctorprofile}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
          <p dangerouslySetInnerHTML={{ __html: section.paragraph }} />
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

export default BestDermatologistNineSection;
