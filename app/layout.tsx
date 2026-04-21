import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/src/app/components/common/Header/Header";
import Footer from "@/src/app/components/common/Footer/Footer";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Best Skin Doctor in Gurgaon | Dr. Niti Gaur | Citrine Clinic",
  description: "Dr. Niti Gaur is the best skin doctor in Gurgaon, offers advanced, personalised skin and cosmetic treatments at Citrine Clinic. Schedule your consultation now.",
  metadataBase: new URL('https://www.citrineclinic.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Citrine Clinic',
    images: [
      {
        url: 'https://www.citrineclinic.com/assets/images/img/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Citrine Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@citrineclinic',
    images: ['https://www.citrineclinic.com/assets/images/img/logo.webp'],
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={`${montserrat.variable} ${poppins.variable} antialiased`}> */}
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <link rel="preconnect" href="https://api.citrineclinic.com/" />
        <link rel="dns-prefetch" href="https://api.citrineclinic.com/" />
        <meta name="google-site-verification" content="e7pE022ijodx3B0Hjo1h_4ckgYRcg11aPjyBCg1YRxE"></meta>
        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', 'GTM-5R4CBF3');`,
          }}
        />

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Citrine Clinic",
              "url": "https://www.citrineclinic.com",
              "logo": "https://www.citrineclinic.com/assets/images/logo.svg",
              "sameAs": [
                "https://www.facebook.com/citrineclinicbydrniti/",
                "https://www.instagram.com/citrineclinic/",
                "https://www.youtube.com/@citrineclinicbydr.nitigaur2957"
              ]
            }),
          }}
        />

        {/* Local Business Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Citrine Clinic by Dr Niti Gaur",
              "image": "https://www.citrineclinic.com/_next/image?url=%2Fassets%2Fimages%2Fabout-doctor%2Four-facilitybg.webp&w=750&q=75",
              "@id": "",
              "url": "https://www.citrineclinic.com/",
              "telephone": "098686 49805",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "SCO- 19, Huda Market Rd, Sector 15 Part 2, Market, Gurugram, Haryana",
                "addressLocality": "Gurgaon",
                "postalCode": "122001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.4576722,
                "longitude": 77.0446401
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "20:00"
              },
              "sameAs": [
                "https://www.facebook.com/citrineclinicbydrniti/",
                "https://www.instagram.com/citrinedermatologyclinic/",
                "https://www.youtube.com/channel/UC9Oo0M9EtAcWcNXN1_e6gsQ"
              ]
            }),
          }}
        />

        {/* Person Schema */}
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "Dr. Niti Gaur",
              "url": "https://www.citrineclinic.com/dermatologist-in-gurgaon",
              "image": "https://www.citrineclinic.com/assets/images/home-doctor-bg.webp",
              "sameAs": [
                "https://www.facebook.com/citrineclinicbydrniti/",
                "https://www.instagram.com/citrineclinic/",
                "https://www.youtube.com/@citrineclinicbydr.nitigaur2957"
              ],
              "jobTitle": "Dermatologist, Cosmetologist, Trichologist",
              "worksFor": {
                "@type": "Organization",
                "name": "Citrine Clinic"
              }
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className={`font-sans ${montserrat.variable} ${poppins.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5R4CBF3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}