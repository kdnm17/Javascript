// arthmetic operators 
let a=2;
let b=5;

console.log("a+b =",a+b);
console.log("a**b =",a**b);

// unary operators 
a++;
console.log(a);
console.log("a++ =",a++);
console.log("a =",a);

console.log("++a =",++a);

// assignment operator 
a+=5;
console.log("a+=5 =",a);

// comparision operator 
console.log(a==b);
console.log(a!=b);
a=5;
b="5";
console.log(" 5==string 5  is  " , a==b);
console.log("5==string 5  is",a===b); //strict operations(===,!==)

// conditional statements 
let age=17;

if(age>=18){
  console.log("eligible for voting");
}
else{
  console.log(" not eligible for voting ");
}

// ternary operator 
//condition?true output : false output
age=17;
let result = age>=18? "adult" : "not adult" ; //simpler and compact if-else
console.log(result);

//questions

//get user to input a number using prompt("enter a number") check if the number is a multiple of 5 or not.
alert("hello guys")
let num=prompt("enter a number");
if(num%5===0){
  console.log(num,"is multiple of 5");
}
else{
  console.log(num,"is not multiple of 5");
}




