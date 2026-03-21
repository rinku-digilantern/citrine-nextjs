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
          <h2 className={`mainHeading ${styles.mainHeading}`}>
            LOREM IPSUM DOLOR SIT AMET BULUM.
          </h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit inte ger ac risus quis lectus sollicitudin varius ac eras sed ductor pellen tesque lectus at aliquet donec ac odio vulvinar temp tellus in elementum dolor. Aliquam odio magna aliquam ut velit at sollicitudin mattis neque duis quis semes euismod hendreat duis a volutpat dolor.
          </p>
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
