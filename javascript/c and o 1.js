//JAVASCRIPT OBJECT is an entity having state and behaviour(properties and methods)
const student={
  fullname:"Vasa Neharika", //state(property)
  marks:68,                 //state(property)
  printmarks:function (){ //behaviour(method)
    console.log("marks=",this.marks);  //this.marks is indicating student.marks.....we cant access marks normally
  }
}
console.log(student.printmarks);     //here student.printmarks--printmarks is defined in student object
console.log(student.printmarks());
console.log(student);

console.log(student.toString);   //here we havent defined to string in student but it is showing result
//that is js has special term PROTOTYPE in OBJECT (PROTOYTPE is an inbuilt OBJECT having some methods and properties defined in it)

let arr=[1,2,3,4,5];
console.log(arr);
console.log(arr[0]);
console.log(typeof arr); //array is also an object
arr.push(9,10);          //it is aslo having prototype object where methods and properties are defined
console.log(arr);

const employ={
  tax(){
    console.log("tax rate is 10%");
  },
};

const neharika={
  salary:200000,
};
const veda={
  salary:250000,
  tax(){
    console.log("tax rate is 20%");
  },
};
console.log(neharika);
//--proto--  to set prototype
neharika.__proto__=employ;
console.log(neharika);
console.log(neharika.tax());

veda.__proto__=employ;
console.log(veda);
console.log(veda.tax());  //when both protype and object have same method,objects method will be used






