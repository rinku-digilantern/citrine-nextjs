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
      thumbnail: '/assets/images/home/video01.webp',
      alt: 'Weight Loss के बाद Loose Skin से परेशान? बिना सर्जरी स्किन टाइट करें',
      videoUrl: 'https://youtube.com/embed/ISq44JIxGow'
    },
    {
      thumbnail: '/assets/images/home/videos02.webp',
      alt: 'Men vs Women: Who Really Ages Faster?',
      videoUrl: 'https://youtube.com/embed/RLl6acl2IwQ'
    },
    {
      thumbnail: '/assets/images/home/video03.webp',
      alt: 'Thread Lift — Natural Face Lift Without Surgery',
      videoUrl: 'https://youtube.com/embed/twIBEOvdOyc'
    },
    {
      thumbnail: '/assets/images/home/video04.webp',
      stats: { likes: 310, views: 480 },
      alt: 'Proud to be part of the Skin Longevity Summit by Eucerin in Hamburg.',
      videoUrl: 'https://youtube.com/embed/-RI94RR41P8'
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
                  className={styles.thumbnail}/>
                <a 
                  href="#" 
                  className={styles.overlay}
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(video.videoUrl);
                  }}>
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