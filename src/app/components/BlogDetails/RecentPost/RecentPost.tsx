import React from "react";
import Link from "next/link";
import styles from "./RecentPost.module.css";

interface RecentPostItem {
  blog_name: string;
  blog_image: string;
  date: string;
  alt_tag: string;
  url: string;
}

interface RecentPostProps {
  posts?: RecentPostItem[];
}

const RecentPost = ({ posts = [] }: RecentPostProps) => {
  if (!posts.length) return null;

  return (
    <section className={styles.recentPostsSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.mainHeading}>RECENT POSTS</h2>
        <div className={styles.postsGrid}>
          {posts.map((post, idx) => (
            <Link href={`/blog-post/${post.url}`} key={idx} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <img
                  src={`https://api.citrineclinic.com/backend/blog/${post.blog_image}`}
                  alt={post.alt_tag}
                  className={styles.cardImage}
                  width={392}
                  height={280}
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.date}>{post.date}</div>
                <div className={styles.title}>{post.blog_name}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          <Link href="/blogs" className={styles.readMoreBtn}>READ MORE BLOGS</Link>
        </div>
      </div>
    </section>
  );
};

export default RecentPost;
