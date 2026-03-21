"use client";

import React, { useState } from 'react';
import styles from './CareerOverview.module.css';

const careerData = {
  education: [
    { id: 1, title: "MBBS", description: "Medical Degree" },
    { id: 2, title: "MD - Dermatology", description: "Post Graduate" },
    { id: 3, title: "Fellowship", description: "Advanced Training" },
    { id: 4, title: "Certifications", description: "Various Specializations" }
  ],
  experience: [
    { id: 1, title: "20+ YEARS", description: "CLINICAL EXPERIENCE" },
    { id: 2, title: "FOUNDER", description: "MEDICAL DIRECTOR - CITRINE CLINIC" },
    { id: 3, title: "SENIOR CONSULTANT", description: "KAYA SKIN CLINIC (GURGAON)" },
    { id: 4, title: "SENIOR CONSULTANT", description: "JAIN HOSPITAL & KIRANDERMASURGE" }
  ],
  certifications: [
    { id: 1, title: "Board Certified", description: "Dermatology" },
    { id: 2, title: "Advanced Training", description: "Cosmetic Procedures" },
    { id: 3, title: "Laser Certification", description: "Multiple Platforms" },
    { id: 4, title: "Hair Transplant", description: "Advanced Techniques" }
  ],
  memberships: [
    { id: 1, title: "IADVL", description: "Indian Association of Dermatologists" },
    { id: 2, title: "IMA", description: "Indian Medical Association" },
    { id: 3, title: "ISHRS", description: "International Society of Hair Restoration" },
    { id: 4, title: "AAD", description: "American Academy of Dermatology" }
  ]
};

const CareerOverview = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'certifications' | 'memberships'>('experience');

  return (
    <section className={styles.careerSection}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>CAREER OVERVIEW</h2>
        
        {/* Tabs */}
        <div className={styles.tabsContainer}>
          <div
            className={`${styles.tab} ${activeTab === 'education' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('education')}>
            EDUCATION
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'experience' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('experience')}>
            EXPERIENCE
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'certifications' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('certifications')}>
            CERTIFICATIONS & TRAININGS
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'memberships' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('memberships')}>
            MEMBERSHIPS
          </div>
        </div>

        {/* Cards */}
        <div className={styles.cardsGrid}>
          {careerData[activeTab].map((item) => (
            <div key={item.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerOverview;
