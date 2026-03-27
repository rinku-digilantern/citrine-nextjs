import React from 'react';
import Image from 'next/image';
import styles from './ContactRight.module.css';

interface ContactMethod {
  icon: string;
  label: string;
  content: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: '/assets/images/contact/location.webp',
    label: 'Address',
    content: 'SCO- 19, Huda Market Road Sector 15 Part 2, Market,<br/> Gurugram, Haryana 122001, India.'
  },
  {
    icon: '/assets/images/contact/email.webp',
    label: 'Email',
    content: '<a href="mailto:info@citrineclinic.com">info@citrineclinic.com</a>'
  },
  {
    icon: '/assets/images/contact/phone.webp',
    label: 'Phone',
    content: '<a href="tel:+919868649805">+91-9868649805</a>, <a href="tel:+919810652808">+91-9810652808</a>, <a href="tel:+918042302681">+91-8042302681</a>'
},
  {
    icon: '/assets/images/contact/timing.webp',
    label: 'Hours',
    content: 'Monday - Sunday: 9:00 AM - 8:00 PM'
  }
];

const ContactRight = () => {
  return (
    <div className={styles.contactSidebar}>
      <div className={styles.contactHeader}>
        <h3>Get in Touch</h3>
      </div>

      <div className={styles.contactMethods}>
        {contactMethods.map((method, index) => (
          <div 
            key={index}
            className={`${styles.contactMethod}`}>
            <div className={styles.contactIcon}>
              <Image src={method.icon} alt={method.label} width={24} height={24} />
            </div>
            <div className={styles.contactDetails}>
              <span className={styles.methodLabel}>{method.label}</span>
              <p dangerouslySetInnerHTML={{ __html: method.content }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactRight;