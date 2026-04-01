'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ContactLeft.module.css';

interface CaptchaData {
  captchashow: string;
  captchashows: string;
  uniqid: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  captcha: string;
  message: string;
}

type FormErrors = Partial<FormData>;

const CAPTCHA_API = 'https://api.citrineclinic.com/api/googlecaptcha';
const CONTACT_API = 'https://api.citrineclinic.com/api/contacts';

const ContactLeft = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', message: '', captcha: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [captcha, setCaptcha] = useState<CaptchaData | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

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

  useEffect(() => { fetchCaptcha(); }, [fetchCaptcha]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { name, value } = e.target;

    // Reject numbers & special chars in Name
    if (name === 'name') {
      value = value.replace(/[^a-zA-Z\s]/g, '');
    }

    // Keep only numbers in Phone, limit to max 12 digits
    if (name === 'phone') {
      value = value.replace(/[^\d]/g, '').slice(0, 12);
    }

    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear the specific error when user types
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

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    if (!formData.captcha.trim()) {
      newErrors.captcha = 'Captcha is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captcha) return;

    if (!validateForm()) return;

    setLoading(true);
    setErrorMsg('');

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      captcha: formData.captcha,
      message: formData.message,
      uncode: captcha.uniqid,
      source: 'website',
      referer: typeof window !== 'undefined' ? window.location.href : ''
    };

    try {
      const response = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && (data.success || data.status === 'success' || data.title === 'Success')) {
        setFormData({ name: '', email: '', phone: '', message: '', captcha: '' });
        router.push('/thankyou');
      } else {
        setErrorMsg(data.message || 'Submission failed. Please check your captcha and try again.');
        fetchCaptcha();
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again.');
      fetchCaptcha();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.formIntro}>
        <h1 className={`mainHeading ${styles.mainHeading}`}>Send us a message</h1>
      </div>

      <form onSubmit={handleSubmit} className={`${styles.phpEmailForm} ${styles.contactForm}`} noValidate autoComplete="off">
        <div className={styles.row}>
          <div className={styles.colMd6}>
            <div className={styles.formField}>
              <label htmlFor="userName" className={styles.fieldLabel}>Name</label>
              <input
                type="text"
                name="name"
                className={`${styles.formInput} ${errors.name ? styles.inputError : ''}`}
                id="userName"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              {errors.name && <span className={styles.fieldError}>{errors.name}</span>}
            </div>
          </div>

          <div className={styles.colMd6}>
            <div className={styles.formField}>
              <label htmlFor="userEmail" className={styles.fieldLabel}>Email</label>
              <input
                type="email"
                className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
                name="email"
                id="userEmail"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
            </div>
          </div>
        </div>

        <div className={styles.formField}>
          <label htmlFor="userPhone" className={styles.fieldLabel}>Phone</label>
          <input
            type="tel"
            className={`${styles.formInput} ${errors.phone ? styles.inputError : ''}`}
            name="phone"
            id="userPhone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.phone && <span className={styles.fieldError}>{errors.phone}</span>}
        </div>

        <div className={`${styles.formField} ${styles.messageField}`}>
          <label htmlFor="userMessage" className={styles.fieldLabel}>Message</label>
          <textarea
            className={`${styles.formInput} ${styles.messageInput} ${errors.message ? styles.inputError : ''}`}
            name="message"
            id="userMessage"
            rows={3}
            placeholder="Tell us about your project"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <span className={styles.fieldError}>{errors.message}</span>}
        </div>

        {/* CAPTCHA */}
        <div className={`${styles.formField} ${styles.captchaRow}`}>
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
              className={`${styles.formInput} ${errors.captcha ? styles.inputError : ''}`}
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

        <button type="submit" className={styles.sendButton} disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
          <span className={styles.buttonArrow}>→</span>
        </button>
      </form>
    </div>
  );
};

export default ContactLeft;