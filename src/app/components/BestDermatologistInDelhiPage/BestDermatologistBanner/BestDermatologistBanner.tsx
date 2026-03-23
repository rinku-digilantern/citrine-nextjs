"use client";
import React from "react";
import Image from "next/image";
import styles from './BestDermatologistBanner.module.css';

interface Props {
	section: { image: string; altTag?: string; heading: string } | null;
}

export default function BestDermatologistBanner({ section }: Props) {
	if (!section) return null;

	return (
		<section className={styles.BestDermatologistBanner}>
			<Image src={section.image} className={styles.bannerImage} width={1366} height={439} alt={section.altTag || ''} priority/>
			<div className={styles.container}>
				<div className={styles.textSection}>
					<div className={styles.dheading}>{section.heading}</div>
				</div>
			</div>
		</section>
	);
}
