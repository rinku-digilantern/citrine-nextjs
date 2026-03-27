/**
 * Wraps every <table> tag in an HTML string with a scrollable container div.
 * This is done at render time (server or client) to ensure tables are
 * horizontally scrollable on mobile without needing overflow on a parent element.
 */
export function wrapTablesInScrollDiv(html: string): string {
  if (!html) return html;
  return html.replace(
    /<table([\s\S]*?)>/gi,
    '<div class="tableWrapper"><table$1>'
  ).replace(/<\/table>/gi, '</table></div>');
}
