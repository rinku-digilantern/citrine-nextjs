import React from 'react';
import styles from './MarqueeCenter.module.css';

const MarqueeCenter = () => {
  const text = "US-FDA Approved  -  International Standards  -  Gold-Standard Devices";
  
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        <span className={styles.marqueeText}>{text}</span>
        <span className={styles.marqueeText}>{text}</span>
        <span className={styles.marqueeText}>{text}</span>
        <span className={styles.marqueeText}>{text}</span>
      </div>
    </div>
  );
};

export default MarqueeCenter;