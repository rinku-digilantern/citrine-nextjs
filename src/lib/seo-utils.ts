import { Metadata } from 'next';

export function resolveMetadata(slug: string, seoData: any, fallbackTitle: string = 'Citrine Clinic'): Metadata {
  const cleanSlug = (slug === 'home' || slug === '') ? '' : (slug.startsWith('/') ? slug.substring(1) : slug);
  const fullUrl = `https://www.citrineclinic.com/${cleanSlug}`;

  const title = seoData?.title_tag || fallbackTitle;
  const description = seoData?.description_tag || '';
  const keywords = seoData?.keyword_tag || undefined;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: fullUrl,
      languages: {
        'en-in': fullUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
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
      title,
      description,
      images: ['https://www.citrineclinic.com/assets/images/img/logo.webp'],
    },
  };
}
