const stu={
  name:"neharika",
  age:17,
};
const other={
  cgpa:8.82,
  ispass:true,
}
stu.__proto__=other;
console.log(`my cgpa is ${stu.cgpa}`);

//CLASS
/* class name{
  constructor(){}
  methods(){}
}*/


// creating a class 
/*when a new object is created using a class it first search for constructor 
if not there it automatically creates constructor method*/
class cars{
  constructor(speed){
    console.log("creating a new object");
    this.velocity=speed;
  }
  start(){
    console.log("start");
  }                           //no need of comma
  stop(){
    console.log("stop");
    return 1;
  }
  setbrand(brand){
    this.brandname=brand;
  }
}
//if want to create object using this class
//whenever we create new object without calling constructor part is being printed
//if we want some work to be done during initialisation of object then we write code in constructor
let fortuner=new cars(5);
console.log(fortuner);
console.log(fortuner.start());
fortuner.setbrand("fortuner");
// fortuner.brandname="fortuner";
console.log(fortuner);
console.log(fortuner.brandname);
fortuner.stop();
console.log(fortuner.stop());


let lexus=new cars();   //we didint passed any parameter it remains undefined
console.log(lexus);
console.log(lexus.stop());
lexus.velocity=10;
console.log(lexus);
console.log(lexus.velocity);


console.log("questions");
console.log("questions");
console.log("questions");
console.log("questions");
//questions
/*you are creating a website for yoyr college.create a class USER with 2properties
name,email. it also has a method called viewdata() that allows user to view data.*/

let data="secret informatiom";
class user{
  constructor(name,email){
    this.name=name;
    this.email=email;
  }
  viewdata(){
    console.log(`data = ${data}`);

  }
  
  
}
let s1=new user("neharika","23je1069@iitism.ac.in");
let s2=new user("varsha","23je1067@iitism.ac.in");
console.log(s1);
console.log(s1.viewdata());














