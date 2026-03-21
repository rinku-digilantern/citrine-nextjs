import React from "react";
import styles from "./RecentPost.module.css";

const posts = [
  {
    image: "/assets/images/blogdetail/rp01.webp",
    date: "14 MAR 2026",
    title: "How does GFC Therapy help in hair regrowth?",
    alt_Tag: "How does GFC Therapy help in hair regrowth?",
  },
  {
    image: "/assets/images/blogdetail/rp02.webp",
    date: "14 MAR 2026",
    title: "Summer Skin Care Routine for Oily & Acne-Prone Skin",
    alt_Tag: "Summer Skin Care Routine for Oily & Acne-Prone Skin",
  },
  {
    image: "/assets/images/blogdetail/rp03.webp",
    date: "14 MAR 2026",
    title: "How to Get Clear Skin: Expert Tips from Citrine Clinic Dermatologists",
    alt_Tag: "How to Get Clear Skin: Expert Tips from Citrine Clinic Dermatologists",
  },
];

const RecentPost = () => {
  return (
    <section className={styles.recentPostsSection}>
      <div className={styles.wrapper}>
          <h2 className={styles.mainHeading}>RECENT POSTS</h2>
      <div className={styles.postsGrid}>
        {posts.map((post, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.cardImageWrapper}>
              <img src={post.image} alt={post.alt_Tag} className={styles.cardImage} width={392} height={280} />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.date}>{post.date}</div>
              <div className={styles.title}>{post.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.readMoreBtn}>READ MORE BLOGS</button>
      </div>
      </div>
    </section>
  );
};

export default RecentPost;
