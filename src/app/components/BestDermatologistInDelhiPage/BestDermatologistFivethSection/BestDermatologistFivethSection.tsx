"use client";
import React from "react";
import styles from "./BestDermatologistFivethSection.module.css";

interface Props {
  section: {
    mainHeading: string;
    paragraph1?: string;
    list?: string[];
    paragraph2?: string;
  } | null;
}

const BestDermatologistFivethSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.BestDermatologistFivethSection}>
      <div className={styles.container}>
        <div className={styles.doctorprofile}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
          {section.paragraph1 && <p><strong dangerouslySetInnerHTML={{ __html: section.paragraph1 }} /></p>}
          {section.list && (
            <ul className={styles.BestDermatologistList}>
              {section.list.map((item: string, idx: number) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
          {section.paragraph2 && <p dangerouslySetInnerHTML={{ __html: section.paragraph2 }} />}
        </div>
      </div>
    </section>
  );
};

export default BestDermatologistFivethSection;
