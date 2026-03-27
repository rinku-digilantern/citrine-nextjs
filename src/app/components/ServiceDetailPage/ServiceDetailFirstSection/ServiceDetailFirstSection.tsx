import styles from './ServiceDetailFirstSection.module.css';
import Image from "next/image";
import React from 'react';
import { wrapTablesInScrollDiv } from '@/src/lib/tableWrapper';

interface Props {
  heading?: string;
  description?: string;
  content?: string;
  image?: string;
  headingtag?: React.ElementType | string;
  costRange?: string;
  classAdd?: string;
}

export default function ServiceDetailFirstSection({ heading, description, content, image, costRange, classAdd, headingtag }: Props) {
  const displayContent = wrapTablesInScrollDiv(content || description || '');
  const HeadingTag = (headingtag ?? 'div') as React.ElementType;

  return (
    <section className={`${styles.ServiceDetailFirstSection} ${classAdd ? styles[classAdd] || classAdd : ''}`}>
      <div className={styles.container}>
        <div className={styles.contentRow}>
          <div className={styles.leftContent}>
            {heading && (
              <HeadingTag className={`mainHeading ${styles.mainHeading}`}>{heading}</HeadingTag>
            )}

            {costRange && (
              <div className={styles.costBox}>
                <em>Price Range: <b>{costRange}</b></em>
              </div>
            )}

            <div
              className={`${styles.description} ${classAdd ? styles[classAdd] || classAdd : ''}`}
              dangerouslySetInnerHTML={{ __html: displayContent }}
            />
          </div>

          {image && (
            <div className={styles.rightContent}>
              <Image
                src={image}
                width={680}
                height={500}
                alt={heading || "Service image"}
                className={styles.treatmentImage}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
