var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream("input.txt.zip").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("demo.txt"));