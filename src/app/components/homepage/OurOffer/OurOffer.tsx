'use client'
import React from 'react';
import Image from "next/image";
import styles from './OurOffer.module.css';
import Link from 'next/link';

const OurOffer = () => {
  const offers = [
    {
      id: 1,
      image: '/assets/images/home/offer01.webp',
      alttag: 'The Secret to Youthful Skin | Skinvive Skin Booster',
      subtitle: 'The Secret to Youthful Skin | Skinvive Skin Booster',
      bgColor: '#DEB896'
    },
    {
      id: 2,
      image: '/assets/images/home/offer02.webp',
      alttag: 'Say Goodbye to Hair Fall | 8 Sessions of GFC Therapy',
      subtitle: 'Say Goodbye to Hair Fall | 8 Sessions of GFC Therapy',
      hasGoldenBorder: true
    },
    {
      id: 3,
      image: '/assets/images/home/offer03.webp',
      alttag: 'Exclusive Laser Hair Reduction Offer for Females',
      subtitle: 'Exclusive Laser Hair Reduction Offer for Females',
      hasGoldenBorder: true
    }
  ];

  return (
    <section className={styles.ourOfferSection}>
      <div className={styles.container}>
        <h2 className={`mainHeading ${styles.mainHeading}`}>OUR OFFERS</h2>
        <div className={styles.offersGrid}>
          {offers.map((offer) => (
            <div key={offer.id} className={styles.offerCard}>
              <div className={styles.imageContainer}>
                <Image src={offer.image} width={400} height={360} alt={offer.alttag} />
              </div>
              
              <div className={styles.cardFooter}>
                <div className={styles.footerContent}>
                  <p className={styles.footerText}>
                    {offer.subtitle}
                  </p>
                </div>
                <button className={styles.arrowBtn} aria-label="Next offer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
         <div className={styles.btnarearow}>
          <Link href="/" className={styles.offerBtn}>View More</Link>
         </div>
      </div>
    </section>
  );
};

export default OurOffer;