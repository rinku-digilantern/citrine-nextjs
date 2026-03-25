import Image from 'next/image';
import styles from './BlogBanner.module.css';

interface BlogBannerProps {
  title: string;
  date: string;
  image: string;
  imageAlt: string;
}

export default function BlogBanner({ title, date, image, imageAlt }: BlogBannerProps) {
  return (
    <div className={styles.bannerWrapper}>
      {/* Top tags row */}
      <div className={styles.tagsRow}>
        <div className={styles.tagClinic}>By <span className={styles.hightlight}>Citrine Clinic</span></div>
        <div className={styles.tagDate}>
          <Image src="/assets/images/blogdetail/email.webp" alt="Date" width={20} height={14} />
          {' '}{date}
        </div>
        <div className={styles.tagDoctor}>Medically Reviewed by <span className={styles.hightlight}>Dr. NB Gaur</span></div>
      </div>
      {/* Main heading */}
      <h1 className={`mainHeading ${styles.mainHeading}`}>{title}</h1>
      {/* Banner box */}
      <div className={styles.bannerBox}>
        <Image
          src={image}
          alt={imageAlt}
          width={1176}
          height={750}
          priority
        />
      </div>
    </div>
  );
}