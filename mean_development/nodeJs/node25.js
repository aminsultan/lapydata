// buf1 = new Buffer(16);
// len = buf1.write("Simply Easy Learning");

// console.log("Octets written : "+  len);
// console.log( buf1.toString('ascii'));


// buf2 = new Buffer(26);
// for (var i = 0 ; i < 26 ; i++) {
//   buf2[i] = i + 97;
// }

// console.log( buf2.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
// console.log( buf2.toString('ascii',0,5));   // outputs: abcde
// console.log( buf2.toString('utf8',0,5));    // outputs: abcde
// console.log( buf2.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

buff = Buffer.isEncoding("utf-8");
console.log(buff)
// Buffer.isBuffer(obj)