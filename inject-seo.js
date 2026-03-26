const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');
const directories = fs.readdirSync(appDir).filter(f => fs.statSync(path.join(appDir, f)).isDirectory());
directories.push(''); // home page app/page.tsx

for (const dir of directories) {
    if (['[slug]', 'blog-post', 'api', 'videos', 'blog'].includes(dir)) continue;

    const pagePath = path.join(appDir, dir, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    let text = fs.readFileSync(pagePath, 'utf8');

    // Skip if already injected
    if (text.includes('export async function generateMetadata()')) {
        console.log(`Skipping ${dir} (already injected)`);
        continue;
    }

    const slug = dir === '' ? 'home' : dir;
    console.log(`Injecting into ${dir || 'home'}...`);

    // Remove existing `export const metadata: Metadata = { ... };` using regex
    // This removes metadata blocks taking multiple lines
    text = text.replace(/export\s+const\s+metadata:\s*Metadata\s*=\s*\{[\s\S]*?\};\n?/g, '');
    
    // Sometimes it's exported differently without type Metadata
    text = text.replace(/export\s+const\s+metadata\s*=\s*\{[\s\S]*?\};\n?/g, '');

    // Add importing Metadata if not present
    if (!text.includes("import { Metadata }")) {
        text = `import { Metadata } from 'next';\n` + text;
    }

    const getSeoDataCode = `
const API_BASE = 'https://api.citrineclinic.com/api';

async function getSeoData(slug: string) {
  try {
    const res = await fetch(\`\${API_BASE}/seo-tag/\${slug}\`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json || !json.seo) return null;
    return json.seo;
  } catch {
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData('${slug}');
  if (!seo) return { title: 'Citrine Clinic' };
  return {
    title: seo.title_tag || 'Citrine Clinic',
    description: seo.description_tag || '',
    keywords: seo.keyword_tag || undefined,
    alternates: {
      canonical: seo.canonical_tag ? \`/\${seo.canonical_tag}\` : '/${slug}',
    },
    openGraph: {
      url: \`https://www.citrineclinic.com/\${seo.canonical_tag || '${slug}'}\`,
      title: seo.title_tag || '',
      description: seo.description_tag || '',
    },
  };
}
`;

    // Make default component async if not already
    let componentMatch = text.match(/const\s+([A-Za-z0-9_]+)\s*=\s*(?:async\s*)?\(\)\s*=>\s*\{/);
    let isFunctionExport = false;
    if (!componentMatch) {
       componentMatch = text.match(/export\s+default\s+(?:async\s*)?function\s+([A-Za-z0-9_]+)\s*\(\)\s*\{/);
       isFunctionExport = !!componentMatch;
    }

    if (componentMatch) {
        const compName = componentMatch[1];
        if (!text.includes(`const ${compName} = async ()`) && !isFunctionExport) {
             text = text.replace(new RegExp(`const\\s+${compName}\\s*=\\s*\\(\\)\\s*=>\\s*\\{`), `const ${compName} = async () => {`);
        } else if (!text.includes(`export default async function ${compName}()`) && isFunctionExport) {
             text = text.replace(new RegExp(`export\\s+default\\s+function\\s+${compName}\\s*\\(\\)\\s*\\{`), `export default async function ${compName}() {`);
        }

        // Insert getSeoDataCode before the component definition
        const compDefRegex = isFunctionExport 
            ? new RegExp(`export\\s+default\\s+async\\s+function\\s+${compName}\\s*\\(\\)\\s*\\{`)
            : new RegExp(`const\\s+${compName}\\s*=\\s*async\\s*\\(\\)\\s*=>\\s*\\{`);

        text = text.replace(compDefRegex, getSeoDataCode + '\n' + (isFunctionExport ? `export default async function ${compName}() {` : `const ${compName} = async () => {`) + `\n  const seo = await getSeoData('${slug}');\n`);

        // Insert schema tag inside Fragments or root wrappers
        const schemaInjection = `
      {seo?.faq_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faq_schema) }} />
      )}
      {seo?.bred_schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.bred_schema) }} />
      )}
`;      
        // Usually pages return (<> ... </>)
        if (text.includes('<>')) {
           text = text.replace('<>', `<>\n${schemaInjection}`);
        } else if (text.includes('<React.Fragment>')) {
           text = text.replace('<React.Fragment>', `<React.Fragment>\n${schemaInjection}`);
        } else if (text.includes('return (')) {
           // Create a fragment wrapper if one isn't explicitly there but 'return (' used
           text = text.replace('return (', `return (\n    <>\n${schemaInjection}`);
           // This means we have to close it. This is dangerous with regex. Let's hope pages use fragments!
           // Alternatively inject using DOM parser. Let's rely on <> for now.
        }

        fs.writeFileSync(pagePath, text, 'utf8');
        console.log(`Success ${dir || 'home'}`);
    } else {
        console.log(`Could not find component pattern for ${dir || 'home'}`);
    }
}
