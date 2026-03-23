import React from 'react';
import Image from 'next/image';
import styles from './RedefiningSection.module.css';

const RedefiningSection = () => {
  return (
    <section className={styles.redefiningSection}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>
          REDEFINING THE LEGACY OF<br />
          DERMATOLOGY & AESTHETIC<br />
          EXCELLENCE
        </h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam nec tortor vitae nulla vulputate auctor nam dapibus
          elit id tortor vulputate finibus. Integer quis vestibulum velit. Quisque efficitur tincidunt dui. Curabitur eleifend orci in
          fringilla bibendum, ut molestie diam gravida. Etiam egestas egestas enim at interdum. Aliquam accumsan nibh eiem
          entum sem bendum venenatis. Aliquam urna est tincidunt vel diam.
        </p>
        <div className={styles.achievementsGrid}>
          <div className={`${styles.achievementCard} ${styles.cardBeige}`}>
            <h3 className={styles.cardTitle}>
              CELEBRATING <span className={styles.highlight}>10 YEARS OF</span><br />
              <span className={styles.highlight}>CITRINE GROUP</span> - AS SEEN<br />
              ON NEWS NATION
            </h3>
            <div className={styles.cardLogo}>
              <Image
                src="/assets/images/about-clinic/nmlogo.webp"
                alt="National Media Logo"
                width={200}
                height={65}
                className={styles.logoImage}/>
            </div>
          </div>

          <div className={`${styles.achievementCard} ${styles.cardPink}`}>
            <h3 className={styles.cardTitle}>
              PROUD RECIPIENT OF<br />
              <span className={styles.highlight}>THE DR. A.P.J. ABDUL<br />
              KALAM</span> INSPIRATION<br />
              AWARD 2025
            </h3>
            <div className={styles.cardLogo}>
              <Image
                src="/assets/images/about-clinic/apjabdulkalammedal.webp"
                alt="Dr. APJ Abdul Kalam Award"
                width={150}
                height={150}
                className={styles.awardImage}/>
            </div>
          </div>

          <div className={`${styles.achievementCard} ${styles.cardGreen}`}>
            <h3 className={styles.cardTitle}>
              REDEFINING CARE WITH<br />
              <span className={styles.highlight}>ADVANCED MEDICAL<br />
              TECHNOLOGY</span>
            </h3>
            <div className={styles.cardLogo}>
              <Image
                src="/assets/images/about-clinic/medicaltechnology.webp"
                alt="Technology"
                width={150}
                height={150}
                className={styles.awardImage}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedefiningSection;