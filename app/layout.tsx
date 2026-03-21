import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/src/app/components/common/Header/Header";
import Footer from "@/src/app/components/common/Footer/Footer";

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
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
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

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={`${montserrat.variable} ${poppins.variable} antialiased`}> */}
        <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <link rel="preconnect" href="https://api.citrineclinic.com/" />
        <link rel="dns-prefetch" href="https://api.citrineclinic.com/" />
        <meta name="google-site-verification" content="e7pE022ijodx3B0Hjo1h_4ckgYRcg11aPjyBCg1YRxE"></meta>
      </head>
      <body suppressHydrationWarning className={`font-sans ${montserrat.variable} ${poppins.variable} antialiased`}>
         <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}