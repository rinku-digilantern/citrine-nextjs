"use client";
import React from "react";
import styles from "./DermatologySevenSection.module.css";

interface Props {
  section: {
    mainHeading: string;
    paragraph1?: string;
    paragraph2?: string;
    list?: string[];
    lists?: string[];
    subheading?: string;
    subheadings?: string;
  } | null;
}

const DermatologySevenSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.DermatologySevenSection}>
      <div className={styles.container}>
        <div className={styles.doctorprofile}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
          {section.paragraph1 && <p dangerouslySetInnerHTML={{ __html: section.paragraph1 }} />}
          {section.subheading && <h3>{section.subheading}</h3>}
          {section.paragraph2 && <p dangerouslySetInnerHTML={{ __html: section.paragraph2 }} />}
          {section.list && (
              <ul className={styles.BestDermatologistList}>
              {section.list.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
          {section.subheadings && <h3>{section.subheadings}</h3>}
          {section.lists && (
              <ul className={styles.BestDermatologistList}>
              {section.lists.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default DermatologySevenSection;
