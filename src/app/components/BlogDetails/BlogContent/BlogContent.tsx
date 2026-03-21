"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./BlogContent.module.css";

export default function BlogContent() {
  const tocSections = [
    { id: "why-pigmentation-occurs", label: "Why Pigmentation Occurs?" },
    {
      id: "common-types-of-pigmentation",
      label: "Common Types of Pigmentation and Their Characteristics",
    },
    {
      id: "how-to-identify-pigmentation-type",
      label: "How to Identify Your Pigmentation Type Accurately?",
    },
    {
      id: "dermatologist-recommended-treatments",
      label: "Dermatologist-Recommended Treatments for Pigmentation",
    },
    {
      id: "preventing-pigmentation-recurrence",
      label: "Preventing Pigmentation Recurrence–Long-Term Skin Care Tips",
    },
    {
      id: "faq",
      label: "FAQs",
    }
  ];

  const [activeSection, setActiveSection] = useState(tocSections[0].id);
  const [tocOpen, setTocOpen] = useState(false);
  const handleTocToggle = () => setTocOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      let current = tocSections[0].id;
      let minDistance = Infinity;
      tocSections.forEach((section) => {
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
      // If scrolled past all sections, highlight the last one
      const lastSection = tocSections[tocSections.length - 1];
      const lastEl = document.getElementById(lastSection.id);
      if (lastEl && lastEl.getBoundingClientRect().top < 120) {
        current = lastSection.id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.BlogContent}>
      <div className={styles.container}>
        <div className={styles.blogLayout}>
          {/* Left: Table of Contents */}
          <aside className={styles.tocColumn}>
            <div className={styles.tocBox}>
              {/* Desktop Title */}
              <div className={styles.tocTitle}>TABLE OF CONTENTS</div>
              {/* Mobile Accordion Title */}
              <div
                className={styles.tocTitleMobile}
                onClick={handleTocToggle}
                aria-expanded={tocOpen}
                tabIndex={0}
                role="button"
              >
                TABLE OF CONTENTS
                <span className={styles.tocArrow}>{tocOpen ? "▲" : "▼"}</span>
              </div>
              {/* List Wrapper for mobile accordion */}
              <div
                className={`${styles.tocListWrapper} ${tocOpen ? styles.open : ""}`}>
                <ul className={styles.tocList}>
                  {tocSections.map((section) => (
                    <li
                      key={section.id}
                      className={
                        activeSection === section.id ? styles.active : ""
                      }>
                      <a
                        href={`#${section.id}`}
                        onClick={() => {
                          if (window.innerWidth <= 900) setTocOpen(false);
                        }}>
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
            <p className={styles.intro}>
              Persistent dark spots or patches and uneven skin tone in visible
              areas are most people’s aesthetic concerns today, as pigmentation
              irregularities affect appearance and confidence. In most cases,
              pigmentation issues appear similar, but their causes can vary, so
              no single treatment would fix every type of pigmentation.
            </p>
            <p>
              Identifying one’s pigmentation type is the first and most
              essential step in effectively treating the condition. In this
              blog, we shall discuss how pigmentation develops, the common types
              of pigmentation, how each type manifests, and how to recognize
              them. Later, we’ll share the safest and effective
              dermatologist-recommended{" "}
              <a href="#">pigmentation treatment in Gurgaon</a>, including
              helpful tips and in-office treatments. Any of them, alone or in
              combination, can help you achieve clearer, evenly toned, youthful,
              healthier-looking skin.
            </p>
            <h2 id="why-pigmentation-occurs">Why Pigmentation Occurs?</h2>
            <p>
              Pigmentation, the skin coloring in some areas of the face or body,
              is the result of an excess of melanin– precisely eumelanin.
              Eumelanin is a brown pigment present naturally in the skin and
              responsible for its color and protection from the sun’s UV
              radiation. It is synthesised by specialised skin cells called
              melanocytes.
            </p>
            <p>
              Usually, it’s triggered by sun/UV exposure, fluctuating hormones,
              severe or inflammatory acne breakouts, certain medical conditions,
              poor lifestyle choices, vitamin B12 deficiency, certain
              medications, aging, or genetics.
            </p>
            <h2 id="common-types-of-pigmentation">
              Common Types of Pigmentation and Their Characteristics
            </h2>
            <ul className={styles.pigmentList}>
              <li>
                <b>Melasma–</b> It is the blotchy light brown to grey patches
                that show up symmetrically on sun-exposed areas of the face
                (cheeks, upper lip, and forehead), often due to hormonal shifts.
              </li>
              <li>
                <b>Sun spots or age spots (Solar lentigines)</b> are flat,
                well-defined, brown, tan, or black spots measuring 1–3 mm on the
                face, arms, and hands of adults, resulting from cumulative or
                prolonged exposure to UV rays from the sun.
              </li>
              <li>
                <b>Freckles–</b> They are tan to light brown or reddish-brown, 1
                to 2 mm spots, often genetic in fair-skinned people who are
                repeatedly exposed to sunlight. It is prominent in summers when
                UV rays are strong and fades in winters due to limited UV
                exposure.
              </li>
              <li>
                <b>Post-inflammatory Hyperpigmentation–</b> It’s the flat,
                irregular spots or patches of tan to dark brown to black color
                that develop as the skin heals after injuries like acne, cuts,
                or burns.
              </li>
            </ul>
            <h2 id="how-to-identify-pigmentation-type">
              How to Identify Your Pigmentation Type Accurately?
            </h2>
            <Image
              src="/assets/images/blogdetail/demopic.png"
              alt="Pigmentation Types"
              width={475}
              height={226}
              className={styles.pigmentImage}
            />
            <p>
              To accurately identify the type of pigmentation you are struggling
              with, you need to see a dermatologist for a proper diagnosis. A
              dermatologist has the required expertise, experience, and tools,
              like a Wood’s lamp- a special UV light to examine skin, to
              identify the type, depth, and cause of pigmentation.
              <br />
              <br /> The confirmation of pigmentation concern and identification
              of its type is possible only after gathering the following
              information:
            </p>
            <ul className={styles.pigmentList}>
              <li>Timing or onset of pigmentation</li>
              <li>The location where pigmentation develops</li>
              <li>The shape and color of the pigmentation spot/patch</li>
              <li>The family history of pigmentation (if any)</li>
              <li>Any change in spots or patches with UV exposure.</li>
              <li>
                An accurate diagnosis is crucial to selecting the most suitable
                skin pigmentation treatment.
              </li>
            </ul>
            <h2 id="dermatologist-recommended-treatments">
              Dermatologist-Recommended Treatments for Pigmentation
            </h2>
            <ol className={styles.pigmentListdecimal}>
              <li>
                <strong>Topical Hyperpigmentation Treatment-</strong>{" "}
                Over-the-counter and prescription-strength skin lightening or
                brightening products are available. These contain ingredients
                like antioxidants (Vitamin C) to inhibit melanin production and
                promote healthy, bright skin; reti-noids that increase skin cell
                turnover to make pigmented skin shed off faster; hydr-oquinone
                to help lighten the skin; azelaic acid to reduce
                inflammation-induced pigmentation; and cyste-amine or kojic acid
                that help inhibit pigmentation.
                <br />
                <br /> Professional Pigmentation Removal- The proven in-office
                best treatments for pigmentation include:
              </li>
              <li>
                <strong>Chemical peel for hyperpigmentation-</strong> Depending
                on the depth of pigmentation, there are different strengths of
                exfoliating acids available. Mild peels like glycolic acid or
                lactic acid (alpha-hydroxy acids); Medium peels like salicylic
                acid (beta-hydroxy acids); and Deep/strong peels like
                trichloroacetic acid or phenol. Each work in removing the
                pigmented layers to reveal a new, evenly toned skin.
              </li>
              <li>
                <strong>Laser treatment for dark spots-</strong> Non-ablative
                lasers like Q-switched Nd: YAG are mostly used for toning skin.
                These help thermally destroy excess melanin, promoting collagen
                skin remodelling. Ablative lasers generate heat that helps
                resurface the pigmented skin and encourages skin cell turnover.
              </li>
              <li>
                <strong>
                  Microneedling with skin lightening/brightening serums-
                </strong>{" "}
                Fine needles of a certain depth help create micro-injuries in
                the skin to which the body responds by stimulating collagen
                production. The skin tone and texture improve significantly when
                these micro-channels, skin infusions of skin-lightening or
                brightening ing redients, are created.
              </li>
            </ol>
            <h2 id="role-of-skincare">
              Role of Skincare and Sun Protection in Pigmentation Control
            </h2>
            <p>
              When it comes to treating skin discoloration, practicing proper
              sun protection is very important. Also, it adheres to proper skin
              care for hyperpigmentation. This helps prevent new spots from
              developing, avoid worsening of existing pigmentation, and reduce
              the appearance of existing spots. Proper skincare, including sun
              protection, even supports the topical or in-office treatments.
            </p>
            <p>So, a dermatologist advises doing the following:</p>
            <ul className={styles.pigmentList}>
              <li>
                Regularly exfoliate the skin with a gentle chemical or physical
                exfoliant
              </li>
              <li>
                Use skincare products that work to inhibit melanin production
                and fade pigmentation
              </li>
              <li>
                Keeping the skin shielded from UVA and UVB rays of the sun by
                application of a broad-spectrum sunscreen of SPF 30 or higher
              </li>
              <li>
                Maintain skin’s hydration and health with gentle products like
                hydrating cleansers, suitable moisturisers, and infusion serums
              </li>
              <li>
                Incorporate use of products containing antioxidants like Vitamin
                C that help fight oxidative damage of the skin.
              </li>
            </ul>
            <h2 id="preventing-pigmentation-recurrence">
              Preventing Pigmentation Recurrence– Long-Term Skin Care Tips
            </h2>
            <ul className={styles.pigmentList}>
              <li>Have nutrient-loaded meals</li>
              <li>Be gentle with the skin</li>
              <li>Protect the skin from the sun and direct heat</li>
              <li>
                Have restful sleep at night and manage stress with healthy
                techniques
              </li>
              <li>Exfoliate skin regularly with the right exfoliant</li>
              <li>
                Manage conditions, change medications, or make some lifestyle
                modifications, whichever is contributing to pigmentation
              </li>
              <li>
                Treat trauma or injury to the skin promptly before it leads to
                inflammation and stubborn pigmentation
              </li>
              <li>
                Schedule regular skin check-ups and dermatologist consultations
                to maintain the results of pigmentation treatment long term.
              </li>
              <li>
                Prioritize the use of skincare products that strengthen the skin
                barrier, support hydration, inhibit melanin production,
                facilitate skin cell turnover, or reduce inflammation.
              </li>
            </ul>

            <div className={styles.faqsection}>
            <h2 id="faq">FAQs</h2>
            <h3>1. What is Lorem Ipsum?</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
            <ul>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            </ul>

            <h3>2. Why do we use it?</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

            <h3>3. Where does it come from?</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <ol>
              <li>Lorem Ipsum is simply dummy text.</li>
              <li>Lorem Ipsum is simply dummy text.</li>
              <li>Lorem Ipsum is simply dummy text.</li>
              <li>Lorem Ipsum is simply dummy text.</li>
            </ol>

            <h3>4. Where can I get some?</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>

            <h3>5. What is Lorem Ipsum?</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
            </div>

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
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      nullam nisi elit pharetra vel arcu ac viverra congue
                      risus. Aenean pretium non magna nec posuere. Morbi dapibus
                      semper tellus vitae aliquet augue varius sit amet.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Where to get Pigmentation Treatment Section */}
            <section className={styles.treatmentSection}>
              <Image
                src="/assets/images/blogdetail/lastbg.webp"
                alt="Dr. Niti Gaur"
                className={styles.treatmentImage}
                width={750}
                height={480}/>
              <div className={styles.treatmentBox}>
                <h3 className={styles.treatmentTitle}>
                  Where to get Pigmentation Treatment in Gurgaon?
                </h3>
                <div className={styles.treatmentContent}>
                  <p>
                    Pigmentation can be of different types, each with its own
                    causes and manifestations. Identifying one’s own type
                    precisely, with the help of a{" "}
                    <a href="#" className={styles.treatmentLink}>
                      dermatologist in Gurgaon
                    </a>{" "}
                    at Citrine Clinic, can help you receive the best treatment
                    plan. The best treatment for pigmentation on the face or the
                    best hyperpigmentation treatment for the body is a
                    combination approach at Citrine Clinic. The experts
                    recommend a skincare regimen tailored for hyperpigmentation
                    and targeted pigmentation removal treatments to reveal a
                    healthy skin glow.
                  </p>
                  <p>
                    If you are in Gurgaon, consider consulting Citrine Clinic’s
                    team of expert dermatologists led by renowned{" "}
                    <a href="#" className={styles.treatmentLink}>
                      Dr. Niti Gaur
                    </a>
                    , for personalised pigmentation treatment and management.
                  </p>
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
                  <a href="https://www.facebook.com/citrineclinicbydrniti/" rel="nofollow" target="_blank">
                    <Image
                      src="/assets/images/blogdetail/facebook.webp"
                      alt="Facebook"
                      width={20}
                      height={20}/>Facebook</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/citrinedermatologyclinic/" rel="nofollow" target="_blank" aria-label="Instagram">
                    <Image
                      src="/assets/images/blogdetail/instagram.webp"
                      alt="Instagram"
                      width={20}
                      height={20}/>Instagram</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UC9Oo0M9EtAcWcNXN1_e6gsQ" rel="nofollow" target="_blank" aria-label="Youtube">
                    <Image
                      src="/assets/images/blogdetail/youtube.webp"
                      alt="YouTube"
                      width={32}
                      height={32}/>Youtube</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
