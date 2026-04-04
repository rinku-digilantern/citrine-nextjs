import React from "react";
import styles from "./FivethSection.module.css";

interface FivethSectionProps {
  data?: any;
  headingtag?: string;
}

const FivethSection: React.FC<FivethSectionProps> = ({ data, headingtag = 'h2' }) => {
  if (!data) return null;
  const HeadingTag = (headingtag || 'h2') as any;

  const getBorderType = (idx: number) => {
    if (idx === 0) return "left";
    return idx % 2 === 1 ? "bottom" : "top";
  };

  const risks = (data.threeparagraph_new?.contents || []).filter(Boolean).map((text: string, idx: number) => ({
    id: idx + 1,
    text: text.replace(/<[^>]+>/g, "").trim(),
    borderType: getBorderType(idx),
  }));

  return (
    <section id="risk-side-effects" className={styles.fivethSection}>
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

        {risks.length > 0 && (
          <div className={styles.risksGrid}>
            {risks.map((risk: any) => (
              <div
                key={risk.id}
                className={`${styles.riskCard} ${
                  risk.borderType === "left"
                    ? styles.leftBorder
                    : risk.borderType === "top"
                    ? styles.topBorder
                    : styles.bottomBorder
                }`}
              >
                <p className={styles.riskText}>{risk.text}</p>
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

export default FivethSection;
