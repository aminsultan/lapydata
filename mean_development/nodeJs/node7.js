function f2(str,a){
    a(str);
}
f2("hello world", function(x){
    console.log("F2 = " + x)
});