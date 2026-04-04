import React from 'react';
import Image from 'next/image';
import styles from './EleventhSection.module.css';
import Link from 'next/link';

interface EleventhSectionProps {
  data?: any;
  headingtag?: string;
}

const EleventhSection: React.FC<EleventhSectionProps> = ({ data, headingtag = 'h2' }) => {
  if (!data) return null;
  const HeadingTag = (headingtag || 'h2') as any;

  return (
    <section className={styles.eleventhSection}>
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

        <div className={styles.contentGrid}>
          {/* Left Column - Care Management */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <div className={styles.iconWrapper}>
                <Image src="/assets/images/serviceinnerpage/icon01.webp" alt="Care Management Icon" width={64} height={64} />
              </div>
              <h3 className={styles.columnTitle}>
                {data.left_heading || 'CARE MANAGEMENT'}
              </h3>
            </div>
            {data.left_content && (
              <div 
                className={styles.itemListContent}
                dangerouslySetInnerHTML={{ __html: data.left_content }}
              />
            )}
          </div>

          {/* Right Column - Treatment Options */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <div className={styles.iconWrapper}>
                <Image src="/assets/images/serviceinnerpage/icon02.webp" alt="Treatment Options Icon" width={64} height={64} />
              </div>
              <h3 className={styles.columnTitle}>
                {data.right_heading || 'TREATMENT OPTIONS'}
              </h3>
            </div>
            {data.right_content && (
              <div 
                className={styles.itemListContent}
                dangerouslySetInnerHTML={{ __html: data.right_content }}
              />
            )}
          </div>
        </div>

        {data.content_bottom && (
          <div 
            className={styles.footerNote}
            dangerouslySetInnerHTML={{ __html: data.content_bottom }}
          />
        )}

        {data.button_type === 'Yes' && data.button_url && (
          <div className={styles.buttonrow}>
            <Link href={`/${data.button_url}`} aria-label={data.button_name || "Book an Appointment"} className={styles.bookbtn}>
              {data.button_name || "Book an Appointment"}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default EleventhSection;
