import React from "react";
import styles from "./FourthSection.module.css";

const FourthSection: React.FC = () => {
  const benefits = [
    {
      id: 1,
      text: "Helps reduce pigmentation and dark spots",
    },
    {
      id: 2,
      text: "Improves uneven skin tone and complexion",
    },
    {
      id: 3,
      text: "Stimulates collagen production for smoother skin",
    },
    {
      id: 4,
      text: "Enhances skin brightness and radiance",
    },
    {
      id: 5,
      text: "Minimally invasive with little to no downtime",
    },
    {
      id: 6,
      text: "Suitable for sensitive and darker skin tones",
    },
    {
      id: 7,
      text: "Gradual and natural-looking skin improvement",
    },
    {
      id: 8,
      text: "Can be combined with other skin treatments for enhanced results",
    },
  ];

  return (
    <section id="benefits" className={styles.fourthSection}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>
          WHAT ARE THE BENEFITS OF LASER TONING
        </h2>
        <p className={styles.description}>
          Laser toning offers several cosmetic and dermatological benefits for
          improving skin quality.
        </p>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit) => (
            <div key={benefit.id} className={styles.benefitCard}>
              <div className={styles.cardTopLine}></div>
              <p className={styles.benefitText}>{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
