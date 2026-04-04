import React from "react";
import styles from "./NinethSection.module.css";
import Link from "next/link";

interface NinethSectionProps {
  data?: any;
  headingtag?: string;
}

const NinethSection: React.FC<NinethSectionProps> = ({ data, headingtag = 'h2' }) => {
  if (!data) return null;
  const HeadingTag = (headingtag || 'h2') as any;

  const conditions = (data.threeparagraph_new?.contents || []).filter(Boolean).map((text: string, idx: number) => ({
    id: idx + 1,
    text: text.replace(/<[^>]+>/g, "").trim(),
    borderType: idx % 2 === 0 ? "top" : "bottom",
  }));

  return (
    <section id="skincondition" className={styles.ninethSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
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
              <div 
                className={styles.dynamicContent}
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

          {conditions.length > 0 && (
            <div className={styles.rightContent}>
              <div className={styles.conditionsGrid}>
                {conditions.map((condition: any) => (
                  <div
                    key={condition.id}
                    className={`${styles.conditionCard} ${
                      condition.borderType === "top"
                        ? styles.topBorder
                        : styles.bottomBorder
                    }`}
                  >
                    <p className={styles.conditionText}>{condition.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NinethSection;
