"use client";
import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import styles from './BestDermatologistTestimonialSection.module.css';

interface Testimonial {
  id: number;
  title: string;
  text: string;
  author: string;
  rating: number;
  google?: string;
}

interface Props {
  section: { mainHeading: string; paragraph: string; testimonials: Testimonial[] } | null;
}

const BestDermatologistTestimonialSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;

  return (
    <section className={styles.BestDermatologistTestimonialSection}>
      <Image src="/assets/images/home/patienttestimonialbg.webp" alt="Testimonial Background" fill className={styles.backgroundImage} />
      <div className={styles.container}>
        <h2 className={styles.mainHeading}>{section.mainHeading}</h2>
        <p className={styles.desc}>{section.paragraph}</p>
        <div className={styles.testimonialsGrid}>
          {section.testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              {/* <h3 className={styles.cardTitle}>{testimonial.title}</h3> */}
              <div className={styles.stars}>
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar key={index} className={styles.star} />
                ))}
              </div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.disclaimer}>
                ✱ Opinions/Results may vary from person to person.
              </div>
              <div className={styles.servicefooter}>
                <p className={styles.author}>— {testimonial.author}</p>
                <div className={styles.googleIcon}>
                  <Image
                    src={testimonial.google || "/assets/images/serviceinnerpage/google.webp"}
                    alt="Google"
                    width={28}
                    height={28} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDermatologistTestimonialSection;
