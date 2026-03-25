"use client";
import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./BlogContent.module.css";

interface BlogContentProps {
  blogContent: string;      // HTML from API (blog_content)
  finalThoughts: string;    // HTML from API (final_thoughts)
  faqHeading: string;       // Plain text heading for FAQ
  faqContent: string;       // HTML from API (blog_faq)
  prevUrl: string;
  nextUrl: string;
}

/** Extract H2 headings from an HTML string to build the TOC */
function extractTocSections(html: string): { id: string; label: string }[] {
  const matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];
  return matches.map((m) => {
    const label = m[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
    const id    = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return { id, label };
  });
}

/** Inject id attributes into <h2> tags so scroll-spy can find them */
function injectHeadingIds(html: string): string {
  return html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (_, attrs, inner) => {
    const label = inner.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
    const id    = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `<h2${attrs} id="${id}">${inner}</h2>`;
  });
}

export default function BlogContent({
  blogContent,
  finalThoughts,
  faqHeading,
  faqContent,
  prevUrl,
  nextUrl,
}: BlogContentProps) {
  // Build TOC from all combined HTML sections
  const fullHtml = `${blogContent}${finalThoughts}`;
  const tocSections = useMemo(() => extractTocSections(fullHtml), [fullHtml]);

  // Add FAQ section to TOC if it exists
  const allTocSections = useMemo(() => {
    const sections = [...tocSections];
    if (faqContent) sections.push({ id: 'faq', label: faqHeading || 'Frequently Asked Questions' });
    return sections;
  }, [tocSections, faqContent, faqHeading]);

  const [activeSection, setActiveSection] = useState(allTocSections[0]?.id || '');
  const [tocOpen, setTocOpen] = useState(false);

  // Build share URLs from the current page path
  const pathname = usePathname();
  const pageUrl  = `https://www.citrineclinic.com${pathname}`;
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(pageUrl)}`,
    twitter:  `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}`,
  };

  useEffect(() => {
    if (!allTocSections.length) return;
    setActiveSection(allTocSections[0].id);
    const handleScroll = () => {
      let current = allTocSections[0].id;
      let minDistance = Infinity;
      allTocSections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top - 120);
          if (rect.top <= 120 && distance < minDistance) {
            minDistance = distance;
            current = section.id;
          }
        }
      });
      const lastSection = allTocSections[allTocSections.length - 1];
      const lastEl = document.getElementById(lastSection.id);
      if (lastEl && lastEl.getBoundingClientRect().top < 120) {
        current = lastSection.id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [allTocSections]);

  // Inject IDs into content HTML
  const contentWithIds       = useMemo(() => injectHeadingIds(blogContent), [blogContent]);
  const finalThoughtsWithIds = useMemo(() => injectHeadingIds(finalThoughts), [finalThoughts]);

  return (
    <div className={styles.BlogContent}>
      <div className={styles.container}>
        <div className={styles.blogLayout}>

          {/* Left: Table of Contents */}
          <aside className={styles.tocColumn}>
            <div className={styles.tocBox}>
              <div className={styles.tocTitle}>TABLE OF CONTENTS</div>
              <div
                className={styles.tocTitleMobile}
                onClick={() => setTocOpen((p) => !p)}
                aria-expanded={tocOpen}
                tabIndex={0}
                role="button"
              >
                TABLE OF CONTENTS
                <span className={styles.tocArrow}>{tocOpen ? "▲" : "▼"}</span>
              </div>
              <div className={`${styles.tocListWrapper} ${tocOpen ? styles.open : ""}`}>
                <ul className={styles.tocList}>
                  {allTocSections.map((section) => (
                    <li
                      key={section.id}
                      className={activeSection === section.id ? styles.active : ""}
                    >
                      <a
                        href={`#${section.id}`}
                        onClick={() => {
                          if (window.innerWidth <= 900) setTocOpen(false);
                        }}
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Center: Blog Content */}
          <main className={styles.contentColumn}>
            {/* Main blog body */}
            <div
              className={styles.blogBody}
              dangerouslySetInnerHTML={{ __html: contentWithIds }}
            />

            {/* Final Thoughts */}
            {finalThoughts && (
              <div
                className={styles.finalThoughts}
                dangerouslySetInnerHTML={{ __html: finalThoughtsWithIds }}
              />
            )}

            {/* FAQ Section */}
            {faqContent && (
              <div className={styles.faqsection} id="faq">
                {faqHeading && <h2>{faqHeading}</h2>}
                <div dangerouslySetInnerHTML={{ __html: faqContent }} />
              </div>
            )}

            {/* Prev / Next navigation */}
            {(prevUrl || nextUrl) && (
              <div className={styles.postNavigation}>
                {prevUrl ? (
                  <Link href={prevUrl} className={styles.navPrev}>← Previous Post</Link>
                ) : <span />}
                {nextUrl ? (
                  <Link href={nextUrl} className={styles.navNext}>Next Post →</Link>
                ) : <span />}
              </div>
            )}

            {/* About the Author Section */}
            <h2 id="author">About the Author</h2>
            <section className={styles.authorSection}>
              <div className={styles.authorBox}>
                <div className={styles.authorInfo}>
                  <Image
                    src="/assets/images/blogdetail/blogauthor.webp"
                    alt="Dr. Niti Gaur"
                    className={styles.authorImage}
                    width={200}
                    height={200}
                  />
                  <div>
                    <div className={styles.authorName}>Dr. Niti Gaur</div>
                    <div className={styles.authorDesc}>
                      Dr. Niti Gaur is a leading dermatologist and founder of Citrine Clinic, Gurgaon. With expertise in aesthetic and medical dermatology, she is known for her patient-centered approach and evidence-based treatments.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Right: Share Column */}
          <aside className={styles.shareColumn}>
            <div className={styles.shareBox}>
              <div className={styles.shareTitle}>Share</div>
              <ul className={styles.shareList}>
                <li>
                  <a href={shareUrls.facebook} rel="nofollow" target="_blank" aria-label="Share on Facebook">
                    <Image
                      src="/assets/images/blogdetail/facebook.webp"
                      alt="Facebook"
                      width={20}
                      height={20}
                    />Facebook
                  </a>
                </li>
                <li>
                  <a href={shareUrls.whatsapp} rel="nofollow" target="_blank" aria-label="Share on WhatsApp">
                    <Image
                      src="/assets/images/blogdetail/instagram.webp"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                    />WhatsApp
                  </a>
                </li>
                <li>
                  <a href={shareUrls.twitter} rel="nofollow" target="_blank" aria-label="Share on X (Twitter)">
                    <Image
                      src="/assets/images/blogdetail/youtube.webp"
                      alt="X (Twitter)"
                      width={32}
                      height={32}
                    />X / Twitter
                  </a>
                </li>
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
