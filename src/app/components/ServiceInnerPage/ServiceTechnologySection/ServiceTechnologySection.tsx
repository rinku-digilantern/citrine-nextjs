'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ServiceTechnologySection.module.css';
import Modal from '../../common/Modal/Modal';

interface TechnologyItem {
  id: number;
  name: string;
  image: string;
  banner_image: string;
  short_desc: string | null;
  description: string | null;
  alt_tag: string | null;
}

interface ServiceTechnologySectionProps {
  technology: TechnologyItem[];
  headingtag?: string;
}

const ServiceTechnologySection: React.FC<ServiceTechnologySectionProps> = ({ technology, headingtag }) => {
  const HeadingTag = (headingtag || 'h2') as keyof React.JSX.IntrinsicElements;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVideoId, setModalVideoId] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string>('');

  const handleThumbClick = (videoUrl: string, title: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (!videoUrl) return;
    
    let videoId = videoUrl;
    if (videoUrl.includes('youtube.com/embed/')) {
        videoId = videoUrl.split('youtube.com/embed/')[1].split('?')[0];
    } else if (videoUrl.includes('youtu.be/')) {
        videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
    }
    
    setModalVideoId(videoId);
    setModalTitle(title);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalVideoId(null);
    setModalTitle('');
  };

  if (!technology || technology.length === 0) return null;

  return (
    <section id="technology" className={styles.techSection}>
      <Image 
        src="/assets/images/home/techbg.webp" 
        className={styles.backgroundImage} 
        alt="Technology Background" 
        fill
      />
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          <span>US-FDA Approved  -  International Standards  -  Gold-Standard Devices</span>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {technology.map((item) => (
            <div key={item.id} className={styles.techCard}>
              <div className={styles.contentBox}>
                <div className={styles.leftCol}>
                  <HeadingTag className={styles.heading}>{item.name.toUpperCase()}</HeadingTag>
                  <div className={styles.imageWrapper}>
                    <Image 
                      className={styles.deviceThumb} 
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/backend/technology/image/${item.image}`} 
                      width={480} 
                      height={360} 
                      alt={item.alt_tag || item.name} 
                     unoptimized/>
                  </div>
                </div>
                <div className={styles.rightCol}>
                   <div 
                    className={styles.description} 
                    dangerouslySetInnerHTML={{ __html: item.description || '' }} 
                  />
                  {item.short_desc && (
                    <div className={styles.shortDesc}>{item.short_desc}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={handleModalClose} title={modalTitle}>
        {modalVideoId && (
          <div className={styles.modalVideoContainer}>
            <iframe
              src={`https://www.youtube.com/embed/${modalVideoId}`}
              title={modalTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}/>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ServiceTechnologySection;
