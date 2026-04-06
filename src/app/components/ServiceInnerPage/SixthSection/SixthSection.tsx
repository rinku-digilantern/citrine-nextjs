import React from "react";
import Image from "next/image";
import Link from 'next/link';
import styles from "./SixthSection.module.css";
import { stripHtml } from '@/src/app/utils/htmlUtils';

interface SixthSectionProps {
  data?: any;
  headingtag?: string;
}

const SixthSection: React.FC<SixthSectionProps> = ({ data, headingtag = 'h2' }) => {
  if (!data) return null;
  const HeadingTag = (headingtag || 'h2') as any;

  const contents = (data.threeparagraph_new?.contents || []).filter(Boolean).map((t: string) => stripHtml(t));
  const half = Math.ceil(contents.length / 2);
  const candidatesLeft = contents.slice(0, half);
  const candidatesRight = contents.slice(half);

  return (
    <section id="undergo" className={styles.sixthSection}>
      <div className={styles.container}>
        {data.section_heading && (
          <HeadingTag className={`mainHeading ${styles.mainHeading}`}>
            {data.section_heading}
          </HeadingTag>
        )}
        
        {data.content_top && (
          <div 
            className={styles.subtitle}
            dangerouslySetInnerHTML={{ __html: data.content_top }}
          />
        )}

        <div className={styles.candidatesGrid}>
          <div className={styles.columnLeft}>
            {candidatesLeft.map((candidate: string, index: number) => (
              <div key={`left-${index}`} className={styles.candidateItem}>
                <span className={styles.arrow}>
                  <Image src="/assets/images/serviceinnerpage/arrow.webp" alt="Check Icon" width={28} height={20} />
                </span>
                <span className={styles.candidateText}>{candidate}</span>
              </div>
            ))}
          </div>

          <div className={styles.columnRight}>
            {candidatesRight.map((candidate: string, index: number) => (
              <div key={`right-${index}`} className={styles.candidateItem}>
                <span className={styles.arrow}>
                  <Image src="/assets/images/serviceinnerpage/arrow.webp" alt="Check Icon" width={28} height={20} />
                </span>
                <span className={styles.candidateText}>{candidate}</span>
              </div>
            ))}
          </div>
        </div>

        {data.content_bottom && (
          <div 
            className={styles.footerText}
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

export default SixthSection;
