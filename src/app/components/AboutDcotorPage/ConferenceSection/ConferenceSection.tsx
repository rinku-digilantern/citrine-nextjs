"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ConferenceSection.module.css';

const ConferenceSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={styles.conferenceSection}>
      <div className={styles.container}>
        {/* Left Side - Text Content */}
        <div className={styles.leftContent}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>A Philosophy Rooted in Purposeful Care</h2>
          <p className={styles.description}>At Citrine Clinic, Dr. Niti Gaur’s philosophy goes beyond treating skin—it is about understanding the individual behind it. She believes in educating patients about their skin and hair concerns, empowering them to make informed, confident decisions about their treatments. Her approach is deeply patient-centric, where listening, clarity, and trust form the foundation of every consultation.<br/><br/> Rather than addressing symptoms in isolation, she focuses on holistic, well-structured treatment journeys that are safe, effective, and aligned with long-term results. By integrating globally advanced technologies with research-backed skincare, she ensures outcomes that are both refined and reliable. For Dr. Gaur, aesthetic dermatology is not just about visible change—it is about creating a meaningful, reassuring experience where every patient feels heard, understood, and cared for.</p>
        </div>

        {/* Right Side - Video */}
        <div className={styles.rightContent}>
          <div className={styles.videoContainer}>
            <Image
              src="/assets/images/about-doctor/conferencebgs.webp"
              alt="Dr. Niti Gaur at Conference"
              width={800}
              height={450}
              className={styles.videoImage}
            />
            <button 
              className={styles.playButton}
              onClick={() => setIsPlaying(true)}
              aria-label="Play video"
            >
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.9"/>
                <path d="M24 18L42 30L24 42V18Z" fill="#333"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection;
