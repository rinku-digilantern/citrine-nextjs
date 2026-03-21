'use client';
import React, { useState } from 'react';
import styles from './ContactLeft.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
 message: string;
}

const ContactLeft = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Replace with your API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.formIntro}>
        <h1 className={`mainHeading ${styles.mainHeading}`}>Send us a message</h1>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
      </div>

      <form onSubmit={handleSubmit} className={`${styles.phpEmailForm} ${styles.contactForm}`}>
        <div className={styles.row}>
          <div className={styles.colMd6}>
            <div className={styles.formField}>
              <label htmlFor="userName" className={styles.fieldLabel}>Name</label>
              <input
                type="text"
                name="name"
                className={styles.formInput}
                id="userName"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required/>
            </div>
          </div>

          <div className={styles.colMd6}>
            <div className={styles.formField}>
             <label htmlFor="userEmail" className={styles.fieldLabel}>Email</label>
              <input
                type="email"
                className={styles.formInput}
                name="email"
                id="userEmail"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required />
            </div>
          </div>
        </div>

        <div className={styles.formField}>
        <label htmlFor="userPhone" className={styles.fieldLabel}>Phone</label>
              <input
                type="tel"
                className={styles.formInput}
                name="phone"
                id="userPhone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}/>
        </div>

        <div className={`${styles.formField} ${styles.messageField}`}>
         <label htmlFor="userMessage" className={styles.fieldLabel}>Message</label>
          <textarea
            className={`${styles.formInput} ${styles.messageInput}`}
            name="message"
            id="userMessage"
            rows={3}
            placeholder="Tell us about your project"
            value={formData.message}
            onChange={handleChange}
            required />
        </div>
        <button type="submit" className={styles.sendButton} disabled={loading}>
          Submit
          <span className={styles.buttonArrow}>→</span>
        </button>
      </form>
    </div>
  );
};

export default ContactLeft;