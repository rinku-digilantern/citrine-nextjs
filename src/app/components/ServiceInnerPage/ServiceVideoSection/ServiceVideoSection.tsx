"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ServiceVideoSection.module.css';
import Modal from '../../common/Modal/Modal';
import Link from 'next/link';

interface VideoItem {
  thumbnail: string;
  alt: string;
  videoUrl: string;
}

interface ServiceVideoSectionProps {
  videos?: VideoItem[];
}

const ServiceVideoSection: React.FC<ServiceVideoSectionProps> = ({ videos: propVideos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string>('');

  const defaultVideos = [
    {
      thumbnail: '/assets/images/home/videos01.webp',
      alt: 'Dr Niti Gaur and Heena Kapoor',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      thumbnail: '/assets/images/home/videos02.webp',
      alt: 'Dr Niti Gaur and Jannat Arora',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  const videos = propVideos && propVideos.length > 0 ? propVideos : defaultVideos;

  const openModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo('');
  };

  return (
    <section id="videos" className={styles.videosSection}>
      <div className={styles.container}>
        <div className={`mainHeading ${styles.mainHeading}`}>OUR VIDEOS</div>
        
        <div className={styles.videosGrid}>
          {videos.map((video, index) => (
            <div key={index} className={styles.videoCard}>
              <div className={styles.thumbnailWrapper}>
                <Image 
                  src={video.thumbnail} 
                  alt={video.alt}
                  width={310}
                  height={480}
                  className={styles.thumbnail}
                />
                <button 
                  className={styles.overlay}
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(video.videoUrl);
                  }}
                  aria-label={`Play ${video.alt}`}
                >
                  <div className={styles.playButton}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
         <div className={styles.viewbtnrow}>
          <Link href="/videos" aria-label="View More" className={styles.viewBtn}>View More</Link>
         </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Citrine Clinic">
        <iframe
          src={selectedVideo}
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', aspectRatio: '16/9', border: 'none' }}
        />
      </Modal>
    </section>
  );
};

export default ServiceVideoSection;