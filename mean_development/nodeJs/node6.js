function f1(x){
    console.log("F1 = " + x);

}

function f2(str , fun){
    fun(str);

}

f2("Hello node",f1);