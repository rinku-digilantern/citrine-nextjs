"use client";
import React from "react";
import styles from "./BestDermatologistSixthSection.module.css";

interface Props {
  section: {
    mainHeading: string;
    paragraphs?: string;
    paragraphs2?: string;
    paragraphs3?: string;
    paragraph?: string;
    list?: string[];
  } | null;
}

const BestDermatologistSixthSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.BestDermatologistSixthSection}>
      <div className={styles.container}>
        <div className={styles.doctorprofile}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
          <p dangerouslySetInnerHTML={{ __html: section.paragraphs || "" }} />
          <p dangerouslySetInnerHTML={{ __html: section.paragraphs2 || "" }} />
          <p dangerouslySetInnerHTML={{ __html: section.paragraphs3 || "" }} />
          {section.paragraph && <p><strong dangerouslySetInnerHTML={{ __html: section.paragraph }} /></p>}
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

export default BestDermatologistSixthSection;
