import React from "react";
import styles from "./FivethSection.module.css";

const FivethSection: React.FC = () => {
  const risks = [
    {
      id: 1,
      text: "Temporary redness or mild swelling after the session",
      borderType: "left",
    },
    {
      id: 2,
      text: "Slight warmth or tingling sensation in the treated area",
      borderType: "bottom",
    },
    {
      id: 3,
      text: "Mild dryness or sensitivity for a short period",
      borderType: "top",
    },
    {
      id: 4,
      text: "Temporary darkening of pigmented spots before fading",
      borderType: "bottom",
    },
    {
      id: 5,
      text: "Rare risk of irritation if post-treatment care is not followed properly",
      borderType: "top",
    },
  ];

  return (
    <section id="risk-side-effects" className={styles.fivethSection}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>
          RISKS AND SIDE EFFECTS OF LASER TONING
        </h2>
        <p className={styles.description}>
          Although laser toning is generally safe when performed by qualified dermatologists,
          some mild side effects may occasionally occur.
        </p>

        <div className={styles.risksGrid}>
          {risks.map((risk) => (
            <div
              key={risk.id}
              className={`${styles.riskCard} ${
                risk.borderType === "left"
                  ? styles.leftBorder
                  : risk.borderType === "top"
                  ? styles.topBorder
                  : styles.bottomBorder
              }`}
            >
              <p className={styles.riskText}>{risk.text}</p>
            </div>
          ))}
        </div>

        <p className={styles.footerText}>
          These effects are usually temporary and resolve quickly when the procedure is
          performed under professional supervision.
        </p>
      </div>
    </section>
  );
};

export default FivethSection;
