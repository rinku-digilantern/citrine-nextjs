"use client";
import React from "react";
import styles from "./BestDermatologistFourthSection.module.css";

interface TableRow { Treatment: string; BestFor: string; Benefits: string }
interface Props {
  section: {
    mainHeading: string;
    paragraphs?: string;
    paragraphs2?: string;
    paragraphs3?: string;
    paragraphs4?: string;
    table?: TableRow[];
    paragraph?: string;
  } | null;
}

const BestDermatologistFourthSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.BestDermatologistFourthSection}>
      <div className={styles.container}>
        <div className={styles.doctorprofile}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
          <p dangerouslySetInnerHTML={{ __html: section.paragraphs || "" }} />
          <p dangerouslySetInnerHTML={{ __html: section.paragraphs2 || "" }} />
          <p dangerouslySetInnerHTML={{ __html: section.paragraphs3 || "" }} />
          <p dangerouslySetInnerHTML={{ __html: section.paragraphs4 || "" }} />
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
          {section.paragraph && <p dangerouslySetInnerHTML={{ __html: section.paragraph }} />}
        </div>
      </div>
    </section>
  );
}

export default BestDermatologistFourthSection;
