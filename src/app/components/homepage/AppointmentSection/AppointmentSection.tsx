"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './AppointmentSection.module.css';

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const services = [
    'Skin Treatment',
    'Hair Treatment',
    'Laser Treatment',
    'Anti-Aging Treatment',
    'Other Services'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section id="appointment" className={styles.appointmentSection}>
    {/* <Image src="/assets/images/home/appointmentbg.webp" className={styles.bannerImage} alt="Appointment Banner" width={1440} height={620} /> */}
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h2 className={`subheading ${styles.subheading}`}>REQUEST AN APPOINTMENT</h2>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Row 1: Name, Email, Phone */}
            <div className={styles.formRow}>
              <input
                type="text"
                name="name"
                placeholder="Enter Name*"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            {/* Row 2: Service, Date */}
            <div className={styles.formRow}>
              <select id="appointmentType" aria-label="Select appointment type" name="service"
                value={formData.service}
                onChange={handleChange}
                className={styles.select}
                required>
                <option value="">Select Service*</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <input
                type="date"
                name="date"
                placeholder="Select date*"
                value={formData.date}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            {/* Row 3: Message */}
            <div className={styles.formRow}>
              <textarea
                name="message"
                placeholder="Type Message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <div className={styles.buttonWrapper}>
              <button type="submit" className={styles.submitButton} aria-label="Submit Button">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;