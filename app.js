const fs = require('fs');

var fsObj = fs.readdir(__dirname, (err, files) => {
    console.log(`Error: ${err} and files: ${files}`);
});

fs.readdir('./', null, );