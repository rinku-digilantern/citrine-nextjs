'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './VideoDetailsPage.module.css';
import Modal from '@/src/app/components/common/Modal/Modal';

// Video item interface
interface VideoItem {
  id: number;
  service_id: number | null;
  name: string;
  image: string;
  video: string;
  alt_tag: string;
}

// Video details data interface
interface VideoDetailsData {
  id: number;
  name: string;
  banner_image: string | null;
  video_type: string;
  video_link: string | null;
  description: string | null;
  alt_tag: string;
  title_tag: string;
  keyword_tag: string | null;
  description_tag: string;
  canonical_tag: string | null;
  url: string;
  servicelist: VideoItem[];
}

interface VideoDetailsPageProps {
  videoData: VideoDetailsData;
}

const VideoDetailsPage: React.FC<VideoDetailsPageProps> = ({ videoData }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const [currentVideoTitle, setCurrentVideoTitle] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  const openModal = (videoUrl: string, videoTitle: string) => {
    setCurrentVideoUrl(videoUrl);
    setCurrentVideoTitle(videoTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideoUrl('');
    setCurrentVideoTitle('');
  };

  const visibleVideos = videoData.servicelist.slice(0, visibleCount);
  const hasMore = visibleCount < videoData.servicelist.length;

  return (
    <section className={styles.TreatmentPage}>
      <div className={styles.wrapper}>
        <div className={styles.treatmentheader}>
          <h1 className={`mainHeading ${styles.mainHeading}`}>{videoData.name}</h1>
          {videoData.description && <p>{videoData.description}</p>}
        </div>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <>
            <div className={styles.treatmentrow}>
              {visibleVideos.map((video) => (
                <div key={video.id} className={styles.serviceitem}>
                  <div className={styles.img}>
                    <Image 
                      src={`https://api.citrineclinic.com/backend/service_video/inner/${video.image}`}
                      alt={video.alt_tag} 
                      width={480} 
                      height={360}/>
                    <div 
                      className={styles.overlay}
                      onClick={() => openModal(video.video, video.name)}>
                      <button className={styles.playButton} aria-label="Play Video">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                          <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className={styles.details}>
                    <div className={styles.trtitle}>{video.name}</div>
                  </div>
                </div>
              ))}
            </div>
            {hasMore && (
              <div className={styles.treatmentbottom}>
                <button onClick={handleLoadMore} className={styles.loadmore}>
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
      {/* Video Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title='Citrine Clinic'>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe
            src={currentVideoUrl}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen/>
        </div>
      </Modal>
    </section>
  );
};

export default VideoDetailsPage;