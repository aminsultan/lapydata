import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// this is the combination of 4 files i.e. 
  //app.component.css, app.component.html, app.component.spec.ts and
  //app.component.ts. and this app-root is present in index.html..
export class AppComponent {
  title = 'myfirstproject';
  firstvariable = "this is the form"

  myclassarray = {
    "btn": true,
    "btn-danger": true
  }
  
firstname ="";
lastname ="";
gender ="";
institute="";
contact="";
email="";
city="";
state="";
country="";
inputnum="";
getval(r){
  this.inputnum = r ;
}
  get1value(a){
    // alert(x);
    this.firstname = a ;
  }
  get2value(b){
     this.lastname = b ;
  }
  get3value(c){
    this.gender = c ;
  }
  get4value(d){
    this.institute = d ;
  }
  get5value(e){
    this.contact = e ;
  }
  get6value(f){
    this.email = f ;
  }
  get7value(g){
    this.city = g ;
  }
  get8value(h){
    this.state = h ;
  }
  get9value(i){
    this.country = i ;
  }
myvar = "";
myobj= { 
  "fname":"",
  "lname":"",
  "gender":"",
  "institute":"",
  "contact":"",
  "email":"",
  "city":"",
  "state":"",
  "country":""
}
mystyle={
  'color':'red',
  'background-color':'blue',
  'padding':'4px',
  'font-size':'20px'
}


getdata(){
  console.log(this.myobj);
}
  
  changecolor(){
    this.myclassarray["btn-danger"]= false;
  }

  isHidden:boolean = false;
  mycolor: string = "blue";
 

  x= 10;
  y= 20;
  z= 15;

 lnumber="";
 mnumber="";
 nnumber="";
 get1number(l){
  
  this.lnumber = l ;
}
get2number(m){
   this.mnumber = m ;
}
get3number(n){
  this.nnumber = n ;
}

  show(){
    console.log("this is the function");
    alert("this is try and error basis alert! thank you");   
 }

 

 myarray =  ["mohammad", "amin", "sultan"];
 
 myobjectarray = [
   {"fname" : "mohammad",
    "lname" : "amin",
    "age"   : "33"
 },
 {"fname" : "tarique",
 "lname" : "zaman",
 "age"   : "35"
 },
 {"fname" : "sayyed",
 "lname" : "rizwan",
 "age"   : "35"
 }
];


myfavcolor = "red";

day = "";
days(s){
this.day = s
} 

number1="";
number2="";
operate="";
addition= "";
result1 = "" ;


number_1(t){
  this.number1 = t
}
number_2(u){
  this.number2 = u
}
operation(v){
  this.operate = v;
  
}

result(w){
  this.result1=w;
}
servicedata="";
constructor (private myser: MyserviceService){
this.servicedata = this.myser.getdata();
this.myser.myvar="data from app component";
}

model: any={};

onSubmit(){
  alert('SUCCESS!!)\n\n' + JSON.stringify(this.model, null, 4));
}

}
// here we are exporting AppComponent class to app.module.ts
