/**
 * This file centralizes all CMS API calls for Citrine Clinic.
 */

// const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

function cleanSeoSchemas(obj: any) {
  if (typeof obj !== 'object' || obj === null) return;
  for (const key in obj) {
    if ((key === 'faq_schema' || key === 'bred_schema') && typeof obj[key] === 'string') {
      try {
        obj[key] = obj[key].replace(/\\"/g, '"');
      } catch (e) {}
    } else if (typeof obj[key] === 'object') {
      cleanSeoSchemas(obj[key]);
    }
  }
}

async function fetchWithTimeout(url: string, options: any = {}, timeout = 10000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

export async function getServiceType(slug: string) {
  try {
    const res = await fetchWithTimeout(`${BASE_API_URL}/service-type/${slug}`, {
      // next: { revalidate: 3600 }, // Revalidate every hour
      next: { revalidate: 10 },
    });
    if (!res.ok) return null;
    const text = await res.text();
    try {
      const parsed = JSON.parse(text);
      cleanSeoSchemas(parsed);
      return parsed;
    } catch { return null; }
  } catch (error) {
    console.error("Error fetching service type:", error);
    return null;
  }
}

export async function getServiceCategoryData(slug: string) {
  try {
    const res = await fetchWithTimeout(`${BASE_API_URL}/service/${slug}`, {
      // next: { revalidate: 3600 },
      next: { revalidate: 10 },
    });
    if (!res.ok) return null;
    const text = await res.text();
    try {
      const parsed = JSON.parse(text);
      cleanSeoSchemas(parsed);
      return parsed;
    } catch { return null; }
  } catch (error) {
    console.error("Error fetching service category data:", error);
    return null;
  }
}

export async function getServiceInnerData(slug: string) {
  try {
    const res = await fetchWithTimeout(`${BASE_API_URL}/service-details/${slug}`, {
      // next: { revalidate: 3600 },
      next: { revalidate: 10 },
    });
    if (!res.ok) return null;
    const text = await res.text();
    try {
      const parsed = JSON.parse(text);
      cleanSeoSchemas(parsed);
      return parsed;
    } catch { return null; }
  } catch (error) {
    console.error("Error fetching service inner data:", error);
    return null;
  }
}

export async function getSecondCategoryData(slug: string) {
  try {
    const res = await fetchWithTimeout(`${BASE_API_URL}/service-category/${slug}`, {
      // next: { revalidate: 3600 },
      next: { revalidate: 10 },
    });
    if (!res.ok) return null;
    const text = await res.text();
    try {
      const parsed = JSON.parse(text);
      cleanSeoSchemas(parsed);
      return parsed;
    } catch { return null; }
  } catch (error) {
    console.error("Error fetching second category data:", error);
    return null;
  }
}
export async function getSeoData(slug: string) {
  try {
    const res = await fetchWithTimeout(`${BASE_API_URL}/seo-tag/${slug}`, {
      // next: { revalidate: 3600 },
      next: { revalidate: 10 },
    });
    if (!res.ok) return null;
    const text = await res.text();
    try {
      const json = JSON.parse(text);
      cleanSeoSchemas(json);
      return json?.seo || null;
    } catch { return null; }
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    return null;
  }
}
