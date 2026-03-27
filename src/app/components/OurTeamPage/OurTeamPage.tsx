'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './OurTeamPage.module.css';

type TeamMember = {
  id: number;
  name: string;
  description: string;
  image: string;
  experience?: string;
  url?: string;
};

export default function OurTeamPage() {

  const doctors: TeamMember[] = [
    {
      id: 1,
      name: 'DR. NITI GAUR',
      description: 'MBBS, MD - Dermatology, Venereology & Leprosy Dermatologist, Cosmetologist, Trichologist, TEDx Speaker',
      image: '/assets/images/about-clinic/doctor01.webp',
      experience: '<span>20+</span> years of experience',
      url:'/dermatologist-in-gurgaon'
    },
    {
      id: 2,
      name: 'Dr. Isheeta RVM',
      description: 'MBBS, MD - Dermatology , Venereology & Leprosy Board Certified Dermatologist Laser,Injectable & Energy- Based Device expert',
      image: '/assets/images/about-clinic/doctor02.webp',
      experience: '<span>10+</span> years of experience',
    },
    {
      id: 3,
      name: 'Dr. Guneet Bedi',
      description: 'MBBS - Dermatology, Venereology & Leprosy (DVL).',
      image: '/assets/images/about-clinic/doctor03.webp',
      experience: '<span>10+</span> years of experience',
    },
    {
      id: 4,
      name: 'Dr. Nitika Yadav',
      description: 'MBBS, MD (Dermatology)',
      image: '/assets/images/about-clinic/doctor04.webp',
      experience: '<span>6+</span> years of clinical experience',
    },
  ];

  return (
    <section className={styles.OurTeamPage}>
      <div className={styles.teamcontainer}>
        <h1 className={`mainHeading ${styles.mainHeading}`}>Our Team</h1>

        <div className={styles.teamGrid}>
          {doctors.map((member) => (
            <article key={member.id} className={styles.doctorCard}>
              <div className={styles.imageWrapper}>
                {member.url ? (
                  <Link href={member.url}>
                    <Image src={member.image} alt={member.name} width={500} height={449} />
                  </Link>
                ) : (
                  <Image src={member.image} alt={member.name} width={500} height={449} />
                )}
              </div>
              <div className={styles.cardContent}>
                <div className={styles.doctorName}>{member.name}</div>
                {member.experience && (
                  <div
                    className={styles.doctorexperience}
                    dangerouslySetInnerHTML={{ __html: member.experience }}/>
                )}
                <div className={styles.doctorDescription}>{member.description}</div>
                {member.url && (
                  <Link href={member.url} className={styles.bookButton}>Read More</Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}