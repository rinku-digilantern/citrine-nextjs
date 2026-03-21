import React from "react";
import styles from "./NinethSection.module.css";

const NinethSection: React.FC = () => {
  const conditions = [
    {
      id: 1,
      text: "Temporary redness or mild swelling after the session",
      borderType: "top",
    },
    {
      id: 2,
      text: "Sunspots and age spots",
      borderType: "bottom",
    },
    {
      id: 3,
      text: "Uneven skin tone and dull complexion",
      borderType: "top",
    },
    {
      id: 4,
      text: "Post-acne pigmentation and marks",
      borderType: "bottom",
    },
    {
      id: 5,
      text: "Freckles and superficial pigmentation",
      borderType: "top",
    },
    {
      id: 6,
      text: "Mild skin texture irregularities",
      borderType: "bottom",
    },
  ];

  return (
    <section id="skincondition" className={styles.ninethSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
            <h2 className={`mainHeading ${styles.mainHeading}`}>
              SKIN CONDITIONS THAT CAN BE TREATED WITH LASER TONING
            </h2>
            <p className={styles.description}>
              Laser toning is commonly used to treat a range of cosmetic skin concerns.
            </p>
            <p className={styles.description}>
              Dermatologists at Citrine Clinic often combine laser toning with other skin treatments to enhance results for certain conditions.
            </p>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.conditionsGrid}>
              {conditions.map((condition) => (
                <div
                  key={condition.id}
                  className={`${styles.conditionCard} ${
                    condition.borderType === "top"
                      ? styles.topBorder
                      : styles.bottomBorder
                  }`}
                >
                  <p className={styles.conditionText}>{condition.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NinethSection;
