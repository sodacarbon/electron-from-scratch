document.write('<br>The current version of io.js is ' +
  process.version);
document.write('<br>The current Electron version is ' +
    process.versions.electron);

// Read file
var fs = require('fs');
var contents = fs.readFileSync('./package.json', 'utf8')
alert(contents);
