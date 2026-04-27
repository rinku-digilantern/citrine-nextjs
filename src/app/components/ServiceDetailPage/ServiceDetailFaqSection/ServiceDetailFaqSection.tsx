"use client";

import React, { useState } from "react";
import styles from "./ServiceDetailFaqSection.module.css";
import { wrapTablesInScrollDiv } from "@/src/lib/tableWrapper";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface Props {
  faqData?: FaqItem[];
  heading?: string;
  content?: string;
  classAdd?: string;
}

const ServiceDetailFaqSection: React.FC<Props> = ({ faqData, heading, content, classAdd }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  if (!faqData || faqData.length === 0) return null;

  return (
    <section id="faq" className={`${styles.ServiceDetailFaqSection} ${classAdd ? styles[classAdd] || classAdd : ''}`}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>{heading || "FREQUENTLY ASKED QUESTIONS"}</h2>
        {content && <div className={styles.faqContent} dangerouslySetInnerHTML={{ __html: wrapTablesInScrollDiv(content) }} />}

        <div className={styles.faqList}>
          {faqData.map((faq) => (
            <div key={faq.id} className={`${styles.faqItem} ${openId === faq.id ? styles.active : ''}`}>
              <button
                className={`${styles.faqQuestion} ${openId === faq.id ? styles.active : ""
                  }`}
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openId === faq.id}
              >
                <h3>{faq.question}</h3>
                <span className={styles.icon}>
                  {openId === faq.id ? "−" : "+"}
                </span>
              </button>
              {openId === faq.id && (
                <div className={styles.faqAnswer}>
                  <div dangerouslySetInnerHTML={{ __html: wrapTablesInScrollDiv(faq.answer) }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailFaqSection;
