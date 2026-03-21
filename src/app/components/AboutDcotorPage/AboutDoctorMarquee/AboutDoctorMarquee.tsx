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
        <h2 className={`mainHeading ${styles.mainHeading}`}>
          Lorem ipsum dolor sit<br/> amet bulum
        </h2>
        <p className={styles.discription}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer ac risus quis lectus sollicitudin varius ac eras sed auctor pellentesque lectus at aliquet. Donec ac odio pulvinar tempor tellus in elementum dolor. Aliquam odio magna aliquam ut velit at, sollicitudin mattis neque. Duis quis sem eget purus imperdiet fringilla sed ut felis in risus rhoncus pellentesque magna a consectetur magna. Maecenas interdum blandit porttitor. Mauris mattis dignissim sed porta amet porttitor lectus id consequat dolor.</p>
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