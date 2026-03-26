import { Project, SyntaxKind } from "ts-morph";
import * as fs from "fs";
import * as path from "path";

const project = new Project({
    tsConfigFilePath: "tsconfig.json",
});

const appDir = path.join(__dirname, "app");

const directories = fs.readdirSync(appDir).filter(f => fs.statSync(path.join(appDir, f)).isDirectory());
directories.push(""); // for app/page.tsx

for (const dir of directories) {
    if (dir === "[slug]" || dir === "blog-post" || dir === "api" || dir === "videos") {
        continue;
    }

    const pagePath = path.join(appDir, dir, "page.tsx");
    if (!fs.existsSync(pagePath)) continue;

    const sourceFile = project.addSourceFileAtPath(pagePath);
    let modified = false;

    // Check if we already injected SEO
    const text = sourceFile.getFullText();
    if (text.includes("getSeoData")) {
        console.log(`Skipping ${pagePath} (already injected)`);
        continue;
    }

    // Determine the slug
    const slug = dir === "" ? "home" : dir;

    // 1. Remove existing `export const metadata: Metadata = { ... }`
    const oldMetadata = sourceFile.getVariableStatement("metadata");
    if (oldMetadata && oldMetadata.isExported()) {
        oldMetadata.remove();
        modified = true;
    }

    // 2. Add imports if needed
    if (!sourceFile.getImportDeclaration(d => d.getModuleSpecifierValue() === "next/dist/types" || d.getModuleSpecifierValue() === "next")) {
        sourceFile.addImportDeclaration({
            moduleSpecifier: "next",
            namedImports: ["Metadata"],
        });
        modified = true;
    }

    // 3. Inject getSeoData function
    const getSeoDataBody = `
export async function getSeoData(slug: string) {
  try {
    const res = await fetch(\`https://api.citrineclinic.com/api/seo-tag/\${slug}\`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json || !json.seo) return null;
    return json.seo;
  } catch {
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData("${slug}");
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
    // Find the default export function/arrow function
    const defaultExportAss = sourceFile.getExportAssignment(d => !d.isExportEquals());
    let componentName = "";
    let componentBlock = null;

    if (defaultExportAss) {
        componentName = defaultExportAss.getExpression().getText();
        const funcDecl = sourceFile.getFunction(componentName);
        if (funcDecl) {
            componentBlock = funcDecl;
        } else {
            const varDecl = sourceFile.getVariableDeclaration(componentName);
            if (varDecl) {
                const init = varDecl.getInitializerIfKind(SyntaxKind.ArrowFunction);
                if (init) componentBlock = init;
            }
        }
    } else {
        const defaultFunc = sourceFile.getFunction(f => f.isDefaultExport());
        if (defaultFunc) {
            componentBlock = defaultFunc;
            componentName = defaultFunc.getName() || "Page";
        }
    }

    if (!componentBlock) {
        console.log(`Could not find component block for ${pagePath}`);
        continue;
    }

    if (!componentBlock.isAsync()) {
        componentBlock.setIsAsync(true);
        modified = true;
    }

    // Ensure we insert getSeoData before the component
    let componentIdx = componentBlock.getParent()?.getChildIndex();
    if (componentBlock.getKind() === SyntaxKind.ArrowFunction) {
        const varStmt = componentBlock.getFirstAncestorByKind(SyntaxKind.VariableStatement);
        componentIdx = varStmt ? varStmt.getChildIndex() : undefined;
    }

    if (componentIdx !== undefined) {
        sourceFile.insertStatements(componentIdx, getSeoDataBody);
        modified = true;
    } else {
        sourceFile.addStatements(getSeoDataBody);
        modified = true;
    }


    // Inject `const seo = await getSeoData("...");` into the function body
    componentBlock.insertStatements(0, `const seo = await getSeoData("${slug}");`);

    // Find the return statement and inject fragments
    let returnStmt = componentBlock.getDescendantsOfKind(SyntaxKind.ReturnStatement)[0];
    if (returnStmt) {
        const expr = returnStmt.getExpression();
        if (expr) {
            let innerText = expr.getText();
            let isAlreadyFragment = innerText.trim().startsWith("<>") || innerText.trim().startsWith("<React.Fragment>");
            
            let injectionText = `
        {seo?.faq_schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faq_schema) }} />
        )}
        {seo?.bred_schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.bred_schema) }} />
        )}
`;
            
            if (isAlreadyFragment) {
                // Find first open tag
                const match = innerText.match(/<>\s*|<React.Fragment([^>]*)>\s*/);
                if (match) {
                    innerText = innerText.substring(0, match[0].length) + injectionText + innerText.substring(match[0].length);
                    expr.replaceWithText(innerText);
                }
            } else {
                expr.replaceWithText(`(<>
${injectionText}
${innerText}
</>)`);
            }
            modified = true;
        }
    }

    if (modified) {
        sourceFile.saveSync();
        console.log(`Updated ${pagePath}`);
    }
}
