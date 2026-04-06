"use client";
import React, { useState } from "react";
import Image from "next/image";
import EmblaCarousel from "../../common/EmblaCarousel/EmblaCarousel";
import Autoplay from "embla-carousel-autoplay";
import styles from "./SeventhSection.module.css";
import Modal from "../../common/Modal/Modal";
import { stripHtml } from '@/src/app/utils/htmlUtils';

interface SeventhSectionProps {
  data?: any;
  headingtag?: string;
}

const SeventhSection: React.FC<SeventhSectionProps> = ({ data, headingtag = 'h2' }) => {
  const [modalOpen, setModalOpen] = useState(false);

  if (!data) return null;
  const HeadingTag = (headingtag || 'h2') as any;

  const steps = (data.tabparagraph_new?.headings || []).filter(Boolean).map((heading: string, idx: number) => ({
    id: idx + 1,
    stepNumber: `0${idx + 1}`.slice(-2),
    title: heading,
    description: stripHtml(data.tabparagraph_new?.contents?.[idx] || ''),
  }));

  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
  };

  const imageBase = 'http://localhost:8000/backend/service/section/';

  // Extract YouTube video ID
  const getVideoId = (url: string | null) => {
    if (!url) return null;
    if (url.includes('youtube.com/embed/')) return url.split('youtube.com/embed/')[1].split('?')[0];
    if (url.includes('youtu.be/')) return url.split('youtu.be/')[1].split('?')[0];
    return null;
  };

  const videoId = getVideoId(data.video_url);

  return (
    <section id="steps" className={styles.seventhSection}>
      <div className={styles.container}>
        {data.section_heading && (
          <HeadingTag className={`mainHeading ${styles.mainHeading}`}>
            {data.section_heading}
          </HeadingTag>
        )}
        
        {data.content_top && (
          <div 
            className={styles.subtitle}
            dangerouslySetInnerHTML={{ __html: data.content_top }}
          />
        )}

        <div className={styles.contentGrid}>
          {/* Left Column - Video/Image */}
          <div className={styles.videoColumn}>
            <div className={styles.videoWrapper}>
              <Image
                src={data.image ? `${imageBase}${data.image}` : "/assets/images/serviceinnerpage/lasertonings.webp"}
                alt={data.alttag || data.section_heading || "Procedure"}
                width={600}
                height={400}
                className={styles.videoImage}
              />
              {videoId && (
                <div
                  className={styles.playButtonWrapper}
                  onClick={() => setModalOpen(true)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={styles.playButton}>
                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L22 14L2 26V2Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              )}
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
                  {steps.map((step: any) => (
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
            {data.content_bottom && (
              <div 
                className={styles.footerText}
                dangerouslySetInnerHTML={{ __html: data.content_bottom }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={data.section_heading || ''}
      >
        {videoId && (
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={data.section_heading || 'Service Video'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px' }}
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default SeventhSection;

