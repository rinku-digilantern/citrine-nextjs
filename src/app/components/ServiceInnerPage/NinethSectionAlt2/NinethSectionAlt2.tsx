import React from "react";
import styles from "./NinethSectionAlt2.module.css";
import Link from "next/link";

interface NinethSectionAlt2Props {
  data?: any;
  headingtag?: string;
}

const NinethSectionAlt2: React.FC<NinethSectionAlt2Props> = ({ data, headingtag = 'h2' }) => {
  if (!data) return null;
  const HeadingTag = (headingtag || 'h2') as any;

  const items = (data.threeparagraph_new?.contents || [])
    .filter(Boolean)
    .map((text: string, idx: number) => ({
      id: idx,
      html: text,
    }));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left: heading + intro */}
          <div className={styles.leftCol}>
            {data.section_heading && (
              <HeadingTag className={`mainHeading ${styles.mainHeading}`}>
                {data.section_heading}
              </HeadingTag>
            )}
            {data.content_top && (
              <div
                className={styles.intro}
                dangerouslySetInnerHTML={{ __html: data.content_top }}
              />
            )}
            {data.content_bottom && (
              <div
                className={styles.outro}
                dangerouslySetInnerHTML={{ __html: data.content_bottom }}
              />
            )}
            {data.button_type === 'Yes' && data.button_url && (
              <div className={styles.buttonRow}>
                <Link href={`/${data.button_url}`} aria-label={data.button_name || 'Book an Appointment'} className={styles.bookBtn}>
                  {data.button_name || 'Book an Appointment'}
                </Link>
              </div>
            )}
          </div>

          {/* Right: checklist items */}
          {items.length > 0 && (
            <div className={styles.rightCol}>
              <ul className={styles.checklist}>
                {items.map((item: any) => (
                  <li key={item.id} className={styles.checkItem}>
                    <span className={styles.checkIcon} aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="9" fill="var(--accent-color, #C9A96E)" fillOpacity="0.15"/>
                        <path d="M5 9.5L7.5 12L13 6.5" stroke="var(--accent-color, #C9A96E)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span
                      className={styles.checkText}
                      dangerouslySetInnerHTML={{ __html: item.html }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NinethSectionAlt2;
