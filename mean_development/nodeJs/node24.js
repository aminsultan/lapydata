var path = require("path");

// Normalization
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// Join
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// Resolve
console.log('resolve : ' + path.resolve('node24.js'));

// extName
console.log('ext name : ' + path.extname('main.js'));

console.log('isAbsolute:' + path.isAbsolute('/test/test1//2slashes/1slash/tab/..'));

console.log('realtive:' + path.relative("users/admin", "admin/files/website"));

console.log('directoryName:' + path.dirname("E:\nodeJs\node24.js"));

console.log(path.basename("E:\\nodeJs\\node24.js"))

console.log(path.extname("E:\\nodeJs\\node24.js"))

console.log(path.parse("E:\\nodeJs\\node24.js"))

console.log(path.format({
    root: 'E:\\',
    dir: 'E:\\nodeJs',
    base: 'node24.js',
    ext: '.js',
    name: 'node24'
  }))

