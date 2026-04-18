/**
 * This file centralizes all CMS API calls for Citrine Clinic.
 */

// const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

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
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    if (!res.ok) return null;
    const text = await res.text();
    try { return JSON.parse(text); } catch { return null; }
  } catch (error) {
    console.error("Error fetching service type:", error);
    return null;
  }
}

export async function getServiceCategoryData(slug: string) {
  try {
    const res = await fetchWithTimeout(`${BASE_API_URL}/service/${slug}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const text = await res.text();
    try { return JSON.parse(text); } catch { return null; }
  } catch (error) {
    console.error("Error fetching service category data:", error);
    return null;
  }
}

export async function getServiceInnerData(slug: string) {
  try {
    const res = await fetchWithTimeout(`${BASE_API_URL}/service-details/${slug}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const text = await res.text();
    try { return JSON.parse(text); } catch { return null; }
  } catch (error) {
    console.error("Error fetching service inner data:", error);
    return null;
  }
}

export async function getSecondCategoryData(slug: string) {
  try {
    const res = await fetchWithTimeout(`${BASE_API_URL}/service-category/${slug}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const text = await res.text();
    try { return JSON.parse(text); } catch { return null; }
  } catch (error) {
    console.error("Error fetching second category data:", error);
    return null;
  }
}
export async function getSeoData(slug: string) {
  try {
    const res = await fetchWithTimeout(`${BASE_API_URL}/seo-tag/${slug}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const text = await res.text();
    try {
        const json = JSON.parse(text);
        return json?.seo || null;
    } catch { return null; }
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    return null;
  }
}
