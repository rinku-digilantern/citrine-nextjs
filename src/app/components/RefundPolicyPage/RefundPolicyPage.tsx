import React from 'react';
import styles from './RefundPolicyPage.module.css';

const RefundPolicyPage = () => {
  return (
  <section className={styles.RefundPolicyPage}>
    <div className={styles.container}>
    <div className={styles.commonheader}>
        <h1 className={`mainHeading ${styles.mainHeading}`}>Refund Policy</h1>
    </div>
      <p>
        At Citrine Clinic, we are committed to providing the highest standards of care and service. Once a treatment, package, or procedure has been purchased or initiated, <strong>no refunds will be issued under any circumstances.</strong> This includes situations where the patient decides to discontinue or not complete the treatment for personal reasons. All payments made towards consultations, procedures, and treatment packages are <strong>non-refundable and non-transferable.</strong>
        <br /><br /> 
        In case a treatment cannot be performed due to medical reasons or at the discretion of the doctor, the value of the unused portion may be adjusted against another service, subject to management approval.
      </p>
    </div>
  </section>
  );
};

export default RefundPolicyPage;