import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import styles from './ServiceTestimonialSection.module.css';

interface Testimonial {
  id: number;
  title: string;
  text: string;
  author: string;
  rating: number;
}

interface ServiceTestimonialSectionProps {
  title?: string;
  testimonials?: Testimonial[];
}

const ServiceTestimonialSection: React.FC<ServiceTestimonialSectionProps> = ({ 
  title, 
  testimonials 
}) => {
  // Default data if not provided via props
  const defaultTestimonials: Testimonial[] = [
    {
      id: 1,
      title: "PATIENT-CENTRIC APPROACH",
      rating: 5,
      text: "Dr. Niti Gaur gives good time to her patients. She gets to the root cause of the issue. Other clinics recommend treatments without understanding cause or lifestyle. But Dr. Niti first helps the cause. Very happy.",
      author: "SHIV KUMAR"
    },
    {
      id: 2,
      title: "PATIENT-CENTRIC APPROACH",
      rating: 5,
      text: "Dr. Niti Gaur gives good time to her patients. She gets to the root cause of the issue. Other clinics recommend treatments without understanding cause or lifestyle. But Dr. Niti first helps the cause. Very happy.",
      author: "SHIV KUMAR"
    },
    {
      id: 3,
      title: "PATIENT-CENTRIC APPROACH",
      rating: 5,
      text: "Dr. Niti Gaur gives good time to her patients. She gets to the root cause of the issue. Other clinics recommend treatments without understanding cause or lifestyle. But Dr. Niti first helps the cause. Very happy.",
      author: "SHIV KUMAR"
    }
  ];

  const testimonialItems = testimonials || defaultTestimonials;
  const sectionTitle = title || "DON'T JUST TAKE OUR WORD FOR IT";

  return (
    <section id="testimonial" className={styles.testimonialSection}>
      <Image 
        src="/assets/images/home/patienttestimonialbg.webp" 
        alt="Testimonial Background" 
        fill 
        className={styles.backgroundImage}/>
      
      <div className={styles.container}>
        <h2 className={styles.mainHeading}>{sectionTitle}</h2>
        
        <div className={styles.testimonialsGrid}>
          {testimonialItems.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <h3 className={styles.cardTitle}>{testimonial.title}</h3>
              
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
                    src="/assets/images/serviceinnerpage/google.webp" 
                    alt="Google" 
                    width={28} 
                    height={28}/>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.viewMoreWrapper}>
            <a href="#" aria-label="View More" className={styles.viewMoreBtn}>VIEW MORE</a>
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonialSection;
