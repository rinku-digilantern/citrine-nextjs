import React from "react";
import styles from "./ThirteenSection.module.css";

interface ThirteenSectionProps {
  data?: any;
  headingtag?: string;
}

const ThirteenSection: React.FC<ThirteenSectionProps> = ({ data, headingtag = 'h2' }) => {
  if (!data) return null;
  const HeadingTag = (headingtag || 'h2') as any;

  const consultCards = (data.threeparagraph_new?.contents || []).filter(Boolean).map((text: string, idx: number) => ({
    id: idx + 1,
    text: text.replace(/<[^>]+>/g, "").trim(),
    borderType: idx % 2 === 0 ? "top" : "bottom",
  }));

  return (
    <section id="risk-side-effects" className={styles.ThirteenSection}>
      <div className={styles.container}>
        {data.section_heading && (
          <HeadingTag className={`mainHeading ${styles.mainHeading}`}>
            {data.section_heading}
          </HeadingTag>
        )}

        {data.content_top && (
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data.content_top }}
          />
        )}

        {consultCards.length > 0 && (
          <div className={styles.risksGrid} style={{ '--grid-columns': consultCards.length > 5 ? 4 : consultCards.length } as React.CSSProperties}>
            {consultCards.map((card: any) => (
              <div
                key={card.id}
                className={`${styles.riskCard} ${card.borderType === "top"
                    ? styles.topBorder
                    : styles.bottomBorder
                  }`}>
                <div className={styles.riskText} dangerouslySetInnerHTML={{ __html: card.text }}></div>
              </div>
            ))}
          </div>
        )}

        {data.content_bottom && (
          <div
            className={styles.footerText}
            dangerouslySetInnerHTML={{ __html: data.content_bottom }}
          />
        )}
      </div>
    </section>
  );
};

export default ThirteenSection;
