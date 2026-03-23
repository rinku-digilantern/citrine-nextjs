"use client";
import React from "react";
import Image from "next/image";
import EmblaCarousel from "../../common/EmblaCarousel/EmblaCarousel";
import Autoplay from "embla-carousel-autoplay";
import styles from "./SeventhSection.module.css";

const SeventhSection: React.FC = () => {
  const steps = [
    {
      id: 1,
      stepNumber: "01",
      description: "Skin assessment and consultation with the dermatologist",
    },
    {
      id: 2,
      stepNumber: "02",
      description: "Cleansing of the treatment area to remove impurities",
    },
    {
      id: 3,
      stepNumber: "03",
      description: "Application of protective eyewear for safety",
    },
    {
      id: 4,
      stepNumber: "04",
      description: "Gentle delivery of laser pulses across the skin",
    },
    {
      id: 5,
      stepNumber: "05",
      description: "Targeting pigmented areas with controlled energy",
    },
  ];

  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
  };

  return (
    <section id="steps" className={styles.seventhSection}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>
          STEPS OF LASER TONING
        </h2>
        <p className={styles.subtitle}>
          The laser toning procedure usually follows a structured and controlled process
          for safety and effectiveness.
        </p>

        <div className={styles.contentGrid}>
          {/* Left Column - Video Image */}
          <div className={styles.videoColumn}>
            <div className={styles.videoWrapper}>
              <Image
                src="/assets/images/serviceinnerpage/lasertonings.webp"
                alt="Laser Toning Procedure"
                width={600}
                height={400}
                className={styles.videoImage}
              />
              <div className={styles.playButtonWrapper}>
                <div className={styles.playButton}>
                  <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L22 14L2 26V2Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Steps Carousel */}
          <div className={styles.carouselColumn}>
            <div className={styles.carouselWrapper}>
              <EmblaCarousel
                options={{
                  loop: true,
                  align: "start",
                  slidesToScroll: 1,
                }}
                plugins={[Autoplay(autoplayOptions)]}
                className={styles.embla}
              >
                <div className={styles.emblaContainer}>
                  {steps.map((step) => (
                    <div key={step.id} className={styles.emblaSlide}>
                      <div className={styles.stepCard}>
                        <div className={styles.stepBadge}>STEP {step.stepNumber}</div>
                        <p className={styles.stepDescription}>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </EmblaCarousel>
            </div>
             <p className={styles.footerText}>
          The entire session usually takes around <strong>20–30 minutes</strong>, depending on the
          treatment area.
        </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;
