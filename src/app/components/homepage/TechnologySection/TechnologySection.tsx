"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import styles from './TechnologySection.module.css';
import Modal from '../../common/Modal/Modal';

const TechnologySection = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalVideoId, setModalVideoId] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string>('');

  const handleThumbClick = (videoId: string, title: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setModalVideoId(videoId);
    setModalTitle(title);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalVideoId(null);
    setModalTitle('');
  };

  // Render a single technology card (no repetition)


  return (
    <section className={styles.techSection}>
      <Image src="/assets/images/home/techbg.webp" className={styles.backgroundImage} alt="Wellness Treatments Background" width={1400} height={700}/>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          <span>US-FDA Approved  -  International Standards  -  Gold-Standard Devices</span>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.visible}>
          <div className={styles.slidesContainer}>
            <div className={styles.contentBox}>
              <div className={styles.leftCol}>
                <h2 className={`heading ${styles.heading}`}>EXILIS ELITE</h2>
                <a href="#" className={styles.overlay} onClick={handleThumbClick('WMaanffs_Do', 'Exilis Elite')}>
                  <div className={styles.play}>
                    <Image src="/assets/images/home/playtechs.webp" width={48} height={48} alt="play" />
                  </div>
                  <Image className={styles.deviceThumb} src="/assets/images/home/techhome.webp" width={480} height={360} alt="Exilis Elite Thumbnail" />
                </a>
              </div>
              <div className={styles.centerCol}>
                <Image className={styles.deviceImg} src="/assets/images/home/tech01.webp" width={340} height={505} alt="Exilis Elite Device" />
              </div>
              <div className={styles.rightCol}>
                <ul className={styles.bulletList}>
                  <li><b>Non-surgical treatment</b> for skin tightening and fat reduction on areas like face, neck, arms, abdomen, and thighs.</li>
                  <li>Uses radiofrequency and <b>ultrasound energy to boost collagen</b> and shrink fat cells.</li>
                  <li><b>No downtime —</b> quick, comfortable, and safe procedure.</li>
                  <li><b>Ideal for skin firming</b> and contouring, not for major weight loss.</li>
                </ul>
                <Link href="/technologies" className={styles.viewmoreBtn}>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal should be here, outside the slides */}
      <Modal isOpen={modalOpen} onClose={handleModalClose} title={modalTitle}>
        {modalVideoId && (
          <div className={styles.modalVideoContainer}>
            <iframe
              src={`https://www.youtube.com/embed/${modalVideoId}`}
              title={modalTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}/>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default TechnologySection;
