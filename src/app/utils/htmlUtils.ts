/**
 * Strips HTML tags and decodes common HTML entities from a string.
 * Used to extract plain text from CMS HTML content for rendering in card/list items.
 */
export const stripHtml = (html: string): string => {
  if (!html) return '';
  return html
    .replace(/<[^>]+>/g, '') // Remove all HTML tags
    .replace(/&nbsp;/g, ' ')  // Non-breaking space
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&#\d+;/g, '') // Remove any remaining numeric entities
    .trim();
};

/**
 * Extracts city name from a service name_desc like "Treatment in Gurgaon"
 * Returns "Gurgaon" or empty string if not found.
 */
export const extractCity = (nameDesc: string | null | undefined): string => {
  if (!nameDesc) return '';
  const match = nameDesc.match(/\bin\s+([A-Z][a-zA-Z\s]+)$/i);
  return match ? match[1].trim() : '';
};

/**
 * Replaces <city> and &lt;city&gt; placeholders with the actual city name.
 */
export const replaceCity = (text: string | null | undefined, city: string): string => {
  if (!text) return '';
  return text
    .replace(/<city>/gi, city)
    .replace(/&lt;city&gt;/gi, city)
    .replace(/\[city\]/gi, city);
};

