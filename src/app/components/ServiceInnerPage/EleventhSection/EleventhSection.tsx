import React from 'react';
import Image from 'next/image';
import styles from './EleventhSection.module.css';

interface CareItem {
  text: string;
}

interface EleventhSectionProps {
  title?: string;
  subtitle?: string;
  careManagement?: CareItem[];
  treatmentOptions?: CareItem[];
  footerNote?: string;
}

const EleventhSection: React.FC<EleventhSectionProps> = ({
  title,
  subtitle,
  careManagement,
  treatmentOptions,
  footerNote
}) => {
  // Default data
  const defaultCareManagement: CareItem[] = [
    { text: 'Regular use of broad-spectrum sunscreen with high SPF' },
    { text: 'Gentle skincare routine to avoid irritation or inflammation' },
    { text: 'Using ingredients like vitamin C, niacinamide, kojic acid, or arbutin' },
    { text: 'Avoiding excessive sun exposure and tanning' },
    { text: 'Following daily skin care and nutrition for healthy skin' }
  ];

  const defaultTreatmentOptions: CareItem[] = [
    { text: 'Chemical peels to exfoliate pigmented skin layers' },
    { text: 'Medical facials designed to improve skin tone' },
    { text: 'Prescription topical treatments that regulate melanin production' },
    { text: 'Advanced dermatological procedures recommended by specialists' }
  ];

  const sectionTitle = title || 'CARE AND TREATMENT';
  const sectionSubtitle = subtitle || 'Managing pigmentation usually requires a combination of skincare practices and medical procedures depending on skin type and severity.';
  const careItems = careManagement || defaultCareManagement;
  const treatmentItems = treatmentOptions || defaultTreatmentOptions;
  const footer = footerNote || 'At Citrine Clinic in Gurgaon, dermatologists analyze the type and depth of pigmentation before recommending personalized treatment.';

  return (
    <section className={styles.eleventhSection}>
      <div className={styles.container}>
        <h2 className={styles.mainHeading}>{sectionTitle}</h2>
        <p className={styles.subtitle}>{sectionSubtitle}</p>

        <div className={styles.contentGrid}>
          {/* Left Column - Care Management */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <div className={styles.iconWrapper}>
                <Image src="/assets/images/serviceinnerpage/icon01.webp" alt="Care Management Icon" width={64} height={64} />
              </div>
              <h3 className={styles.columnTitle}>CARE MANAGEMENT</h3>
            </div>
            <ul className={styles.itemList}>
              {careItems.map((item, index) => (
                <li key={index} className={styles.item}>
                  <span className={styles.bullet}>•</span>
                  <span className={styles.itemText}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Treatment Options */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <div className={styles.iconWrapper}>
                <Image src="/assets/images/serviceinnerpage/icon02.webp" alt="Treatment Options Icon" width={64} height={64} />
              </div>
              <h3 className={styles.columnTitle}>TREATMENT OPTIONS</h3>
            </div>
            <ul className={styles.itemList}>
              {treatmentItems.map((item, index) => (
                <li key={index} className={styles.item}>
                  <span className={styles.bullet}>•</span>
                  <span className={styles.itemText}>
                    {index === 0 && item.text.includes('Chemical peels') ? (
                      <>
                        <span className={styles.linkText}>Chemical peels</span> to exfoliate pigmented skin layers
                      </>
                    ) : (
                      item.text
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={styles.footerNote}>{footer}</p>
      </div>
    </section>
  );
};

export default EleventhSection;
