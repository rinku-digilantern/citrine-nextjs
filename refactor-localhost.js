const fs = require('fs');
const path = require('path');

function processFiles(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) { 
            if (!filePath.includes('node_modules') && !filePath.includes('.next') && !filePath.includes('.git')) {
                processFiles(filePath);
            }
        } else {
            if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
                let content = fs.readFileSync(filePath, 'utf-8');
                let changed = false;

                if (content.includes('"http://localhost:8000/api"')) {
                    content = content.replace(/"http:\/\/localhost:8000\/api"/g, 'process.env.NEXT_PUBLIC_API_URL');
                    changed = true;
                }
                
                if (content.includes("'http://localhost:8000/api'")) {
                    content = content.replace(/'http:\/\/localhost:8000\/api'/g, 'process.env.NEXT_PUBLIC_API_URL');
                    changed = true;
                }

                if (content.includes('http://localhost:8000/api')) {
                    content = content.replace(/http:\/\/localhost:8000\/api/g, '${process.env.NEXT_PUBLIC_API_URL}');
                    changed = true;
                }

                if (content.includes("'http://localhost:8000/backend/")) {
                    content = content.replace(/'http:\/\/localhost:8000\/backend\//g, '`${process.env.NEXT_PUBLIC_BACKEND_URL}/backend/');
                    // Fix ending quote to backtick
                    content = content.replace(/`\$\{process\.env\.NEXT_PUBLIC_BACKEND_URL\}\/backend\/([^']*)'/g, '`${process.env.NEXT_PUBLIC_BACKEND_URL}/backend/$1`');
                    changed = true;
                }

                // If inside template literal backticks
                if (content.includes('http://localhost:8000/backend')) {
                    content = content.replace(/http:\/\/localhost:8000\/backend/g, '${process.env.NEXT_PUBLIC_BACKEND_URL}/backend');
                    changed = true;
                }


                if (changed) {
                    fs.writeFileSync(filePath, content, 'utf8');
                    console.log('Fixed localhost:', filePath);
                }
            }
        }
    });
}
processFiles('./src');
processFiles('./app');
