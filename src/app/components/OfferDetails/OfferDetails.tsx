"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './OfferDetails.module.css';

interface CaptchaData {
  captchashow: string;
  captchashows: string;
  uniqid: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
  captcha: string;
}

type FormErrors = Partial<FormData>;

const CAPTCHA_API = 'https://api.citrineclinic.com/api/googlecaptcha';
const APPT_API = 'https://api.citrineclinic.com/api/appointment';

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
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', date: '', message: '', captcha: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [captcha, setCaptcha] = useState<CaptchaData | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [minDate, setMinDate] = useState('');

  // ── Fetch CAPTCHA 
  const fetchCaptcha = useCallback(async () => {
    try {
      const res = await fetch(`${CAPTCHA_API}?t=${new Date().getTime()}`, { cache: 'no-store' });
      const data = await res.json();
      setCaptcha(data);
      setFormData(prev => ({ ...prev, captcha: '' }));
    } catch {
      setCaptcha(null);
    }
  }, []);

  useEffect(() => {
    fetchCaptcha();
    // Set today's date for the date picker minimum in local timezone
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setMinDate(`${yyyy}-${mm}-${dd}`);
  }, [fetchCaptcha]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { name, value } = e.target;

    if (name === 'name') {
      value = value.replace(/[^a-zA-Z\s]/g, '');
    }

    if (name === 'phone') {
      value = value.replace(/[^\d]/g, '').slice(0, 12);
    }

    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // ── Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email) || formData.email.includes('..')) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (formData.phone.length < 10) {
      newErrors.phone = 'Phone number must be at least 10 digits';
      isValid = false;
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
      isValid = false;
    } else if (minDate && formData.date < minDate) {
      newErrors.date = 'Please select today or a future date';
      isValid = false;
    }

    if (!formData.captcha.trim()) {
      newErrors.captcha = 'Captcha is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captcha) return;

    if (!validateForm()) return;

    setLoading(true);
    setErrorMsg('');

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      date: formData.date,
      captcha: formData.captcha,
      uncode: captcha.uniqid,
      source: 'website',
      referer: typeof window !== 'undefined' ? window.location.href : '',
      message: formData.message,
      service: `Offer: ${offer.offer_name}`, // Map offer name into service
    };

    try {
      const res = await fetch(APPT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && (data.success || data.status === 'success' || data.title === 'Success')) {
        setFormData({ name: '', email: '', phone: '', date: '', message: '', captcha: '' });
        router.push('/thankyou');
      } else {
        setErrorMsg(data.message || 'Submission failed. Please check your captcha and try again.');
        fetchCaptcha();
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      fetchCaptcha();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.offerDetailpage}>
      <div className={styles.offerDetailsContainer}>
        {/* Left Section: Offer Details */}
        <div className={styles.leftSection}>
          <Image
            src={offer.offer_image ? `https://api.citrineclinic.com/backend/offer/${offer.offer_image}` : "/assets/images/offers/offerdetail01.webp"}
            alt={offer.alt_tag || offer.offer_name || "Offer Image"}
            width={540}
            height={540}
            className={styles.offerImage}
          />
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
                readOnly
              />
              <span className={styles.selectedOfferIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.013 2.987a2.25 2.25 0 1 1 3.182 3.182l-1.06 1.06-3.182-3.182 1.06-1.06ZM2.5 14.792l8.94-8.94 3.182 3.182-8.94 8.94a1.25 1.25 0 0 1-.53.316l-3.182.91a.25.25 0 0 1-.308-.308l.91-3.182a1.25 1.25 0 0 1 .316-.53Z" fill="#e2b76a" />
                </svg>
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name</label>
              <input
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                type="text"
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              {errors.name && <span className={styles.fieldError}>{errors.name}</span>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Mobile Number</label>
              <input
                className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                type="tel"
                name="phone"
                placeholder="Enter mobile number"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              {errors.phone && <span className={styles.fieldError}>{errors.phone}</span>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Select Date</label>
              <input
                key={minDate}
                className={`${styles.input} ${errors.date ? styles.inputError : ''}`}
                type="date"
                name="date"
                placeholder="dd-mm-yyyy"
                value={formData.date}
                onChange={handleChange}
                min={minDate}
                required
              />
              {errors.date && <span className={styles.fieldError}>{errors.date}</span>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Type Message</label>
              <textarea
                className={styles.textarea}
                name="message"
                rows={4}
                placeholder="Type Message..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* CAPTCHA */}
            <div className={`${styles.formGroup} ${styles.captchaRow}`}>
              <div className={styles.captchaBox}>
                {captcha ? (
                  <img
                    src={`data:image/jpeg;base64,${captcha.captchashows}`}
                    alt="Captcha"
                    className={styles.captchaImg}
                  />
                ) : (
                  <div className={styles.captchaPlaceholder}>Loading…</div>
                )}
                <button
                  type="button"
                  onClick={fetchCaptcha}
                  className={styles.captchaRefresh}
                  title="Refresh Captcha"
                  aria-label="Refresh Captcha"
                >
                  ↻
                </button>
              </div>
              <div className={styles.captchaInputBox}>
                <input
                  type="text"
                  name="captcha"
                  placeholder="Enter Captcha*"
                  value={formData.captcha}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.captcha ? styles.inputError : ''}`}
                  required
                  autoComplete="off"
                />
                {errors.captcha && <span className={styles.fieldError}>{errors.captcha}</span>}
              </div>
            </div>

            {errorMsg && (
              <div className={styles.apiErrorMsg}>
                {errorMsg}
              </div>
            )}

            <button className={styles.bookBtn} type="submit" disabled={loading}>
              {loading ? 'SUBMITTING...' : 'BOOK OFFER'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OfferDetails;
