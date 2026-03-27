"use client";
import React from "react";
import styles from "./DermatologyThirdSection.module.css";

interface Props {
  section: {
    mainHeading: string;
    subHeading: string;
    subHeadings: string;
    subHeadingss: string;
    paragraph1?: string;
    paragraph2?: string;
    paragraph3?: string;
    subheading?: string;
    subhead?: string;
    descing?: string;
    desc?: string;
    list?: string[];
    lists?: string[];
    paragraph?: string;
  } | null;
}

const DermatologyThirdSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  console.log("Third Section Data:", section);
  return (
    <section className={styles.DermatologyThirdSection}>
      <div className={styles.container}>
        <div className={styles.doctorprofile}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
          {/* If FAQ data present, render FAQ */}
            <>
              {section.paragraph1 && <p dangerouslySetInnerHTML={{ __html: section.paragraph1 }} />}
              <h3>{section.subHeading}</h3>
              {section.list && (
                <ul className={styles.BestDermatologistList}>
                   {section.list.map((item, idx) => (
                     <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                </ul>
              )}
              <h3>{section.subHeadings}</h3>
              {section.lists && (
                <ul className={styles.BestDermatologistList}>
                   {section.lists.map((item, idx) => (
                     <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                </ul>
              )}
              <h3>{section.subHeadingss}</h3>
              {section.paragraph3 && <p dangerouslySetInnerHTML={{ __html: section.paragraph3 }} />}
              <h3>{section.subheading}</h3>
              {section.desc && <p dangerouslySetInnerHTML={{ __html: section.desc }} />}
              <h3>{section.subhead}</h3>
              {section.descing && <p dangerouslySetInnerHTML={{ __html: section.descing }} />}
            </>
        </div>
      </div>
    </section>
  );
};

export default DermatologyThirdSection;
