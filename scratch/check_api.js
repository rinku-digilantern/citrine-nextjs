const url = 'https://web.digifolio.co.in:8090/api/service-details/pigmentation';
fetch(url).then(res => res.json()).then(data => {
    console.log(JSON.stringify(data).substring(0, 500));
    console.log("Success:", data.success);
    console.log("Data keys:", Object.keys(data.data || {}));
}).catch(err => console.error(err));
