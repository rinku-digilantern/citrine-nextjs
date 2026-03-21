import React from 'react';
import styles from './ContactMap.module.css';

const ContactMap = () => {
  return (
    <div className={styles.mapContainer}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56123.57405155915!2d77.044677!3d28.457754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19a3645dcd1b%3A0x55620b9e51afd7a6!2sCitrine%20Clinic%20by%20Dr%20Niti%20Gaur!5e0!3m2!1sen!2sin!4v1668685384719!5m2!1sen!2sin" 
        frameBorder="0" 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location" 
        style={{ border: 0, display: 'block' }}
      />
    </div>
  );
};

export default ContactMap;