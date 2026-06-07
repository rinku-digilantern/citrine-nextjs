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
    table?: Array<Record<string, string | number | null | undefined>>;
  } | null;
}

const DermatologysixethSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  // console.log("Sixth Section Data:", section);

  const tableColumns = section.table?.reduce<string[]>((columns, row) => {
    Object.keys(row).forEach((key) => {
      if (!columns.includes(key)) {
        columns.push(key);
      }
    });
    return columns;
  }, []) ?? [];

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
            {section.table && section.table.length > 0 && tableColumns.length > 0 && (
              <div className={styles.tableResponsive}>
                <table>
                  <thead>
                    <tr>
                      {tableColumns.map((column) => (
                        <th key={column}>{column.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {tableColumns.map((column) => {
                          const value = row[column];
                          const html = typeof value === "string" && /<[^>]+>/.test(value);

                          return (
                            <td
                              key={column}
                              {...(html ? { dangerouslySetInnerHTML: { __html: String(value) } } : {})}
                            >
                              {!html ? String(value ?? "") : null}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        </div>
      </div>
    </section>
  );
};

export default DermatologysixethSection;
