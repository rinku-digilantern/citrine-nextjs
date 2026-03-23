"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './OurVideos.module.css';
import Modal from '../../common/Modal/Modal';
import Link from 'next/link';

const OurVideos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string>('');

  const videos = [
    {
      thumbnail: '/assets/images/home/videos01.webp',
      alt: 'Dr Niti Gaur and Heena Kapoor',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      thumbnail: '/assets/images/home/videos02.webp',
      alt: 'Dr Niti Gaur and Jannat Arora',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      thumbnail: '/assets/images/home/videos03.webp',
      alt: 'Patient consultation video',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      thumbnail: '/assets/images/home/videos04.webp',
      stats: { likes: 310, views: 480 },
      alt: 'Pre Bridal Skincare Tips',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  const openModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo('');
  };

  return (
    <section className={styles.videosSection}>
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
                <a 
                  href="#" 
                  className={styles.overlay}
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(video.videoUrl);
                  }}
                >
                  <button className={styles.playButton} aria-label="Play Video">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
         <div className={styles.viewbtnrow}>
          <Link href="/videos" className={styles.viewBtn}>View More</Link>
         </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Citrine Clinic">
        <iframe
          src={selectedVideo}
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Modal>
    </section>
  );
};

export default OurVideos;