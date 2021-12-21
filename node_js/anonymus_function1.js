function myfun1(x){
    console.log(x);
}
function myfun2(abc,xyz){
    abc(xyz);
}
myfun2(myfun1,"Hello World");

