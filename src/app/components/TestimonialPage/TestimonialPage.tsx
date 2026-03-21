'use client';
import React, { useState } from 'react';
import styles from './TestimonialPage.module.css';

// Testimonial interface from API
interface Testimonial {
  id: number;
  name: string;
  designation: string | null;
  source: string;
  description: string;
  short_name: string;
  rating: string;
}

interface TestimonialPageProps {
  testimonialsData: Testimonial[];
}

const TestimonialPage: React.FC<TestimonialPageProps> = ({ testimonialsData }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  // console.log('TestimonialPage - testimonialsData:', testimonialsData);
  // console.log('TestimonialPage - testimonialsData length:', testimonialsData?.length);
  const loadMoreTestimonials = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  const hasMore = visibleCount < testimonialsData.length;
  const visibleTestimonials = testimonialsData.slice(0, visibleCount);

  // Function to render star rating
  const renderStars = (rating: string) => {
    const numRating = parseInt(rating, 10);
    return '★ '.repeat(numRating);
  };

  // Show message if no testimonials
  if (!testimonialsData || testimonialsData.length === 0) {
    return (
      <section className={styles.TestimonialPage}>
        <div className={styles.container}>
          <div className={styles.commonheader}>
            <h1 className={`mainHeading ${styles.mainHeading}`}>Testimonials</h1>
          </div>
            <p>No testimonials available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.TestimonialPage}>
      <div className={styles.container}>
         <div className={styles.commonheader}>
            <h1 className={`mainHeading ${styles.mainHeading}`}>Testimonials</h1>
        </div>
        <div className={styles.gridContainer}>
          {visibleTestimonials.map((item) => (
            <div key={item.id} className={styles.wcard}>
              <div className={styles.googlediv}>
                <img src="/assets/images/testimonials/google.webp" width={40} height={40} alt="Google Logo" />
              </div>
              <div className={styles.wtitle}>{item.name}</div>
              <span>{renderStars(item.rating)}</span>
              <div className={styles.description} dangerouslySetInnerHTML={{ __html: item.description }} />
              <div className={styles.person}>✱ Opinions/Results may vary from person to person.</div>
              <div className={styles.wauthor}>—— {item.short_name}</div>
            </div>
          ))}
        </div>
        <div className={styles.testimonialtbottom}>
            {hasMore && (
              <button
                  id="load-more-blogs"
                  onClick={loadMoreTestimonials}
                  className={styles.loadmore}>
                  Load More
                </button>
            )}
          </div>
      </div>
    </section>
  );
};

export default TestimonialPage;
