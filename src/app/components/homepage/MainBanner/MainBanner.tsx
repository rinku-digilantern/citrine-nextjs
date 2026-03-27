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
  const [activeIndex, setActiveIndex] = React.useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const track = trackRef.current;
    if (track) {
      const trackFlex = track.children[0];
      if (trackFlex) {
        setPanelCount(trackFlex.children.length);
      }
    }

    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      maxTranslateRef.current = Math.max(trackWidth - viewportWidth, 0);
    };

    measure();

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

        const nextX = -(percent * (track.scrollWidth - window.innerWidth));
        targetXRef.current = (rect.top - topSpacing) > 0 ? 0 : nextX;
      });
    };

    const handleMobileScroll = () => {
      const banner = sectionRef.current?.querySelector(`.${styles.mb_stickyelement}`);
      if (banner && window.innerWidth < 992) {
        const index = Math.round(banner.scrollLeft / window.innerWidth);
        setActiveIndex(index);
      }
    };

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && trackRef.current) {
      ro = new ResizeObserver(() => measure());
      ro.observe(trackRef.current);
    }

    const animate = () => {
      const track = trackRef.current;
      if (!track) {
        rafRef.current = window.requestAnimationFrame(animate);
        return;
      }

      if (window.innerWidth < 992) {
        currentXRef.current = 0;
        track.style.transform = 'translate3d(0, 0, 0)';
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
    window.addEventListener('resize', () => { measure(); handleScroll(); });

    const banner = sectionRef.current?.querySelector(`.${styles.mb_stickyelement}`);
    if (banner) banner.addEventListener('scroll', handleMobileScroll, { passive: true });

    rafRef.current = window.requestAnimationFrame(animate);
    handleScroll();

    let autoScrollInterval: NodeJS.Timeout | undefined;
    if (window.innerWidth < 992) {
      autoScrollInterval = setInterval(() => {
        const banner = sectionRef.current?.querySelector(`.${styles.mb_stickyelement}`);
        if (!banner) return;
        setActiveIndex((prev) => {
          const nextIdx = (prev + 1) % (panelCount || 4);
          banner.scrollTo({
            left: nextIdx * window.innerWidth,
            behavior: 'smooth'
          });
          return nextIdx;
        });
      }, 4000);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (ro) ro.disconnect();
      if (banner) banner.removeEventListener('scroll', handleMobileScroll);
      if (autoScrollInterval) clearInterval(autoScrollInterval);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [panelCount]); // removed activeIndex dependency to prevent interval reset

  const scrollToPanel = (index: number) => {
    const banner = sectionRef.current?.querySelector(`.${styles.mb_stickyelement}`);
    if (banner) {
      banner.scrollTo({
        left: index * window.innerWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <section
      className={styles.mb_sectiontrack}
      ref={sectionRef}
      style={{ height: `${(panelCount || 4) * 100}vh` }}>
      <div className={styles.mb_stickyelement}>
        <div className={styles.mb_track} ref={trackRef}>
          <div className={styles.mb_trackflex}>
            {/* Panel 1: Video Banner */}
            {/* <div className={styles.mb_contentpanel}>
              <div className={styles.mb_bgwrap}>
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
              </div>
              <div className={styles.wrapper}>
                <div className={styles.content}>
                  <div className={styles.textContent}>
                    <h1 className={`heading ${styles.heading}`}>REJUVENATE.<br/>TRANSFORM.<br/>GLOW.</h1>
                  </div>
                  <div className={styles.textContent}>
                    <p className={styles.heroSubtitle}>Rejuvenate your skin with treatments that restore health from within. Transform your confidence as you glow with results that are natural, refined, and truly radiant.</p>
                  </div>
                  <div className={styles.btnbox}>
                    <Link href="/book-appointment" className={`primaryBtn ${styles.primaryBtn}`}>BOOK APPOINTMENT</Link>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Panel 2: Awards */}
            {/* <div className={styles.mb_contentpanel}>
              <div className={styles.mb_bgwrap}>
                <Image
                  src="/assets/images/home/mainbanner1.webp"
                  width={1920}
                  height={821}
                  alt="Citrine Main Banner"
                  priority
                  className={styles.desktopbanner}
                />
                <Image
                  src="/assets/images/home/mb_mainbanner1.webp"
                  width={600}
                  height={1000}
                  alt="Citrine Main Banner"
                  priority
                  className={styles.mobilebanner}
                />
              </div>

              <div className={styles.wrapper}>
                <div className={styles.content}>
                  <p className={styles.heroSubtitle}>GLOBAL AWARD-WINNING CARE FOR SKIN & HAIR</p>
                  <h1 className={`mainHeading ${styles.heading}`}>Advanced Medical Expertise Meets Exceptional Care.</h1>
                  <div className={styles.btnbox}>
                    <Link href="/book-appointment" className={`primaryBtn ${styles.primaryBtn}`}>Book an Appointment</Link>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Panel 3: Recipients */}
            <div className={styles.mb_contentpanel}>
              <picture>
                <source media="(max-width: 600px)" srcSet={`assets/images/home/mobilesecondbanners.webp`} />
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

            {/* Panel 4: Technology */}
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
                      <div className={`thirdheading ${styles.thirdheading}`}>Advanced<br /> <span className={styles.glow}>Technology,</span><br /> Superior Skin<br /> <span className={styles.glow}>Results</span> <span className={styles.sparkle}><Image src={`/assets/images/home/sparklers.webp`} width={40} height={47} alt="Sparkle star" /></span></div>
                      <div className={styles.thirdrightDesc}>State-of-the-art equipment ensures<br /> precision, safety, and effective<br /> treatments.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Pagination Dots */}
        <div className={styles.mobileDots}>
          {Array.from({ length: panelCount || 4 }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${activeIndex === i ? styles.activeDot : ''}`}
              onClick={() => scrollToPanel(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
