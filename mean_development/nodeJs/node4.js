function myfun(){
    return "Hello World";

}

function myfun2(){
    // return "this is another function";
    return new Date();
}
module.exports.myfun = myfun;
module.exports.myfun2 = myfun2;