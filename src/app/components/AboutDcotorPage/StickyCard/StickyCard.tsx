import React from 'react';
import Image from 'next/image';
import styles from './StickyCard.module.css';

const StickyCard = () => {
  // Static cards (converted from dynamic array)

  return (
    <section className={styles.stickySection}>
      <div className={styles.container}>

         {/* Static card 3: Podcast */}
        <div className={styles.stickyCard}>
          <div className={styles.cardContent}>
            <div className={styles.imageWrapper}>
              <picture className={styles.pictureWrapper}>
                <source media="(max-width: 767.98px)" srcSet="/assets/images/about-doctor/mbpodcast01.svg" />
                <source media="(min-width: 768px)" srcSet="/assets/images/about-doctor/desktoppodcast01.svg" />
                <img
                  src="/assets/images/about-doctor/desktoppodcast01.svg"
                  alt="Is Coffee Bad for Your Skin?"
                  width={1300}
                  height={600}
                  className={styles.cardImage}/>
              </picture>
              <>
                <div className={styles.contentOverlay}>
                  <div className={styles.podcast}>Podcast with <span>Raj Shamani</span></div>
                  <h2 className={`mainHeading ${styles.mainHeading}`} dangerouslySetInnerHTML={{ __html: 'Is <strong>Coffee</strong> Bad for<br/> <strong>Your Skin</strong>?' }}></h2>
                  <p className={styles.podcastDescription} dangerouslySetInnerHTML={{ __html: 'Dr. Niti Gaur shares skincare insights, myths, coffee effects, and expert advice on Figuring Out podcast episode.' }}></p>
                  {/* <button className={styles.watchButton}>
                    <Image src={`/assets/images/about-doctor/playicon.webp`} width={20} height={20} alt="Play" />
                    WATCH NOW
                  </button> */}
                </div>
              </>
            </div>
          </div>
        </div>

        {/* Static card 1: Josh Talks */}
        <div className={styles.stickyCard}>
          <div className={styles.cardContent}>
            <div className={styles.joshWrapper}>
               <picture className={styles.pictureWrapper}>
                <source media="(max-width: 767.98px)" srcSet="/assets/images/about-doctor/mbpodcast02.svg" />
                <source media="(min-width: 768px)" srcSet="/assets/images/about-doctor/desktoppodcast02.svg" />
                <img
                  src="/assets/images/about-doctor/desktoppodcast02.svg"
                  alt="Josh Talks Feature"
                  width={1300}
                  height={600}
                  className={styles.cardImage}/>
              </picture>
              <div className={styles.joshContentOverlay}>
                <div className={styles.logoWrapper}>
                  <Image
                    src="/assets/images/about-doctor/joshtalk.webp"
                    alt="Josh Talks Logo"
                    width={120}
                    height={40}
                    className={styles.joshLogo}/>
                </div>
                <h2 className={`mainHeading ${styles.mainHeading}`}><strong>JOSH TALKS</strong><br/> FEATURE</h2>
                <p className={styles.joshDescription}>Dr. Niti Gaur shares her inspiring journey, skincare expertise, challenges, and vision to transform aesthetic healthcare in India at Josh Talks stage.</p>
                {/* <button className={styles.watchButton}>
                  <Image src={`/assets/images/about-doctor/playicon.webp`} width={20} height={20} alt="Play" />
                  WATCH NOW
                </button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Static card 2: TEDx */}
        <div className={styles.stickyCard}>
          <div className={styles.cardContent}>
            <div className={styles.tedxWrapper}>
               <picture className={styles.pictureWrapper}>
                <source media="(max-width: 767.98px)" srcSet="/assets/images/about-doctor/mbpodcast03.svg" />
                <source media="(min-width: 768px)" srcSet="/assets/images/about-doctor/desktoppodcast03.svg" />
                <img
                  src="/assets/images/about-doctor/desktoppodcast03.svg"
                  alt="Is Coffee Bad for Your Skin?"
                  width={1300}
                  height={600}
                  className={styles.cardImage}/>
              </picture>
              <div className={styles.tedxContentWrapper}>
                <div className={styles.tedxLeftContent}>
                  <div className={styles.tedxLogoWrapper}>
                    <Image
                      src="/assets/images/about-doctor/tedx.webp"
                      alt="TEDx Logo"
                      width={120}
                      height={50}
                      className={styles.tedxLogo}
                    />
                  </div>
                  <h2 className={`mainHeading ${styles.mainHeading}`}><strong>TEDX SPEAKER</strong><br/> FEATURE</h2>
                  <p className={styles.tedxDescription}>Dr. Niti Gaur delivered a powerful TEDx talk on skincare science, confidence, innovation, and redefining beauty standards with medical expertise.</p>
                  {/* <button className={styles.watchButton}>
                    <Image src={`/assets/images/about-doctor/playicon.webp`} width={20} height={20} alt="Play" />
                    WATCH NOW
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default StickyCard;
