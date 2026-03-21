import React from 'react';
import styles from './TwelveSection.module.css';

interface ConsultCard {
  id: number;
  text: string;
  borderType: 'top' | 'bottom';
}

interface TwelveSectionProps {
  title?: string;
  subtitle?: string;
  subtitles?: string;
  cards?: ConsultCard[];
}

const TwelveSection: React.FC<TwelveSectionProps> = ({
  title,
  subtitle,
  subtitles,
  cards
}) => {
  // Default data
  const defaultCards: ConsultCard[] = [
    { 
      id: 1, 
      text: 'Pigmented patches are spreading or becoming darker',
      borderType: 'top'
    },
    { 
      id: 2, 
      text: 'Over-the-counter skincare products show little or no improvement',
      borderType: 'bottom'
    },
    { 
      id: 3, 
      text: 'Pigmentation appears suddenly without a clear cause',
      borderType: 'top'
    },
    { 
      id: 4, 
      text: 'Dark spots remain for several months after acne heals',
      borderType: 'bottom'
    },
    { 
      id: 5, 
      text: 'Skin discoloration affects confidence or daily appearance',
      borderType: 'top'
    },
    { 
      id: 6, 
      text: 'Pigmented patches are accompanied by itching or irritation',
      borderType: 'bottom'
    }
  ];

  const sectionTitle = title || 'WHEN TO CONSULT<br/> A DOCTOR FOR PIGMENTATION TREATMENT';
  const sectionSubtitle = subtitle || 'While mild pigmentation can sometimes fade on its own, certain signs indicate that professional care may be needed.';
    const sectionSubtitles = subtitles || 'In such cases, consulting a dermatologist at Citrine Clinic can help identify the exact cause and recommend the most suitable pigmentation treatment in Gurgaon.';
  const consultCards = cards || defaultCards;

  return (
    <section className={styles.twelveSection}>
      <div className={styles.container}>
        <h2 className={styles.mainHeading} dangerouslySetInnerHTML={{ __html: sectionTitle }}></h2>
        <p className={styles.subtitle}>{sectionSubtitle}</p>
        <p className={styles.subtitle}>{sectionSubtitle}</p>

        <div className={styles.cardsGrid}>
          {consultCards.map((card) => (
            <div 
              key={card.id} 
              className={`${styles.consultCard} ${
                card.borderType === 'top' ? styles.topBorder : styles.bottomBorder
              }`}
            >
              <p className={styles.cardText}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwelveSection;
