"use client";
import React, { useState, useEffect } from 'react';
import styles from "./FooterNew.module.css";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpShort, BsChevronDown } from "react-icons/bs";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube
} from "react-icons/fa";
import Script from "next/script";

const FooterNew = () => {
    const [showTop, setShowTop] = useState(false);
    const [openSection, setOpenSection] = useState<string>("QUICK LINKS");

    const toggleSection = (section: string) => {
        setOpenSection(prev => prev === section ? "" : section);
    };

    useEffect(() => {
        const onScroll = () => {
            setShowTop(window.scrollY > 300);
        };
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
                {/* Top Section - Two Location Cards */}
                <div className={styles.locationsSection}>
                    <div className={styles.locationCardWrap}>
                        <div className={styles.locationImage}>
                            <Image src="/assets/images/citrine-clinic-footer-img-1.webp" alt="Gurugram Clinic" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className={styles.locationContent}>
                            <div className={styles.locItem}>
                                <div className={styles.locIcon}><Image src="/assets/images/location.webp" alt="Location" width={14} height={17} /></div>
                                <div className={styles.locText}>
                                    <strong>GURUGRAM:</strong>
                                    <p>SCO- 19, Huda Market Road, Sector 15 Part 2, Market Gurugram, Haryana 122001, India.</p>
                                    <Link href="https://www.google.com/maps/place/Citrine+Clinic+by+Dr+Niti+Gaur/@28.457672,77.04464,15z/data=!4m6!3m5!1s0x390d19a3645dcd1b:0x55620b9e51afd7a6!8m2!3d28.4576722!4d77.0446401!16s%2Fg%2F11bxdqqcfv!5m2!1e4!1e2?hl=en&entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className={styles.getDirection}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="11" stroke="#DE9736" strokeWidth="2" />
                                            <path d="M10 8L16 12L10 16V8Z" fill="#DE9736" />
                                        </svg> Get Direction
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.locItem}>
                                <div className={styles.locIcon}><Image src="/assets/images/callfooter.webp" alt="Phone" width={15} height={15} /></div>
                                <div className={styles.locText}>
                                    <strong>PHONE:</strong>
                                    <p><Link href="tel:+918065060900">+91-8065060900</Link></p>
                                    <p><Link href="tel:+919868649805">+91-9868649805</Link></p>
                                </div>
                            </div>
                            <div className={styles.locItem}>
                                <div className={styles.locIcon}><Image src="/assets/images/mail.webp" alt="Email" width={18} height={18} /></div>
                                <div className={styles.locText}>
                                    <strong>EMAIL:</strong>
                                    <p><Link href="mailto:info@citrineclinic.com">info@citrineclinic.com</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.locationCardWrap}>
                        <div className={styles.locationImage}>
                            <Image src="/assets/images/citrine-clinic-footer-img-2.webp" alt="New Delhi Clinic" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className={styles.locationContent}>
                            <div className={styles.locItem}>
                                <div className={styles.locIcon}><Image src="/assets/images/location.webp" alt="Location" width={14} height={17} /></div>
                                <div className={styles.locText}>
                                    <strong>NEW DELHI:</strong>
                                    <p>C-70, Ground Floor, Sudesh Kumar Marg, Rajouri Garden, West Delhi, New Delhi-110027</p>
                                    <Link href="https://www.google.com/maps/place/28%C2%B038'34.7%22N+77%C2%B007'30.9%22E/@28.6429806,77.1226616,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.6429806!4d77.1252365?hl=en&entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className={styles.getDirection}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="11" stroke="#DE9736" strokeWidth="2" />
                                            <path d="M10 8L16 12L10 16V8Z" fill="#DE9736" />
                                        </svg> Get Direction
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.locItem}>
                                <div className={styles.locIcon}><Image src="/assets/images/callfooter.webp" alt="Phone" width={15} height={15} /></div>
                                <div className={styles.locText}>
                                    <strong>PHONE:</strong>
                                    <p><Link href="tel:+918065060900">+91-8065060900</Link></p>
                                    <p><Link href="tel:+919599052656">+91-9599052656</Link></p>
                                </div>
                            </div>
                            <div className={styles.locItem}>
                                <div className={styles.locIcon}><Image src="/assets/images/mail.webp" alt="Email" width={18} height={18} /></div>
                                <div className={styles.locText}>
                                    <strong>EMAIL:</strong>
                                    <p><Link href="mailto:info@citrineclinic.com">info@citrineclinic.com</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Section */}
                <div className={styles.middleSection}>
                    <div className="wrapper">
                        <div className={styles.footerCols}>
                            <div className={styles.footerColInfo}>
                                <div className={styles.footerLogo}>
                                    <Link href="/">
                                        <Image src="/assets/images/logo.webp" alt="Citrine Clinic" width={200} height={56} unoptimized />
                                    </Link>
                                </div>
                                <p className={styles.footerDescription}>
                                    Citrine Clinic, led by Dr. Niti Gaur, is built on the belief that aesthetic treatments should enhance, not change, who you are. We combine clinical expertise with a thoughtful, patient-first approach to deliver results that are natural, balanced, and tailored to you.
                                </p>
                                <ul className={styles.socialIconsCentered}>
                                    <li><Link href="https://www.facebook.com/citrineclinicbydrniti/" target="_blank" aria-label="Facebook"><FaFacebookF /></Link></li>
                                    <li><Link href="https://www.instagram.com/citrinedermatologyclinic/" target="_blank" aria-label="Instagram"><FaInstagram /></Link></li>
                                    <li><Link href="https://www.youtube.com/channel/UC9Oo0M9EtAcWcNXN1_e6gsQ" target="_blank" aria-label="YouTube"><FaYoutube /></Link></li>
                                </ul>
                            </div>

                            <div className={styles.footerColLinks}>
                                <div className={styles.title} onClick={() => toggleSection("QUICK LINKS")}>
                                    QUICK LINKS
                                    <span className={`${styles.accordionIcon} ${openSection === "QUICK LINKS" ? styles.open : ""}`}>
                                        <BsChevronDown />
                                    </span>
                                </div>
                                <div className={`${styles.accordionWrapper} ${openSection === "QUICK LINKS" ? styles.show : ""}`}>
                                    <ul className={styles.accordionContent}>
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/dr-niti-gaur">About Doctor</Link></li>
                                        <li><Link href="/about-clinic">About Clinic</Link></li>
                                        <li><Link href="/technologies">Technologies</Link></li>
                                        <li><Link href="/offers">Offers</Link></li>
                                        <li><Link href="/testimonials">Testimonials</Link></li>
                                        <li><Link href="/media">Media</Link></li>
                                        <li><Link href="/blog">Blogs</Link></li>
                                        <li><Link href="/videos">Videos</Link></li>
                                        <li><Link href="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.footerColLinks}>
                                <div className={styles.title} onClick={() => toggleSection("TREATMENTS")}>
                                    TREATMENTS
                                    <span className={`${styles.accordionIcon} ${openSection === "TREATMENTS" ? styles.open : ""}`}>
                                        <BsChevronDown />
                                    </span>
                                </div>
                                <div className={`${styles.accordionWrapper} ${openSection === "TREATMENTS" ? styles.show : ""}`}>
                                    <ul className={styles.accordionContent}>
                                        <li><Link href="/anti-wrinkle-injection-in-gurgaon">Anti Wrinkle Injection</Link></li>
                                        <li><Link href="/bridal-dermatology-treatment">Bridal Dermatology</Link></li>
                                        <li><Link href="/chemical-peel-treatment-in-gurgaon">Chemical Peels</Link></li>
                                        <li><Link href="/dermal-fillers-treatment-in-gurgaon">Dermal Fillers</Link></li>
                                        <li><Link href="/exilis-elite">Exilis Elite</Link></li>
                                        <li><Link href="/eye-restore">Eye Restore Therapy</Link></li>
                                        <li><Link href="/gfc-hair-treatment-in-gurgaon">Hair GFC</Link></li>
                                        <li className={styles.noBullet}>
                                            <Link href="/treatments" className={styles.moreLink}>More</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.footerColLinks}>
                                <div className={styles.title} onClick={() => toggleSection("CONCERNS")}>
                                    CONCERNS
                                    <span className={`${styles.accordionIcon} ${openSection === "CONCERNS" ? styles.open : ""}`}>
                                        <BsChevronDown />
                                    </span>
                                </div>
                                <div className={`${styles.accordionWrapper} ${openSection === "CONCERNS" ? styles.show : ""}`}>
                                    <ul className={styles.accordionContent}>
                                        <li><Link href="/acne">Acne</Link></li>
                                        <li><Link href="/pigmentation">Pigmentation</Link></li>
                                        <li><Link href="/ageing">Ageing</Link></li>
                                        <li><Link href="/excessive-hair-growth">Excessive Hair Growth</Link></li>
                                        <li><Link href="/hair-loss">Hair Loss</Link></li>
                                        <li><Link href="/eyes">Eyes</Link></li>
                                        <li><Link href="/lips">Lips</Link></li>
                                        <li className={styles.noBullet}>
                                            <Link href="/concerns" className={styles.moreLink}>More</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Disclaimer and App Download */}
                <div className={styles.bottomInfoSection}>
                    <div className={`wrapper ${styles.bottomInfoWrapper}`}>
                        <div className={styles.disclaimerBox}>
                            <strong>DISCLAIMER:</strong>
                            <p>This website&apos;s information is exclusively intended to educate and raise awareness about dermatology. This is not to be considered a substitute for professional medical advice or a prescription. Since each individual and case is unique, the outcomes of any of the treatments indicated on the page may vary.</p>
                        </div>
                        <div className={styles.appDownloadBox}>
                            <strong>DOWNLOAD OUR APP FROM:</strong>
                            <div className={styles.appLinks}>
                                <Link href="https://play.google.com/store/apps/details?id=com.citrineclinic" target="_blank" rel="noopener noreferrer" aria-label="Google Play">
                                    <Image src="/assets/images/android-app-img.png" alt="Google Play" width={185} height={55} unoptimized />
                                </Link>
                                <Link href="#" aria-label="App Store">
                                    <Image src="/assets/images/ios-app-img.png" alt="App Store" width={185} height={55} unoptimized />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Links & Copyright */}
                <div className={styles.footerBottomArea}>
                    <div className="wrapper">
                        <div className={styles.footerBottomLinks}>
                            <Link href="/privacy-policy">Privacy Policy</Link> |
                            <Link href="/terms-conditions">Terms &amp; Conditions</Link> |
                            <Link href="/refund-policy">Refund Policy</Link> |
                            <Link href="/return-policy">Return Policy</Link> |
                            <Link href="/explore">Explore</Link>
                        </div>
                        <div className={styles.copyrightText}>
                            &copy; 2022 -{new Date().getFullYear()}, Citrine Clinic. All Rights Reserved. Powered by <Link href="https://digilantern.com/" target="_blank" rel="noopener noreferrer">DigiLantern</Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Reused fixed components from original footer */}
            <button
                aria-label="Back to top"
                className={`${styles.footerReveal} ${showTop ? styles.footerRevealActive : ""}`}
                onClick={handleScrollTop}>
                <BsArrowUpShort aria-hidden="true" />
            </button>

            <a target="_blank" title="Citrine Clinic" href="https://api.whatsapp.com/send?phone=919289980157&text=Hello, I have contacted you through Citrine Clinic website." aria-label="Whatsapp" className={`${styles.dkwhatsapplink} ${styles.mobilenone}`} rel="noopener noreferrer">
                <Image src="/assets/images/fwhatsapp.webp" width="32" height="32" alt="Whatsapp" />
            </a>

            <div className={`${styles.footerfixed} ${styles.desktophide}`}>
                <Link href="/book-an-appointment" className={styles.fixedCol + ' ' + styles.left} aria-label="Request An Appointment">
                    <Image src="/assets/images/fcalendar.webp" alt="Request An Appointment" width={18} height={18} />
                    <span className={styles.fixedText}>Request An Appointment</span>
                </Link>
                <a href="https://api.whatsapp.com/send?phone=919289980157&text=Hello, I have contacted you through Citrine Clinic website." target="_blank" rel="noopener noreferrer" className={styles.fixedCol + ' ' + styles.right} aria-label="WhatsApp">
                    <Image src="/assets/images/fwhatsapp.webp" alt="WhatsApp" width={24} height={24} />
                    <span className={styles.fixedText}>WhatsApp</span>
                </a>
            </div>

            {/* Click-to-open phone numbers (mobile) */}
            <PhoneNumbers />

            <Script
                src="https://chat.citrineclinic.com/widget.js"
                strategy="lazyOnload"
                onLoad={() => {
                    const w = window as unknown as {
                        CitrineChat?: {
                            init: (options: { position: string; margin?: string; padding?: string; bottom?: string; right?: string; top?: string; left?: string; zIndex?: number }) => void;
                        };
                    };
                    if (w.CitrineChat) {
                        w.CitrineChat.init({
                            position: 'bottom-right',
                            margin: '0px',
                            padding: '0px',
                            bottom: '80px',
                            right: '0px',
                            top: '0px',
                            left: '0px',
                            zIndex: 2147483000,
                        });
                    }
                }}
            />
        </>
    );
};
export default FooterNew;

function PhoneNumbers() {
    const [open, setOpen] = useState(false);
    const wrapperRef = React.useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const numbers = [
        '+918065060900',
        '+919868649805',
        '+919810652808',
        '01244116808',
        '01244114808',
    ];

    return (
        <div ref={wrapperRef} className={`${styles.cliktoopennumber} ${styles['for-mobile']}`}>
            <div className={styles.callnumberwrap} onClick={() => setOpen((s) => !s)} role="button" aria-label="Open phone numbers">
                <Image src="/assets/images/footercallicon.webp" width={24} height={24} className={styles.realcolo2} alt="call" />
            </div>
            {open && (
                <div className={styles['number-menu']}>
                    <ul>
                        {numbers.map((n) => (
                            <li key={n}>
                                <a href={`tel:${n.replace(/\s|-/g, '')}`}>{n}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
