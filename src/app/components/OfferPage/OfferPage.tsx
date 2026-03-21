"use client";
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import styles from "./OfferPage.module.css";


interface ApiOffer {
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
}

interface OfferCategory {
  category_id: number;
  category_name: string;
  category_description: string;
  offers_count: number;
  offers: ApiOffer[];
}

import { useEffect } from "react";

export default function OfferPage() {
  const [categories, setCategories] = useState<OfferCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOffers = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://api.citrineclinic.com/api/offers");
        if (!res.ok) throw new Error("Failed to fetch offers");
        const data = await res.json();
        if (data && Array.isArray(data.data)) {
          setCategories(data.data);
          setActiveCategory(data.data[0]?.category_id || null);
        } else {
          setCategories([]);
        }
      } catch (err: any) {
        setError(err.message || "Error fetching offers");
      } finally {
        setLoading(false);
      }
    };
    fetchOffers();
  }, []);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  const activeCat = categories.find(cat => cat.category_id === activeCategory);
  const visibleOffers = activeCat ? activeCat.offers.slice(0, visibleCount) : [];

  const handleLoadMore = () => {
    if (!activeCat) return;
    setVisibleCount((prev) => Math.min(prev + 3, activeCat.offers.length));
  };

  return (
    <section className={styles.offerSection}>
      <div className={styles.container}>
        <h1 className={`mainHeading ${styles.mainHeading}`}>Offers</h1>
        <div className={styles.filterBtns}>
          {categories.map(cat => (
            <button
              key={cat.category_id}
              className={`${styles.filterBtn} ${activeCategory === cat.category_id ? styles.active : ""}`}
              onClick={() => setActiveCategory(cat.category_id)}
            >
              {cat.category_name}
            </button>
          ))}
        </div>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <>
            <div className={styles.grid}>
              {visibleOffers.length > 0 ? (
                visibleOffers.map((offer, idx) => (
                  <div className={`${styles.card} ${styles[`bg${(idx % 6) + 1}`]}`} key={offer.offer_id}>
                    <div className={styles.imagebox}>
                      <Image src={offer.offer_image} alt={offer.alt_tag || offer.offer_name} width={540} height={540} />
                    </div>
                    <div className={styles.offercontent}>
                      <div className={styles.uptobtn}>{offer.offer_code}</div>
                      <div className={styles.title}>{offer.offer_name}</div>
                      <Link href={`/offers/${offer.offer_id}`} className={styles.bookBtn}>BOOK NOW</Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.noOffers}>No offers available for this category.</div>
              )}
            </div>
            {activeCat && visibleCount < activeCat.offers.length && (
              <div className={styles.loadMoreWrapper}>
                <button
                  className={styles.loadMoreBtn}
                  onClick={handleLoadMore}>
                  LOAD MORE
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

