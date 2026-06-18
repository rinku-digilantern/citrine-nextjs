const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}

const files = walk('d:/Client_work/2026/mar/citrine-nextjs/app');
let modifiedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace faq_schema
  content = content.replace(/JSON\.stringify\(((?:seo|json\.seo|data\.seo|seo\?)?\.?faq_schema)\)/g, 
    (match, varName) => {
      return `(typeof ${varName} === 'string' ? ${varName} : JSON.stringify(${varName}))`;
    }
  );

  // Replace bred_schema
  content = content.replace(/JSON\.stringify\(((?:seo|json\.seo|data\.seo|seo\?)?\.?bred_schema)\)/g, 
    (match, varName) => {
      return `(typeof ${varName} === 'string' ? ${varName} : JSON.stringify(${varName}))`;
    }
  );

  // Also replace seo_schema if they added it
  content = content.replace(/JSON\.stringify\(((?:seo|json\.seo|data\.seo|seo\?)?\.?seo_schema)\)/g, 
    (match, varName) => {
      return `(typeof ${varName} === 'string' ? ${varName} : JSON.stringify(${varName}))`;
    }
  );

  if (original !== content) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedCount++;
    console.log('Updated: ' + file);
  }
});

console.log('Total files modified: ' + modifiedCount);
