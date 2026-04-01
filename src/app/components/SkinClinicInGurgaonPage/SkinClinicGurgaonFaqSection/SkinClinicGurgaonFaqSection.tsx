"use client";
import React, { useState } from "react";
import styles from "./SkinClinicGurgaonFaqSection.module.css";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface Props {
  section: { mainHeading: string; faqData: FaqItem[] } | null;
}

const SkinClinicGurgaonFaqSection: React.FC<Props> = ({ section }) => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  if (!section) return null;

  return (
    <section className={styles.SkinClinicGurgaonFaqSection}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>{section.mainHeading}</h2>
        <div className={styles.faqList}>
          {section.faqData.map((faq) => (
            <div key={faq.id} className={`${styles.faqItem} ${openId === faq.id ? styles.active : ''}`}>
              <button
                className={`${styles.faqQuestion} ${
                  openId === faq.id ? styles.active : ""
                }`}
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openId === faq.id}>
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {openId === faq.id ? "−" : "+"}
                </span>
              </button>
              {openId === faq.id && (
                <div className={styles.faqAnswer}>
                   <p dangerouslySetInnerHTML={{ __html: faq.answer }}/>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkinClinicGurgaonFaqSection;