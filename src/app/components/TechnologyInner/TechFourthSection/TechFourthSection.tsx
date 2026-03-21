
import styles from './TechFourthSection.module.css';

const benefits = [
	'Lorem ipsum dolor sit amet consect apiscing elit.',
	'Lorem ipsum dolor sit amet consect apiscing elit.',
	'Lorem ipsum dolor sit amet consect apiscing elit.',
	'Lorem ipsum dolor sit amet consect apiscing elit.',
	'Lorem ipsum dolor sit amet consect apiscing elit.',
	'Lorem ipsum dolor sit amet consect apiscing elit.',
];

const TechFourthSection = () => {
	return (
		<section className={styles.TechFourthSection}>
            <div className={styles.container}>
			<h2 className={styles.mainHeading}>
				BENEFITS OF ULTHERAPY SKIN<br />TIGHTENING TREATMENT
			</h2>
			<div className={styles.benefitsSubheading}>
				Laser toning offers several cosmetic and dermatological benefits for improving skin quality.
			</div>
			<div className={styles.benefitsGrid}>
				{benefits.map((text, idx) => (
					<div className={styles.benefitCard} key={idx}>
						<div className={styles.benefitCardTopBar}></div>
						<div className={styles.benefitCardText}>{text}</div>
					</div>
				))}
			</div>
            </div>
		</section>
	);
};

export default TechFourthSection;
