import React from 'react';
import Image from 'next/image';
import styles from './StickyCard.module.css';

const StickyCard = () => {
  const cards = [
    {
      id: 1,
      type: "podcast",
      image: "/assets/images/about-doctor/card01.webp",
      alt_tag: "Podcast with Raj Shamani",
      title: "PODCAST WITH<br/> RAJ SHAMANI",
      description: "Dr. Niti Gaur shares skincare insights, myths,<br/> coffee effects, and expert advice on Figuring<br/> Out podcast episode.",
      buttonText: "WATCH NOW"
    },
    {
      id: 2,
      type: "joshtalks",
      image: "/assets/images/about-doctor/card02.webp",
      alt_tag: "Josh Talks Feature",
      logo: "/assets/images/about-doctor/joshtalk.webp",
      title: "JOSH TALKS FEATURE",
      description: "Dr. Niti Gaur shares her inspiring journey, skincare expertise, challenges, and vision to transform aesthetic healthcare in India at Josh Talks stage.",
      buttonText: "WATCH NOW"
    },
    {
      id: 3,
      type: "tedx",
      image: "/assets/images/about-doctor/card03.webp",
      alt_tag: "TEDx Speaker Feature",
      logo: "/assets/images/about-doctor/tedx.webp",
      title: "TEDX SPEAKER FEATURE",
      description: "Dr. Niti Gaur delivered a powerful TEDx talk on skincare science, confidence, innovation, and redefining beauty standards with medical expertise.",
      buttonText: "WATCH NOW"
    }
  ];

  return (
    <section className={styles.stickySection}>
      <div className={styles.container}>
        {cards.map((card, index) => (
          <div 
            key={card.id} 
            className={styles.stickyCard}>
            <div className={styles.cardContent}>
              {card.type === "joshtalks" ? (
                <div className={styles.joshWrapper}>
                  <Image
                    src={card.image}
                    alt={card.alt_tag}
                    width={1299}
                    height={600}
                    sizes='100vw'
                    className={styles.cardImage}
                  />
                  <div className={styles.joshContentOverlay}>
                    {card.logo && (
                      <div className={styles.logoWrapper}>
                        <Image
                          src={card.logo}
                          alt="Josh Talks Logo"
                          width={120}
                          height={40}
                          className={styles.joshLogo}
                        />
                      </div>
                    )}
                    <h2 className={`mainHeading ${styles.mainHeading}`}>{card.title}</h2>
                    <p className={styles.joshDescription}>{card.description}</p>
                    <button className={styles.watchButton}>
                      <Image src={`/assets/images/about-doctor/playicon.webp`} width={20} height={20} alt="Play" />
                      {card.buttonText}
                    </button>
                  </div>
                </div>
              ) : card.type === "tedx" ? (
                <div className={styles.tedxWrapper}>
                  <Image
                    src={card.image}
                    alt={card.alt_tag}
                    width={1299}
                    height={600}
                    sizes='100vw'
                    className={styles.cardImage}/>
                  <div className={styles.tedxContentWrapper}>
                    <div className={styles.tedxLeftContent}>
                      {card.logo && (
                        <div className={styles.tedxLogoWrapper}>
                          <Image
                            src={card.logo}
                            alt="TEDx Logo"
                            width={120}
                            height={50}
                            className={styles.tedxLogo}
                          />
                        </div>
                      )}
                      <h2 className={`mainHeading ${styles.mainHeading}`}>{card.title}</h2>
                      <p className={styles.tedxDescription}>{card.description}</p>
                      <button className={styles.watchButton}>
                        <Image src={`/assets/images/about-doctor/playicon.webp`} width={20} height={20} alt="Play" />
                        {card.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.imageWrapper}>
                  <Image
                    src={card.image}
                    alt={card.alt_tag}
                    width={1299}
                    height={600}
                    sizes='100vw'
                    className={styles.cardImage}
                  />
                  {card.type === "podcast" && (
                    <>
                      <div className={styles.overlay}></div>
                      <div className={styles.contentOverlay}>
                        <h2 className={`mainHeading ${styles.mainHeading}`} dangerouslySetInnerHTML={{ __html: card.title }}></h2>
                        <p className={styles.podcastDescription} dangerouslySetInnerHTML={{ __html: card.description }}></p>
                        <button className={styles.watchButton}>
                           <Image src={`/assets/images/about-doctor/playicon.webp`} width={20} height={20} alt="Play" />
                          {card.buttonText}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StickyCard;
