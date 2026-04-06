import React from 'react';
import Image from "next/image";
import styles from './ServiceDetailBannerSection.module.css';

interface Props {
  title?: string;
  image?: string;
}

export default function ServiceDetailBannerSection({ title, image }: Props) {
	return (
		<section className={styles.ServiceDetailBannerSection}>
         <Image 
          src={image || `/assets/images/serviceinnerpage/bannertop.webp`} 
          className={styles.bannerImage} 
          width={1400} 
          height={580} 
          alt={title || "Service Detail Page Banner"} 
          priority
        />
			<div className={styles.container}>
            <div className={styles.textSection}>
			          <div className={`mainheading ${styles.mainheading}`}>{title || "Laser Toning"}</div>
			      </div>
      </div>
		</section>
	);
}
