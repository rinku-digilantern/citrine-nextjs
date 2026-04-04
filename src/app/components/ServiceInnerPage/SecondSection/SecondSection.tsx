'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './SecondSection.module.css';
import Modal from '../../common/Modal/Modal';

interface SecondSectionProps {
  data?: any;
  headingtag?: string;
}

const SecondSection: React.FC<SecondSectionProps> = ({ data, headingtag = 'h2' }) => {
  const [modalOpen, setModalOpen] = useState(false);

  if (!data) return null;
  const HeadingTag = (headingtag || 'h2') as any;

  const imageBase = 'http://localhost:8000/backend/service/section/';
  const treatmentImage = data.image ? `${imageBase}${data.image}` : '/assets/images/serviceinnerpage/lasertonings.webp';

  // Extract YouTube video ID from embed URL
  const getVideoId = (url: string | null) => {
    if (!url) return null;
    if (url.includes('youtube.com/embed/')) {
      return url.split('youtube.com/embed/')[1].split('?')[0];
    }
    if (url.includes('youtu.be/')) {
      return url.split('youtu.be/')[1].split('?')[0];
    }
    return null;
  };

  const videoId = getVideoId(data.video_url);

  return (
    <section className={styles.secondSection} id="what-is">
      <div className={styles.contentWrapper}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          {data.section_heading && (
            <HeadingTag className={styles.mainHeading}>
              {data.section_heading}
            </HeadingTag>
          )}

          {data.content_top && (
            <div
              className={styles.paragraph}
              dangerouslySetInnerHTML={{ __html: data.content_top }}
            />
          )}

          {data.content_bottom && (
            <div
              className={styles.paragraph}
              dangerouslySetInnerHTML={{ __html: data.content_bottom }}
            />
          )}
        </div>

        {/* Right Image with Play Button */}
        <div className={styles.rightContent}>
          <div className={styles.imageWrapper}>
            <Image
              src={treatmentImage}
              alt={data.alttag || data.section_heading || 'Service Video Thumbnail'}
              width={600}
              height={400}
              className={styles.treatmentImage}
            />
            {videoId && (
              <div
                className={styles.playButton}
                onClick={() => setModalOpen(true)}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.playIcon}>▶</div>
              </div>
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

export default SecondSection;