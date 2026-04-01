"use client";
import React from "react";
import styles from "./DermatologysixethSection.module.css";

interface Props {
  section: {
    mainHeading: string;
    paragraph1?: string;
    paragraph2?: string;
    paragraph3?: string;
    list?: string[];
    paragraph?: string;
  } | null;
}

const DermatologysixethSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  // console.log("Sixth Section Data:", section);
  return (
    <section className={styles.DermatologysixethSection}>
      <div className={styles.container}>
        <div className={styles.doctorprofile}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
          <>
            {section.paragraph && <p dangerouslySetInnerHTML={{ __html: section.paragraph }} />}
            {section.list && (
              <ul className={styles.BestDermatologistList}>
                {section.list.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            )}
          </>
        </div>
      </div>
    </section>
  );
};

export default DermatologysixethSection;
