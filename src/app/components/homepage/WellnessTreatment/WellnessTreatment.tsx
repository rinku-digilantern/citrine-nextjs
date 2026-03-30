'use client';
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from './WellnessTreatment.module.css';
import Link from "next/link";

const WellnessTreatment = () => {
  const treatments = [
    { 
      id: 1, 
      title: 'ARM LIFT', 
      thumb: '/assets/images/home/thumb01.webp',
      alttag: 'Arm Lift Treatment'
    },
    { 
      id: 2, 
      title: 'THIGH LIFT', 
      thumb: '/assets/images/home/thumb02.webp',
      alttag: 'Thigh Lift Treatment'
    },
    { 
      id: 3, 
      title: 'BUTTOCK LIFT', 
      thumb: '/assets/images/home/thumb03.webp',
      alttag: 'Buttock Lift Treatment'
    },
    { 
      id: 4, 
      title: 'STRETCH MARKS REMOVAL', 
      thumb: '/assets/images/home/thumb04.webp',
      alttag: 'Stretch Marks Removal Treatment'
    },
    { 
      id: 5, 
      title: 'ARM LIFT', 
      thumb: '/assets/images/home/thumb01.webp',
      alttag: 'Arm Lift Treatment'
    },
    { 
      id: 6, 
      title: 'THIGH LIFT', 
      thumb: '/assets/images/home/thumb02.webp',
      alttag: 'Thigh Lift Treatment'
    },
    { 
      id: 7, 
      title: 'BUTTOCK LIFT', 
      thumb: '/assets/images/home/thumb03.webp',
      alttag: 'Buttock Lift Treatment'
    },
    { 
      id: 8, 
      title: 'STRETCH MARKS REMOVAL', 
      thumb: '/assets/images/home/thumb04.webp',
      alttag: 'Stretch Marks Removal Treatment'
    },
  ];

  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [itemsPerSlide, setItemsPerSlide] = React.useState(4);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi]);

  const handleThumbClick = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index, true); // true = instant jump, no animation
    }
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const updateItems = () => {
      const w = typeof window !== 'undefined' ? window.innerWidth : 1400;
      // match CSS breakpoint: mobile <= 599.98px -> 2 per slide, otherwise 4
      setItemsPerSlide(w <= 600 ? 2 : 4);
    };
    updateItems();
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, []);

  // Autoplay handled by Embla Autoplay plugin

  return (
    <section className={styles.wellnessSection}>
      {/* <Image src="/assets/images/home/wellbg.webp" className={styles.backgroundImage} alt="Wellness Treatments Background" width={1400} height={700}/> */}
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>Integrative Wellness</h2>
        <p>The Art of Wellbeing</p>
        <div className={styles.content}>
          {/* Left section: Embla slider for thumbnails */}
          <div className={styles.leftSection}>
            <div className={styles.embla} ref={emblaRef}>
              <div className={styles.emblaContainer}>
                {/* Group every 4 thumbnails into a single slide (2x2 grid per slide) */}
                {Array.from({ length: Math.ceil(treatments.length / itemsPerSlide) }).map((_, slideIdx) => {
                  const startIdx = slideIdx * itemsPerSlide;
                  const slideTreatments = treatments.slice(startIdx, startIdx + itemsPerSlide);
                  return (
                    <div className={styles.emblaSlide} key={slideIdx}>
                      {itemsPerSlide === 4 ? (
                        // desktop layout: 2x2 grid inside a slide
                        [0, 1].map(row => (
                          <div key={row} className={styles.gridRow}>
                            {[0, 1].map(col => {
                              const index = row * 2 + col;
                              const treatment = slideTreatments[index];
                              if (!treatment) return null;
                              const globalIndex = startIdx + index;
                              return (
                                <div
                                  key={treatment.id + '-' + globalIndex}
                                  className={`${styles.treatmentCard} ${selectedIndex === globalIndex ? styles.active : ''}`}
                                  onClick={() => handleThumbClick(globalIndex)}>
                                  <Image src={treatment.thumb} width={300} height={200} alt={treatment.alttag} />
                                  <div className={styles.overlay}>
                                    <h3>{treatment.title}</h3>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ))
                      ) : (
                        // mobile layout: one item per slide (or flexible)
                        slideTreatments.map((treatment, idx) => {
                          const globalIndex = startIdx + idx;
                          return (
                            <div
                              key={treatment.id + '-' + globalIndex}
                              className={`${styles.treatmentCard} ${selectedIndex === globalIndex ? styles.active : ''}`}
                              onClick={() => handleThumbClick(globalIndex)}>
                              <Image src={treatment.thumb} width={300} height={200} alt={treatment.alttag} />
                              <div className={styles.overlay}>
                                <h3>{treatment.title}</h3>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.navigation}>
              <button
                className={styles.navButton}
                onClick={scrollPrev}
                aria-label="Previous">
                <span><Image src="/assets/images/home/previcon.webp" alt="Previous" width={32} height={14} /></span>
              </button>
              <button
                className={`${styles.navButton} ${styles.active}`}
                onClick={scrollNext}
                aria-label="Next">
                <span><Image src="/assets/images/home/nexticon.webp" alt="Next" width={32} height={14} /></span>
              </button>
              {/* <div className={styles.btnboxrow}>
               <Link href="/" className={styles.viewMore}>View More</Link>
             </div> */}
            </div>
          </div>
          {/* Right section: Static full image for selected treatment */}
          <div className={styles.rightSection}>
            <div className={styles.mainImageWrapper}>
              <Image src="/assets/images/home/wellfull01.webp" width={600} height={600} alt="Wellness Treatment" className={styles.mainImage}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessTreatment;