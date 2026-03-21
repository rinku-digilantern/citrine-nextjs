"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./TenthSection.module.css";

const TenthSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const technologies = [
    {
      id: 1,
      name: "Q-Switched Nd:YAG",
      image: "/assets/images/serviceinnerpage/tech01.webp", // TODO: Replace with actual machine image
    },
    {
      id: 2,
      name: "Q-Switched Alexandrite",
      image: "/assets/images/serviceinnerpage/technew02.webp", // TODO: Replace with actual machine image
    },
    {
      id: 3,
      name: "Q-Switched Ruby",
      image: "/assets/images/serviceinnerpage/technew03.webp", // TODO: Replace with actual machine image
    },
  ];

  return (
    <section id="technologies" className={styles.tenthSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
            <h2 className={`mainHeading ${styles.mainHeading}`}>
              LASER TONING TECHNOLOGIES AT CITRINE
            </h2>
            
            <div className={`${styles.navigationButtons} ${styles.desktopScreen}`}>
              <button
                className={styles.navButton}
                onClick={scrollPrev}
                aria-label="Previous">←</button>
              <button
                className={`${styles.navButton} ${styles.navButtonActive}`}
                onClick={scrollNext}
                aria-label="Next">→</button>
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.embla} ref={emblaRef}>
              <div className={styles.emblaContainer}>
                {technologies.map((tech) => (
                  <div key={tech.id} className={styles.emblaSlide}>
                    <div className={styles.techCard}>
                      <h3 className={styles.techName}>{tech.name}</h3>
                      <div className={styles.techImageWrapper}>
                        <Image
                          src={tech.image}
                          alt={tech.name}
                          width={500}
                          height={500}
                          className={styles.techImage}/>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${styles.navigationButtons} ${styles.mobileScreen}`}>
              <button
                className={styles.navButton}
                onClick={scrollPrev}
                aria-label="Previous">←</button>
              <button
                className={`${styles.navButton} ${styles.navButtonActive}`}
                onClick={scrollNext}
                aria-label="Next">→</button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TenthSection;
