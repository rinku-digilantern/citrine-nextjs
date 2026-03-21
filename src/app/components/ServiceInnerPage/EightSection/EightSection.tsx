import React from "react";
import styles from "./EightSection.module.css";

const EightSection: React.FC = () => {
  const timelineData = [
    {
      phase: "Immediately after treatment",
      expectation: "Mild redness may appear",
    },
    {
      phase: "Within few hours to one day",
      expectation: "The skin usually settles and the redness subsides",
    },
    {
      phase: "After a few days",
      expectation: "Skin looks natural like before",
    },
  ];

  const recoveryTips = [
    "Daily sunscreen application is essential to protect treated skin.",
    "Avoid excessive sun exposure for a few days after the procedure.",
    "Use gentle skincare products recommended by the dermatologist.",
    "Keep the skin hydrated and moisturized to support healing.",
    "Avoid harsh exfoliation, active ingredients, or chemical products temporarily.",
    "Following post-treatment instructions carefully helps improve results and maintain healthy skin.",
  ];

  return (
    <section id="timeline" className={styles.eightSection}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>
          RECOVERY TIMELINE AND TIPS
        </h2>
        <p className={styles.subtitle}>
          Recovery from laser toning is usually quick, but proper care helps
          achieve better results.
        </p>

        <table className={styles.timelineTable}>
          <thead>
            <tr className={styles.headerRow}>
              <th className={styles.tableHeader}>Phase</th>
              <th className={styles.tableHeader}>What to Expect</th>
            </tr>
          </thead>
          <tbody>
            {timelineData.map((item, index) => (
              <tr key={index} className={styles.tableRow}>
                <td className={styles.tableCell}>{item.phase}</td>
                <td className={styles.tableCell}>{item.expectation}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.tipsSection}>
          <h3 className={styles.tipsHeading}>Important recovery tips to follow:</h3>
          <ul className={styles.tipsList}>
            {recoveryTips.map((tip, index) => (
              <li key={index} className={styles.tipItem}>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EightSection;
