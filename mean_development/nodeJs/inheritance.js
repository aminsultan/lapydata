//encapsulation
class person{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    address(add){
            this.add = add;
    }
    getDetails(){
        console.log(`the name of the person is ${this.name} and the id is ${this.id} where as the address is ${this.add}`);
    }
}
let person1 = new person('amin',2345);
person1.address('delhi');
person1.getDetails();