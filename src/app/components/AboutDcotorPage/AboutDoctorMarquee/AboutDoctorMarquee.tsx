'use client'
import React from 'react';
import Image from "next/image";
import styles from './AboutDoctorMarquee.module.css';

const AboutDoctorMarquee = () => {
  const logos = [
    { name: 'CITIUPDATE', src: '/assets/images/home/marquee01.webp' },
    { name: 'Dainik Bhaskar', src: '/assets/images/home/marquee02.webp' },
    { name: 'BRIDES', src: '/assets/images/home/marquee03.webp' },
    { name: 'Hauterrfly', src: '/assets/images/home/marquee04.webp' },
    { name: 'Onlymyhealth', src: '/assets/images/home/marquee05.webp' },
    { name: 'CITIUPDATE', src: '/assets/images/home/marquee01.webp' },
    { name: 'Dainik Bhaskar', src: '/assets/images/home/marquee02.webp' }
  ];

  return (
    <section className={`${styles.AboutDoctorMarqueeSection} abcommon`}>
      <div className={styles.headingrow}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>The Visionary Behind Citrine Clinic</h2>
        <p className={styles.discription}>Dr. Niti Gaur brings over 20 years of rich experience in clinical and aesthetic dermatology, with a practice defined by precision, consistency, and patient-centric care. Her approach blends deep clinical expertise with an evolved aesthetic sensibility, allowing her to deliver results that are both effective and naturally refined. Having trained across leading international institutions, she integrates global advancements with protocols tailored to individual skin needs.<br/><br/>
Over the years, she has built a strong reputation for her ethical practice, attention to detail, and ability to create long-term treatment journeys rather than quick fixes. As a certified trainer in injectables, fillers, threads, and advanced laser technologies, she also contributes to elevating standards within the field of aesthetic medicine. Her work is further supported by continuous learning through international conferences and research.<br/><br/> At Citrine Clinic, her vision reflects in every detail—bringing together science, skill, and a thoughtful understanding of beauty to create outcomes that inspire confidence and trust.</p>
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

export default AboutDoctorMarquee;