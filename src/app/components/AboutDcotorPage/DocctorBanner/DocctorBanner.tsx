"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import styles from './DocctorBanner.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    id: 1,
    text: "Dr. Niti Gaur gives good time to her patients. She gets to the root cause of the issue. Other clinics recommend treatments without understanding cause or lifestyle.But Dr. Niti first helps the cause. ",
    highlight: "Very happy."
  },
  {
    id: 2,
    text: "Excellent treatment and professional care. Dr. Niti takes time to explain everything clearly. ",
    highlight: "Highly recommended."
  },
  {
    id: 3,
    text: "Best dermatologist in Delhi. Her approach is holistic and she genuinely cares about patients. ",
    highlight: "Outstanding service."
  }
];

const AboutClinicBanner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };
  return (
    <section className={styles.bannerSection}>
      <picture>
        <source media="(max-width: 599.98px)" srcSet="/assets/images/about-doctor/mobiledoctors.webp" />
        <img src="/assets/images/about-doctor/doctorbanners.webp"
          className={styles.bannerImage}
          width={1440}
          height={600}
          alt="Dr. Niti Gaur"
          fetchPriority="high"/>
      </picture>
      
      <div className={styles.bannerContainer}>
        {/* Left Side - Doctor Info */}
        <div className={styles.leftContent}>
          <h1 className={`mainHeading ${styles.mainHeading}`}>DR. NITI GAUR</h1>
          <p className={styles.experienceText}>OVER 20 YEARS OF EXPERIENCE IN</p>
          <ul className={styles.specializationList}>
            <li>Dermatology, Venereology & Leprosy</li>
            <li>Dermatologist, Cosmetologist,</li>
            <li>Trichologist</li>
          </ul>
        </div>

        {/* Right Side - Testimonial Box */}
        <div className={styles.testimonialBox}>
          <div className={styles.quoteIcon}>
             <Image src={`/assets/images/about-doctor/comma.webp`} alt="Quote" width={42} height={35} />
          </div>
          <div className={styles.emblaViewport} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={styles.emblaSlide}>
                  <p className={styles.testimonialText}>
                    {testimonial.text}
                    <span className={styles.highlight}>{testimonial.highlight}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.dotsIndicator}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === selectedIndex ? styles.active : ''}`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Breadcrumb - Outside container */}
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.homeLink}>
              Home
            </Link>
            <span className={styles.separator}>&gt;</span>
            <span className={styles.currentPage}>About Doctor</span>
          </div>
    </section>
  );
};

export default AboutClinicBanner;
