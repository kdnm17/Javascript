function myfunction(){
  console.log("welcome to website ");
  console.log("i love js");
}
myfunction();
myfunction();


function my(a){ //parameters
 console.log("hello guys");
 console.log(a);
}
let hdv="Myself Neharika";
my(hdv);  //arguments
let hurf;
my(hurf); //undefined because no value is assigned to variable

function mine(msg){
console.log(msg);
}
mine("hello buddy");

function sum(a,b){
  console.log(a+b);
}
sum(3,4);

function sumr(a,b){
  let sum=a+b;
  return sum;
}
let a=sumr(46,847);
console.log(a);
sum(46,847);

//modern javascript --- arrow function
const arrowsum=(a,b)=>{
  console.log(a+b);                                
}
arrowsum(3,4);


let arrowmul=(a,b)=>{
  console.log(a*b);
}
arrowmul(3,4);
console.log(arrowmul);
arrowmul=5;
console.log(arrowmul);



// questions
//create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string
function nov(s){
  let count=0;
for(i=0;i<s.length;i++){
  if(s[i]==="a"||s[i]==="e"||s[i]==="i"||s[i]==="o"||s[i]==="u")
{
  count+=1;
}
}
return count;

}
console.log(nov("vasa neharika"));


/*function nov(s){
  let count=0;
  for(let i of s){
    if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
      count+=1;
    }
  }
  console.log(count);
}
nov("vasa neharika");*/

const novs=(s)=>{
  let count=0;
  for(let i of s){
    if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
      count+=1;
    }
  }
  console.log(count);
}
novs("vasa neharika");

































