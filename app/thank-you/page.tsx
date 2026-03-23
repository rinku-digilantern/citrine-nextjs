import React from 'react'
import Link from 'next/link'
import styles from './style.module.css'
import { AiFillCheckCircle } from 'react-icons/ai'
import type { Metadata } from "next";
import metadataConfig from "@/app/metadata";
export const generateMetadata = (): Metadata => metadataConfig["/thank-you"];

export default function ThankYou() {
  return (
    <section className={styles.thankpage}>
      <div className="wrapper">
        <div className={`row ${styles.row}`}>
          <div className={`col col-12 col-md-8 col-lg-7 ${styles.col}`}>
            <AiFillCheckCircle/>
            <h1 className={`mainHeading ${styles.mainHeading}`}>Thank You!</h1>
            <p className="para">We have received your request. We will get in touch with you shortly.</p>
            <Link href="/" className={styles.gohome}>Go Home</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
