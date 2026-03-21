'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from './HairSection.module.css';
import Link from 'next/link';

const hairTreatments = [
  {
    id: 1,
    title: "HAIR FALL",
    image: "/assets/images/home/ht01.webp"
  },
  {
    id: 2,
    title: "PRP THERAPY",
    image: "/assets/images/home/ht02.webp"
  },
  {
    id: 3,
    title: "MESOTHERAPY",
    image: "/assets/images/home/ht03.webp"
  },
  {
    id: 4,
    title: "SCALP TREATMENT",
    image: "/assets/images/home/ht01.webp"
  },
  {
    id: 5,
    title: "PRP THERAPY",
    image: "/assets/images/home/ht02.webp"
  },
];

const HairSection = () => {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1
  }, [autoplay.current]);

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const scrollPrevious = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  return (
    <section className={styles.hairSection}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>
            Advanced Trichology
          </h2>
          <p className={styles.description}>Led by Experience. Driven by Evidence.</p>
          <div className={styles.btnrow}>
            <Link href="/" className={styles.viewMoreLink}>View More</Link>
          </div>
          {/* Navigation Buttons */}
          <div className={`${styles.navigationButtons} ${styles.dnone}`}>
            <button 
              className={styles.previousButton} 
              onClick={scrollPrevious} 
              aria-label="Previous treatment">
              <span>&larr;</span>
            </button>
            <button 
              className={styles.nextButton} 
              onClick={scrollNext} 
              aria-label="Next treatment">
              <span>&rarr;</span>
            </button>
          </div>
        </div>

        {/* Right Carousel */}
        <div className={styles.rightCarousel}>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {hairTreatments.map((treatment) => (
                <div key={treatment.id} className={styles.emblaSlide}>
                  <div className={styles.treatmentCard}>
                    <div className={styles.zoomWrapper}>
                    <Image 
                      src={treatment.image} 
                      alt={treatment.title}
                      fill
                      className={styles.treatmentImage}
                    />
                    <div className={styles.treatmentOverlay}>
                      <h3 className={styles.treatmentTitle}>{treatment.title}</h3>
                    </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

           <div className={styles.mbbtnrow}>
            <Link href="/" className={styles.viewMoreLink}>View More</Link>
          </div>

          <div className={`${styles.navigationButtons} ${styles.dflex} ${styles.dblock}`}>
            <button 
              className={styles.previousButton} 
              onClick={scrollPrevious} 
              aria-label="Previous treatment">
              <span>&larr;</span>
            </button>
            <button 
              className={styles.nextButton} 
              onClick={scrollNext} 
              aria-label="Next treatment">
              <span>&rarr;</span>
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HairSection;
