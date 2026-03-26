import styles from './ServiceDetailFirstSection.module.css';
import Image from "next/image";
import React from 'react';

interface Props {
  heading?: string;
  description?: string;
  content?: string; // Additional prop from user
  image?: string;
  headingtag?: React.ElementType | string; // New prop to specify heading tag
  costRange?: string;
  classAdd?: string; // Additional prop from user
}

export default function ServiceDetailFirstSection({ heading, description, content, image, costRange, classAdd, headingtag }: Props) {
  const displayContent = content || description;
  const HeadingTag = (headingtag ?? 'div') as React.ElementType;
  
	return (

		<section className={`${styles.ServiceDetailFirstSection} ${classAdd ? styles[classAdd] || classAdd : ''}`}>
      <div className={styles.container}>
          <div className={styles.contentRow}>
            <div className={styles.leftContent}>
               {heading && (
                 <HeadingTag className={`mainHeading ${styles.mainHeading}`}>{heading}</HeadingTag>
               )}
               
               {costRange && (
                 <div className={styles.costBox}>
                    <em>Price Range: <b>{costRange}</b></em>
                 </div>
               )}

               <div 
                 className={`${styles.description} ${classAdd ? styles[classAdd] || classAdd : ''}`}
                 dangerouslySetInnerHTML={{ __html: displayContent || "" }} 
               />
            </div>
            
            {image && (
              <div className={styles.rightContent}>
                <Image 
                  src={image} 
                  width={680} 
                  height={500} 
                  alt={heading || "Service image"} 
                  className={styles.treatmentImage}
                />
              </div>
            )}
          </div>
      </div>
		</section>
	);
}
