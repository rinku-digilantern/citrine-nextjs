const fs = require('fs');
const files = [
  'src/app/components/VideoPage/VideoPage.tsx',
  'src/app/components/VideoDetailsPage/VideoDetailsPage.tsx',
  'src/app/components/TreatmentPage/TreatmentPage.tsx',
  'src/app/components/ServiceCategoryPage/ServiceCategoryPage.tsx',
  'src/app/components/OfferDetails/OfferDetails.tsx',
  'src/app/components/MediaPage/MediaPage.tsx',
  'src/app/components/dynamic/ServiceDetailTemplate.tsx',
  'src/app/components/dynamic/CategoryTemplate.tsx',
  'src/app/components/ConcernPage/ConcernPage.tsx',
  'src/app/components/ClinicGalleryPage/ClinicGalleryPage.tsx',
  'src/app/components/BlogPage/Blogpage.tsx',
  'src/app/components/BlogDetails/RecentPost/RecentPost.tsx',
  'app/videos/[slug]/page.tsx',
  'app/offers/[slug]/page.tsx',
  'app/blog-post/[slug]/page.tsx',
  'app/testimonials/page.tsx',
  'app/treatments/page.tsx',
  'app/media/page.tsx',
  'app/blog/page.tsx',
  'app/concerns/page.tsx',
  'app/clinic-gallery/page.tsx'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Fix src={${...}} -> src={`${...}`}
    const srcRegex = /src=\{\$\{process\.env\.([^}]+)\}/g;
    if (srcRegex.test(content)) {
      content = content.replace(srcRegex, 'src={`\\${process.env.$1}');
      changed = true;
    }

    // Fix image={${...}} -> image={`${...}`}
    const imageRegex = /image=\{\$\{process\.env([^}]+)\}/g;
    if (imageRegex.test(content)) {
        content = content.replace(imageRegex, 'image={`\\${process.env$1}');
        changed = true;
    }

    // Fix ? ${...} -> ? `${...}
    const ternaryRegex = /(\?\s*)\$\{process\.env/g;
    if (ternaryRegex.test(content)) {
        content = content.replace(ternaryRegex, '$1`\\${process.env');
        changed = true;
    }

    // Close backticks for backend URLs: ${category.image} -> ${category.image}`
    const backendEndRegex = new RegExp('\\\\`\\\\$\\\\{process\\.env\\.NEXT_PUBLIC_BACKEND_URL\\\\}/[A-Za-z0-9_/-]+\\\\$\\\\{[^}]+\\\\}', 'g');
    if (backendEndRegex.test(content)) {
        content = content.replace(backendEndRegex, (match) => match + '`');
        changed = true;
    }

    // A simpler way to close backticks for backend URLs!
    // Since we know the previous script replaced `{process.env.NEXT_PUBLIC_BACKEND_URL}/backend/.../...` and stripped the backticks,
    // let's look for combinations that start with ` or have a string ending that looks like `} or `:
    const fixEnd1 = /(`\$\{process\.env\.NEXT_PUBLIC_BACKEND_URL\}\/[A-Za-z0-9_/-]+\$\{[^\}]+\})([\}]|\s*:)/g;
    if (fixEnd1.test(content)) {
        content = content.replace(fixEnd1, '$1`$2');
        changed = true;
    }

    // Fix fetch(${process.env...}) -> fetch(`${process.env...}`)
    const fetchRegex = /fetch\(\$\{process\.env\.([^),]+)(,?\s*\{?)/g;
    if (fetchRegex.test(content)) {
        content = content.replace(fetchRegex, 'fetch(`\\${process.env.$1`$2');
        changed = true;
    }

    // Fix const url = ${process.env...}; -> const url = `${process.env...}`;
    const urlRegex = /const\s+url\s*=\s*\$\{process\.env([^;]+);/g;
    if (urlRegex.test(content)) {
        content = content.replace(urlRegex, 'const url = `\\${process.env$1`;');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content);
        console.log('Fixed', file);
    }
  }
}
