import React from 'react';
import Image from "next/image";
import styles from './FirstSection.module.css';
import { stripHtml } from '@/src/app/utils/htmlUtils';

interface FirstSectionProps {
  data?: any;
  headingtag?: string;
}

const FirstSection: React.FC<FirstSectionProps> = ({ data, headingtag = 'h2' }) => {
  if (!data) return null;
  const HeadingTag = (headingtag || 'h2') as any;

  const overviewItems = (data.threeparagraph_new?.contents || []).filter(Boolean).map((t: string, idx: number) => ({
    id: idx + 1,
    text: stripHtml(t)
  }));

  return (
    <section className={styles.firstSection} id="overview">
      <div className={styles.container}>
        {data.section_heading && (
          <HeadingTag className={styles.mainHeading}>
            {data.section_heading}
          </HeadingTag>
        )}
        
        {data.content_top && (
          <div 
            className={styles.subtitle}
            dangerouslySetInnerHTML={{ __html: data.content_top }}
          />
        )}

        {overviewItems.length > 0 && (
          <div className={styles.overviewGrid}>
            {overviewItems.map((item: any) => (
              <div key={item.id} className={styles.overviewItem}>
                <span className={styles.icon}>
                  <Image src="/assets/images/serviceinnerpage/arrow.webp" alt="Check Icon" width={28} height={20} />
                </span>
                <span className={styles.text}>{item.text}</span>
              </div>
            ))}
          </div>
        )}
        
        {data.content_bottom && (
          <div 
            className={styles.subtitle}
            dangerouslySetInnerHTML={{ __html: data.content_bottom }}
          />
        )}
      </div>
    </section>
  );
};

export default FirstSection;