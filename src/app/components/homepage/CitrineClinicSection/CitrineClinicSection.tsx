"use client";
import styles from './CitrineClinicSection.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';

export default function CitrineClinicSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const targetXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const ticking = useRef(false);
  const [panelCount, setPanelCount] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Count panels for height calculation
    const track = trackRef.current;
    if (track) {
      const trackFlex = track.children[0];
      if (trackFlex) {
        setPanelCount(trackFlex.children.length);
      }
    }

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        ticking.current = false;
        if (!sectionRef.current || !trackRef.current) return;
        
        const section = sectionRef.current;
        const track = trackRef.current;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = section.offsetHeight;
        
        const topSpacing = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--top-spacing') || '0', 10);
        
        const scrollable = Math.max(sectionHeight - windowHeight, 0);
        const scrolled = Math.min(Math.max(-(rect.top - topSpacing), 0), scrollable);
        const percent = scrollable > 0 ? scrolled / scrollable : 0;
        
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        const maxTranslate = Math.max(trackWidth - viewportWidth, 0);
        
        const nextX = -(percent * maxTranslate);
        const isReachedTop = (rect.top - topSpacing) <= 0;
        targetXRef.current = !isReachedTop ? 0 : nextX;
      });
    };

    const animate = () => {
      const track = trackRef.current;
      if (!track) {
        rafRef.current = window.requestAnimationFrame(animate);
        return;
      }
      
      const target = targetXRef.current || 0;
      const current = currentXRef.current || 0;
      const diff = target - current;

      if (Math.abs(diff) > 0.1) {
        currentXRef.current = current + diff * 0.15;
      } else {
        currentXRef.current = target;
      }

      track.style.transform = `translate3d(${currentXRef.current}px, 0, 0)`;
      rafRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    rafRef.current = window.requestAnimationFrame(animate);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [panelCount]);

  const aboutItems = [
    {
      title: 'Advanced, Technology-Driven Treatments:',
      desc: 'Equipped with globally recognised, US FDA-approved technologies to deliver safe, precise, and effective results across skin and hair concerns.',
    },
    {
      title: 'Personalised Treatment Protocols:',
      desc: 'Every treatment plan is thoughtfully tailored to individual needs, ensuring outcomes that are natural, balanced, and long-lasting.',
    },
    {
      title: 'Clinical Expertise You Can Trust:',
      desc: 'Led by experienced dermatological guidance, the clinic upholds the highest standards of medical accuracy and ethical practice.',
    },
    {
      title: 'Comfort-Focused Patient Experience:',
      desc: 'Designed to offer privacy, ease, and a welcoming environment where patients feel at ease throughout their journey.',
    },
    {
      title: 'Commitment to Continuous Innovation:',
      desc: 'Regularly updated protocols and techniques that reflect the latest advancements in global dermatology and aesthetic medicine.',
    }
  ];

  return (
    <section 
      className={styles.sectiontrack} 
      ref={sectionRef}
      style={{ height: `${(panelCount || 2.5) * 100}vh` }}>
      <div className={styles.stickyelement}>
        <div
          className={styles.track}
          ref={trackRef}>
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
            <div className={styles.contentpanel}>
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
                  <p className={styles.aboutdesc}>Citrine Clinic is envisioned as a modern dermatology and aesthetic space where clinical excellence meets a deeply personalised approach to care.</p>

                  <ul className={styles.aboutlist}>
                    {aboutItems.map((item, idx) => (
                      <li key={idx} className={styles.aboutlistitem}>
                        <Image src="/assets/images/home/techlist.webp" className={styles.aboutlisticon} width={22} height={22} alt="Checked" />
                        <div>
                          <strong>{item.title}</strong> {item.desc}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Link href="/about-clinic" className={styles.aboutbtn}>READ MORE</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
