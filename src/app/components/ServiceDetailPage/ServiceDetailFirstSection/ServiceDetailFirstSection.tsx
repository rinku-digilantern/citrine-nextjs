import styles from './ServiceDetailFirstSection.module.css';
import Image from "next/image";

interface Props {
  heading?: string;
  description?: string;
  content?: string; // Additional prop from user
  image?: string;
  costRange?: string;
  classAdd?: string; // Additional prop from user
}

export default function ServiceDetailFirstSection({ heading, description, content, image, costRange, classAdd }: Props) {
  const displayContent = content || description;
  
	return (
		<section className={`${styles.ServiceDetailFirstSection} ${classAdd ? styles[classAdd] || classAdd : ''}`}>
      <div className={styles.container}>
          <div className={styles.contentRow}>
            <div className={styles.leftContent}>
               {heading && <h1 className={`mainHeading ${styles.mainHeading}`}>{heading}</h1>}
               
               {costRange && (
                 <div className={styles.costBox}>
                    <em>Price Range: <b>{costRange}</b></em>
                 </div>
               )}

               <div 
                 className={styles.description} 
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
