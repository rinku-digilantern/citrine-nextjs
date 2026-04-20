import React from "react";
import styles from "./EightSection.module.css";
import Link from 'next/link';

interface EightSectionProps {
  data?: any;
  headingtag?: string;
}

const EightSection: React.FC<EightSectionProps> = ({ data, headingtag = 'h2' }) => {
  if (!data) return null;
  const HeadingTag = (headingtag || 'h2') as any;

  return (
    <section id="timeline" className={styles.eightSection}>
      <div className={styles.container}>
        {data.section_heading && (
          <HeadingTag className={`mainHeading ${styles.mainHeading}`}>
            {data.section_heading}
          </HeadingTag>
        )}

        {data.content_top && (
          <div className={styles.dynamicContent} dangerouslySetInnerHTML={{ __html: data.content_top }}/>
        )}
        
        {data.content_bottom && (
          <div className={styles.footerText} dangerouslySetInnerHTML={{ __html: data.content_bottom }}/>
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

export default EightSection;
