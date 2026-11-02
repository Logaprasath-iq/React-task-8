const fs = require('fs');
const html = fs.readFileSync('saas_design_page.html', 'utf8');
const regex = /https(?::|%3A)(?:\/\/|%2F%2F)api\.figmamarket\.com(?:%2F|\/)uploads(?:%2F|\/)[a-zA-Z0-9_\-\.]+/g;
const matches = html.match(regex) || [];
const decoded = matches.map(s => decodeURIComponent(s));
console.log(JSON.stringify([...new Set(decoded)], null, 2));
