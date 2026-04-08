import React from 'react';
import styles from './TwelveSection.module.css';
import Link from 'next/link';
import { stripHtml } from '@/src/app/utils/htmlUtils';

interface TwelveSectionProps {
  data?: any;
  headingtag?: string;
  subheadingtag?: string;
}

const TwelveSection: React.FC<TwelveSectionProps> = ({ data, headingtag = 'div', subheadingtag }) => {
  if (!data) return null;
  const HeadingTag = (headingtag || 'div') as any;

  const risks = (data.threeparagraph_new?.headings || []).filter(Boolean).map((heading: string, idx: number) => ({
    id: idx + 1,
    title: heading,
    tag: data.threeparagraph_new?.heading_tags?.[idx] || subheadingtag || data.sub_heading_tag || 'h3',
    text: stripHtml(data.threeparagraph_new?.contents?.[idx] || ''),
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
            {risks.map((risk: any) => {
              const CardHeadingTag = risk.tag as any;
              return (
                <div
                  key={risk.id}
                  className={`${styles.consultCard} ${risk.borderType === 'left' ? styles.leftBorder : risk.borderType === 'top' ? styles.topBorder : styles.bottomBorder
                    }`}
                >
                  <CardHeadingTag className={styles.riskTitle}>{risk.title}</CardHeadingTag>
                  <p className={styles.cardText}>{risk.text}</p>
                  {risk.url && (
                    <Link href={`/${risk.url}`} className={styles.knowmore}>
                      {risk.url_name}
                    </Link>
                  )}
                </div>
              );
            })}
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
