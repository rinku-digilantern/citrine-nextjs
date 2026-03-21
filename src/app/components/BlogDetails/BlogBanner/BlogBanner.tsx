import Image from 'next/image';
import styles from './BlogBanner.module.css';

export default function BlogBanner() {
  return (
    <div className={styles.bannerWrapper}>
      {/* Top tags row */}
      <div className={styles.tagsRow}>
        <div className={styles.tagClinic}>By <span className={styles.hightlight}>Citrine Clinic</span></div>
        <div className={styles.tagDate}><Image src="/assets/images/blogdetail/email.webp" alt="Date" width={20} height={14} /> 29 Jan 2026</div>
        <div className={styles.tagDoctor}>Medically Reviewed by <span className={styles.hightlight}>Dr. NB Gaur</span></div>
      </div>
      {/* Main heading */}
      <h1 className={`mainHeading ${styles.mainHeading}`}>How to Identify Your Type of Pigmentation and Treat It Effectively</h1>
      {/* Banner box */}
      <div className={styles.bannerBox}>
            <Image src="/assets/images/blogdetail/blogbanners.webp" alt="Pigmentation Banner" width={1176} height={750} />
      </div>
    </div>
  );
}