'use client';
import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaStar} from 'react-icons/fa';
import styles from './PatientTestimonials.module.css';

const testimonials = [
  {
    id: 1,
    title: "PATIENT-CENTRIC APPROACH",
    text: "Dr. Niti Gaur gives good time to her patients. She gets to the root cause of the issue. Other clinics recommend treatments without understanding cause or lifestyle.But Dr. Niti first helps the cause. Very happy.",
    author: "SHIV KUMAR"
  },
  {
    id: 2,
    title: "EFFECTIVE ACNE TREATMENT",
    text: "Very good clinic, I got my acne treatment, Dr Niti advised 8 sessions of Black peel and a treatment of 3 months. My skin is clear. My skin and I can't stop thanking citrine. Special thanks to most professional staff very caring and comforting.",
    author: "RUPA SHARMA"
  },
  {
    id: 3,
    title: "AMAZING RESULTS",
    text: "I came here for pigmentation treatment and the results are just amazing. Dr. Niti explained everything in detail and the staff was very supportive throughout the process. Highly recommended!",
    author: "AMIT PATEL"
  },
  {
    id: 4,
    title: "BEST DERMATOLOGIST",
    text: "Dr. Niti is the best dermatologist I have ever visited. She takes time to understand the problem and provides the best solution. The clinic is very clean and well-maintained.",
    author: "PRIYA SINGH"
  }
];

const PatientTestimonials = () => {
  const autoplay = React.useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));
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

  // Autoplay handled by Embla Autoplay plugin

  interface Testimonial {
    id: number;
    title: string;
    text: string;
    author: string;
  }
  const TestimonialCard = React.memo(function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
      <div className={styles.testimonialCard}>
        <h3 className={styles.cardTitle}>{testimonial.title}</h3>
        <div className={styles.stars}>
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className={styles.star} />
          ))}
        </div>
        <p className={styles.testimonialText}>{testimonial.text}</p>
        <p className={styles.author}>—— {testimonial.author}</p>
      </div>
    );
  });

  return (
    <section className={styles.testimonialsSection}>
      <Image src="/assets/images/home/patienttestimonialbg.webp" alt="Doctor Section Background" fill className={styles.backgroundImage} priority/>
      <div className={styles.container}>
        {/* Main Heading */}
        <h2 className={`mainHeading ${styles.mainHeading}`}>
          Don’t just take our<br/> word for it
        </h2>

        {/* Carousel Wrapper */}
        <button className={styles.previousButtons} onClick={scrollPrevious} aria-label="Previous testimonial"><span><Image src="/assets/images/home/previcon.webp" alt="Previous" width={32} height={14} /></span></button>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.emblaSlide}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button className={styles.nextButtons} onClick={scrollNext} aria-label="Next testimonial"><span><Image src="/assets/images/home/nexticon.webp" alt="Next" width={32} height={14} /></span></button>
      </div>
    </section>
  );
};

export default PatientTestimonials;
