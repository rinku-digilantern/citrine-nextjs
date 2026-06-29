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
  const [openIds, setOpenIds] = useState<number[]>(() => faqData?.map((faq) => faq.id) ?? []);

  const toggleFaq = (id: number) => {
    setOpenIds((currentOpenIds) =>
      currentOpenIds.includes(id)
        ? currentOpenIds.filter((faqId) => faqId !== id)
        : [...currentOpenIds, id]
    );
  };

  if (!faqData || faqData.length === 0) return null;

  return (
    <section id="faq" className={`${styles.ServiceDetailFaqSection} ${classAdd ? styles[classAdd] || classAdd : ''}`}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>{heading || "FREQUENTLY ASKED QUESTIONS"}</h2>
        {content && <div className={styles.faqContent} dangerouslySetInnerHTML={{ __html: wrapTablesInScrollDiv(content) }} />}

        <div className={styles.faqList}>
          {faqData.map((faq) => (
            <div key={faq.id} className={`${styles.faqItem} ${openIds.includes(faq.id) ? styles.active : ''}`}>
              <button
                className={`${styles.faqQuestion} ${openIds.includes(faq.id) ? styles.active : ""
                  }`}
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openIds.includes(faq.id)}
              >
                <h3>{faq.question}</h3>
                <span className={styles.icon}>
                  {openIds.includes(faq.id) ? "−" : "+"}
                </span>
              </button>
              {openIds.includes(faq.id) && (
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
