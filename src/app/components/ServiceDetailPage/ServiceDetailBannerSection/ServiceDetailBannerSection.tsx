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
			          <h2 className={`mainHeading ${styles.mainHeading}`}>{title || "Laser Toning"}</h2>
			      </div>
      </div>
		</section>
	);
}
