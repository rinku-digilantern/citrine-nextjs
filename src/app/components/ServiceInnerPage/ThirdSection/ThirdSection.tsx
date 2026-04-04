import React from "react";
import Link from 'next/link';
import styles from "./ThirdSection.module.css";

interface ThirdSectionProps {
  data?: any;
  headingtag?: string;
}

const ThirdSection: React.FC<ThirdSectionProps> = ({ data, headingtag = 'h2' }) => {
  if (!data) return null;
  const HeadingTag = (headingtag || 'h2') as any;

  return (
    <section id="cost" className={styles.thirdSection}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          {data.section_heading && (
            <HeadingTag className={`mainHeading ${styles.mainHeading}`}>
              {data.section_heading}
            </HeadingTag>
          )}

          {data.content_top && (
            <div 
              className={styles.dynamicContent}
              dangerouslySetInnerHTML={{ __html: data.content_top }}
            />
          )}

          {data.content_bottom && (
            <p className={styles.footerText} dangerouslySetInnerHTML={{ __html: data.content_bottom }}></p>
          )}

          {data.button_type === 'Yes' && data.button_url && (
            <div className={styles.buttonrow}>
              <Link href={`/${data.button_url}`} aria-label={data.button_name || "Book an Appointment"} className={styles.bookbtn}>
                {data.button_name || "Book an Appointment"}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
