import React from 'react';
import Image from 'next/image';
import styles from './DoctorSection.module.css';

const DoctorSection = () => {
  return (
    <section className={styles.doctorSection}>
      {/* Background Image */}
      {/* <Image 
        src="/assets/images/home/doctorbg.webp" 
        alt="Doctor Section Background" 
        fill
        className={styles.backgroundImage}
        priority
      /> */}
      
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left Content Area */}
          <div className={styles.leftSection}>
            {/* Circular Text */}
            <div className={styles.circularText}>
              <svg viewBox="0 0 200 200" className={styles.circularSvg}>
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  />
                </defs>
                <text className={styles.circularTextPath}>
                  <textPath href="#circlePath" startOffset="0%">
                    OUR DOCTOR • DR. NITI GAUR • 
                  </textPath>
                </text>
              </svg>
            </div>
            
            {/* Content Card */}
            <div className={styles.contentCard}>
                <div className={styles.comma}>
                    <Image src="/assets/images/home/comma.webp" width={69} height={59} alt="comma"/>
                </div>
              {/* Description Text */}
              <p className={styles.description}>Dr. Niti Gaur is one of India’s leading dermatologists, with 20+ years of experience across clinical dermatology, aesthetic medicine, and advanced trichology. Her philosophy blends evidence-based science with artistic precision — delivering natural, long-term results.</p>

              {/* Doctor Name */}
              <h2 className={styles.doctorName}>DR. NITI GAUR</h2>

              {/* Experience */}
              <p className={styles.experience}>Founder & Medical Director</p>

              {/* Specialties */}
              <p className={styles.specialties}>
                Two Decades of Expertise. A Vision That Redefined<br/> Aesthetic Dermatology.
              </p>
            </div>
          </div>

          {/* Right Doctor Image */}
          <div className={styles.doctorImageWrapper}>
            <Image 
              src="/assets/images/home/doctor.webp" 
              alt="Dr. Niti Gaur" 
              width={700}
              height={600}
              className={styles.doctorImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;