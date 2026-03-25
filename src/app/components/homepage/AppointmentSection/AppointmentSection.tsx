"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AppointmentSection.module.css';

interface CaptchaData {
  captchashow: string;     // text (not displayed to user)
  captchashows: string;    // base64 image
  uniqid: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
  captcha: string;
}

type FormErrors = Partial<FormState>;

const CAPTCHA_API   = 'https://api.citrineclinic.com/api/googlecaptcha';
const APPT_API      = 'https://api.citrineclinic.com/api/appointment';

const services = [
  'Skin Treatment',
  'Hair Treatment',
  'Laser Treatment',
  'Anti-Aging Treatment',
  'Other Services',
];

const AppointmentSection = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormState>({
    name: '', email: '', phone: '', service: '', date: '', message: '', captcha: '',
  });
  const [errors, setErrors]         = useState<FormErrors>({});
  const [captcha, setCaptcha]       = useState<CaptchaData | null>(null);
  const [status, setStatus]         = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg]     = useState('');
  const [minDate, setMinDate]       = useState('');

  // ── Fetch CAPTCHA ────────────────────────────────────────────────────────────
  const fetchCaptcha = useCallback(async () => {
    try {
      // Append a timestamp to perfectly avoid browser cache
      const res  = await fetch(`${CAPTCHA_API}?t=${new Date().getTime()}`, { cache: 'no-store' });
      const data = await res.json();
      setCaptcha(data);
      setFormData(prev => ({ ...prev, captcha: '' })); // clear captcha input on refresh
    } catch {
      setCaptcha(null);
    }
  }, []);

  useEffect(() => { 
    fetchCaptcha(); 
    // Set today's date for the date picker minimum
    const today = new Date();
    // Offset to local timezone to avoid weird UTC date shifting bugs
    const localDate = new Date(today.getTime() - (today.getTimezoneOffset() * 60000));
    setMinDate(localDate.toISOString().split('T')[0]);
  }, [fetchCaptcha]);

  // ── Input handler ────────────────────────────────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // ── Validation ───────────────────────────────────────────────────────────────
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

    if (!formData.service) {
      newErrors.service = 'Please select a service';
      isValid = false;
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
      isValid = false;
    }

    if (!formData.captcha.trim()) {
      newErrors.captcha = 'Captcha is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // ── Submit ───────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captcha) return;

    if (!validateForm()) return;

    setStatus('loading');
    setErrorMsg('');

    const payload = {
      name:    formData.name,
      phone:   formData.phone,
      email:   formData.email,
      date:    formData.date,
      captcha: formData.captcha,
      uncode:  captcha.uniqid,
      source:  'website',
      referer: typeof window !== 'undefined' ? window.location.href : '',
      message: formData.message,
      service: formData.service,
    };

    try {
      const res  = await fetch(APPT_API, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok && (data.success || data.status === 'success' || data.title === 'Success')) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '', captcha: '' });
        router.push('/thank-you');
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Submission failed. Please check your captcha and try again.');
        fetchCaptcha(); // refresh captcha on failure
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  return (
    <section id="appointment" className={styles.appointmentSection}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h2 className={`subheading ${styles.subheading}`}>REQUEST AN APPOINTMENT</h2>

          {status === 'success' ? (
            <div className={styles.successMsg}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#DE9736" opacity="0.15"/>
                <path d="M14 24l8 8 12-14" stroke="#DE9736" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Thank you! Your appointment request has been received. We&apos;ll contact you shortly.</p>
              <button className={styles.submitButton} onClick={() => setStatus('idle')}>
                BOOK ANOTHER
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} noValidate autoComplete="off">

              {/* Row 1: Name, Email, Phone */}
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <input
                    type="text" name="name" placeholder="Enter Name*"
                    value={formData.name} onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`} required
                    autoComplete="off"
                  />
                  {errors.name && <span className={styles.fieldError}>{errors.name}</span>}
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="email" name="email" placeholder="Email Address*"
                    value={formData.email} onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`} required
                    autoComplete="off"
                  />
                  {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="tel" name="phone" placeholder="Phone Number*"
                    value={formData.phone} onChange={handleChange}
                    className={`${styles.input} ${errors.phone ? styles.inputError : ''}`} required
                    autoComplete="off"
                  />
                  {errors.phone && <span className={styles.fieldError}>{errors.phone}</span>}
                </div>
              </div>

              {/* Row 2: Service, Date */}
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <select
                    id="appointmentType" name="service" aria-label="Select appointment type"
                    value={formData.service} onChange={handleChange}
                    className={`${styles.select} ${errors.service ? styles.inputError : ''}`} required
                  >
                    <option value="">Select Service*</option>
                    {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <span className={styles.fieldError}>{errors.service}</span>}
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="date" name="date" placeholder="Select date*"
                    value={formData.date} onChange={handleChange}
                    min={minDate}
                    className={`${styles.input} ${errors.date ? styles.inputError : ''}`} required
                  />
                  {errors.date && <span className={styles.fieldError}>{errors.date}</span>}
                </div>
              </div>

              {/* Row 3: Message */}
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <textarea
                    name="message" placeholder="Type Message"
                    value={formData.message} onChange={handleChange}
                    className={styles.textarea} rows={4}
                  />
                </div>
              </div>

              {/* Row 4: CAPTCHA */}
              <div className={`${styles.formRow} ${styles.captchaRow}`}>
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
                <div className={styles.inputGroup}>
                  <input
                    type="text" name="captcha" placeholder="Enter Captcha*"
                    value={formData.captcha} onChange={handleChange}
                    className={`${styles.input} ${errors.captcha ? styles.inputError : ''}`} required
                    autoComplete="off"
                  />
                  {errors.captcha && <span className={styles.fieldError}>{errors.captcha}</span>}
                </div>
              </div>

              {/* Error */}
              {status === 'error' && (
                <p className={styles.errorMsg}>{errorMsg}</p>
              )}

              {/* Submit */}
              <div className={styles.buttonWrapper}>
                <button
                  type="submit"
                  className={styles.submitButton}
                  aria-label="Submit appointment form"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'SUBMITTING…' : 'SUBMIT'}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;