'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './VideoPage.module.css';
import Link from 'next/link';

// Video data interface based on API response
interface VideoItem {
  id: number;
  name: string;
  image: string;
  alt_tag: string;
  title_tag: string;
  keyword_tag: string | null;
  description_tag: string;
  canonical_tag: string | null;
  url: string;
}

interface ApiResponse {
  title: string;
  data: VideoItem[];
}

const VideoPage = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [videoData, setVideoData] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.citrineclinic.com/api/videos');
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        
        const result: ApiResponse = await response.json();
        setVideoData(result.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };
  const visibleVideos = videoData.slice(0, visibleCount);
  const hasMore = visibleCount < videoData.length;

  return (
    <section className={styles.TreatmentPage}>
      <div className={styles.wrapper}>
        <div className={styles.treatmentheader}>
          <h1 className={`mainHeading ${styles.mainHeading}`}>Videos</h1>
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
                      src={`https://api.citrineclinic.com/backend/service_video/image/${video.image}`}
                      alt={video.alt_tag} 
                      width={480} 
                      height={360} 
                    />
                  </div>
                  <div className={styles.details}>
                    <Link href={`/videos/${video.url}`}>
                      <div className={styles.trtitle}>{video.name}</div>
                    </Link>
                    <Link href={`/videos/${video.url}`} className={styles.viewmore}>
                      View Details
                    </Link>
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
    </section>
  );
};

export default VideoPage;