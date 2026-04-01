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
    const [activeTab, setActiveTab] = useState('treatments');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check screen size on mount and resize
        const checkMobile = () => {
            const mobile = window.innerWidth <= 991.98;
            setIsMobile(mobile);
            // Only update activeTab on mount (not on every resize)
            if (mobile) setActiveTab('quicklinks');
            else setActiveTab('treatments');
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
                                <a href="tel:+918065060900" className={styles.phoneNumber} aria-label="Citrine Clinic Phone Number"> +91-8065060900</a>
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
                                        <li><Link href="/blog" onClick={toggleMenu}>Blogs</Link></li>
                                        <li><Link href="/clinic-gallery" onClick={toggleMenu}>Gallery</Link></li>
                                        <li><Link href="/testimonials" onClick={toggleMenu}>Written Testimonials</Link></li>
                                        {/* <li><Link href="/results" onClick={toggleMenu}>Results</Link></li> */}
                                        <li><Link href="/technologies" onClick={toggleMenu}>Technologies</Link></li>
                                        <li><Link href="/videos" onClick={toggleMenu}>Videos</Link></li>
                                        <li><Link href="/media" onClick={toggleMenu}>Media</Link></li>
                                        {/* <li><Link href="/offers" onClick={toggleMenu}>Offers</Link></li> */}
                                        <li><Link href="/contact" onClick={toggleMenu}>Contact Us</Link></li>
                                        <li><Link href="/book-an-appointment" onClick={toggleMenu}>Request An Appointment</Link></li>
                                        <li><Link href="/explore" onClick={toggleMenu}>Explore</Link></li>
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
                                        {/* <li><Link href="/results" onClick={toggleMenu}>Results</Link></li> */}
                                        <li><Link href="/technologies" onClick={toggleMenu}>Technologies</Link></li>
                                        <li><Link href="/videos" onClick={toggleMenu}>Videos</Link></li>
                                        <li><Link href="/media" onClick={toggleMenu}>Media</Link></li>
                                        {/* <li><Link href="/offers" onClick={toggleMenu}>Offers</Link></li> */}
                                        <li><Link href="/contact" onClick={toggleMenu}>Contact Us</Link></li>
                                        <li><Link href="/book-an-appointment" onClick={toggleMenu}>Request An Appointment</Link></li>
                                        <li><Link href="/explore" onClick={toggleMenu}>Explore</Link></li>
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
                                            <li><Link href="/anti-wrinkle-injection-in-gurgaon" onClick={toggleMenu}>Anti Wrinkle Injection</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>Laser Resurfacing</Link></li>
                                            <li><Link href="/bridal-dermatology-treatment" onClick={toggleMenu}>Bridal Dermatology</Link></li>
                                            <li><Link href="/microblading" onClick={toggleMenu}>Microblading</Link></li>
                                            <li><Link href="/chemical-peel-treatment-in-gurgaon" onClick={toggleMenu}>Chemical Peels</Link></li>
                                            <li><Link href="/microneedling" onClick={toggleMenu}>Microneedling</Link></li>
                                            <li><Link href="/dermal-fillers-treatment-in-gurgaon" onClick={toggleMenu}>Dermal Fillers</Link></li>
                                            <li><Link href="/pumpkin-medi-facial" onClick={toggleMenu}>Pumpkin Medifacial</Link></li>
                                            <li><Link href="/exilis-elite" onClick={toggleMenu}>Exilis Elite</Link></li>
                                            <li><Link href="/blood-derived-growth-factors" onClick={toggleMenu}>Blood-derived Growth Factors</Link></li>
                                            <li><Link href="/eye-restore" onClick={toggleMenu}>Eye Restore Therapy</Link></li>
                                            <li><Link href="/" onClick={toggleMenu}>PRF Therapy</Link></li>
                                            <li><Link href="/gfc-hair-treatment-in-gurgaon" onClick={toggleMenu}>Hair GFC</Link></li>
                                            <li><Link href="/repechage-medi-facial-in-gurgaon" onClick={toggleMenu}>Repechage Medifacial</Link></li>
                                            <li><Link href="/hifu" onClick={toggleMenu}>HIFU</Link></li>
                                            <li><Link href="/laser-tattoo-removal-treatment-in-gurgaon" onClick={toggleMenu}>Tattoo Removal</Link></li>
                                            <li><Link href="/hydrafacial-md" onClick={toggleMenu}>Hydrafacial MD</Link></li>
                                            <li><Link href="/clearlift-laser" onClick={toggleMenu}>Total Clearlift</Link></li>
                                            <li><Link href="/laser-hair-reduction" onClick={toggleMenu}>Laser Hair Reduction</Link></li>
                                            <li><Link href="/zo-obagi-medi-facial" onClick={toggleMenu}>Zo Obagi Medifacial</Link></li>
                                            <li><Link href="/morpheus8-treatment-in-gurgaon" onClick={toggleMenu}>Morpheus8 Treatment</Link></li>
                                            <li><Link href="/artiqa-body-contouring-treatment" onClick={toggleMenu}>Artiqa Body Contouring Treatment</Link></li>
                                            <li><Link href="/laser-toning-in-gurgaon" onClick={toggleMenu}>Laser Toning</Link></li>
                                            <li><Link href="/exosomes-therapy" onClick={toggleMenu}>Exosomes Therapy</Link></li>
                                            <li><Link href="/pdrn-therapy" onClick={toggleMenu}>PDRN Therapy</Link></li>
                                            <li><Link href="/spmu" onClick={toggleMenu}>SPMU</Link></li>
                                            <li><Link href="/ultherapy" onClick={toggleMenu}>Ultherapy</Link></li>
                                            <li><Link href="/aptos-thread-lift" onClick={toggleMenu}>Aptos Thread Lift</Link></li>
                                            <li><Link href="/forma-rf-skin-tightening" onClick={toggleMenu}>Forma RF Skin Tightening</Link></li>
                                            <li><Link href="/profhilo" onClick={toggleMenu}>Profhilo</Link></li>
                                            <li><Link href="/aqua-restore-4d-facial-in-gurgaon" onClick={toggleMenu}>Aqua Restore 4D Facial</Link></li>
                                            <li><Link href="/co2-fractional-laser-treatment" onClick={toggleMenu}>CO2 Fractional Laser Treatment</Link></li>
                                            <li><Link href="/body-ballancer" onClick={toggleMenu}>Body Ballancer</Link></li>
                                            <li><Link href="/intimate-area-lightening-treatment" onClick={toggleMenu}>Intimate Area Lightening Treatment</Link></li>
                                            <li><Link href="/rich-peel-advance" onClick={toggleMenu}>Rich Peel Advance</Link></li>
                                            <li><Link href="/dermapen-4" onClick={toggleMenu}>Dermapen 4</Link></li>
                                        </ul>
                                    </AccordionSection>
                                    <AccordionSection
                                        title="CONCERNS"
                                        isOpen={activeTab === 'concerns'}
                                        onClick={() => setActiveTab(activeTab === 'concerns' ? '' : 'concerns')}>
                                        <ul className={styles.menuList}>
                                            <li><Link href="/acne" onClick={toggleMenu}>Acne</Link></li>
                                            <li><Link href="/pigmentation" onClick={toggleMenu}>Pigmentation</Link></li>
                                            <li><Link href="/ageing" onClick={toggleMenu}>Ageing</Link></li>
                                            <li><Link href="/excessive-hair-growth" onClick={toggleMenu}>Excessive Hair Growth</Link></li>
                                            <li><Link href="/hair-loss" onClick={toggleMenu}>Hair Loss</Link></li>
                                            <li><Link href="/eyes" onClick={toggleMenu}>Eyes</Link></li>
                                            <li><Link href="/lips" onClick={toggleMenu}>Lips</Link></li>
                                            <li><Link href="/hands-and-feet" onClick={toggleMenu}>Hands and Feet</Link></li>
                                            <li><Link href="/body-contouring" onClick={toggleMenu}>Body Contouring</Link></li>
                                            <li><Link href="/general-dermatology" onClick={toggleMenu}>General Dermatology</Link></li>
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
                                            <li><Link href="/eye-pla-te-let-rich-fibrin-therapy" onClick={toggleMenu}>Eye PRF Therapy</Link></li>
                                            <li><Link href="/eye-restore" onClick={toggleMenu}>Eye Restore Therapy</Link></li>
                                        </ul>
                                    </AccordionSection>
                                    <Link href="/book-an-appointment" className={styles.mobileAppointmentBtn} onClick={toggleMenu}>
                                        REQUEST AN APPOINTMENT
                                    </Link>
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
                                            <li><Link href="/acne" onClick={toggleMenu}>Acne</Link></li>
                                            <li><Link href="/pigmentation" onClick={toggleMenu}>Pigmentation</Link></li>
                                            <li><Link href="/ageing" onClick={toggleMenu}>Ageing</Link></li>
                                            <li><Link href="/excessive-hair-growth" onClick={toggleMenu}>Excessive Hair Growth</Link></li>
                                            <li><Link href="/hair-loss" onClick={toggleMenu}>Hair Loss</Link></li>
                                            <li><Link href="/eyes" onClick={toggleMenu}>Eyes</Link></li>
                                            <li><Link href="/lips" onClick={toggleMenu}>Lips</Link></li>
                                            <li><Link href="/hands-and-feet" onClick={toggleMenu}>Hands and Feet</Link></li>
                                            <li><Link href="/body-contouring" onClick={toggleMenu}>Body Contouring</Link></li>
                                            <li><Link href="/general-dermatology" onClick={toggleMenu}>General Dermatology</Link></li>
                                        </ul>
                                    )}
                                    {activeTab === 'treatments' && (
                                        <div className={styles.treatmentList}>
                                            <ul>
                                                <li><Link href="/anti-wrinkle-injection-in-gurgaon" onClick={toggleMenu}>Anti Wrinkle Injection</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>Laser Resurfacing</Link></li>
                                                <li><Link href="/bridal-dermatology-treatment" onClick={toggleMenu}>Bridal Dermatology</Link></li>
                                                <li><Link href="/microblading" onClick={toggleMenu}>Microblading</Link></li>
                                                <li><Link href="/chemical-peel-treatment-in-gurgaon" onClick={toggleMenu}>Chemical Peels</Link></li>
                                                <li><Link href="/microneedling" onClick={toggleMenu}>Microneedling</Link></li>
                                                <li><Link href="/dermal-fillers-treatment-in-gurgaon" onClick={toggleMenu}>Dermal Fillers</Link></li>
                                                <li><Link href="/pumpkin-medi-facial" onClick={toggleMenu}>Pumpkin Medifacial</Link></li>
                                                <li><Link href="/exilis-elite" onClick={toggleMenu}>Exilis Elite</Link></li>
                                                <li><Link href="/blood-derived-growth-factors" onClick={toggleMenu}>Blood-derived Growth Factors</Link></li>
                                                <li><Link href="/eye-restore" onClick={toggleMenu}>Eye Restore Therapy</Link></li>
                                                <li><Link href="/" onClick={toggleMenu}>PRF Therapy</Link></li>
                                                <li><Link href="/gfc-hair-treatment-in-gurgaon" onClick={toggleMenu}>Hair GFC</Link></li>
                                                <li><Link href="/repechage-medi-facial-in-gurgaon" onClick={toggleMenu}>Repechage Medifacial</Link></li>
                                                <li><Link href="/hifu" onClick={toggleMenu}>HIFU</Link></li>
                                                <li><Link href="/laser-tattoo-removal-treatment-in-gurgaon" onClick={toggleMenu}>Tattoo Removal</Link></li>
                                                <li><Link href="/hydrafacial-md" onClick={toggleMenu}>Hydrafacial MD</Link></li>
                                                <li><Link href="/clearlift-laser" onClick={toggleMenu}>Total Clearlift</Link></li>
                                                <li><Link href="/laser-hair-reduction" onClick={toggleMenu}>Laser Hair Reduction</Link></li>
                                                <li><Link href="/zo-obagi-medi-facial" onClick={toggleMenu}>Zo Obagi Medifacial</Link></li>
                                                <li><Link href="/morpheus8-treatment-in-gurgaon" onClick={toggleMenu}>Morpheus8 Treatment</Link></li>
                                                <li><Link href="/artiqa-body-contouring-treatment" onClick={toggleMenu}>Artiqa Body Contouring Treatment</Link></li>
                                                <li><Link href="/laser-toning-in-gurgaon" onClick={toggleMenu}>Laser Toning</Link></li>
                                                <li><Link href="/exosomes-therapy" onClick={toggleMenu}>Exosomes Therapy</Link></li>
                                                <li><Link href="/pdrn-therapy" onClick={toggleMenu}>PDRN Therapy</Link></li>
                                                <li><Link href="/spmu" onClick={toggleMenu}>SPMU</Link></li>
                                                <li><Link href="/ultherapy" onClick={toggleMenu}>Ultherapy</Link></li>
                                                <li><Link href="/aptos-thread-lift" onClick={toggleMenu}>Aptos Thread Lift</Link></li>
                                                <li><Link href="/forma-rf-skin-tightening" onClick={toggleMenu}>Forma RF Skin Tightening</Link></li>
                                                <li><Link href="/profhilo" onClick={toggleMenu}>Profhilo</Link></li>
                                                <li><Link href="/aqua-restore-4d-facial-in-gurgaon" onClick={toggleMenu}>Aqua Restore 4D Facial</Link></li>
                                                <li><Link href="/co2-fractional-laser-treatment" onClick={toggleMenu}>CO2 Fractional Laser Treatment</Link></li>
                                                <li><Link href="/body-ballancer" onClick={toggleMenu}>Body Ballancer</Link></li>
                                                <li><Link href="/intimate-area-lightening-treatment" onClick={toggleMenu}>Intimate Area Lightening Treatment</Link></li>
                                                <li><Link href="/rich-peel-advance" onClick={toggleMenu}>Rich Peel Advance</Link></li>
                                                <li><Link href="/dermapen-4" onClick={toggleMenu}>Dermapen 4</Link></li>
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
                                            <li><Link href="/eye-pla-te-let-rich-fibrin-therapy" onClick={toggleMenu}>Eye PRF Therapy</Link></li>
                                            <li><Link href="/eye-restore" onClick={toggleMenu}>Eye Restore Therapy</Link></li>
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