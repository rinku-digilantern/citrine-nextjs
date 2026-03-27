import React from 'react';
import styles from './ServiceDetailThirdSection.module.css';
import { wrapTablesInScrollDiv } from '@/src/lib/tableWrapper';

interface Props {
  heading?: string;
  description?: string;
  section1?: string;
  section2?: string;
  headingtag?: React.ElementType | string; // New prop to specify heading tag
}

export default function ServiceDetailThirdSection({ heading, description, section1, section2, headingtag }: Props) {
  const HeadingTag = (headingtag ?? 'div') as React.ElementType;
	return (
		<section className={styles.ServiceDetailThirdSection}>
            <div className={styles.container}>
			{heading && <HeadingTag className={`mainHeading ${styles.mainHeading}`}>{heading}</HeadingTag>}
			{description && (
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: wrapTablesInScrollDiv(description) }} />
      )}
			<div className={`${styles.columns} ${section2 ? styles.twoColumns : styles.oneColumn}`}>
				<div className={styles.column} dangerouslySetInnerHTML={{ __html: wrapTablesInScrollDiv(section1 || "") }} />
				{section2 && (
          <div className={styles.column} dangerouslySetInnerHTML={{ __html: wrapTablesInScrollDiv(section2) }} />
        )}
			  </div>
            </div>
		</section>
	);
}
