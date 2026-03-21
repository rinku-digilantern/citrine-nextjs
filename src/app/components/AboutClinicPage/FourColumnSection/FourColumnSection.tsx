import React from 'react';
import styles from './FourColumnSection.module.css';

const FourColumnSection = () => {
  const features = [
    {
      id: 1,
      title: 'MODERN AND WELL-EQUIPPED FACILITY',
      description: 'Citrine Clinic features advanced technology and equipment for diagnostics and treatments.',
      variant: 'gold'
    },
    {
      id: 2,
      title: 'PRIVATE CONSULTATION ROOM',
      description: 'Ensures patient privacy during consultations.',
      variant: 'dark'
    },
    {
      id: 3,
      title: 'WELCOMING ENVIRONMENT',
      description: 'The clinic provides a friendly and comfortable atmosphere for patients.',
      variant: 'gold'
    },
    {
      id: 4,
      title: 'EXPERIENCED STAFF',
      description: 'A dedicated and skilled team ensures the best possible patient care.',
      variant: 'dark'
    }
  ];

  return (
    <section className={styles.fourColumnSection}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>
          LOREM IPSUM DOLOR CONSEC<br />
          ADIPISCING ELIT.
        </h2>

        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className={`${styles.featureCard} ${styles[feature.variant]}`}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourColumnSection;