'use client';
import React, { useState, useEffect } from 'react';
import styles from './TableOfContent.module.css';

interface TableOfContentProps {
  sections?: Array<{
    id: string;
    title: string;
  }>;
}

const TableOfContent: React.FC<TableOfContentProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const menuListRef = React.useRef<HTMLUListElement>(null);

  // Default sections if not provided
  const defaultSections = [
    { id: 'overview', title: 'OVERVIEW' },
    { id: 'what-is', title: 'WHAT IS LASER TONING?' },
    { id: 'cost', title: 'COST' },
    { id: 'benefits', title: 'BENEFITS' },
    { id: 'risk-side-effects', title: 'RISK & SIDE EFFECTS' },
    { id: 'undergo', title: 'UNDERGO' },
    { id: 'steps', title: 'STEPS' },
    { id: 'timeline', title: 'TIMELINE & RESULTS' },
    { id: 'skincondition', title: 'SKIN CONDITIONS' },
    { id: 'technologies', title: 'TECHNOLOGIES' },
    { id: 'faq', title: 'FAQs' },
    { id: 'result', title: 'RESULTS' },
    { id: 'videos', title: 'VIDEOS' },
    { id: 'testimonial', title: 'TESTIMONIALS' },
    { id: 'appointment', title: 'APPOINTMENT' }
  ];

  const menuSections = sections || defaultSections;

  // Handle mouse drag scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    const menuList = menuListRef.current;
    if (!menuList) return;
    
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - menuList.offsetLeft);
    setScrollLeft(menuList.scrollLeft);
    menuList.style.cursor = 'grabbing';
    menuList.style.userSelect = 'none';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const menuList = menuListRef.current;
    if (!menuList) return;
    
    e.preventDefault();
    const x = e.pageX - menuList.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scroll
    
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    
    menuList.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    const menuList = menuListRef.current;
    if (menuList) {
      menuList.style.cursor = 'grab';
      menuList.style.userSelect = 'auto';
    }
    setIsDragging(false);
    // Reset hasDragged after a short delay
    setTimeout(() => setHasDragged(false), 150);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      const menuList = menuListRef.current;
      if (menuList) {
        menuList.style.cursor = 'grab';
        menuList.style.userSelect = 'auto';
      }
      setIsDragging(false);
      setHasDragged(false);
    }
  };

  // Handle horizontal scroll with mouse wheel
  useEffect(() => {
    const menuList = menuListRef.current;
    if (!menuList) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        menuList.scrollLeft += e.deltaY;
        updateGradients();
      }
    };

    const updateGradients = () => {
      if (!menuList) return;
      const { scrollLeft, scrollWidth, clientWidth } = menuList;
      setShowLeftGradient(scrollLeft > 10);
      setShowRightGradient(scrollLeft < scrollWidth - clientWidth - 10);
    };

    menuList.addEventListener('wheel', handleWheel, { passive: false });
    menuList.addEventListener('scroll', updateGradients);
    
    // Initial check
    updateGradients();
    
    // Check on resize
    window.addEventListener('resize', updateGradients);

    return () => {
      menuList.removeEventListener('wheel', handleWheel);
      menuList.removeEventListener('scroll', updateGradients);
      window.removeEventListener('resize', updateGradients);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Make sticky on scroll
      setIsSticky(window.scrollY > 100);

      // Detect active section
      const scrollPosition = window.scrollY + 150;
      
      for (const section of menuSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuSections]);

  const handleClick = (sectionId: string) => {
    // Don't navigate if user was dragging
    if (hasDragged) {
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Offset for sticky header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`${styles.tableOfContent} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.container}>
        <div className={styles.menuWrapper}>
          {showLeftGradient && <div className={styles.gradientLeft} />}
          {showRightGradient && <div className={styles.gradientRight} />}
          <ul 
            ref={menuListRef} 
            className={styles.menuList}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {menuSections.map((section) => (
              <li key={section.id} className={styles.menuItem}>
                <button
                  onClick={() => handleClick(section.id)}
                  className={`${styles.menuLink} ${activeSection === section.id ? styles.active : ''}`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TableOfContent;