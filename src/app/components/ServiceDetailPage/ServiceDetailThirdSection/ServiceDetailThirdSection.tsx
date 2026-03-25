import React from 'react';
import styles from './ServiceDetailThirdSection.module.css';

interface Props {
  heading?: string;
  description?: string;
  section1?: string;
  section2?: string;
}

export default function ServiceDetailThirdSection({ heading, description, section1, section2 }: Props) {
	return (
		<section className={styles.ServiceDetailThirdSection}>
            <div className={styles.container}>
			{heading && <h2 className={`mainHeading ${styles.mainHeading}`}>{heading}</h2>}
			{description && (
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
      )}
			<div className={`${styles.columns} ${section2 ? styles.twoColumns : styles.oneColumn}`}>
				<div className={styles.column} dangerouslySetInnerHTML={{ __html: section1 || "" }} />
				{section2 && (
          <div className={styles.column} dangerouslySetInnerHTML={{ __html: section2 }} />
        )}
			  </div>
            </div>
		</section>
	);
}
