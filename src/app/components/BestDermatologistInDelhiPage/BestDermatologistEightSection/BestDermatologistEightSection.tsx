"use client";
import React from "react";
import styles from "./BestDermatologistEightSection.module.css";

interface TableRow {
  Treatment: string;
  BestFor: string;
  Benefits: string;
}

interface Props {
  section: {
    mainHeading: string;
    paragraph: string;
    list?: string[];
    table?: TableRow[];
  } | null;
}

const BestDermatologistEightSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.BestDermatologistEightSection}>
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
          <div className={styles.tableResponsive}>
            <table>
              <tbody>
                <tr>
                  {section.table && section.table.length > 0 &&
                    Object.keys(section.table[0]).map((key) => (
                      <td key={key}><strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</strong></td>
                    ))}
                </tr>
                {section.table && section.table.map((row: TableRow, idx: number) => (
                  <tr key={idx}>
                    <td>{row.Treatment}</td>
                    <td>{row.BestFor}</td>
                    <td>{row.Benefits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BestDermatologistEightSection;
