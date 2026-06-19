import { Metadata } from 'next';
import { headers } from 'next/headers';

export async function resolveMetadata(slug: string, seoData: any, fallbackTitle: string = 'Citrine Clinic'): Promise<Metadata> {
  const cleanSlug = (slug === 'home' || slug === '') ? '' : (slug.startsWith('/') ? slug.substring(1) : slug);

  // Get host and protocol from request headers dynamically on the server
  const headersList = await headers();
  const host = headersList.get('host') || 'www.citrineclinic.com';
  const proto = headersList.get('x-forwarded-proto') || 'https';

  const fullUrl = `${proto}://${host}${cleanSlug ? `/${cleanSlug}` : '/'}`;

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
          url: `${proto}://${host}/assets/images/logo.webp`,
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
      images: [`${proto}://${host}/assets/images/logo.webp`],
    },
  };
}
