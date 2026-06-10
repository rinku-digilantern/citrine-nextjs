import React from "react";
import styles from "./NinethSectionAlt.module.css";
import Link from "next/link";

interface NinethSectionAltProps {
  data?: any;
  headingtag?: string;
}

const NinethSectionAlt: React.FC<NinethSectionAltProps> = ({ data, headingtag = 'h2' }) => {
  if (!data) return null;
  const HeadingTag = (headingtag || 'h2') as any;

  const items = (data.threeparagraph_new?.contents || [])
    .filter(Boolean)
    .map((text: string, idx: number) => ({
      id: idx + 1,
      html: text,
      text: text.replace(/<[^>]+>/g, '').trim(),
    }));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Centered heading block */}
        <div className={styles.headingBlock}>
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
        </div>

        {/* Two-column numbered list */}
        {items.length > 0 && (
          <div className={styles.itemsGrid}>
            {items.map((item: any) => (
              <div key={item.id} className={styles.item}>
                <span className={styles.number}>{String(item.id).padStart(2, '0')}</span>
                <div
                  className={styles.itemText}
                  dangerouslySetInnerHTML={{ __html: item.html }}
                />
              </div>
            ))}
          </div>
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
    </section>
  );
};

export default NinethSectionAlt;
