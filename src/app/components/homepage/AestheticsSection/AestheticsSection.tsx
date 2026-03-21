"use client";
import { useCallback, useRef, memo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import styles from './AestheticsSection.module.css';
import Link from 'next/link';

const treatments = [
  {
    title: 'ANTI AGING',
    img: '/assets/images/home/aes01.webp',
  },
  {
    title: 'PIGMENTATION',
    img: '/assets/images/home/aes02.webp',
  },
  {
    title: 'MEDI FACIALS',
    img: '/assets/images/home/aes03.webp',
  },
  {
    title: 'ANTI AGING',
    img: '/assets/images/home/aes01.webp',
  },
  {
    title: 'PIGMENTATION',
    img: '/assets/images/home/aes02.webp',
  },
  {
    title: 'MEDI FACIALS',
    img: '/assets/images/home/aes03.webp',
  },
  // Add more if needed
];

const ThumbCard = memo(function ThumbCard({ img, title }: { img: string; title: string }) {
  return (
    <div className={styles.thumbCard}>
      <Image src={img} alt={title} width={301} height={351} className={styles.thumbImg} />
      <div className={styles.thumbTitle}>{title}</div>
    </div>
  );
});

const AestheticsSection = () => {
  // duplicate slides so each item appears twice in the embla track
  const slides = [...treatments, ...treatments];
  // create a stable Autoplay plugin instance so it isn't recreated every render
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  }, [autoplay.current]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className={styles.aestheticsSection}>
        <Image
          src="/assets/images/home/aestheticsbg.webp"
          className={styles.backgroundImage}
          alt="AESTHETICS TREATMENTS"
          width={1600}
          height={689}
          sizes="(max-width: 600px) 100vw, 1400px"
          priority
        />
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <h2 className={`mainHeading ${styles.mainHeading}`}>AESTHETICS<br/> <span>Artistry</span></h2>
          <p className={styles.desc}>The Art of Subtle Transformation</p>
          <div className={styles.commonbtnbox}>
            <Link href="#" className={styles.viewmoreBtn}>View More</Link>
          </div>
          <div className={styles.sliderWrapper}>
            <div className={styles.embla} ref={emblaRef}>
              <div className={styles.emblaContainer}>
                {slides.map((t, idx) => (
                  <div className={styles.emblaSlide} key={idx}>
                    <ThumbCard img={t.img} title={t.title} />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.commonbtn}>
               <Link href="#" className={styles.viewmoreBtn}>View More</Link>
            </div>
            <div className={styles.navigation}>
              <button className={styles.navBtn} onClick={scrollPrev} aria-label="Previous">
                <span>&larr;</span>
              </button>
              <button className={styles.navBtn + ' ' + styles.active} onClick={scrollNext} aria-label="Next">
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
        {/* <div className={styles.rightCol}>
          <Image src="/assets/images/home/aesthetic-model.webp" alt="Aesthetic Model" width={420} height={520} className={styles.modelImg} />
        </div> */}
      </div>
    </section>
  );
};

export default AestheticsSection;
