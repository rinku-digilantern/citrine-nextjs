
import Image from "next/image";
import Link from 'next/link';
import styles from './TechStickyThirdSection.module.css';

const TechStickyThirdSection = () => {
	return (
        <section className={styles.TechStickyThirdSection}>
            <div className={styles.container}>
		<div className={styles.stickyCardsWrapper}>
			{/* Card 1 */}
			<div className={styles.stickyCard}>
				<div className={styles.cardImage}>
					<Image src="/assets/images/technologyinner/techsticky01.webp" width={620} height={480} alt="Ultherapy Machine"/>
				</div>
				<div className={styles.cardContent}>
					<div className={`mainHeading ${styles.mainHeading}`}>HOW ULTHERAPY TREATMENT WORKS</div>
					<div className={styles.cardText}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at neque laoreet, tristique massa interdum, efficitur ligula. Donec sollice tudin semper commodo. Quisque eget semper erat a hendrerit elit. Proin laoreet nisi felis ut vehicula nisi frins gilla a pellentesque luctus.<br /><br />
						Donec a ultricies mauris. Fusce lobortis tortor sit amet erat vestibulum vehicula. Pellentesque ultrices blandit imperdiet mauris sagittis neque eu dignissim.
					</div>
				</div>
			</div>

			{/* Card 2 */}
			<div className={styles.stickyCard}>
				<div className={styles.cardContent}>
					<div className={`mainHeading ${styles.mainHeading}`}>Why Citrine Clinic best Choice for Ultherapy Treatment</div>
					<div className={styles.cardText}>
						Lorem ipsum dolor sit amet consectetur adipiscing elit nenc at neque laoreet tristique massa interdum efficitur ligula. Donec sollice tudin semper commodes.
					</div>
					<ul className={styles.bulletList}>
						<li className={styles.bulletItem}>
							<span className={styles.bulletIcon}>
								<Image src="/assets/images/technologyinner/listicon.webp" width={20} height={20} alt="Check Icon"/>
							</span>
							Dermatologist-led Protocols
						</li>
						<li className={styles.bulletItem}>
							<span className={styles.bulletIcon}>
								<Image src="/assets/images/technologyinner/listicon.webp" width={20} height={20} alt="Check Icon"/>
							</span>
							FDA-approved Technology
						</li>
						<li className={styles.bulletItem}>
							<span className={styles.bulletIcon}>
								<Image src="/assets/images/technologyinner/listicon.webp" width={20} height={20} alt="Check Icon"/>
							</span>
							Tailored Plan & Approach
						</li>
						<li className={styles.bulletItem}>
							<span className={styles.bulletIcon}>
								<Image src="/assets/images/technologyinner/listicon.webp" width={20} height={20} alt="Check Icon"/>
							</span>
							Premium, Comfortable Setting
						</li>
					</ul>
				</div>
				<div className={styles.cardImage}>
					<Image src="/assets/images/technologyinner/techsticky02.webp" width={620} height={480} alt="Ultherapy Machine"/>
					<Link href="/" className={styles.playButtonOverlay}>
						<svg width="64" height="64" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="14" cy="14" r="14" fill="#e2b24a" />
							<polygon points="11,9 20,14 11,19" fill="#fff" />
						</svg>
					</Link>
				</div>
			</div>
		  </div>
        </div>
    </section>
	);
};

export default TechStickyThirdSection;
