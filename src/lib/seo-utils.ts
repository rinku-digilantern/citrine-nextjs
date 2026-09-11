import { Metadata } from 'next';
import { headers } from 'next/headers';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.citrineclinic.com';

/**
 * Build an absolute URL for a CMS-uploaded image.
 * `folder` is the path under /backend (e.g. 'blog', 'service/banner').
 * Returns null when there is no file, so callers can fall back to the logo.
 */
export function cmsImageUrl(folder: string, file?: string | null): string | null {
  if (!file || typeof file !== 'string') return null;
  if (/^https?:\/\//i.test(file)) return file;
  return `${BACKEND_URL}/backend/${folder}/${file}`;
}

/** First non-empty image URL from the given candidates. */
export function pickImage(...candidates: (string | null | undefined)[]): string | null {
  return candidates.find((c): c is string => Boolean(c)) ?? null;
}

export async function resolveMetadata(
  slug: string,
  seoData: any,
  fallbackTitle: string = 'Citrine Clinic',
  ogImage?: string | null
): Promise<Metadata> {
  const cleanSlug = (slug === 'home' || slug === '') ? '' : (slug.startsWith('/') ? slug.substring(1) : slug);

  // Get host and protocol from request headers dynamically on the server
  const headersList = await headers();
  const host = headersList.get('host') || 'www.citrineclinic.com';
  const proto = headersList.get('x-forwarded-proto') || 'https';

  const fullUrl = `${proto}://${host}${cleanSlug ? `/${cleanSlug}` : '/'}`;

  const title = seoData?.title_tag || fallbackTitle;
  const description = seoData?.description_tag || '';
  const keywords = seoData?.keyword_tag || undefined;

  // Page/blog featured image when the CMS has one, otherwise the clinic logo.
  // Dimensions are only declared for the logo — CMS uploads vary in size and a
  // wrong og:image:width makes previews worse than no hint at all.
  const image = ogImage
    ? { url: ogImage, alt: seoData?.alt_tag || title }
    : { url: `${proto}://${host}/assets/images/logo.webp`, width: 1200, height: 630, alt: 'Citrine Logo' };

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
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
  };
}
