var os = require("os");

// Endianness
console.log('endianness : ' + os.endianness());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");

console.log(os.tmpdir())

console.log(os.hostname())

console.log(os.type())

console.log(os.platform())

console.log(os.arch())

console.log(os.release())

console.log(os.uptime())

console.log(os.loadavg())

console.log(os.totalmem())

console.log(os.freemem())

console.log(os.cpus())
