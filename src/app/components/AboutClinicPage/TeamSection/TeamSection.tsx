'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './TeamSection.module.css';

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('doctors');

  const founderData = [
    {
      id: 1,
      name: 'DR. NITI GAUR',
      description: 'Founder & Chief Dermatologist at Citrine Clinic.',
      image: '/assets/images/about-clinic/team01.webp'
    }
  ];

  const doctors = [
    {
      id: 1,
      name: 'DR. LOREM IPSUM',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
      image: '/assets/images/about-clinic/team01.webp'
    },
    {
      id: 2,
      name: 'DR. LOREM IPSUM',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
      image: '/assets/images/about-clinic/team02.webp'
    },
    {
      id: 3,
      name: 'DR. LOREM IPSUM',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
      image: '/assets/images/about-clinic/team03.webp'
    },
    {
      id: 4,
      name: 'DR. LOREM IPSUM',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
      image: '/assets/images/about-clinic/team04.webp'
    }
  ];

  const teamData = [
    {
      id: 1,
      name: 'TEAM MEMBER 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
      image: '/assets/images/about-clinic/team01.webp'
    },
    {
      id: 2,
      name: 'TEAM MEMBER 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
      image: '/assets/images/about-clinic/team02.webp'
    },
    {
      id: 3,
      name: 'TEAM MEMBER 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
      image: '/assets/images/about-clinic/team03.webp'
    },
    {
      id: 4,
      name: 'TEAM MEMBER 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
      image: '/assets/images/about-clinic/team04.webp'
    }
  ];

  const getCurrentData = () => {
    switch(activeTab) {
      case 'founder':
        return founderData;
      case 'doctors':
        return doctors;
      case 'team':
        return teamData;
      default:
        return doctors;
    }
  };

  const currentData = getCurrentData();

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>
          A PROFESSIONAL TEAM OF<br />
          EXPERIENCED
        </h2>

        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tab} ${activeTab === 'founder' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('founder')}
          >
            FOUNDER
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'doctors' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('doctors')}
          >
            DOCTORS
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'team' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('team')}
          >
            TEAM
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