"use client";
import React, { useState } from "react";
import styles from "./BestDermatologistFaqSection.module.css";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface Props {
  section: { mainHeading: string; faqData: FaqItem[] } | null;
}

const BestDermatologistFaqSection: React.FC<Props> = ({ section }) => {
  const [openIds, setOpenIds] = useState<number[]>(() => section?.faqData.map((faq) => faq.id) ?? []);

  const toggleFaq = (id: number) => {
    setOpenIds((currentOpenIds) =>
      currentOpenIds.includes(id)
        ? currentOpenIds.filter((faqId) => faqId !== id)
        : [...currentOpenIds, id]
    );
  };

  if (!section) return null;

  return (
    <section className={styles.BestDermatologistFaqSection}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
        <div className={styles.faqList}>
          {section.faqData.map((faq) => (
            <div key={faq.id} className={`${styles.faqItem} ${openIds.includes(faq.id) ? styles.active : ''}`}>
              <button
                className={`${styles.faqQuestion} ${openIds.includes(faq.id) ? styles.active : ""
                  }`}
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openIds.includes(faq.id)}>
                <h3>{faq.question}</h3>
                <span className={styles.icon}>
                  {openIds.includes(faq.id) ? "−" : "+"}
                </span>
              </button>
              {openIds.includes(faq.id) && (
                <div className={styles.faqAnswer}>
                  <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDermatologistFaqSection;