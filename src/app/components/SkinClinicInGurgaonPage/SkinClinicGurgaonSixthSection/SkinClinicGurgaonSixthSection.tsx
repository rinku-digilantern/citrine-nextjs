"use client";
import React from "react";
import styles from "./SkinClinicGurgaonSixthSection.module.css";

interface Props {
  section: {
    mainHeading: string;
    list?: string[];
  } | null;
}

const SkinClinicGurgaonSixthSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.SkinClinicGurgaonSixthSection}>
      <div className={styles.container}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
          {section.list && (
              <ul className={styles.BestDermatologistList}>
              {section.list.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
      </div>
    </section>
  );
};

export default SkinClinicGurgaonSixthSection;
