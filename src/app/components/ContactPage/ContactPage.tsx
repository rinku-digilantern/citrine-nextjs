import React from 'react';
import ContactLeft from './ContactLeft/ContactLeft';
import ContactRight from './ContactRight/ContactRight';
import ContactMap from './ContactMap/ContactMap';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.wrapper}>
        <div className={styles.contactGrid}>
          <div className={styles.contactLeft}>
            <ContactLeft />
          </div>
          <div className={styles.contactRight}>
            <ContactRight />
          </div>
        </div>
        <ContactMap />
      </div>
    </div>
  );
};

export default ContactPage;
