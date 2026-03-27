'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './TeamSection.module.css';

type TeamMember = {
  id: number;
  name: string;
  description: string;
  image: string;
  experience?: string;
};

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('doctors');

  const founderData: TeamMember[] = [
    {
      id: 1,
      name: 'DR. NITI GAUR',
      description: 'MBBS, MD - DERMATOLOGY, VENEREOLOGY & LEPROLOGY DERMATOLOGIST, COSMETOLOGIST, TRICHOLOGIST, TEDx SPEAKER',
      image: '/assets/images/about-clinic/doctor01.webp',
      experience: '<span>20+</span> years of experience'
    }
  ];

  const doctors: TeamMember[] = [
    {
      id: 1,
      name: 'DR. NITI GAUR',
      description: 'MBBS, MD - DERMATOLOGY, VENEREOLOGY & LEPROLOGY DERMATOLOGIST, COSMETOLOGIST, TRICHOLOGIST, TEDx SPEAKER',
      image: '/assets/images/about-clinic/doctor01.webp',
      experience: '<span>20+</span> years of experience'
    },
    {
      id: 2,
      name: 'Dr. Isheeta RVM',
      description: 'MBBS, MD - Dermatology , Venereology & Leprosy Board Certified Dermatologist Laser,Injectable & Energy- Based Device expert',
      image: '/assets/images/about-clinic/doctor02.webp',
      experience: '<span>10+</span> years of experience'
    },
    {
      id: 3,
      name: 'Dr Guneet Bedi',
      description: 'MBBS - Dermatology, Venereology & Leprosy (DVL).',
      image: '/assets/images/about-clinic/doctor03.webp',
      experience: '<span>10+</span> years of experience'
    },
    {
      id: 4,
      name: 'Dr. Nitika Yadav',
      description: 'MBBS, MD (Dermatology)',
      image: '/assets/images/about-clinic/doctor04.webp',
      experience: '<span>6+</span> years of clinical experience'
    }
  ];



  const getCurrentData = () => {
    switch (activeTab) {
      case 'founder':
        return founderData;
      case 'doctors':
      default:
        return doctors;
    }
  };

  const currentData = getCurrentData();

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>
          Expert Hands Behind <br />
          Citrine Clinic
        </h2>

        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tab} ${activeTab === 'founder' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('founder')}>
            FOUNDER
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'doctors' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('doctors')}>
            DOCTORS
          </button>
        </div>

        <div className={styles.teamGrid}>
          {currentData.map((member) => (
            <div key={member.id} className={styles.doctorCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={350}
                  className={styles.doctorImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.doctorName}>{member.name}</h3>
                {member.experience && (
                  <p
                    className={styles.doctorexperience}
                    dangerouslySetInnerHTML={{ __html: member.experience }}
                  />
                )}
                <p className={styles.doctorDescription}>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;