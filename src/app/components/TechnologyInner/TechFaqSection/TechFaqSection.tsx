"use client";

import React, { useState } from "react";
import styles from "./TechFaqSection.module.css";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
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
  {
    id: 3,
    question: "Does laser toning make the skin thinner?",
    answer: "No, laser toning does not thin the skin. In fact, it can stimulate collagen production, which may improve skin strength and texture over time.",
  },
  {
    id: 4,
    question: "Can laser toning help with dull skin?",
    answer: "Yes, laser toning helps remove excess pigmentation and improve skin brightness. This can make the complexion appear clearer and more radiant.",
  },
  {
    id: 5,
    question: "Is there any special preparation required before laser toning?",
    answer: "Patients are usually advised to avoid tanning and harsh skincare treatments before the procedure. A dermatologist consultation helps provide specific pre-treatment instructions.",
  },
  {
    id: 6,
    question: "Can laser toning be done on areas other than the face?",
    answer: "Yes, laser toning can also be performed on the neck, hands, back, and other areas affected by pigmentation or uneven skin tone.",
  },
  {
    id: 7,
    question: "Can laser toning be combined with other treatments?",
    answer: "Yes, dermatologists may combine laser toning with treatments such as chemical peels or medical facials to enhance results.",
  },
  {
    id: 8,
    question: "Will the results of laser toning look natural?",
    answer: " Yes, laser toning works gradually to improve skin clarity, which allows results to appear natural rather than artificial.",
  },
  {
    id: 9,
    question: "Can laser toning help with enlarged pores?",
    answer: "While the primary goal is pigmentation reduction, improved collagen stimulation may help slightly refine the appearance of pores.",
  },
  {
    id: 10,
    question: "Is consultation necessary before laser toning?",
    answer: "Yes, a consultation helps evaluate the skin condition and determine whether laser toning is the right treatment option. Dermatologists at Citrine Clinic assess the skin carefully before recommending the procedure.",
  },
];

const TechFaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className={styles.TechFaqSection}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>FREQUENTLY ASKED QUESTIONS</h2>
        <div className={styles.faqList}>
          {faqData.map((faq) => (
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
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechFaqSection;
