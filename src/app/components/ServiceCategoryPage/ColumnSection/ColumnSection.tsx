"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ColumnSection.module.css';

interface Treatment {
  name: string;
  link: string;
}

interface Button {
  label: string;
  link: string;
  isActive?: boolean;
}

interface Tab {
  id: string;
  label: string;
  treatments: Treatment[];
}

interface Section {
  id: string;
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  tabs?: Tab[];
  treatments?: Treatment[];
  buttons: Button[];
  imagePosition: 'left' | 'right';
}

interface ColumnSectionProps {
  sections?: Section[];
}

const ColumnSection: React.FC<ColumnSectionProps> = ({ sections }) => {
  const [activeTab, setActiveTab] = useState<{ [key: string]: string }>({});

  // Default sections
  const defaultSections: Section[] = [
    {
      id: 'active-acne',
      heading: 'ACTIVE ACNE',
      description: 'Our doctors at Citrine Clinic in Gurgaon suggest that other factors, such as hormones, diet, certain medications, and stress, may worsen acne. Various factors can cause acne, and a skin specialist or a dermatologist is the best person to determine the root cause of acne.',
      image: '/assets/images/servicecategory/leftimage.webp',
      imageAlt: 'Active Acne Treatment',
      tabs: [
        {
          id: 'dermatological-treatments',
          label: 'DERMATOLOGICAL TREATMENTS',
          treatments: [
            { name: 'CHEMICAL PEELS', link: '/' },
            { name: 'MEDIFACIALS', link: '/' },
            { name: 'LASER TREATMENTS', link: '/' },
            { name: 'INTRALESIONAL THERAPY ELABORATION', link: '/' }
          ]
        },
        {
          id: 'topical-treatments',
          label: 'TOPICAL TREATMENTS',
          treatments: [
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' }
          ]
        },
        {
          id: 'home-care',
          label: 'HOME CARE',
          treatments: [
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' }
          ]
        }
      ],
      buttons: [
        { label: 'ACNE TREATMENT IN GURUGRAM', link: '/', isActive: true },
        { label: 'ACNE TREATMENT IN DELHI', link: '/' }
      ],
      imagePosition: 'left'
    },
    {
      id: 'acne-scars',
      heading: 'ACNE SCARS',
      description: 'Acne scars are lesions that appear as craters or pits in one\'s skin after the acne lesions have resolved. Acne scars are formed when the inflammatory lesions of acne are overhealed with the formation of fibrous adhesions at the site of acne lesions.',
      image: '/assets/images/servicecategory/rightimage.webp',
      imageAlt: 'Acne Scars Treatment',
      tabs: [
        {
          id: 'dermatological-treatments',
          label: 'DERMATOLOGICAL TREATMENTS',
          treatments: [
            { name: 'Chemical peels', link: '/' },
            { name: ' Laser Treatments', link: '/' },
            { name: 'Injectables', link: '/' },
            { name: 'Subcision', link: '/' },
            { name: 'Regenerative Treatments', link: '/' },
            { name: 'Tca Cross', link: '/' },
            { name: 'Microneedling', link: '/' },
            { name: 'CO2 Fractional Laser', link: '/' },
            { name: 'Blood-Derived Growth Factors', link: '/' },
            { name: 'Filler', link: '/' } 
          ]
        },
        {
          id: 'topical-treatments',
          label: 'TOPICAL TREATMENTS',
          treatments: [
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' }
          ]
        },
        {
          id: 'home-care',
          label: 'HOME CARE',
          treatments: [
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' }
          ]
        }
      ],
      buttons: [
        { label: 'ACNE TREATMENT IN GURUGRAM', link: '/', isActive: true },
        { label: 'ACNE TREATMENT IN DELHI', link: '/' }
      ],
      imagePosition: 'right'
    },
    {
      id: 'open-pores',
      heading: 'OPEN PORES',
      description: 'Open pores also referred to as enlarged or dilated pores, are characterized by the visible presence of larger and more prominent pores, particularly on the face. These pores become more noticeable as they accumulate oil, dirt, and dead skin cells.',
      image: '/assets/images/servicecategory/leftimage02.webp',
      imageAlt: 'Open Pores Treatment',
      tabs: [
        {
          id: 'dermatological-treatments',
          label: 'DERMATOLOGICAL TREATMENTS',
          treatments: [
            { name: 'Laser or Light Therapies for Open Pores', link: '/' },
            { name: 'Chemical Peels for Open Pores', link: '/' },
            { name: 'Medical Facials For Open Pores', link: '/' }
          ]
        },
        {
          id: 'topical-treatments',
          label: 'TOPICAL TREATMENTS',
          treatments: [
            { name: 'Retinoids', link: '/' },
            { name: 'Alpha Hydroxy Acids (AHAs)', link: '/' },
            { name: 'Salicylic Acid', link: '/' }
          ]
        },
        {
          id: 'home-care',
          label: 'HOME CARE',
          treatments: [
            { name: 'Cleansing', link: '/' },
            { name: 'Exfoliation', link: '/' }
          ]
        }
      ],
      buttons: [
        { label: 'ACNE TREATMENT IN GURUGRAM', link: '/', isActive: true },
        { label: 'ACNE TREATMENT IN DELHI', link: '/' }
      ],
      imagePosition: 'left'
    },
     {
      id: 'oily-skin',
      heading: 'Oily skin',
      description: 'Everyone has some oil on their skin. Under each of your pores is a sebaceous gland that produces a natural oil called sebum, keeping your skin hydrated and healthy. But the glands can produce too much oil, which makes oily skin.',
      image: '/assets/images/servicecategory/rightimage02.webp',
      imageAlt: 'Oily Skin Treatment',
      tabs: [
        {
          id: 'dermatological-treatments',
          label: 'DERMATOLOGICAL TREATMENTS',
          treatments: [
            { name: 'Chemical Peels for Oily Skin', link: '/' },
            { name: 'Medical Facials for Oily Skin', link: '/' },
            { name: 'Laser-based Procedures for Oily Skin', link: '/' },
            { name: 'Injectables for Oily Skin', link: '/' }
          ]
        },
        {
          id: 'topical-treatments',
          label: 'TOPICAL TREATMENTS',
          treatments: [
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' }
          ]
        },
        {
          id: 'home-care',
          label: 'HOME CARE',
          treatments: [
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' },
            { name: '', link: '/' }
          ]
        }
      ],
      buttons: [
        { label: 'ACNE TREATMENT IN GURUGRAM', link: '/', isActive: true },
        { label: 'ACNE TREATMENT IN DELHI', link: '/' }
      ],
      imagePosition: 'right'
    },
    {
      id: 'sensitive-skin',
      heading: 'SENSITIVE SKIN',
      description: 'Sensitive skin is a common issue but not a medical diagnosis by itself. People with sensitive skin may be more likely to experience skin inflammation, irritation, and discoloration.',
      image: '/assets/images/servicecategory/leftimage03.webp',
      imageAlt: 'Sensitive Skin Treatment',
      tabs: [
        {
          id: 'dermatological-treatments',
          label: 'DERMATOLOGICAL TREATMENTS',
          treatments: [
            { name: 'Medical Facials For Sensitive Skin', link: '/' },
            { name: 'Hydration Boost', link: '/' },
            { name: 'Superficial Chemical Peels for Sensitive Skin', link: '/' },
            { name: 'Laser & Light Therapies for Sensitive Skin', link: '/' }
          ]
        },
        {
          id: 'topical-treatments',
          label: 'TOPICAL TREATMENTS',
          treatments: [
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' }
          ]
        },
        {
          id: 'home-care',
          label: 'HOME CARE',
          treatments: [
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' }
          ]
        }
      ],
      buttons: [
        { label: 'ACNE TREATMENT IN GURUGRAM', link: '/', isActive: true },
        { label: 'ACNE TREATMENT IN DELHI', link: '/' }
      ],
      imagePosition: 'left'
    },
     {
      id: 'rosacea',
      heading: 'ROSACEA',
      description: 'Rosacea refers to a chronic skin disease that is associated with fluctuating severity of flushing and redness of the central area of the face.',
      image: '/assets/images/servicecategory/rightimage03.webp',
      imageAlt: 'Rosacea Treatment',
      tabs: [
        {
          id: 'dermatological-treatments',
          label: 'DERMATOLOGICAL TREATMENTS',
          treatments: [
            { name: 'Medical Facials For Sensitive Skin', link: '/' },
            { name: 'Hydration Boost', link: '/' },
            { name: 'Laser & Light Therapies for Rosacea', link: '/' },
          ]
        },
        {
          id: 'topical-treatments',
          label: 'TOPICAL TREATMENTS',
          treatments: [
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' }
          ]
        },
        {
          id: 'home-care',
          label: 'HOME CARE',
          treatments: [
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' },
            { name: 'Lorem Ipsum', link: '/' }
          ]
        }
      ],
      buttons: [
        { label: 'ACNE TREATMENT IN GURUGRAM', link: '/', isActive: true },
        { label: 'ACNE TREATMENT IN DELHI', link: '/' }
      ],
      imagePosition: 'right'
    },
  ];

  const sectionData = sections || defaultSections;

  // Initialize active tabs
  React.useEffect(() => {
    const initialTabs: { [key: string]: string } = {};
    sectionData.forEach(section => {
      if (section.tabs && section.tabs.length > 0) {
        initialTabs[section.id] = section.tabs[0].id;
      }
    });
    setActiveTab(initialTabs);
  }, []);

  const handleTabClick = (sectionId: string, tabId: string) => {
    setActiveTab(prev => ({ ...prev, [sectionId]: tabId }));
  };

  return (
    <section className={styles.columnSection}>
      <div className={styles.container}>
        {sectionData.map((section, index) => (
          <div key={section.id} id={section.id} className={`${styles.row} ${styles.topspace}`}>
            {/* Image Left or Content Left based on imagePosition */}
            {section.imagePosition === 'left' ? (
              <>
                <div className={styles.imageWrapper}>
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    width={600}
                    height={500}
                    className={styles.sectionImage}
                  />
                </div>
                <div className={styles.contentWrapper}>
                  <h2 className={`mainHeading ${styles.mainHeading}`}>{section.heading}</h2>
                  <p className={styles.description}>{section.description}</p>
                  <div className={styles.treatmentSection}>                    
                    {section.tabs ? (
                      <>
                        <div className={styles.tabsContainer}>
                          {section.tabs.map((tab) => (
                            <button
                              key={tab.id}
                              className={`${styles.tabButton} ${activeTab[section.id] === tab.id ? styles.activeTab : ''}`}
                              onClick={() => handleTabClick(section.id, tab.id)}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>
                        <div className={styles.tagsList}>
                          {section.tabs
                            .find(tab => tab.id === activeTab[section.id])?.treatments
                            .map((treatment, idx) => (
                              <Link key={idx} className={styles.tag} href={treatment.link}>
                                {treatment.name}
                              </Link>
                            ))}
                        </div>
                      </>
                    ) : (
                      <div className={styles.tagsList}>
                        {section.treatments?.map((treatment, idx) => (
                          <Link key={idx} className={styles.tag} href={treatment.link}>
                            {treatment.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className={styles.buttonGroup}>
                    {section.buttons.map((button, idx) => (
                      <Link
                        key={idx}
                        className={`${styles.actionButton} ${button.isActive ? styles.activeActionButton : ''}`}
                        href={button.link}
                      >
                        {button.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.contentWrapper}>
                  <h2 className={`mainHeading ${styles.mainHeading}`}>{section.heading}</h2>
                  <p className={styles.description}>{section.description}</p>
                  <div className={styles.treatmentSection}>
                    {section.tabs ? (
                      <>
                        <div className={styles.tabsContainer}>
                          {section.tabs.map((tab) => (
                            <button
                              key={tab.id}
                              className={`${styles.tabButton} ${activeTab[section.id] === tab.id ? styles.activeTab : ''}`}
                              onClick={() => handleTabClick(section.id, tab.id)}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>
                        <div className={styles.tagsList}>
                          {section.tabs
                            .find(tab => tab.id === activeTab[section.id])?.treatments
                            .map((treatment, idx) => (
                              <Link key={idx} className={styles.tag} href={treatment.link}>
                                {treatment.name}
                              </Link>
                            ))}
                        </div>
                      </>
                    ) : (
                      <div className={styles.tagsList}>
                        {section.treatments?.map((treatment, idx) => (
                          <Link key={idx} className={styles.tag} href={treatment.link}>
                            {treatment.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className={styles.buttonGroup}>
                    {section.buttons.map((button, idx) => (
                      <Link
                        key={idx}
                        className={`${styles.actionButton} ${button.isActive ? styles.activeActionButton : ''}`}
                        href={button.link}
                      >
                        {button.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className={styles.imageWrapper}>
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    width={600}
                    height={500}
                    className={styles.sectionImage}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColumnSection;
