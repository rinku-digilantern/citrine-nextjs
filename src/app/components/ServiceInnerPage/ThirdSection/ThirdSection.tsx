import React from "react";
import Link from 'next/link';
import styles from "./ThirdSection.module.css";

const ThirdSection: React.FC = () => {
  return (
    <section id="cost" className={styles.thirdSection}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>Cost of Laser Toning in Gurgaon</h2>
          <p className={styles.description}>
            The cost of laser toning in Gurgaon typically ranges between{" "}
            <span className={styles.priceWrapper}>
              <span className={styles.priceHighlight}>₹3,000</span> to{" "}
              <span className={styles.priceHighlight}>₹10,000</span>
            </span>{" "}
            per session, depending on several clinical and individual factors.
          </p>

          <h3 className={styles.subHeading}>
            Factors that may influence the cost include:
          </h3>

          <div className={styles.factorsGrid}>
            <ul className={styles.factorsList}>
              <li>Type and depth of pigmentation being treated</li>
              <li>Size of the treatment area</li>
              <li>Number of sessions required for visible results</li>
              <li>Technology and laser equipment used</li>
            </ul>
            <ul className={styles.factorsList}>
              <li>Experience and expertise of the dermatologist</li>
              <li>Combination with other skin treatments or procedures</li>
              <li>Clinic infrastructure and personalized care plans</li>
            </ul>
          </div>

          <p className={styles.footerText}>
            During consultation at Citrine Clinic in Gurgaon, dermatologists evaluate the skin condition
            before recommending a suitable treatment plan and cost estimate.
          </p>
          <div className={styles.buttonrow}>
              <Link href="/" aria-label="Book an Appointment" className={styles.bookbtn}>Book an Appointment</Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
