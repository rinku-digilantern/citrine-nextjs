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
  const [panelCount, setPanelCount] = React.useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Count panels for height calculation
    const track = trackRef.current;
    if (track) {
      const trackFlex = track.children[0];
      if (trackFlex) {
        setPanelCount(trackFlex.children.length);
      }
    }

    // Measure track width and update maxTranslateRef
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      // Using getBoundingClientRect().width for sub-pixel precision if needed
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      maxTranslateRef.current = Math.max(trackWidth - viewportWidth, 0);
    };

    measure();

    // ResizeObserver to react to image loads or content changes inside track
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && trackRef.current) {
      ro = new ResizeObserver(() => measure());
      ro.observe(trackRef.current);
    }

    // Compute target position on scroll
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
        
        // CSS variable for header height
        const topSpacing = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--top-spacing") || "0", 10);
        
        const scrollable = Math.max(sectionHeight - windowHeight, 0);
        // Calculate progress based on how much of the section has passed the header line
        const scrolled = Math.min(Math.max(-(rect.top - topSpacing), 0), scrollable);
        const percent = scrollable > 0 ? scrolled / scrollable : 0;
        
        const speed = 1;
        let fastPercent = percent * speed;
        if (fastPercent > 1) fastPercent = 1;

        // Fallback for measurement
        if (!maxTranslateRef.current) {
          const track = trackRef.current;
          const kids = track ? track.children.length : 0;
          if (kids > 0) {
            maxTranslateRef.current = Math.max(kids * window.innerWidth - window.innerWidth, 0);
          }
        }

        const nextX = -(fastPercent * maxTranslateRef.current);
        const isReachedTop = (rect.top - topSpacing) <= 0;
        targetXRef.current = !isReachedTop ? 0 : nextX;
      });
    };

    window.addEventListener("scroll", handle, { passive: true });
    const resizeHandler = () => {
      measure();
      handle();
    };
    window.addEventListener("resize", resizeHandler);

    // Initial call
    handle();

    // RAF loop to smoothly interpolate between currentX and targetX
    const animate = () => {
      const track = trackRef.current;
      if (!track) {
        rafRef.current = window.requestAnimationFrame(animate);
        return;
      }

      const target = targetXRef.current || 0;
      const current = currentXRef.current || 0;
      
      // Interpolation (lerp) for smooth movement
      const diff = target - current;
      if (Math.abs(diff) > 0.1) {
        // Smooth factor: 0.15 is smooth but responsive
        currentXRef.current = current + diff * 0.15;
      } else {
        currentXRef.current = target;
      }

      track.style.transform = `translate3d(${currentXRef.current}px, 0, 0)`;
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate3d(${currentXRef.current}px, 0, 0)`;
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    // Start RAF
    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", resizeHandler);
      if (ro) ro.disconnect();
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [panelCount]); // Re-run if panelCount changes (measure might shift)

  const handleSectionClick = () => {
    if (!sectionRef.current) return;
    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = section.offsetHeight;
    const scrollable = Math.max(sectionHeight - windowHeight, 0);
    const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
    const percent = scrollable > 0 ? scrolled / scrollable : 0;
  };

  return (
    <section 
      className={styles.mb_sectiontrack} 
      ref={sectionRef} 
      onClick={handleSectionClick}
      style={{ height: `${(panelCount || 2.5) * 100}vh` }}>
      <div className={styles.mb_stickyelement}>
        <div
          className={styles.mb_track}
          ref={trackRef}>
          <div className={styles.mb_trackflex}>
            {/* <div className={styles.cardpanel}>
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
                      <h1 className={`heading ${styles.heading}`}>REJUVENATE.<br/>TRANSFORM.<br/>GLOW.</h1>
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
            </div> */}

            <div className={styles.mb_contentpanel}>
              <picture>
                <source media="(max-width: 600px)" srcSet={`/assets/images/home/mobilesecondbanners.webp`} />
                <img src={`/assets/images/home/citrinesecondbanner.webp`} className={styles.bannerImage2} width={1440} height={700} decoding="async" alt="Slide 2" />
              </picture>
              <div className={styles.secondcontainer}>
                <div className={styles.secondrow}>
                  <div className={styles.secondleft}>
                    <div className={styles.secondheading}>Honouring Excellence in Aesthetics</div>
                    <div className={styles.loremheading}>Recipient of Prestigious National Recognition</div>
                    <p>Celebrated for her outstanding contribution to dermatology and aesthetic medicine, Dr. Niti Gaur stands among the most respected and awarded experts in the field.</p>
                  </div>
                  <div className={styles.secondright}>
                    <Image src={`/assets/images/home/2imagesaward.webp`} width={820} height={546} alt="Second Banner Award" />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.mb_thankspanelwrap}>
              <picture>
                <source media="(max-width: 600px)" srcSet={`/assets/images/home/mobilethirdbanner.webp`} />
                <img src={`/assets/images/home/thirdbanner.webp`} className={styles.bannerImage2} width={1440} height={700} decoding="async" alt="Slide 3" />
              </picture>
              <div className={styles.secondcontainer}>
                <div className={styles.thirdrow}>
                  <div className={styles.thirdleft}>
                    <Image src={`/assets/images/home/thirdimg.webp`} width={760} height={630} alt="Third Banner Left" priority />
                  </div>
                  <div className={styles.thirdright}>
                    <div className={styles.thirdrightContent}>
                      <div className={`thirdheading ${styles.thirdheading}`}>Advanced<br/> <span className={styles.glow}>Technology,</span><br/> Superior Skin<br/> <span className={styles.glow}>Results</span> <span className={styles.sparkle}><Image src={`/assets/images/home/sparklers.webp`} width={40} height={47} alt="Sparkle star" /></span></div>

                      <div className={styles.thirdrightDesc}>State-of-the-art equipment ensures<br/> precision, safety, and effective<br/> treatments.</div>
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
