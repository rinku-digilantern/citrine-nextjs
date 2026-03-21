import React from 'react';
import styles from './ReturnPolicyPage.module.css';

const ReturnPolicyPage = () => {
  return (
    <section className={styles.RefundPolicyPage}>
      <div className={styles.container}>
      <div className={styles.commonheader}>
          <h1 className={`mainHeading ${styles.mainHeading}`}>Return Policy</h1>
      </div>
          <p>Citrine Clinic does not accept <strong>returns or exchanges</strong> for any services, treatments, or products once purchased. As treatments and skincare products are personalized and medical in nature, they cannot be reused or resold. Patients are therefore advised to confirm their decision before making any purchase or booking. All sales are considered final once the transaction is completed.</p>
      </div>
    </section>
  );
};

export default ReturnPolicyPage;