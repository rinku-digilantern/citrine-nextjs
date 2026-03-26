"use client";
import Image from "next/image";
import Link from 'next/link';
import styles from "./MainBanner.module.css";
import React, { useEffect, useRef } from "react";

const MainBanner = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const maxTranslateRef = useRef<number>(0);
  const ticking = useRef(false);
  const targetXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // measure track width and update maxTranslateRef
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const trackWidth = track.scrollWidth || Math.round(track.getBoundingClientRect().width);
      const viewportWidth = window.innerWidth;
      maxTranslateRef.current = Math.max(trackWidth - viewportWidth, 0);
    };

    measure();

    // ResizeObserver to react to image loads or content changes inside track
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && trackRef.current) {
      ro = new ResizeObserver(() => measure());
      ro.observe(trackRef.current);
    }

    // compute target position on scroll and set ref, actual DOM transform is animated in RAF loop
    const handle = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        ticking.current = false;
        if (!sectionRef.current || !trackRef.current) return;
        const section = sectionRef.current;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = section.offsetHeight;
        const scrollable = Math.max(sectionHeight - windowHeight, 0);
        const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
        const percent = scrollable > 0 ? scrolled / scrollable : 0;
        const speed = 1;
        let fastPercent = percent * speed;
        if (fastPercent > 1) fastPercent = 1;
        // ensure maxTranslateRef has a sensible fallback if measurement failed
        if (!maxTranslateRef.current) {
          const track = trackRef.current;
          const kids = track ? track.children.length : 0;
          if (kids > 0) {
            maxTranslateRef.current = Math.max(kids * window.innerWidth - window.innerWidth, 0);
          }
        }
        const nextX = -Math.round(fastPercent * maxTranslateRef.current);
        targetXRef.current = scrolled <= 0 ? 0 : nextX;
      });
    };

    window.addEventListener('scroll', handle, { passive: true });
    const resizeHandler = () => { measure(); handle(); };
    window.addEventListener('resize', resizeHandler);

    // initial call
    handle();

    // RAF loop to smoothly interpolate between currentX and targetX
    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;
    const animate = () => {
      const track = trackRef.current;
      if (!track) return;
      const target = targetXRef.current || 0;
      const current = currentXRef.current || 0;
      // lerp factor controls smoothing (0.1 - 0.2 is smooth)
      const next = lerp(current, target, 0.12);
      currentXRef.current = Math.abs(next) < 0.5 ? 0 : next;
      track.style.transform = `translate3d(${currentXRef.current}px,0,0)`;
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate3d(${currentXRef.current}px,0,0)`;
      }
      rafRef.current = window.requestAnimationFrame(animate);
    };
    // start RAF
    if (rafRef.current == null) rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', resizeHandler);
      if (ro) ro.disconnect();
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  const handleSectionClick = () => {
    if (!sectionRef.current) return;
    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = section.offsetHeight;
    const scrollable = Math.max(sectionHeight - windowHeight, 0);
    const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
    const percent = scrollable > 0 ? scrolled / scrollable : 0;
    // noop: clicking shouldn't permanently disable the animation
  };

  return (
    <section className={styles.mb_sectiontrack} ref={sectionRef} onClick={handleSectionClick}>
      <div className={styles.mb_stickyelement}>
        <div
          className={styles.mb_track}
          ref={trackRef}>
          <div className={styles.mb_trackflex}>
            <div className={styles.cardpanel}>
              <div className={styles.mb_heropanelimg}>
                <video
                  aria-hidden="true"
                  className={styles.backgroundVideo}
                  playsInline
                  preload="metadata"
                  loop
                  muted
                  autoPlay
                  poster={`/assets/images/home/banner.webp`}>
                  <source src={`/assets/images/home/video.mp4`} type="video/mp4" />
                </video>
                <div className={styles.gradientOverlay}></div>
                <div className={styles.wrapper}>
                  <div className={styles.content}>
                    <div className={styles.textContent}>
                      <h1 className={`heading ${styles.heading}`}>REJUVENATE.<br />TRANSFORM.<br />GLOW.</h1>
                    </div>
                    <div className={styles.textContent}>
                      <p className={styles.heroSubtitle}>Rejuvenate your skin with treatments that restore health from within. Transform your confidence as you glow with results that are natural, refined, and truly radiant.</p>
                    </div>
                    <div className={styles.btnbox}>
                      <Link href="/book-an-appointment" className={styles.primaryBtn}>BOOK APPOINTMENT</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.mb_contentpanel}>
              <picture>
                <source media="(max-width: 600px)" srcSet={`/assets/images/home/mobilesecondbanner.webp`} />
                <img src={`/assets/images/home/secondbanner.webp`} className={styles.bannerImage2} width={1440} height={700} alt="Slide 2" />
              </picture>
              <div className={styles.secondcontainer}>
                <div className={styles.secondrow}>
                  <div className={styles.secondleft}>
                    <div className={styles.secondheading}>Dr. A.P.J Abdul Kalam Inspirations Awards 2025</div>
                    <div className={styles.loremheading}>Honoured with the Prestigious Dr APJ Abdul Kalam Inspiration Awards 2025</div>
                    <p>A proud recognition of excellence, dedication, and innovation in advancing aesthetic and dermatological care.</p>
                  </div>
                  <div className={styles.secondright}>
                    <Image src={`/assets/images/home/secondrightaward.webp`} width={500} height={547} alt="Second Banner Award" />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.mb_thankspanelwrap}>
              <picture>
                <source media="(max-width: 600px)" srcSet={`/assets/images/home/mobilethirdbanner.webp`} />
                <img src={`/assets/images/home/thirdbanner.webp`} className={styles.bannerImage2} width={1440} height={700} alt="Slide 3" />
              </picture>
              <div className={styles.secondcontainer}>
                <div className={styles.thirdrow}>
                  <div className={styles.thirdleft}>
                    <Image src={`/assets/images/home/thirdleftpic.webp`} width={680} height={550} alt="Third Banner Left" priority />
                  </div>
                  <div className={styles.thirdright}>
                    <div className={styles.thirdrightContent}>
                      <div className={`thirdheading ${styles.thirdheading}`}>DELHI, GET<br /> READY TO<br /> <span className={styles.glow}>GLOW</span> <span className={styles.sparkle}><Image src={`/assets/images/home/sparklestar.webp`} width={40} height={47} alt="Sparkle star" /></span></div>
                      <div className={styles.launchBox}>
                        <div className={styles.launchClinic}>CITRINE CLINIC</div>
                        <div className={styles.launchSoon}>LAUNCHING SOON</div>
                      </div>
                      <div className={styles.thirdrightDesc}>World-Class Skin, Hair & Body<br /> Treatments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};

export default MainBanner;
