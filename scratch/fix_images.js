const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}
const files = walk('./src/app/components');
let changedFiles = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('<Image') && content.includes('NEXT_PUBLIC_BACKEND_URL')) {
    const newContent = content.replace(/<Image\s+([^>]+)>/gs, (match, p1) => {
      if (p1.includes('NEXT_PUBLIC_BACKEND_URL') && !p1.includes('unoptimized')) {
        let p = match;
        if (p.endsWith('/>')) {
          return p.substring(0, p.length - 2) + ' unoptimized/>';
        } else if (p.endsWith('>')) {
          return p.substring(0, p.length - 1) + ' unoptimized>';
        }
        return p;
      }
      return match;
    });
    if (content !== newContent) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log('Updated', file);
      changedFiles++;
    }
  }
});
console.log('Total files updated:', changedFiles);
