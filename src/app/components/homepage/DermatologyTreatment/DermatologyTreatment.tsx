"use client";
import React, { useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import styles from './DermatologyTreatment.module.css';
import Link from 'next/link';

const treatments = [
  { title: 'ACNE', img: '/assets/images/home/dtthumb01.webp' },
  { title: 'SCAR', img: '/assets/images/home/dtthumb02.webp' },
  { title: 'MELASMA', img: '/assets/images/home/dtthumb03.webp' },
  { title: 'ACNE', img: '/assets/images/home/dtthumb01.webp' },
  { title: 'SCAR', img: '/assets/images/home/dtthumb02.webp' },
  { title: 'MELASMA', img: '/assets/images/home/dtthumb03.webp' },
];

const DermatologyTreatment = () => {

  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  }, [autoplay.current]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className={styles.dermaSection}>
      <Image src="/assets/images/home/dtbg.webp" alt="Dermatology Treatment" width={1440} height={800} className={styles.backgroundImage} />

      <div className={styles.container}>
        <div className={styles.leftCol}>
          <Image src="/assets/images/home/dt01.webp" alt="Dermatology Model" width={650} height={650} className={styles.modelImg} />
        </div>
        <div className={styles.rightCol}>
          <div className={styles.contentBox}>
            <h2 className={`mainHeading ${styles.mainHeading}`}>Advance Clinical Dermatology</h2>
            <p className={styles.desc}>Led by Experience. Driven by Evidence.</p>
             {/* <div className={styles.btnrows}>
               <Link href="/" className={styles.viewMoreLinks}>View More</Link>
             </div> */}
            <div className={styles.sliderWrapper}>
              <div className={styles.embla} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                  {treatments.map((t, idx) => (
                    <div className={styles.emblaSlide} key={idx}>
                      <div className={styles.thumbCard}>
                        <Image src={t.img} alt={t.title} width={157} height={187} className={styles.thumbImg} />
                        <div className={styles.thumbTitle}>{t.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className={styles.mbbtnrows}>
               <Link href="/" className={styles.viewMoreLinks}>View More</Link>
             </div> */}
              <div className={styles.navigation}>
                <button className={styles.navBtn} onClick={scrollPrev} aria-label="Previous">
                  <span><Image src="/assets/images/home/previcon.webp" alt="Previous" width={32} height={14} /></span>
                </button>
                <button className={styles.navBtn + ' ' + styles.active} onClick={scrollNext} aria-label="Next">
                  <span><Image src="/assets/images/home/nexticon.webp" alt="Next" width={32} height={14} /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DermatologyTreatment;