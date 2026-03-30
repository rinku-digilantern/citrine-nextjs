'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import styles from './TeamSection.module.css';
import teamData from './teamData.json';

type TeamMember = {
  id: number;
  name: string;
  description: string;
  image: string;
  experience?: React.ReactNode;
  link?: string;
};
// Load static data from JSON and convert experience into JSX
type RawMember = {
  id: number;
  name: string;
  description: string;
  image: string;
  experienceNumber?: string;
  experienceText?: string;
  link?: string;
};

const founderData: TeamMember[] = (teamData as any).founder.map((d: RawMember) => ({
  id: d.id,
  name: d.name,
  description: d.description,
  image: d.image,
  experience: d.experienceNumber ? (<><span>{d.experienceNumber}</span> {d.experienceText}</>) : undefined,
  link: d.link
}));

const doctors: TeamMember[] = (teamData as any).doctors.map((d: RawMember) => ({
  id: d.id,
  name: d.name,
  description: d.description,
  image: d.image,
  experience: d.experienceNumber ? (<><span>{d.experienceNumber}</span> {d.experienceText}</>) : undefined,
  link: d.link
}));

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('founder');

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

        {activeTab === 'founder' ? (
          <div className={styles.founderSection}>
            {founderData.map((member) => (
              <div key={member.id} className={styles.founderCard}>
                <div className={styles.founderImageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={471}
                    height={500}
                    className={styles.founderImage}/>
                </div>
                <div className={styles.founderContent}>
                  <h2 className={styles.founderName}>{member.name}</h2>
                  <p className={styles.founderDescription}>{member.description}</p>
                  <p>Dr. Niti Gaur brings over 20 years of rich experience in clinical and aesthetic dermatology, with a practice defined by precision, consistency, and patient-centric care. Her approach blends deep clinical expertise with an evolved aesthetic sensibility, allowing her to deliver results that are both effective and naturally refined. Having trained across leading international institutions, she integrates global advancements with protocols tailored to individual skin needs.</p>
                  {member.link && (
                    <Link href={member.link} className={styles.learnMoreLink}>Read More</Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.teamGrid}>
            {currentData.map((member) => (
              <div key={member.id} className={styles.doctorCard}>
                <div className={styles.imageWrapper}>
                  {member.link ? (
                    <Link href={member.link}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={300}
                        height={350}
                        className={styles.doctorImage}
                      />
                    </Link>
                  ) : (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={350}
                      className={styles.doctorImage}
                    />
                  )}
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.doctorName}>{member.name}</div>
                  {member.experience && (
                    <p className={styles.doctorexperience}>{member.experience}</p>
                  )}
                  <p className={styles.doctorDescription}>{member.description}</p>
                  {member.link && (
                    <Link href={member.link} className={styles.readmore}>Read More</Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;