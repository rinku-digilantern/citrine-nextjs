"use client";

import React, { useState } from 'react';
import styles from './CareerOverview.module.css';

type CareerItem = {
  id: number;
  title?: string;
  description: string;
};

const careerData: Record<'education' | 'experience' | 'memberships', CareerItem[]> = {
  education: [
    { id: 1, title: "MBBS", description: "BJ Medical College & Sassoon General Hospital, Pune" },
    { id: 2, title: "MD", description: "Dermatology, Venereology & Leprosy - Dr. D Y Patil Vidyapeeth, Pune" },
    { id: 3, title: "LHMC", description: "Senior Residency at LHMC, New Delhi" },
  ],
  experience: [
    { id: 1, description: "20+ YEARS Clinical Expertise" },
    { id: 2, description: "Leader in Aesthetic Dermatology" },
    { id: 3, description: "Globally Trained Dermatology Expert" },
    { id: 4, description: "Trusted by Thousands Patients" }
  ],
  // certifications: [
  //   { id: 1, title: "Board Certified", description: "Dermatology" },
  //   { id: 2, title: "Advanced Training", description: "Cosmetic Procedures" },
  //   { id: 3, title: "Laser Certification", description: "Multiple Platforms" },
  //   { id: 4, title: "Hair Transplant", description: "Advanced Techniques" }
  // ],
  memberships: [
    { id: 1, title: "MNSI", description: "Member NAIL Society of India" },
    { id: 2, title: "CDSI", description: "Cosmetic Dermatology Society of India" },
    { id: 3, title: "IADVL", description: "Life Member Indian Association of Dermatologists, Venereologists and Leprologists" },
    { id: 4, title: "ISD", description: "International Society of Dermatology" },
    { id: 5, title: "MISD", description: "Membership of International Society of Dermatology" },
    { id: 6, title: "AAD", description: "American Academy of Dermatology." }
  ]
};

const CareerOverview = () => {
  // const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'certifications' | 'memberships'>('experience');
  const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'memberships'>('experience');
  
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
          {/* <div
            className={`${styles.tab} ${activeTab === 'certifications' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('certifications')}>
            CERTIFICATIONS & TRAININGS
          </div> */}
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
              {item.title && <h3 className={styles.cardTitle}>{item.title}</h3>}
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerOverview;
