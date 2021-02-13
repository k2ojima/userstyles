#!/usr/local/bin/node

const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, '../', process.argv[2]);

try {
    const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});

    fs.writeFileSync(filePath, fileContent.replace(/(@version\s*)(\d)\.(\d{1,2})\.(\d{1,2})/, function(match, p1, p2, p3, p4, offset, string) {
        return p1 + [p2, p3, Number(p4)+1].join('.');
    }));
} catch (err) {
    throw err;
}
