'use client'
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import styles from './MarqueeSection.module.css';

const MarqueeSection = () => {
  const logos = [
    { name: 'CITIUPDATE', src: '/assets/images/home/marquee01.webp' },
    { name: 'Dainik Bhaskar', src: '/assets/images/home/marquee02.webp' },
    { name: 'BRIDES', src: '/assets/images/home/marquee03.webp' },
    { name: 'Hauterrfly', src: '/assets/images/home/marquee04.webp' },
    { name: 'Onlymyhealth', src: '/assets/images/home/marquee05.webp' },
    { name: 'Her Zindagi', src: '/assets/images/home/marquees06.webp' },
    { name: 'Vogue Arabia', src: '/assets/images/home/marquees07.webp' },
    { name: 'mansworld', src: '/assets/images/home/marquees08.webp' },
    { name: 'TimesNow', src: '/assets/images/home/marquees09.webp' }
  ];

  return (
    <section className={`${styles.marqueeSection} common`}>
      <div className={styles.googleReview}>
        <div className={styles.googleLogo}>
          <Image src="/assets/images/home/google.webp" width={240} height={81} alt="Google Logo" />
        </div>
        <div className={styles.stars}>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        <Link href="https://share.google/MN5DbvOxltDl0JdDM" target="_blank" className={styles.reviewText}>1,243 Google reviews</Link>
      </div>

      <div className={styles.heading}>
        <h2 className={`subheading ${styles.subheading}`}>
          <span className={styles.highlight}>Two Decades</span> in Dermatology & Aesthetics.<br />
          We've got skin in the game!
        </h2>
      </div>

      <div
        className={styles.marqueeContainer}>
        <div
          className={styles.marquee}
          tabIndex={-1}
          onMouseEnter={e => {
            e.currentTarget.style.animationPlayState = 'paused';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.animationPlayState = 'running';
          }}
          onMouseDown={e => {
            e.currentTarget.style.animationPlayState = 'paused';
          }}
          onMouseUp={e => {
            e.currentTarget.style.animationPlayState = 'running';
          }}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className={styles.logoItem}>
              <Image src={logo.src} width={120} height={60} alt={logo.name} />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className={styles.logoItem}>
              <Image src={logo.src} width={120} height={60} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;