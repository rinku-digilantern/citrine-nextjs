"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
import styles from "./TechnologyListPage.module.css";

const techData = [
  {
    id: 1,
    name: "Alma Harmony XL Pro",
    image: "/assets/images/technology/Alma-Harmony-XL-pro.webp",
    link: "/technology/1"
  },
  {
    id: 2,
    name: "Dermapen Use",
    image: "/assets/images/technology/Dermapen-Use.webp",
    link: "/technology/2"
  },
  {
    id: 3,
    name: "Hydrafacial Machine",
    image: "/assets/images/technology/hydrafacial_machine.webp",
    link: "/technology/3"
  },
  {
    id: 4,
    name: "Oxygeneo",
    image: "/assets/images/technology/oxygeneo.webp",
    link: "/technology/4"
  },
  {
    id: 5,
    name: "Primelase HR",
    image: "/assets/images/technology/Primelase-HR.webp",
    link: "/technology/5"
  },
  {
    id: 6,
    name: "Secret Advance Antiaging RFC Machine",
    image: "/assets/images/technology/secret-advance-antiaging-rfc-machine.webp",
    link: "/technology/6"
  },
  {
    id: 7,
    name: "Ultracel Q Plus",
    image: "/assets/images/technology/Ultracel-Q-Plus.webp",
    link: "/technology/7"
  },
  {
    id: 8,
    name: "Synergy",
    image: "/assets/images/technology/tech10.webp",
    link: "/technology/8"
  },
  {
    id: 9,
    name: "Perfectio LED",
    image: "/assets/images/technology/tech11.webp",
    link: "/technology/9"
  },
  {
    id: 10,
    name: "Harmony XL Pro",
    image: "/assets/images/technology/tech12.webp",
    link: "/technology/10"
  },
  {
    id: 11,
    name: "Morpheus 8",
    image: "/assets/images/technology/tech13.webp",
    link: "/technology/11"
  },
  {
    id: 12,
    name: "Centrifuge (Eltek)",
    image: "/assets/images/technology/tech14.webp",
    link: "/technology/12"
  },
  {
    id: 13,
    name: "RF Cautery",
    image: "/assets/images/technology/tech15.webp",
    link: "/technology/13"
  },
  {
    id: 14,
    name: "BCA Machine",
    image: "/assets/images/technology/tech17.webp",
    link: "/technology/14"
  },
  {
    id: 15,
    name: "Hifu Ultracel QT",
    image: "/assets/images/technology/tech18.webp",
    link: "/technology/15"
  },
  {
    id: 16,
    name: "Hydra New O2 & PDT",
    image: "/assets/images/technology/tech19.webp",
    link: "/technology/16"
  },
  {
    id: 17,
    name: "Primelase HR",
    image: "/assets/images/technology/tech20.webp",
    link: "/technology/17"
  },
  {
    id: 18,
    name: "RF EMSES",
    image: "/assets/images/technology/tech21.webp",
    link: "/technology/18"
  },
  {
    id: 19,
    name: "Skin Analyzer(AIA5)",
    image: "/assets/images/technology/tech22.webp",
    link: "/technology/19"
  },
  {
    id: 20,
    name: "Triton (InMode)",
    image: "/assets/images/technology/tech23.webp",
    link: "/technology/20"
  },
  {
    id: 21,
    name: "Artiqa",
    image: "/assets/images/technology/tech16.webp",
    link: "/technology/21"
  },
  {
    id: 22,
    name: "Ultherapy",
    image: "/assets/images/technology/newtech01.webp",
    link: "/technology/22"
  },
  {
    id: 23,
    name: "Exilis Elite",
    image: "/assets/images/technology/tech24.webp",
    link: "/technology/23"
  },
  {
    id: 24,
    name: "G3 CO2 Laser",
    image: "/assets/images/technology/tech25.webp",
    link: "/technology/24"
  }
];

const TechnologyListPage = () => {
  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, techData.length));
  };

  return (
    <section className={styles.techSection}>
      <div className={styles.container}>
        <h1 className={`mainHeading ${styles.mainHeading}`}>Technologies</h1>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <>
            <div className={styles.grid}>
              {techData.slice(0, visibleCount).map((tech: any) => (
                <div className={styles.card} key={tech.id}>
                  <div className={styles.techimg}>
                    <Image src={tech.image} width={306} height={306} alt={tech.name} />
                  </div>
                  <div className={styles.techtitle}>{tech.name}</div>
                  <Link href={tech.link} className={styles.viewmore}>
                    View More
                  </Link>
                </div>
              ))}
            </div>
            {visibleCount < techData.length && (
              <div className={styles.loadrow}>
                <button 
                  onClick={handleLoadMore} 
                  aria-label="Load More" 
                  className={styles.viewDetailsBtn}>LOAD MORE</button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default TechnologyListPage;
