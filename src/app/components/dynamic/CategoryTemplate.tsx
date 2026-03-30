import React from 'react';
import AppointmentSection from '@/src/app/components/common/AppointmentSection/AppointmentSection';
import FirstSection from '@/src/app/components/ServiceCategoryPage/FirstSection/FirstSection';
import TableofContentcategory from '@/src/app/components/ServiceCategoryPage/TableofContentcategory/TableofContentcategory';
import ColumnSection from '@/src/app/components/ServiceCategoryPage/ColumnSection/ColumnSection';

interface CategoryTemplateProps {
  data: any;
}

// Helper: create a safe slug from a name (used when url is '#' or missing)
const toSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/**
 * Parses the `description` HTML field into an array of tabs.
 *
 * Supports two formats from the CMS:
 *
 * Format 1 – Single group (one <strong> heading + one <ul>):
 *   <p><strong>Procedures</strong></p>
 *   <ul><li><a href="...">Chemical peels</a></li>...</ul>
 *   → One tab: label="PROCEDURES", treatments=[...]
 *
 * Format 2 – Multiple groups (multiple <strong> + <ul> pairs):
 *   <p><strong>Non Invasive Procedure</strong></p>
 *   <ul>...</ul>
 *   <p><strong>Invasive Procedure</strong></p>
 *   <ul>...</ul>
 *   → Two tabs: label="NON INVASIVE PROCEDURE", label="INVASIVE PROCEDURE"
 */
const extractTabsFromDescription = (
  html: string | null
): { id: string; label: string; treatments: { name: string; link: string }[] }[] => {
  if (!html) return [];

  const tabs: { id: string; label: string; treatments: { name: string; link: string }[] }[] = [];

  // Match each <strong> heading followed by its <ul> block
  // Uses a pattern: <strong>LABEL</strong> ... <ul>...</ul>
  const groupPattern = /<strong[^>]*>([\s\S]*?)<\/strong>[\s\S]*?<ul[^>]*>([\s\S]*?)<\/ul>/gi;
  let match;

  while ((match = groupPattern.exec(html)) !== null) {
    // Clean the heading: strip HTML tags and &nbsp;
    const rawLabel = match[1]
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/g, ' ')
      .trim();

    if (!rawLabel) continue;

    const ulContent = match[2];

    // Extract <a href="...">Name</a> from the <ul>
    const linkPattern = /<a[^>]*href="([^"]*)"[^>]*>([^<]+)<\/a>/gi;
    const treatments: { name: string; link: string }[] = [];
    let linkMatch;

    while ((linkMatch = linkPattern.exec(ulContent)) !== null) {
      treatments.push({
        link: linkMatch[1].replace('https://www.citrineclinic.com', '') || '#',
        name: linkMatch[2].trim()
      });
    }

    tabs.push({
      id: toSlug(rawLabel),
      label: rawLabel.toUpperCase(),
      treatments
    });
  }

  return tabs;
};

const CategoryTemplate: React.FC<CategoryTemplateProps> = ({ data }) => {
  // API shape: { title, data[], cat{}, seo{} }
  const category = data.cat || {};
  const subServices = Array.isArray(data.data) ? data.data : [];

  return (
    <>
      {/* ── Banner / Hero ── */}
      <FirstSection data={{
        name: category.name || '',
        image: category.image
          ? `https://api.citrineclinic.com/backend/service/image/${category.image}`
          : '/assets/images/servicecategory/acne.webp',
        description: category.description || ''
      }} />

      {/* ── Sticky Table of Contents ── */}
      <TableofContentcategory sections={subServices.map((item: any, idx: number) => {
        const safeName = item?.name || `Section ${idx}`;
        const safeId = item?.url && item.url !== '#' ? item.url : toSlug(safeName);
        return { id: safeId, title: safeName.toUpperCase() };
      })} />

      {/* ── Alternating Image/Text Cards ── */}
      <ColumnSection sections={subServices.map((item: any, idx: number) => {
        const safeName = item?.name || `Section ${idx}`;
        const safeId = item?.url && item.url !== '#' ? item.url : toSlug(safeName);

        // Parse description HTML into tabs (one tab per <strong> group)
        const tabs = extractTabsFromDescription(item?.description);

        // Fallback: if no tabs parsed, show empty placeholder
        // if (tabs.length === 0) {
        //   tabs.push({ id: 'info', label: 'INFORMATION', treatments: [] });
        // }

        // Only show VIEW MORE button when there is a real detail page (url is not '#')
        const buttons = item?.url && item.url !== '#'
          ? [{ label: 'VIEW MORE', link: `/${item.url}`, isActive: true }]
          : [];

        return {
          id: safeId,
          heading: safeName.toUpperCase(),
          description: item?.short_desc || '',   // HTML – rendered via dangerouslySetInnerHTML
          image: item?.image
            ? `https://api.citrineclinic.com/backend/service/image/${item.image}`
            : '/assets/images/servicecategory/acne.webp',
          imageAlt: item?.alt_tag || safeName,
          tabs,
          buttons,
          imagePosition: (item?.design_type === 'right' ? 'right' : 'left') as 'left' | 'right'
        };
      })} />

      <AppointmentSection />
    </>
  );
};

export default CategoryTemplate;
