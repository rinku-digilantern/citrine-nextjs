"use client";
import React from "react";
import styles from "./SkinClinicGurgaonFourthSection.module.css";

interface Props {
  section: {
    mainHeading: string;
    paragraph: string;
    list?: string[];
  } | null;
}

const SkinClinicGurgaonFourthSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.SkinClinicGurgaonFourthSection}>
      <div className={styles.container}>
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
    </section>
  );
};

export default SkinClinicGurgaonFourthSection;
