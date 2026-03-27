import React from "react";
import styles from "./ServiceDetailSecondSection.module.css";
import Image from "next/image";
import { wrapTablesInScrollDiv } from "@/src/lib/tableWrapper";

interface Props {
  heading?: string;
  content?: string;
  classAdd?: string;
  image?: string;
  headingtag?: React.ElementType | string; // New prop to specify heading tag
}

const ServiceDetailSecondSection: React.FC<Props> = ({ heading, content, classAdd, image, headingtag }) => {
  const HeadingTag = (headingtag ?? 'div') as React.ElementType;
  if (!content && !heading) return null;
  
  return (
    <section className={`${styles.ServiceDetailSecondSection}`}>
      <div className={styles.container}>
        <div className={`${styles.contentBox} ${classAdd ? styles[classAdd] || classAdd : ''}`}>
           <div className={styles.rightbox}>
               {heading && <HeadingTag className={`mainHeading ${styles.mainHeading}`}>{heading}</HeadingTag>}
          {content && (
            <div 
              className={styles.description} 
              dangerouslySetInnerHTML={{ __html: wrapTablesInScrollDiv(content) }} />
          )}
           </div>
          {image && (
          <div className={styles.imageBox}>
          <Image 
            src={image} 
            width={1500} 
            height={500} 
            alt="Decorative background" 
            className={styles.backgroundImage}
          />
          </div>
        )}
        </div>
        
      </div>
    </section>
  );
};

export default ServiceDetailSecondSection;
