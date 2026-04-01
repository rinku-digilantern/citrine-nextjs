"use client";
import React from "react";
import Image from "next/image";
import styles from "./SkinClinicGurgaonThirdSection.module.css";

interface Props {
  section: {
    image?: string;
    mobileImage?: string;
    mainHeading?: string;
    paragraph: string;
  } | null;
}

const SkinClinicGurgaonThirdSection: React.FC<Props> = ({ section }) => {
  if (!section) return null;

  const imgSrc = section.image || section.mobileImage || "";
  const heading = section.mainHeading || section.mainHeading || '';
  const paragraph = section.paragraph || section.paragraph || '';

  return (
    <section className={styles.SkinClinicGurgaonThirdSection}>
      <div className={styles.container}>
        <div className={styles.boxcontent}>
          <div className={styles.imagebox}>
            <Image src={imgSrc} alt={section.image || "image"} className={styles.image} width={700} height={550} />
          </div>

          <div className={styles.textrightcontent}>
            {heading && (
              <h2 className={`mainHeading ${styles.heading}`}>{heading}</h2>
            )}
            {paragraph && (
              <p dangerouslySetInnerHTML={{ __html: paragraph }} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinClinicGurgaonThirdSection;
