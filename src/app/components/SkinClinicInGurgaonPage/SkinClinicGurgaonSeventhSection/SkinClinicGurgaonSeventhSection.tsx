"use client";
import React from 'react';
import styles from './SkinClinicGurgaonSeventhSection.module.css';

interface Props {
  section:
    | {
        leftHeading?: string;
        leftParagraph?: string;
        leftItems?: string[];
        rightHeading?: string;
        rightItems?: string[];
      }
    | null;
}

const SkinClinicGurgaonSeventhSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;

  const { leftHeading, leftParagraph, leftItems, rightHeading, rightItems = [] } = section;

	return (
		<section className={styles.SkinClinicGurgaonSeventhSection}>
			<div className={styles.container}>
                <div className={styles.commonbox}>
				<div className={styles.left}>
					<h2 className={styles.heading}>{leftHeading}</h2>
					<p className={styles.lead}>{leftParagraph}</p>
					{leftItems && leftItems.length > 0 && (
						<ul className={styles.list}>
							{leftItems.map((it: string, idx: number) => (
								<li key={idx} dangerouslySetInnerHTML={{ __html: it }} />
							))}
						</ul>
					)}
				</div>

				<div className={styles.right}>
					<h3 className={styles.heading}>{rightHeading}</h3>
					{rightItems && rightItems.length > 0 && (
						<ul className={styles.listCompact}>
							{rightItems.map((it: string, idx: number) => (
								<li key={idx} dangerouslySetInnerHTML={{ __html: it }} />
							))}
						</ul>
					)}
                    </div>
				</div>
			</div>
		</section>
	);
};

export default SkinClinicGurgaonSeventhSection;
