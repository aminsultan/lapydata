const os = require('os');
// here we does not required "./" because os module is an inbuilt module
// to get the codes of node js we can use node docs
console.log(os.freemem())// to know the free memory of the system
console.log(os.homedir())// to know the home directory we are working
console.log(os.hostname())// to know the hostname of computer
console.log(os.platform())
console.log(os.release())
console.log(os.type())