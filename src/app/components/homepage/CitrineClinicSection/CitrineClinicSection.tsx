"use client";
import styles from './CitrineClinicSection.module.css';
import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';

export default function CitrineClinicSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollX, setScrollX] = useState(0);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;
      const section = sectionRef.current;
      const track = trackRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;
      const scrollable = Math.max(sectionHeight - windowHeight, 0);
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      const percent = scrollable > 0 ? scrolled / scrollable : 0;
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxTranslate = Math.max(trackWidth - viewportWidth, 0);
      const speed = 1.5;
      let fastPercent = percent * speed;
      if (fastPercent > 1) fastPercent = 1;
      // If mapping is enabled, update horizontal translate (allow smooth both directions)
      if (enabled) setScrollX(-fastPercent * maxTranslate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enabled]);

  const handleSectionClick = () => {
    // When user clicks the section, if mapping is active and we've reached the end, disable mapping.
    if (!sectionRef.current || !trackRef.current) return;
    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = section.offsetHeight;
    const scrollable = Math.max(sectionHeight - windowHeight, 0);
    const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
    const percent = scrollable > 0 ? scrolled / scrollable : 0;
    if (percent >= 1) setEnabled(false);
  };

  return (
    <section className={styles.sectiontrack} ref={sectionRef} onClick={handleSectionClick}>
      <div className={styles.stickyelement}>
        <div
          className={styles.track}
          ref={trackRef}
          style={{ transform: `translateX(${scrollX}px)`, transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)' }}>
          <div className={styles.trackflex}>
            {/* Left Heading Image Panel */}
            <div className={`${styles.heropanel} ${styles.heropanelCustom}`}>
              <div className={`${styles.heropanelimg} ${styles.heropanelimgCustom}`}>
                <Image
                  src="/assets/images/home/citrineheading.png"
                  width={2139}
                  height={185}
                  alt="Citrine Clinic heading"
                  priority
                  className={styles.headingimage}/>
              </div>
            </div>

            {/* Right Reception Image + About Box */}
            <div className={styles.contentpanel} onClick={() => setEnabled(false)}>
              <div className={styles.bgwrap}>
                <picture>
                  <source media="(max-width: 599.98px)" srcSet="/assets/images/home/mbcitrineclinicbg.webp" />
                  <Image
                    src="/assets/images/home/citrineclinicbg.webp"
                    width={1500}
                    height={736}
                    alt="Citrine Clinic"
                    priority
                    className={styles.backgroundImage}/>
                </picture>
              </div>

               <div className={styles.citrinecontentbox}>
                  <h2 className={`mainHeading ${styles.mainHeading}`}>ABOUT CITRINE CLINIC</h2>
                  <p className={styles.aboutdesc}>
                    Lorem ipsum dolor sit amet consectetur adep elit morbe diam dues laoreet non ex element porta.
                  </p>

                  <ul className={styles.aboutlist}>
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i} className={styles.aboutlistitem}>
                          <Image src="/assets/images/home/techlist.webp" className={styles.aboutlisticon} width={24} height={24} alt="Checked" />
                        Lorem ipsum dolor sit amet consectetur adipis elit cras sit amet pharetra.
                      </li>
                    ))}
                  </ul>
                  <button className={styles.aboutbtn}>READ MORE</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
