import Image from "next/image";
import styles from './ServiceDetailBannerSection.module.css';

export default function ServiceDetailBannerSection() {
	return (
		<section className={styles.ServiceDetailBannerSection}>
         <Image src={`/assets/images/serviceinnerpage/bannertop.webp`} className={styles.bannerImage} width={1400} height={580} alt="ServiceInner Page" />
			<div className={styles.container}>
            <div className={styles.textSection}>
			   <div className={`mainHeading ${styles.mainHeading}`}>Laser Toning</div>
			</div>
            </div>
		</section>
	);
}
