"use client";
import React from "react";
import styles from './DrNitiGaurBanner.module.css';

interface Props {
	section: { image: string; mobileImage?: string; imagemobile?: string; altTag?: string; heading: string } | null;
}

export default function DrNitiGaurBanner({ section }: Props) {
	if (!section) return null;

	const mobileSrc = section.mobileImage || section.imagemobile || section.image;
	const desktopSrc = section.image || mobileSrc;

	return (
		<section className={styles.DrNitiGaurBanner}>
			<picture className={styles.bannerPicture}>
				<source srcSet={desktopSrc} media="(min-width: 768px)" />
				<source srcSet={mobileSrc} media="(max-width: 767px)" />
				<img src={mobileSrc} className={styles.bannerImage} alt={section.altTag || ''} />
			</picture>
			<div className={styles.bannercontainer}>
				<div className={styles.textSection}>
					<div className={styles.dheading}>{section.heading}</div>
				</div>
			</div>
		</section>
	);
}
