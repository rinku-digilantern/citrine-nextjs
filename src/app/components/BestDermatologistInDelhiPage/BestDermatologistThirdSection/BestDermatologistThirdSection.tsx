"use client";
import React from "react";
import styles from "./BestDermatologistThirdSection.module.css";

interface Props {
  section: {
    mainHeading: string;
    paragraph1?: string;
    paragraph2?: string;
    paragraph3?: string;
    list?: string[];
    faqData?: { id: number; question: string; answer: string }[];
    table?: { Treatment: string; BestFor: string; Benefits: string }[];
    paragraph?: string;
  } | null;
}

const BestDermatologistThirdSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;
  // console.log("Third Section Data:", section);
  return (
    <section className={styles.BestDermatologistThirdSection}>
      <div className={styles.container}>
        <div className={styles.doctorprofile}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
          {/* If FAQ data present, render FAQ */}
          {section.faqData && section.faqData.length > 0 ? (
            <div className={styles.faqList}>
              {section.faqData.map((faq) => (
                <div key={faq.id} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <div className={styles.faqAnswer}><p dangerouslySetInnerHTML={{ __html: faq.answer }} /></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {section.paragraph1 && <p dangerouslySetInnerHTML={{ __html: section.paragraph1 }} />}
              {section.paragraph2 && <p><strong dangerouslySetInnerHTML={{ __html: section.paragraph2 }} /></p>}
              {section.list && (
                <ul className={styles.BestDermatologistList}>
                  {section.list.map((item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              )}
              {section.paragraph3 && <p dangerouslySetInnerHTML={{ __html: section.paragraph3 }} />}
            </>
          )}

          {/* Table and paragraph (from JSON) */}
          {section.table && section.table.length > 0 && (
            <div className={styles.tableResponsive}>
              <table>
                <tbody>
                  <tr>
                    {Object.keys(section.table[0]).map((key) => (
                      <td key={key}><strong>{key}</strong></td>
                    ))}
                  </tr>
                  {section.table.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.Treatment}</td>
                      <td>{row.BestFor}</td>
                      <td>{row.Benefits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {section.paragraph && <p dangerouslySetInnerHTML={{ __html: section.paragraph }} />}
        </div>
      </div>
    </section>
  );
};

export default BestDermatologistThirdSection;
