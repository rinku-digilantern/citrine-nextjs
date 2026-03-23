"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './OfferDetails.module.css';

interface OfferDetailsProps {
  offer: {
    offer_id: number;
    offer_name: string;
    offer_description: string;
    offer_code: string;
    actual_price: number | null;
    discounted_price: number | null;
    expire_date: string | null;
    offer_image: string;
    full_image: string | null;
    alt_tag: string;
    status: string;
    category: {
      category_id: number;
      category_name: string;
      category_description: string;
    };
  };
}

const OfferDetails: React.FC<OfferDetailsProps> = ({ offer }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submit logic here
    alert('Offer booked!');
  };

  return (
    <section className={styles.offerDetailpage}>
    <div className={styles.offerDetailsContainer}>
      {/* Left Section: Offer Details */}
      <div className={styles.leftSection}>
        <Image
          src={offer.offer_image || "/assets/images/offers/offerdetail01.webp"}
          alt={offer.alt_tag || offer.offer_name || "Offer Image"}
          width={540}
          height={540}
          className={styles.offerImage} />
        <div className={styles.discountTag}>{offer.offer_code || "Offer"}</div>
        <div className={styles.offerTitle}>{offer.offer_name || "Offer Title"}</div>
        <div className={styles.offerSubtitle}>{offer.offer_description || "Offer description not available."}</div>
        {(offer.actual_price || offer.discounted_price) && (
          <div className={styles.priceRow}>
            {offer.discounted_price && (
              <span className={styles.currentPrice}>₹{offer.discounted_price}</span>
            )}
            {offer.actual_price && (
              <span className={styles.oldPrice}>₹{offer.actual_price}</span>
            )}
          </div>
        )}
        {offer.expire_date && (
          <div className={styles.expiry}>Valid till: {offer.expire_date}</div>
        )}
      </div>

      {/* Right Section: Form */}
      <div className={styles.rightSection}>
        <div className={styles.selectedOffer}>
          <label className={styles.label}>Selected Offer</label>
          <div className={styles.selectedOfferInputWrapper}>
            <input
              className={`${styles.input} ${styles.orange} ${styles.selectedOfferInput}`}
              type="text"
              name="selectedOffer"
              value={offer.offer_name || "Selected Offer"}
              readOnly/>
            <span className={styles.selectedOfferIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.013 2.987a2.25 2.25 0 1 1 3.182 3.182l-1.06 1.06-3.182-3.182 1.06-1.06ZM2.5 14.792l8.94-8.94 3.182 3.182-8.94 8.94a1.25 1.25 0 0 1-.53.316l-3.182.91a.25.25 0 0 1-.308-.308l.91-3.182a1.25 1.25 0 0 1 .316-.53Z" fill="#e2b76a"/>
              </svg>
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name</label>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Enter full name"
              value={form.name}
              onChange={handleChange}
              required/>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Enter email address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Mobile Number</label>
            <input
              className={styles.input}
              type="tel"
              name="phone"
              placeholder="Enter mobile number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Select Date</label>
            <input
              className={styles.input}
              type="date"
              name="date"
              placeholder="dd-mm-yyyy"
              value={form.date}
              onChange={handleChange}
              required
              onFocus={e => (e.target.type = 'date')}
              onBlur={e => (e.target.type = 'text')}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Type Message</label>
            <textarea
              className={styles.textarea}
              name="message" rows={4}
              placeholder="Type Message..."
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button className={styles.bookBtn} type="submit">BOOK OFFER</button>
        </form>
      </div>
    </div>
    </section>
  );
};

export default OfferDetails;
