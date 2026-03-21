

import Image from 'next/image';
import styles from './TechFivethSection.module.css';

const features = [
	{
		title: 'FDA APPROVED',
		icon: '/assets/images/technologyinner/tech01.webp',
	},
	{
		title: 'NON-SURGICAL',
		icon: '/assets/images/technologyinner/tech02.webp',
	},
	{
		title: 'NON-INVASIVE',
		icon: '/assets/images/technologyinner/tech03.webp',
	},
	{
		title: 'INSTANT RECOVERY',
		icon: '/assets/images/technologyinner/tech04.webp',
	},
];

const TechFivethSection = () => {
	return (
		<section className={styles.TechFivethSection}>
			<div className={styles.container}>
				<div className={`mainHeading ${styles.mainHeading}`}>
					ULTHERAPY – FOCUSED ULTRASOUND,<br /> NO SURGERY
				</div>
			<div className={styles.fivethGrid}>
				{features.map((item, idx) => (
					<div className={styles.fivethCard} key={idx}>
                        <div className={styles.fivethIcon}>
						    <Image src={item.icon} width={72} height={72} alt={item.title} />
                        </div>
						<div className={styles.fivethCardTitle}>{item.title}</div>
					</div>
				))}
			  </div>
			</div>
		</section>
	);
};

export default TechFivethSection;
