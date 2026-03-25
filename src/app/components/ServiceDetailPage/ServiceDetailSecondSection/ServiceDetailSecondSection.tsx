import React from "react";
import styles from "./ServiceDetailSecondSection.module.css";

interface Props {
  heading?: string;
  content?: string;
  classAdd?: string;
}

const ServiceDetailSecondSection: React.FC<Props> = ({ heading, content, classAdd }) => {
  if (!content && !heading) return null;
  
  return (
    <section className={`${styles.ServiceDetailSecondSection} ${classAdd ? styles[classAdd] || classAdd : ''}`}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          {heading && <h2 className={`mainHeading ${styles.mainHeading}`}>{heading}</h2>}
          {content && (
            <div 
              className={styles.description} 
              dangerouslySetInnerHTML={{ __html: content }} 
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSecondSection;
