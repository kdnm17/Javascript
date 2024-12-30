// loops 

// for loop
let i;
for(i=0;i<5;i++)
{
  console.log("neharika");
}
// sum of 5 numbers 
let sum=0;
for(let j=1;j<=5;j++)
{
  sum=sum+j;
}
console.log("sum=",sum);

// while loop 
i=0;   //already i is declared so i am just updating its value 
while(i<5)
{
  i++;
  console.log(i);
}

// do while
i=0;
do{
  console.log("neharika");
  i++
} 
while(i<5);

// for-of loop 
// used for strings and arrays
let str="neharika";
let size=0;
for(let val of str){        //we call val as iterator
  console.log("val=",val);
  size++;
}
// for(let i of str){
//   console.log("i=",i);
//   size++;
// }
console.log("length of string is",size);

// for-in loop
// used for object data type and arrays 
const student={
name : "vasa neharika",
age:17,
cgpa:8.82,
ispass:true,
};
for(let key in student){
  console.log("key=",key,"value=",student[key]);
}


// questions 

// create a game where you start with any random game number . ask the user to keep guessing the game number until the user enters correct Value.
let a=231;
for( let i=1;i>0;i++){     //we should not use === because prompt always returns number as a string value
  let b=prompt("enter a number");
  if(a==b){
    break;
  }
}
console.log("congratulations , you guessed correct");

/* let gamenum=3478;
usernum=prompt("enter a number");
while(usernum!=gamenum){
  usernum=prompt("guessed wrong,enter another number");
}
console.log("congratulations, you gussed correct"); */