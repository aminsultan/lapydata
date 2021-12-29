const coder = {
    isStudying: false,
    printIntroduction: function(){
        console.log(`my name is ${this.name}. Am I studying?:${this.isStudying}.`)
    }
}
 const me = Object.create(coder);

 me.name = "amin";

 me.isStudying = true;

 me.printIntroduction();

 //classes

 class vehicle {
     constructor(name, maker, engine){
         this.name = name;
         this.maker = maker;
         this.engine = engine;
     }
     getDetails(){
         return (`the name of the bike is ${this.name}.`)
     }
 }
 //making objects using constrctor of class

 let bike1 = new vehicle('platina','bajaj','95cc');
 let bike2 = new vehicle('splendor','hero','95cc');

 console.log(bike1.maker);
 console.log(bike1.engine);
 console.log(bike1.getDetails());