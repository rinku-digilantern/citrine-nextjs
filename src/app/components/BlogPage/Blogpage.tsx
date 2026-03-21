'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Blogpage.module.css';

interface BlogItem {
  id: number;
  blog_type: string;
  dr_name: string | null;
  blog_name: string;
  short_desc: string;
  image: string;
  date: string;
  alt_tag: string | null;
  url: string;
}

interface BlogpageProps {
  blogsData: BlogItem[];
}

const Blogpage: React.FC<BlogpageProps> = ({ blogsData }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMoreBlogs = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  const displayedBlogs = blogsData.slice(0, visibleCount);
  const hasMore = visibleCount < blogsData.length;

  return (
    <section className={`${styles.blogpage} section blogposts`}>
      <div className={styles.container}>
        <div className={styles.commonheader}>
            <h1 className={`mainHeading ${styles.mainHeading}`}>Blogs</h1>
        </div>
        <div className={styles.blogrow}>
          {displayedBlogs.map((blg, index) => (
              <article key={blg.id} className={`${styles.blogCard}`}>
                <div className={`${styles.postImg} postimg`}>
                  <Link href={`/blogs/${blg.url}`}>
                    <Image
                      src={`https://api.citrineclinic.com/backend/blog/${blg.image}`}
                      className="img-fluid"
                      width={550}
                      height={365}
                      alt={blg.alt_tag || blg.blog_name}
                      priority={index < 3}
                    />
                  </Link>
                </div>
                <div className={styles.meta}>
                    <div className={styles.user}>
                    <Image
                      src="/assets/images/blogs/users.webp"
                      width={14}
                      height={14}
                      alt="User"
                    />
                    By {blg.dr_name || 'Citrine Clinic'}
                  </div>
                  <div className={styles.date}>
                    <Image
                      src="/assets/images/blogs/calendar.webp"
                      width={16}
                      height={16}
                      alt="Calendar"
                    />
                    {blg.date}
                  </div>
                </div>
                <div className={styles.postContent}>
                  <div className={styles.postTitle}>
                    <Link href={`/blogs/${blg.url}`}>{blg.blog_name}</Link>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: blg.short_desc }} />
                  <Link href={`/blogs/${blg.url}`} className={styles.viewallbtn}>
                    Read More
                  </Link>
                </div>
              </article>
          ))}
        </div>
        <div className={styles.blogtbottom}>
            {hasMore && (
              <button
                  id="load-more-blogs"
                  onClick={loadMoreBlogs}
                  className={styles.loadmore}>
                  Load More
                </button>
            )}
          </div>
      </div>
    </section>
  );
};

export default Blogpage;