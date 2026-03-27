"use client";
import { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpShort } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    // Attach only on client; useEffect won't run during SSR
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className="wrapper">
          <div className={styles.footerCols}>
            <div className={styles.footerCol}>
              <div className={`${styles.title}`}>
                <Link href="/">
                  <Image
                    src="/assets/images/logo.webp"
                    alt={"Citrine Clinic"}
                    width={250}
                    height={70}
                  />
                </Link>
              </div>
              <p>
                Dr. Niti Gaur has set up Citrine Clinic and Aesthetics to
                provide the highest quality of skin care with the transparent
                and ethical practices of dermatology. At the clinic, you will
                experience the best skincare.
              </p>
              <ul className={styles.socialIcons}>
                <li>
                  <Link
                    href="https://www.facebook.com/citrineclinicbydrniti/"
                    target="_blank"
                    aria-label="Citrine Facebook page"
                    rel="noopener noreferrer">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    target="_blank"
                    aria-label="Citrine Twitter page"
                    rel="noopener noreferrer">
                    <RiTwitterXLine />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    target="_blank"
                    aria-label="Citrine Linkedin page"
                    rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/citrinedermatologyclinic/"
                    target="_blank"
                    aria-label="Citrine Instagram page"
                    rel="noopener noreferrer">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/channel/UC9Oo0M9EtAcWcNXN1_e6gsQ"
                    target="_blank"
                    aria-label="Citrine YouTube page"
                    rel="noopener noreferrer">
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <div className={`${styles.title}`}>Quick Links</div>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/dr-niti-gaur">About Doctor</Link>
                </li>
                <li>
                  <Link href="/skin-clinic-in-gurgaon">About Clinic</Link>
                </li>
                <li>
                  <Link href="/concerns">Concerns</Link>
                </li>
                <li>
                  <Link href="/">Citrine Exclusive</Link>
                </li>
                <li>
                  <Link href="/offers">Offers</Link>
                </li>
                <li>
                  <Link href="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link href="/media">Media</Link>
                </li>
                <li>
                  <Link href="/blog">Blogs</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <div className={`${styles.title}`}>Treatments</div>
              <ul>
                <li>
                  <Link href="/anti-wrinkle-injection-in-gurgaon">Anti Wrinkle Injection</Link>
                </li>
                <li>
                  <Link href="/bridal-dermatology-treatment">Bridal Dermatology</Link>
                </li>
                <li>
                  <Link href="/chemical-peel-treatment-in-gurgaon">Chemical Peels</Link>
                </li>
                <li>
                  <Link href="/dermal-fillers-treatment-in-gurgaon">Dermal Fillers</Link>
                </li>
                <li>
                  <Link href="/exilis-elite">Exilis Elite</Link>
                </li>
                <li>
                  <Link href="/eye-restore">Eye Restore Therapy</Link>
                </li>
                <li>
                  <Link href="/gfc-hair-treatment-in-gurgaon">Hair GFC</Link>
                </li>
                <li className={styles.noBullet}>
                  <Link href="/treatments" className={styles.more}>
                    More
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <div className={`${styles.title}`}>Contact Info.</div>
              <ul>
                <div className={styles.contactInfoSection}>
                  <div className={styles.contactInfoRow}>
                    <div className={styles.contactInfoIcon}>
                      <span aria-label="Location">
                        <Image
                          src="/assets/images/location.webp"
                          alt="Location"
                          width={14}
                          height={17}
                        />
                      </span>
                    </div>
                    <div className={styles.contactInfoText}>
                      SCO- 19, Huda Market Road, Sector 15 Part 2, Market
                      Gurugram, Haryana 122001, India.
                    </div>
                  </div>
                  <div className={styles.contactInfoRow}>
                    <div className={styles.contactInfoIcon}>
                      <span aria-label="Phone">
                        <Image
                          src="/assets/images/callfooter.webp"
                          alt="Phone"
                          width={15}
                          height={15}
                        />
                      </span>
                    </div>
                    <div className={styles.contactInfoText}>
                      Phone: +91-9868649805 | +91-9810652808 | +91-8065060900
                    </div>
                  </div>
                  <div className={styles.contactInfoRow}>
                    <div className={styles.contactInfoIcon}>
                      <span aria-label="Landline">
                        <Image
                          src="/assets/images/callfooter.webp"
                          alt="Phone"
                          width={15}
                          height={15}
                        />
                      </span>
                    </div>
                    <div className={styles.contactInfoText}>
                      Landline: 0124 411 6808,
                    </div>
                  </div>
                  <div className={styles.contactInfoRow}>
                    <div className={styles.contactInfoIcon}>
                      <span aria-label="Email">
                        <Image
                          src="/assets/images/mail.webp"
                          alt="Email"
                          width={18}
                          height={18}
                        />
                      </span>
                    </div>
                    <div className={styles.contactInfoText}>
                      Email: info@citrineclinic.com
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.contactInfo}>
          <div className={`wrapper ${styles.wrapper}`}>
            <div className={styles.conCard}>
              <strong>Disclaimer:</strong>{" "}
              <p>
                This website's information is exclusively intended to educate
                and raise awareness about dermatology. This is not to be
                considered a substitute for professional medical advice or a
                prescription. Since each individual and case is unique, the
                outcomes of any of the treatments indicated on the page may
                vary.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className={styles.footerBottom}>
            <div className={styles.social}>
              <Link href="/privacy-policy">Privacy Policy</Link>|<Link href="/terms-conditions">Terms & Conditions</Link>|<Link href="/refund-policy">Refund Policy</Link>|<Link href="/return-policy">Return Policy</Link>|<Link href="/explore">Explore</Link>
            </div>
            <div className={styles.right}>
              <span aria-label="Copyright">
                &copy; 2022 -{new Date().getFullYear()}, Citrine Clinic. All
                Rights Reserved. Powered by DigiLantern
              </span>
            </div>
          </div>
        </div>
      </footer>
      <button
        aria-label="Back to top"
        className={`${styles.footerReveal} ${showTop ? styles.footerRevealActive : ""}`}
        onClick={handleScrollTop}>
        <BsArrowUpShort aria-hidden="true" />
      </button>

  <a target="_blank" title="Citrine Clinic" href="https://api.whatsapp.com/send?phone=919289980157&text=Hello, I have contacted you through Citrine Clinic website." aria-label="Whatsapp" className={`${styles.dkwhatsapplink} ${styles.mobilenone}`} rel="noopener noreferrer">
    <Image src="/assets/images/fwhatsapp.webp" width="32" height="32" alt="Whatsapp"/>
  </a>

      <div className={`${styles.footerfixed} ${styles.desktophide}`}>
        <a href="/book-an-appointment" className={styles.fixedCol + ' ' + styles.left} aria-label="Request An Appointment">
          <Image src="/assets/images/fcalendar.webp" alt="Request An Appointment" width={28} height={28} />
          <span className={styles.fixedText}>Request An Appointment</span>
        </a>
        <a href="https://api.whatsapp.com/send?phone=919868649805&text=Hello Doctor, I have contacted you through Citrine Clinic website." target="_blank" rel="noopener noreferrer" className={styles.fixedCol + ' ' + styles.right} aria-label="WhatsApp">
          <Image src="/assets/images/fwhatsapp.webp" alt="WhatsApp" width={28} height={28} />
          <span className={styles.fixedText}>WhatsApp</span>
        </a>
      </div>
    </>
  );
};
export default Footer;
