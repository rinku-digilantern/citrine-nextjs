"use client";
import React from "react";
import styles from "./BestDermatologistSecondSection.module.css";

interface Props {
  section: {
    mainHeading: string;
    paragraph1?: string;
    paragraph2?: string;
    paragraph3?: string;
    list?: string[];
  } | null;
}

const BestDermatologistSecondSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.BestDermatologistSecondSection}>
      <div className={styles.container}>
        <div className={styles.doctorprofile}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
          {section.paragraph1 && <p dangerouslySetInnerHTML={{ __html: section.paragraph1 }} />}
          {section.paragraph2 && <p><strong dangerouslySetInnerHTML={{ __html: section.paragraph2 }} /></p>}
          {section.list && (
            <ul className={styles.BestDermatologistList}>
              {section.list.map((item: string, idx: number) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
          {section.paragraph3 && <p dangerouslySetInnerHTML={{ __html: section.paragraph3 }} />}
        </div>
      </div>
    </section>
  );
};

export default BestDermatologistSecondSection;
