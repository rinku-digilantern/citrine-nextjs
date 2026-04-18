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

                // 1. Exact string matches (no trailing slash)
                if (content.includes("'https://api.citrineclinic.com/api'")) {
                    content = content.replace(/'https:\/\/api\.citrineclinic\.com\/api'/g, "process.env.NEXT_PUBLIC_API_URL");
                    changed = true;
                }
                if (content.includes('"https://api.citrineclinic.com/api"')) {
                    content = content.replace(/"https:\/\/api\.citrineclinic\.com\/api"/g, "process.env.NEXT_PUBLIC_API_URL");
                    changed = true;
                }
                
                // 2. Fetch URLs in Single or Double Quotes with trailing content
                // replace: 'https://api.citrineclinic.com/api/whatever' -> `${process.env.NEXT_PUBLIC_API_URL}/whatever`
                // Regex matches the opening quote, the base URL, any non-quote character, and the closing quote.
                const singleQuoteApiUrl = /'https:\/\/api\.citrineclinic\.com\/api\/?([^']*)'/g;
                if (singleQuoteApiUrl.test(content)) {
                    content = content.replace(singleQuoteApiUrl, (match, p1) => {
                        return p1 ? "`\\${process.env.NEXT_PUBLIC_API_URL}/" + p1 + "`" : "process.env.NEXT_PUBLIC_API_URL";
                    });
                    changed = true;
                }

                const doubleQuoteApiUrl = /"https:\/\/api\.citrineclinic\.com\/api\/?([^"]*)"/g;
                if (doubleQuoteApiUrl.test(content)) {
                    content = content.replace(doubleQuoteApiUrl, (match, p1) => {
                        return p1 ? "`\\${process.env.NEXT_PUBLIC_API_URL}/" + p1 + "`" : "process.env.NEXT_PUBLIC_API_URL";
                    });
                    changed = true;
                }

                const singleQuoteBackendUrl = /'https:\/\/api\.citrineclinic\.com\/backend\/?([^']*)'/g;
                if (singleQuoteBackendUrl.test(content)) {
                    content = content.replace(singleQuoteBackendUrl, (match, p1) => {
                        return p1 ? "`\\${process.env.NEXT_PUBLIC_BACKEND_URL}/backend/" + p1 + "`" : "`\\${process.env.NEXT_PUBLIC_BACKEND_URL}/backend/`";
                    });
                    changed = true;
                }

                const doubleQuoteBackendUrl = /"https:\/\/api\.citrineclinic\.com\/backend\/?([^"]*)"/g;
                if (doubleQuoteBackendUrl.test(content)) {
                    content = content.replace(doubleQuoteBackendUrl, (match, p1) => {
                        return p1 ? "`\\${process.env.NEXT_PUBLIC_BACKEND_URL}/backend/" + p1 + "`" : "`\\${process.env.NEXT_PUBLIC_BACKEND_URL}/backend/`";
                    });
                    changed = true;
                }

                // 3. URLs currently using template literals (backticks)
                // e.g. `https://api.citrineclinic.com/api/endpoint` -> `${process.env.NEXT_PUBLIC_API_URL}/endpoint`
                // We ONLY replace the base API part since the backticks are already validly enclosing it
                if (content.includes('https://api.citrineclinic.com/api')) {
                    content = content.replace(/https:\/\/api\.citrineclinic\.com\/api/g, "${process.env.NEXT_PUBLIC_API_URL}");
                    changed = true;
                }
                
                if (content.includes('https://api.citrineclinic.com/backend')) {
                    content = content.replace(/https:\/\/api\.citrineclinic\.com\/backend/g, "${process.env.NEXT_PUBLIC_BACKEND_URL}/backend");
                    changed = true;
                }

                // Layout hardcoded layout change
                if (content.includes('href="https://api.citrineclinic.com/"')) {
                    content = content.replace(/href="https:\/\/api\.citrineclinic\.com\/"/g, 'href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/`}');
                    changed = true;
                }

                if (changed) {
                    fs.writeFileSync(filePath, content, 'utf8');
                    console.log('Fixed:', filePath);
                }
            }
        }
    });
}
processFiles('./app');
processFiles('./src');
