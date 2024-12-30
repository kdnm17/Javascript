let name='neharika';
let age=17;
age=18;

const PI=3.14;

var total_price=100; 
var total_price=101;  //redeclared but not showing any error
//generally var is not most used
//we can redeclare multiple times using (var) which is not a way for code
//updating is different from redeclare

console.log(PI)
console.log(age)
console.log(total_price);

console.log('PI= ',PI);
console.log("my name is ",name,'and age is ',age);

// const a;
// a=10;          // we should assign value when initialising only for const
// console.log(a);

let a;
a=89;
console.log(a);

// a block 
{
  let a=5;
  console.log(a);
}
// new block 
{
  let a=10;
  console.log(a);
}

//  declaring an Object(non primitive data type) 
const student={
  fullname : "Vasa Neharika", //wants space in name keep double quotes
  age : 17,
  cgpa :  8.82,
  ispass : true,
};
console.log(typeof student);
console.log(typeof student.fullname);
console.log(student);
console.log(student['fullname']);
console.log(student.fullname);
console.log(student.length);
console.log(student['fullname'].length);    //.length is only for strings and arrays

student.age=student.age+1;
console.log(student.age);

student.fullname='dhanush';
student.cgpa=7.3;
console.log(student);

// we can update variable defined (let) but not for (const)
// but if const me datatype object hote toh us object ke andar key ko update kar sahtha hai   


const profile={
  name : 'Shradhakhapra',
  posts:195,
  followers:569000,
  following:4,


}