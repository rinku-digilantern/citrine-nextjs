import React from 'react';
import styles from './Philosophy.module.css';
import { title } from 'process';
import Image from "next/image";

const Philosophy = () => {
  const values = [
    {
      title: 'PATIENT FIRST',
      alttag: 'PATIENT FIRST',
      description: 'Putting patient, experience & safety at the heart of everything we do.',
      icon: '/assets/images/home/philosophy01.webp',
      hasBorder: true
    },
    {
      title: 'TEAM WORK',
      alttag: 'TEAM WORK',
      description: 'Encouraging a spirit of support, respect and team work.',
      icon: '/assets/images/home/philosophy02.webp',
      hasBorder: false
    },
    {
      title: 'INTEGRITY',
      alttag: 'INTEGRITY',
      description: 'Adhering to uncompromising standards of ethics, professionalism and transparency.',
      icon: '/assets/images/home/philosophy03.webp',
      hasBorder: true
    },
    {
      title: 'INNOVATION',
      alttag: 'INNOVATION',
      description: 'Extending world-class care by providing highest-standard of quality, service and safety.',
      icon: '/assets/images/home/philosophy04.webp',
      hasBorder: false
    }
  ];

  return (
    <section className={styles.philosophySection}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>The <span className={styles.highlight}>Citrine</span> Ethos</h2>
        <div className={styles.cardsGrid}>
          {values.map((value, index) => (
            <div 
              key={index} 
              className={styles.card}>
              <div className={styles.cardContent}>
              <div className={`subheading ${styles.subheading}`}>{value.title}</div>
              <p className={styles.cardDescription}>{value.description}</p>
              </div>
              <div className={styles.cardIcon}>
                <Image src={value.icon} alt={value.alttag} width={68} height={68} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
