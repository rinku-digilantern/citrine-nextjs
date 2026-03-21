import React from 'react';
import Image from 'next/image';
import styles from './MyCommitment.module.css';

const MyCommitment = () => {
  return (
    <section className={styles.commitmentSection}>
      <div className={styles.container}>
        <div className={styles.commitmentbox}>
        <Image src="/assets/images/about-doctor/commitmentbg.webp" className={styles.bannerImage} width={1000} height={730} alt="My Commitment" />
        <h2 className={`mainHeading ${styles.mainHeading}`}>MY COMMITMENT</h2>
        
        <p className={styles.introText}>
          You're probably here because you want to know more about me. But more than achievements, what truly matters to me is commitment — to growth, to impact, and to showing up every single day with purpose.
        </p>

        <p className={styles.subText}>
          I believe real change doesn't happen by chance. It happens through consistent action, honest effort, and the courage to move forward even when things feel uncertain.
        </p>

        <div className={styles.commitmentPoints}>
          <h3 className={styles.pointsHeading}>My commitment is simple:</h3>
          <ul className={styles.pointsList}>
            <li>To help you grow.</li>
            <li>To help you take action.</li>
            <li>To help you become the strongest version of yourself.</li>
            <li>You don't need a perfect plan. You just need the decision to not stay where you are.</li>
            <li>If you're ready to move forward, I'm committed to walking that journey with you.</li>
          </ul>
        </div>

        <p className={styles.closingText}>With dedication,</p>
        
        <div className={styles.signatureSection}>
          <p className={styles.name}>NITI GAUR</p>
          <Image 
            src="/assets/images/about-doctor/signature.webp" 
            alt="Dr. Niti Gaur Signature" 
            width={729} 
            height={202}
            className={styles.signature}
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default MyCommitment;
