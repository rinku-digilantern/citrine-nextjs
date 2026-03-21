import React from "react";
import Link from 'next/link';
import styles from "./ThirteenSection.module.css";

const ThirteenSection: React.FC = () => {
  const risks = [
    {
      id: 1,
      title: "Melasma",
      text: "Patchy brown or grey pigmentation often seen on the cheeks, forehead, and upper lip.",
      borderType: "left",
    },
    {
      id: 2,
      title: "Sunspots",
      text: "Dark spots caused by chronic sun exposure.",
      borderType: "bottom",
    },
    {
      id: 3,
      title: "Post Inflam-matory Hyperpigmen-tation",
      text: "Dark marks that remain after acne, burns, or skin injuries.",
      borderType: "top",
    },
    {
      id: 4,
      title: "Freckles",
      text: "Small pigmented spots commonly triggered by sunlight.",
      borderType: "bottom",
    },
    {
      id: 5,
      title: "Age Spots",
      text: "Pigmented patches that appear with aging, especially on sun-exposed skin.",
      borderType: "top",
    },
  ];

  return (
    <section id="risk-side-effects" className={styles.ThirteenSection}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>
          Types of Pigmentation
        </h2>
        <p className={styles.description}>
          Different forms of pigmentation can appear depending on the underlying cause.
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
              }`}>
                <div className={styles.riskTitle}>{risk.title}</div>
              <p className={styles.riskText}>{risk.text}</p>
              <Link href="" className={styles.knowmore}>
                know more
              </Link>
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

export default ThirteenSection;
