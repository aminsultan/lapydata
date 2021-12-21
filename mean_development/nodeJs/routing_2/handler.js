function home(){
    console.log("this is a home function");
}
function about(){
    console.log("this is about function");
}
exports.home = home;
exports.about = about;

// handle = {"/home":home, "/about":about};   "/" is used for the path
// handle["/home"]()      we can also call the home function using square brackets
// person = {"fname":"Abc", "data":new Date(), 
// "details":home, "data":function(){
//    return this.file.js
//}};      this is about multiple methods to call different things

//person["fname"]
//person.details()
//person.data() person["data"]()
