
//defining object
var person1 = {
    first_name:"Amin",
    last_name:"Sultan",
//methode
    getFunction : function(){
        return (`the name of the person is ${person1.first_name} ${person1.last_name}`)
    },
//object within the object
    phoneNumber:{
        mobile:"9823221548",
        landline:"07122701234"
    }
}

console.log(person1.getFunction());
console.log(person1.phoneNumber.landline);
console.log(person1.last_name);

//constructor

function person(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
let person2 = new person("amin","sultan");
let person3 = new person("shahid", "ali");

console.log(person2.firstname);
console.log(`this is the person 2 ${person3.firstname} ${person3.lastname}`);


