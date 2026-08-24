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
        This Refund Policy (&ldquo;Policy&rdquo;) forms an integral part of the terms and conditions governing services provided by Citrine Clinic (&ldquo;Clinic&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) and shall be binding upon all patients, clients, and users (&ldquo;Patient&rdquo;, &ldquo;you&rdquo;). By booking an appointment, undergoing consultation, purchasing any treatment package, or making any payment to the Clinic, the Patient unconditionally acknowledges, accepts, and agrees to be bound by this Policy.
        <br /><br />
        The Patient further agrees that this Policy is reasonable, necessary for the nature of medical/aesthetic services rendered, and enforceable to the maximum extent permitted under applicable law.
      </p>

      <h2>Nature of Services and No Guarantee Principle</h2>
      <p>
        The Patient expressly acknowledges that the services provided by the Clinic are medical/aesthetic in nature and inherently result-dependent, and that outcomes may vary significantly between individuals due to factors including but not limited to biological and physiological differences, skin type, hormonal influences, lifestyle factors, compliance with post-treatment care instructions, and response variability.
      </p>
      <p>
        Accordingly, the Clinic makes no representations, warranties, guarantees, or assurances regarding results or outcomes.
      </p>

      <h2>Absolute No Refund Principle</h2>
      <p>
        Subject to applicable law, all payments made to the Clinic are strictly non-refundable, whether paid in advance, in part, or in full, and whether classified as consultation fees, diagnostic fees, treatment fees, package fees, registration fees, or otherwise.
      </p>
      <p>
        All payments are strictly <strong>non-refundable under all circumstances</strong> including change of mind, dissatisfaction, non-achievement of results, inability to attend appointments, discontinuation, adverse reactions, relocation, or partial use.
      </p>
      <p>
        Refunds shall not be available under any circumstances whatsoever, including but not limited to the following events:
      </p>

      <h3>2.1 Patient-Initiated Events</h3>
      <p>Refund shall not be admissible where the Patient:</p>
      <ul>
        <li>Changes decision after booking or payment; or</li>
        <li>Fails or refuses to commence or continue treatment; or</li>
        <li>Voluntarily discontinues or abandons treatment midway; or</li>
        <li>Is unable to attend appointments for any reason including travel, relocation, personal inconvenience, or scheduling conflicts; or</li>
        <li>Claims financial inability after payment; or</li>
        <li>Fails to comply with prescribed treatment protocol or instructions; or</li>
        <li>Is dissatisfied with consultation, diagnosis, or treatment plan; or</li>
        <li>Books services in error or without full understanding.</li>
      </ul>

      <h3>2.2 Medical Outcome / Treatment-Related Events</h3>
      <p>No refund shall be provided in cases involving:</p>
      <ul>
        <li>Non-achievement of expected or desired results; or</li>
        <li>Partial, temporary, or variable results; or</li>
        <li>Requirement of additional sessions beyond initial expectation; or</li>
        <li>Recurrence or persistence of medical/aesthetic condition; or</li>
        <li>Side effects, reactions, or post-treatment complications (whether anticipated or unanticipated); or</li>
        <li>Delayed or gradual response to treatment; or</li>
        <li>Differences in results compared to other individuals or expectations.</li>
      </ul>
      <p>
        The Patient acknowledges that such outcomes are medically plausible and do not constitute deficiency in service.
      </p>

      <h3>2.3 Service Delivery and Clinical Discretion Events</h3>
      <p>No refund shall arise in cases involving:</p>
      <ul>
        <li>Change or substitution of treating doctor, technician, or clinical staff; or</li>
        <li>Rescheduling of appointments due to clinical availability; or</li>
        <li>Adjustment of treatment sequencing or plan based on medical assessment; or</li>
        <li>Temporary unavailability of equipment, consumables, or infrastructure; or</li>
        <li>Minor delays in appointment scheduling or execution.</li>
      </ul>
      <p>
        In such cases, the sole remedy available to the Patient shall be rescheduling of services.
      </p>

      <h3>2.4 Package, Validity, and Utilisation Events</h3>
      <p>Refund shall not be applicable in respect of:</p>
      <ul>
        <li>Expiry of treatment packages (validity: 12 months or as specified); or</li>
        <li>Non-utilisation or partial utilisation of sessions within validity period; or</li>
        <li>Missed appointments for any reason whatsoever; or</li>
        <li>Failure to complete full treatment cycle; or</li>
        <li>Ineligibility for continuation of treatment due to medical reassessment; or</li>
        <li>Lapse of unused sessions upon expiry of validity.</li>
      </ul>
      <p>
        All unused services shall automatically lapse without any liability on the Clinic.
      </p>

      <h3>2.5 External / Force Majeure Events</h3>
      <p>
        The Clinic shall not be liable to refund any amount in case of delay, interruption, or non-performance arising from circumstances beyond its reasonable control, including but not limited to:
      </p>
      <ul>
        <li>Natural calamities (floods, earthquakes, fire, etc.)</li>
        <li>Epidemics, pandemics, or public health emergencies</li>
        <li>Government restrictions, lockdowns, or regulatory actions</li>
        <li>Labour disputes, strikes, or civil disturbances</li>
        <li>Power failures, technical breakdowns, or infrastructure disruptions</li>
      </ul>
      <p>In all such cases, services shall be rescheduled as soon as practicable.</p>

      <h2>3. Commencement of Treatment and Accrual of Charges</h2>
      <p>Once a treatment package or any part thereof has commenced:</p>
      <ul>
        <li>The Patient shall be deemed to have irrevocably accepted the services.</li>
        <li>The Clinic shall be entitled to full consideration for the package or services.</li>
        <li>No refund, set-off, adjustment, or proportionate reduction shall be permitted.</li>
      </ul>
      <p>Partial consumption shall not entitle the Patient to any reimbursement.</p>

      <h2>4. Consultation, Diagnosis, and Assessment Fees</h2>
      <p>
        All fees paid towards consultation, diagnosis, skin analysis, evaluation, or treatment planning are:
      </p>
      <ul>
        <li>Fully earned upon completion of service delivery;</li>
        <li>Strictly non-adjustable and non-refundable;</li>
        <li>Independent of whether the Patient proceeds with further treatment.</li>
      </ul>

      <h2>5. Appointment-Based Service Model</h2>
      <p>
        All services are strictly rendered on an appointment basis. The Patient acknowledges that:
      </p>
      <ul>
        <li>Appointment availability is subject to clinical scheduling and operational constraints.</li>
        <li>The Clinic may reschedule appointments due to unavailability of medical personnel or other operational reasons.</li>
        <li>Such rescheduling shall not entitle the Patient to any refund or compensation.</li>
        <li>The Clinic&rsquo;s obligation shall be limited to offering a mutually convenient alternate appointment.</li>
      </ul>

      <h2>6. Package Transfer (Exceptional Discretionary Relief Only)</h2>
      <p>
        No refund shall be substituted with credit, cash equivalent, or monetary compensation.
      </p>
      <p>
        However, strictly at the sole discretion of the Clinic, and subject to written approval, unused package value may be permitted to be transferred to an immediate family member or nominee, subject to:
      </p>
      <ul>
        <li>Medical suitability and eligibility assessment of transferee; and</li>
        <li>Execution of fresh registration and documentation; and</li>
        <li>Payment of differential charges, if applicable; and</li>
        <li>Compliance with prevailing Clinic policies.</li>
      </ul>
      <p>
        Such permission shall not create any precedent or right in favour of the Patient.
      </p>

      <h2>7. Limited Discretionary Refunds (If Any)</h2>
      <p>Refunds, if approved in exceptional cases, shall:</p>
      <ul>
        <li>Be entirely discretionary and not a matter of right.</li>
        <li>Be computed based on services actually rendered at standalone prevailing rates at the time of refund processing.</li>
        <li>Be subject to deduction of consultation fees, administrative charges, and transaction costs.</li>
        <li>Be processed only to the original payment method unless otherwise determined by the Clinic.</li>
        <li>Be subject to internal verification and approval timelines.</li>
      </ul>
      <p>
        The Clinic&rsquo;s determination regarding refund eligibility, computation, and quantum shall be final and binding.
      </p>

      <h2>8. No Chargeback or Dispute Rights</h2>
      <p>The Patient expressly agrees and undertakes:</p>
      <ul>
        <li>Not to initiate chargebacks or payment reversals in violation of this Policy;</li>
        <li>That all payments are voluntary and made with full understanding of terms;</li>
        <li>That disputes, if any, shall be subject to Clinic&rsquo;s internal resolution mechanism first;</li>
        <li>That this Policy shall operate as a contractual waiver to the maximum extent permitted by law.</li>
      </ul>

      <h2>9. No Waiver of Clinic Rights</h2>
      <p>
        No failure or delay by the Clinic in enforcing any provision of this Policy shall be deemed a waiver of its rights. The Clinic reserves all rights available under law and equity.
      </p>

      <h2>10. Amendments</h2>
      <p>
        The Clinic reserves the absolute right to amend, modify, or update this Policy at any time without prior notice. The revised Policy shall become effective upon publication on the Clinic&rsquo;s website.
      </p>
    </div>
  </section>
  );
};

export default RefundPolicyPage;
