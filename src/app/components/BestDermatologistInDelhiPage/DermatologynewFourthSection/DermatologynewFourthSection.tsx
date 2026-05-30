"use client";
import React from "react";
import styles from "./DermatologynewFourthSection.module.css";

interface TableRow { [key: string]: string | number | null | undefined }
interface Props {
  section: {
    mainHeading: string;
    paragraphs?: string;
    paragraphs2?: string;
    paragraphs3?: string;
    paragraphs4?: string;
    paragraphs5?: string;
    subheading?: string;
    table?: TableRow[];
    paragraph?: string;
  } | null;
}

const DermatologynewFourthSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  return (
    <section className={styles.DermatologynewFourthSection}>
      <div className={styles.container}>
        <div className={styles.doctorprofile}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
          <p dangerouslySetInnerHTML={{ __html: section.paragraphs || "" }} />
          <p dangerouslySetInnerHTML={{ __html: section.paragraphs2 || "" }} />
          <p dangerouslySetInnerHTML={{ __html: section.paragraphs3 || "" }} />
          <p dangerouslySetInnerHTML={{ __html: section.paragraphs4 || "" }} />
          <p dangerouslySetInnerHTML={{ __html: section.paragraphs5 || "" }} />
          {section.subheading && <h3>{section.subheading}</h3>}
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
                    {Object.keys(row).map((key) => {
                      const value = row[key];
                      const isHtml = typeof value === 'string' && /<[^>]+>/.test(value);
                      return (
                        <td
                          key={key}
                          {...(isHtml ? { dangerouslySetInnerHTML: { __html: String(value) } } : {})}>
                          {!isHtml ? String(value ?? '') : null}
                        </td>
                      );
                    })}
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

export default DermatologynewFourthSection;
