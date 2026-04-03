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
  const [openId, setOpenId] = useState<number | null>(1);
  const data = faqData && faqData.length > 0 ? faqData : defaultFaqs;

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <HeadingTag className={`mainHeading ${styles.mainHeading}`}>FREQUENTLY ASKED QUESTIONS</HeadingTag>
        <div className={styles.faqList}>
          {data.map((faq) => (
            <div key={faq.id} className={`${styles.faqItem} ${openId === faq.id ? styles.active : ''}`}>
              <button
                className={`${styles.faqQuestion} ${
                  openId === faq.id ? styles.active : ""
                }`}
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openId === faq.id}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {openId === faq.id ? "−" : "+"}
                </span>
              </button>
              {openId === faq.id && (
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
