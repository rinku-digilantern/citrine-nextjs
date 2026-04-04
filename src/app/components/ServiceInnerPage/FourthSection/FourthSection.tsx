import React from "react";
import styles from "./FourthSection.module.css";

interface FourthSectionProps {
  data?: any;
  headingtag?: string;
}

const FourthSection: React.FC<FourthSectionProps> = ({ data, headingtag = 'h2' }) => {
  if (!data) return null;
  const HeadingTag = (headingtag || 'h2') as any;

  const benefits = (data.threeparagraph_new?.contents || []).filter(Boolean).map((text: string, idx: number) => ({
    id: idx + 1,
    text: text.replace(/<[^>]+>/g, "").trim(),
  }));

  return (
    <section id="benefits" className={styles.fourthSection}>
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

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit: any) => (
            <div key={benefit.id} className={styles.benefitCard}>
              <div className={styles.cardTopLine}></div>
              <p className={styles.benefitText}>{benefit.text}</p>
            </div>
          ))}
        </div>
        
        {data.content_bottom && (
          <div 
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data.content_bottom }} 
          />
        )}
      </div>
    </section>
  );
};

export default FourthSection;
