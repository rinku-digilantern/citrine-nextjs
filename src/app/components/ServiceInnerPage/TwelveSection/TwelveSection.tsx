import React from 'react';
import styles from './TwelveSection.module.css';
import Link from 'next/link';

interface TwelveSectionProps {
  data?: any;
  headingtag?: string;
}

const TwelveSection: React.FC<TwelveSectionProps> = ({ data, headingtag = 'h2' }) => {
  if (!data) return null;
  const HeadingTag = (headingtag || 'h2') as any;

  const risks = (data.threeparagraph_new?.headings || []).filter(Boolean).map((heading: string, idx: number) => ({
    id: idx + 1,
    title: heading,
    text: data.threeparagraph_new?.contents?.[idx]?.replace(/<[^>]+>/g, '').trim() || '',
    borderType: idx === 0 ? "left" : (idx % 2 === 1 ? "bottom" : "top"),
    url: data.threeparagraph_new?.urls?.[idx],
    url_name: data.threeparagraph_new?.url_names?.[idx] || 'know more'
  }));

  return (
    <section className={styles.twelveSection}>
      <div className={styles.container}>
        {data.section_heading && (
          <HeadingTag className={styles.mainHeading} dangerouslySetInnerHTML={{ __html: data.section_heading }}></HeadingTag>
        )}
        
        {data.content_top && (
          <div 
            className={styles.subtitle}
            dangerouslySetInnerHTML={{ __html: data.content_top }}
          />
        )}

        {risks.length > 0 && (
          <div className={styles.cardsGrid}>
            {risks.map((risk: any) => (
              <div 
                key={risk.id} 
                className={`${styles.consultCard} ${
                  risk.borderType === 'left' ? styles.leftBorder : risk.borderType === 'top' ? styles.topBorder : styles.bottomBorder
                }`}
              >
                <div className={styles.riskTitle}>{risk.title}</div>
                <p className={styles.cardText}>{risk.text}</p>
                {risk.url && (
                  <Link href={`/${risk.url}`} className={styles.knowmore}>
                    {risk.url_name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
        
        {data.content_bottom && (
          <div 
            className={styles.subtitle}
            dangerouslySetInnerHTML={{ __html: data.content_bottom }}
          />
        )}
      </div>
    </section>
  );
};

export default TwelveSection;
