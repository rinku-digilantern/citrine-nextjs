"use client";

import React, { useState } from "react";
import styles from "./FaqSection.module.css";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqData?: FaqItem[];
  headingtag?: string;
}

const defaultFaqs: FaqItem[] = [
  {
    id: 1,
    question: "How many laser toning sessions are usually required?",
    answer: "Most individuals require multiple sessions for visible improvement. The exact number depends on the type and severity of pigmentation being treated.",
  },
  {
    id: 2,
    question: "Is laser toning safe for Indian skin tones?",
    answer: "Yes, modern laser technologies are designed to be safe for darker skin tones when used correctly. Dermatologists adjust the laser settings based on the patient’s skin type.",
  },
];

const FaqSection: React.FC<FaqSectionProps> = ({ faqData, headingtag }) => {
  const HeadingTag = (headingtag || 'h2') as keyof React.JSX.IntrinsicElements;
  const data = faqData && faqData.length > 0 ? faqData : defaultFaqs;
  const [openIds, setOpenIds] = useState<number[]>(() => data.map((faq) => faq.id));

  const toggleFaq = (id: number) => {
    setOpenIds((currentOpenIds) =>
      currentOpenIds.includes(id)
        ? currentOpenIds.filter((faqId) => faqId !== id)
        : [...currentOpenIds, id]
    );
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <HeadingTag className={`mainHeading ${styles.mainHeading}`}>FREQUENTLY ASKED QUESTIONS</HeadingTag>
        <div className={styles.faqList}>
          {data.map((faq) => (
            <div key={faq.id} className={`${styles.faqItem} ${openIds.includes(faq.id) ? styles.active : ''}`}>
              <button
                className={`${styles.faqQuestion} ${openIds.includes(faq.id) ? styles.active : ""
                  }`}
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openIds.includes(faq.id)}
              >
                <h3 dangerouslySetInnerHTML={{ __html: faq.question.replace(/^\d+\.\s*/, '') }} />
                <span className={styles.icon}>
                  {openIds.includes(faq.id) ? "−" : "+"}
                </span>
              </button>
              {openIds.includes(faq.id) && (
                <div className={styles.faqAnswer}>
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
