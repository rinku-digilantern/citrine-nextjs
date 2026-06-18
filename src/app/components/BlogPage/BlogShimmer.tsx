import React from 'react';
import styles from './Blogpage.module.css';

const BlogShimmer = () => {
  const skeletonArray = Array.from({ length: 6 });

  return (
    <section className={`${styles.blogpage} section blogposts`}>
      <div className={styles.container}>
        <div className={styles.commonheader}>
          <h1 className={`mainHeading ${styles.mainHeading}`}>Blogs</h1>
        </div>
        <div className={styles.blogrow}>
          {skeletonArray.map((_, index) => (
            <article key={index} className={styles.blogCard}>
              <div className={styles.shimmerImg}></div>
              <div className={styles.meta}>
                <div className={styles.shimmerTextSmall}></div>
                <div className={styles.shimmerTextSmall}></div>
              </div>
              <div className={styles.postContent}>
                <div className={styles.shimmerTitle}></div>
                <div className={styles.shimmerDesc}></div>
                <div className={styles.shimmerDesc} style={{ width: '80%' }}></div>
                <div className={styles.shimmerBtn}></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogShimmer;
