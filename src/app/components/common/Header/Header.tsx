'use client';
import React, { useEffect, useState, useRef } from "react";
import styles from './Header.module.css';
import Image from "next/image";
import Link from "next/link";

// AccordionSection component for mobile accordion
const AccordionSection = ({ title, isOpen, onClick, children }: { title: string, isOpen: boolean, onClick: () => void, children: React.ReactNode }) => (
    <div className={styles.boxborder}>
        <button className={styles.accordionBtn}
            onClick={onClick}
            aria-expanded={isOpen}>
            <span>{title}</span>
            <span className={`${styles.accordionIcon} ${isOpen ? styles.accordionIconOpen : ''}`}
                aria-hidden="true" />
        </button>
        {isOpen && <div className={styles.accordionContent}>{children}</div>}
    </div>
);

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    // Always initialize to 'concerns' for SSR consistency
    const [activeTab, setActiveTab] = useState('concerns');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check screen size on mount and resize
        const checkMobile = () => {
            const mobile = window.innerWidth <= 991.98;
            setIsMobile(mobile);
            // Only update activeTab on mount (not on every resize)
            if (mobile) setActiveTab('quicklinks');
            else setActiveTab('concerns');
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const headerRef = useRef<HTMLElement | null>(null);

    // Handle client-side mounting
    useEffect(() => {
        setMounted(true);
    }, []);

    // Set CSS variable for top spacing equal to header height
    useEffect(() => {
        if (!mounted) return;
        const updateTopSpacing = () => {
            const h = headerRef.current;
            if (h) {
                const height = h.offsetHeight;
                document.documentElement.style.setProperty('--top-spacing', `${height}px`);
            }
        };
        updateTopSpacing();
        window.addEventListener('resize', updateTopSpacing);
        return () => window.removeEventListener('resize', updateTopSpacing);
    }, [mounted]);

    // Handle scroll effect
    useEffect(() => {
        if (!mounted) return;
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mounted]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header ref={headerRef} className={`${styles.header} ${mounted && scrolled ? styles.active : ''}`}>
                <div className={styles.headerwrapper}>
                    <div className={`row ${styles.row}`}>
                        <div className={styles.logo}>
                            <Link href="/">
                                <Image src='/assets/images/logo.webp' alt={"Citrine Clinic"} width={321} height={90} />
                            </Link>
                        </div>
                        <div className={styles.headerActions}>
                            <div className={styles.contactInfo}>
                                <Image src='/assets/images/call.webp' alt={"Phone Call"} width={20} height={20} />
                                <a href="tel:+919868649805" className={styles.phoneNumber} aria-label="Citrine Clinic Phone Number">
                                    +91-9868649805
                                </a>
                            </div>
                            <Link href="/book-an-appointment" className={styles.appointmentBtn} aria-label="Request an appointment">
                                REQUEST AN APPOINTMENT
                            </Link>
                            {/* Desktop Hamburger Button (visible on desktop) */}
                            <button className={`${styles.mobilenone} ${styles.menuBtn}`} onClick={toggleMenu} role="button" tabIndex={0} aria-label="Open menu">
                                <span className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} aria-hidden="true">
                                    <span className={styles.hamburgerLine}></span>
                                    <span className={`${styles.hamburgerLine} ${styles.hamburgerLineShort}`}></span>
                                    <span className={styles.hamburgerLine}></span>
                                </span>
                                <span className={styles.menuText}>MENU</span>
                            </button>

                            {/* Desktop Hamburger Button (visible on Mobile) */}
                            <button className={`${styles.desktopnone} ${styles.menuBtn}`} onClick={toggleMenu} role="button" tabIndex={0} aria-label="Open menu">
                                <span className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} aria-hidden="true">
                                    <span className={styles.hamburgerLine}></span>
                                    <span className={`${styles.hamburgerLine} ${styles.hamburgerLineShort}`}></span>
                                    <span className={styles.hamburgerLine}></span>
                                </span>
                            </button>

                        </div>
                    </div>
                </div>
            </header>
            {/* Hamburger Menu Overlay */}
            <div
                className={`${styles.menuOverlay} ${isOpen ? styles.menuOpen : ''}`}
                onClick={(e) => {
                    // Only close on mobile if click is directly on the overlay, not inside the menu
                    if (isMobile && e.target === e.currentTarget) {
                        setIsOpen(false);
                    }
                }}>
                {/* <button className={styles.closeBtn} onClick={toggleMenu} aria-label="Close menu">&times;</button> */}
                <nav className={styles.menuNav}>
                    <div className={styles.menuColumnsTabs}>
                        {/* Left: Main Menu */}
                        <div className={styles.menuColTabfirst}>
                            {isMobile ? (
                                <AccordionSection
                                    title="QUICK LINKS"
                                    isOpen={activeTab === 'quicklinks'}
                                    onClick={() => setActiveTab(activeTab === 'quicklinks' ? '' : 'quicklinks')}>
                                    <ul>
                                        <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                                        <li><Link href="/about-doctor" onClick={toggleMenu}>About Doctor</Link></li>
                                        <li><Link href="/about-clinic" onClick={toggleMenu}>About Clinic</Link></li>
                                        <li><Link href="/blogs" onClick={toggleMenu}>Blogs</Link></li>
                                        <li><Link href="/clinic-gallery" onClick={toggleMenu}>Gallery</Link></li>
                                        <li><Link href="/testimonials" onClick={toggleMenu}>Written Testimonials</Link></li>
                                        {/* <li><Link href="/results" onClick={toggleMenu}>Results</Link></li> */}
                                        <li><Link href="/technologies" onClick={toggleMenu}>Technologies</Link></li>
                                        <li><Link href="/videos" onClick={toggleMenu}>Videos</Link></li>
                                        <li><Link href="/media" onClick={toggleMenu}>Media</Link></li>
                                        <li><Link href="/offers" onClick={toggleMenu}>Offers</Link></li>
                                        <li><Link href="/contact" onClick={toggleMenu}>Contact Us</Link></li>
                                    </ul>
                                </AccordionSection>
                            ) : (
                                <div className={styles.menuList}>
                                    <div className={styles.quicktext}>Quick Links</div>
                                    <ul>
                                        <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                                        <li><Link href="/about-doctor" onClick={toggleMenu}>About Doctor</Link></li>
                                        <li><Link href="/about-clinic" onClick={toggleMenu}>About Clinic</Link></li>
                                        <li><Link href="/blog" onClick={toggleMenu}>Blogs</Link></li>
                                        <li><Link href="/clinic-gallery" onClick={toggleMenu}>Gallery</Link></li>
                                        <li><Link href="/testimonials" onClick={toggleMenu}>Written Testimonials</Link></li>
                                        <li><Link href="/results" onClick={toggleMenu}>Results</Link></li>
                                        <li><Link href="/technologies" onClick={toggleMenu}>Technologies</Link></li>
                                        <li><Link href="/videos" onClick={toggleMenu}>Videos</Link></li>
                                        <li><Link href="/media" onClick={toggleMenu}>Media</Link></li>
                                        <li><Link href="/offers" onClick={toggleMenu}>Offers</Link></li>
                                        <li><Link href="/contact" onClick={toggleMenu}>Contact Us</Link></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        {/* Right: Tabbed Content */}
                        <div className={styles.menuColTabs}>
                            {isMobile ? (
                                // Accordion for mobile
                                <div>
                                    <AccordionSection
                                        title="TREATMENTS"
                                        isOpen={activeTab === 'treatments'}
                                        onClick={() => setActiveTab(activeTab === 'treatments' ? '' : 'treatments')}>
                                        <ul>
                                            <li><Link href="/" onClick={toggleMenu}>Anti Wrinkle Injection</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Laser Resurfacing</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Bridal Dermatology</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Microblading</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Chemical Peels</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Microneedling</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Dermal Fillers</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Pumpkin Medifacial</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Exilis Elite</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Blood-derived Growth Factors</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Eye Restore Therapy</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>PRF Therapy</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Hair GFC</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Repechage Medifacial</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>HIFU</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Tattoo Removal</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Hydrafacial MD</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Total Clearlift</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Laser Hair Reduction</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Zo Obagi Medifacial</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Morpheus8 Treatment</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Artiqa Body Contouring Treatment</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Laser Toning</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Exosomes Therapy</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>PDRN Therapy</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>SPMU</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Ultherapy</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Aptos Thread Lift</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Forma RF Skin Tightening</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Profhilo</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Aqua Restore 4D Facial</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>CO2 Fractional Laser Treatment</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Body Ballancer</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Intimate Area Lightening Treatment</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Rich Peel Advance</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Dermapen 4</Link></li>
                                        </ul>
                                    </AccordionSection>
                                    <AccordionSection
                                        title="CONCERNS"
                                        isOpen={activeTab === 'concerns'}
                                        onClick={() => setActiveTab(activeTab === 'concerns' ? '' : 'concerns')}>
                                        <ul className={styles.menuList}>
                                            <li><Link href="/" onClick={toggleMenu}>Acne</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Pigmentation</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Ageing</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Excessive Hair Growth</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Hair Loss</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Eyes</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Lips</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Hands and Feet</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Body Contouring</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>General Dermatology</Link></li>
                                        </ul>
                                    </AccordionSection>
                                    <AccordionSection
                                        title="EXCLUSIVE"
                                        isOpen={activeTab === 'exclusive'}
                                        onClick={() => setActiveTab(activeTab === 'exclusive' ? '' : 'exclusive')}>
                                        <ul>
                                            <li><Link href="/" onClick={toggleMenu}>Nano Peel</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Triple Treat Therapy</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Melasma Rescue Therapy</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Cosmelan Therapy</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Melatrine Therapy</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Neofacial</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Oxyglaze Medifacial</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>360 Medifacial</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Eye PRF Therapy</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Eye Restore Therapy</Link></li>
                                        </ul>
                                    </AccordionSection>
                                </div>
                            ) : (
                                // Tabs for desktop
                                <>
                                    <div className={styles.tabHeaderRow}>
                                        <button
                                            className={`${styles.tabBtn} ${activeTab === 'treatments' ? styles.activeTab : ''}`}
                                            onClick={() => setActiveTab('treatments')}>
                                            TREATMENTS
                                        </button>
                                        <button
                                            className={`${styles.tabBtn} ${activeTab === 'concerns' ? styles.activeTab : ''}`}
                                            onClick={() => setActiveTab('concerns')}>
                                            CONCERNS
                                        </button>
                                        <button
                                            className={`${styles.tabBtn} ${activeTab === 'exclusive' ? styles.activeTab : ''}`}
                                            onClick={() => setActiveTab('exclusive')}>
                                            EXCLUSIVE
                                        </button>
                                    </div>
                                    {activeTab === 'concerns' && (
                                        <ul className={styles.menuList}>
                                            <li><Link href="/" onClick={toggleMenu}>Acne</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Pigmentation</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Ageing</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Excessive Hair Growth</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Hair Loss</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Eyes</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Lips</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Hands and Feet</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Body Contouring</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>General Dermatology</Link></li>
                                        </ul>
                                    )}
                                    {activeTab === 'treatments' && (
                                        <div className={styles.treatmentList}>
                                            <ul>
                                                <li><Link href="/" onClick={toggleMenu}>Anti Wrinkle Injection</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Laser Resurfacing</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Bridal Dermatology</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Microblading</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Chemical Peels</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Microneedling</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Dermal Fillers</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Pumpkin Medifacial</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Exilis Elite</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Blood-derived Growth Factors</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Eye Restore Therapy</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>PRF Therapy</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Hair GFC</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Repechage Medifacial</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>HIFU</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Tattoo Removal</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Hydrafacial MD</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Total Clearlift</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Laser Hair Reduction</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Zo Obagi Medifacial</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Morpheus8 Treatment</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Artiqa Body Contouring Treatment</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Laser Toning</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Exosomes Therapy</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>PDRN Therapy</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>SPMU</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Ultherapy</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Aptos Thread Lift</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Forma RF Skin Tightening</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Profhilo</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Aqua Restore 4D Facial</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>CO2 Fractional Laser Treatment</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Body Ballancer</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Intimate Area Lightening Treatment</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Rich Peel Advance</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Dermapen 4</Link></li>
                                            </ul>
                                        </div>
                                    )}
                                    {activeTab === 'exclusive' && (
                                        <ul>
                                            <li><Link href="/" onClick={toggleMenu}>Nano Peel</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Triple Treat Therapy</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Melasma Rescue Therapy</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Cosmelan Therapy</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Melatrine Therapy</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Neofacial</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Oxyglaze Medifacial</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>360 Medifacial</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Eye PRF Therapy</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Eye Restore Therapy</Link></li>
                                        </ul>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;