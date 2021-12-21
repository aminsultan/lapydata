function myfun2(userfun,value){
    userfun(value);
}
myfun2(function(x){
    console.log(x);
},"hello world");