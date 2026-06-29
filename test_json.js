function cleanSeoSchemas(obj) {
  if (typeof obj !== 'object' || obj === null) return;
  for (const key in obj) {
    if ((key === 'faq_schema' || key === 'bred_schema') && typeof obj[key] === 'string') {
      try {
        obj[key] = obj[key].replace(/\\"/g, '"');
      } catch (e) {}
    } else if (typeof obj[key] === 'object') {
      cleanSeoSchemas(obj[key]);
    }
  }
}

fetch('https://api.citrineclinic.com/api/service-details/open-pores-treatment-in-delhi')
  .then(r=>r.json())
  .then(parsed => {
    cleanSeoSchemas(parsed);
    console.log("faq_schema starts with:", parsed.seo.faq_schema.substring(0, 10));
    console.log("Successfully cleaned globally!");
  })
  .catch(console.error);
