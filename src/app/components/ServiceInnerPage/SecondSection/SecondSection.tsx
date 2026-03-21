import React from 'react';
import Image from 'next/image';
import styles from './SecondSection.module.css';

interface SecondSectionProps {
  title?: string;
  content?: string[];
  image?: string;
  imageAlt?: string;
  videoUrl?: string;
}

const SecondSection: React.FC<SecondSectionProps> = ({
  title,
  content,
  image,
  imageAlt,
  videoUrl
}) => {
  const sectionTitle = title || 'WHAT IS LASER TONING?';
  
  const defaultContent = [
    'Laser toning is a dermatological procedure that uses low-energy laser technology to target melanin deposits in the skin and improve overall complexion. The laser energy works beneath the skin surface to break down excess pigment while also stimulating collagen production, which helps improve skin texture and brightness.',
    'The treatment is widely used for people dealing with uneven skin tone, dullness, melasma, and stubborn pigmentation. Because it is a non-invasive procedure with minimal downtime, laser toning has become a popular skin rejuvenation treatment. When performed by experienced dermatologists such as those at Citrine Clinic, the treatment is carefully tailored to ensure safe and natural-looking results.'
  ];

  const paragraphs = content || defaultContent;
  const treatmentImage = image || '/assets/images/serviceinnerpage/lasertonings.webp';
  const altText = imageAlt || 'Laser Treatment Process';

  return (
    <section className={styles.secondSection} id="what-is">
      <div className={styles.contentWrapper}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          <h2 className={styles.mainHeading}>{sectionTitle}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>{paragraph}</p>
          ))}
        </div>

        {/* Right Image */}
        <div className={styles.rightContent}>
          <div className={styles.imageWrapper}>
            <Image
              src={treatmentImage}
              alt={altText}
              width={600}
              height={400}
              className={styles.treatmentImage}
            />
            <div className={styles.playButton}>
              <div className={styles.playIcon}>▶</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;