import React from 'react';
import Image from "next/image";
import styles from './FirstSection.module.css';

interface OverviewItem {
  id: number;
  text: string;
}

interface FirstSectionProps {
  title?: string;
  items?: OverviewItem[];
}

const FirstSection: React.FC<FirstSectionProps> = ({ title, items }) => {
  // Default data if not provided via props
  const defaultItems: OverviewItem[] = [
    { id: 1, text: 'Non-invasive laser procedure' },
    { id: 2, text: 'Treatment duration: 20–30 minutes per session' },
    { id: 3, text: 'Downtime: Minimal to none' },
    { id: 4, text: 'Suitable for most Indian skin types' },
    { id: 5, text: 'Best suited for pigmentation, melasma, dull skin, and uneven tone' },
    { id: 6, text: 'Uses advanced laser technology to target excess melanin' },
    { id: 7, text: 'Multiple sessions recommended for optimal results' },
    { id: 8, text: 'Safe when performed by experienced dermatologists' },
    { id: 9, text: 'Personalized treatment available at Citrine Clinic in Gurgaon' },
  ];

  const overviewItems = items || defaultItems;
  const sectionTitle = title || 'QUICK OVERVIEW';

  return (
    <section className={styles.firstSection} id="overview">
      <div className={styles.container}>
        <h2 className={styles.mainHeading}>{sectionTitle}</h2>
        <div className={styles.overviewGrid}>
          {overviewItems.map((item) => (
            <div key={item.id} className={styles.overviewItem}>
              <span className={styles.icon}>
                <Image src="/assets/images/serviceinnerpage/arrow.webp" alt="Check Icon" width={28} height={20} />
              </span>
              <span className={styles.text}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirstSection;