let random=Math.random();
console.log(random);

let a=prompt("enter 1st number");
let c=prompt("what operation u want to perform");
let b=prompt("enter 2nd number");


let obj={
  "+":"-",
  "-":"+",
  "*":"/",
  "/":"*"
};



if(random<0.5){
c=obj[c];
console.log(`the result is ${eval(`${a} ${c} ${b}`)}`);  
}
else{
  console.log(`the result is ${eval(`${a} ${c} ${b}`)}`);  
}







