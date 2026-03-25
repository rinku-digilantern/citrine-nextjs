/**
 * This file centralizes all CMS API calls for Citrine Clinic.
 */

const BASE_API_URL = "https://api.citrineclinic.com/api";

export async function getServiceType(slug: string) {
  try {
    const res = await fetch(`${BASE_API_URL}/service-type/${slug}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching service type:", error);
    return null;
  }
}

export async function getServiceCategoryData(slug: string) {
  try {
    const res = await fetch(`${BASE_API_URL}/service/${slug}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching service category data:", error);
    return null;
  }
}

export async function getServiceDetailData(slug: string) {
  try {
    const res = await fetch(`${BASE_API_URL}/service-details/${slug}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching service detail data:", error);
    return null;
  }
}
