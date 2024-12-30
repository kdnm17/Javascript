let boxes=document.querySelectorAll(".box");

//generate a random number between max,min
//min+(Math.random()*(max-min))
//here max is 255 , min is 0

//Math.ceil(4.22)=5 i.e, makes a number into interger
function randomcolor(){
  let val1=Math.ceil(Math.random()*255); //if random is 0 then ans=0, if random is 1 then ans=255
  let val2=Math.ceil(Math.random()*255); 
  let val3=Math.ceil(Math.random()*255); 
   return `rgb(${val1},${val2},${val3})`
}
boxes.forEach((e)=>{
 
  e.style.color=randomcolor();
  e.style.backgroundColor=randomcolor();
  
})


// boxes.forEach((e)=>{
// let a=Math.random()*100;
// let b=Math.random()*100;
// let c=Math.random()*100;
// let d=Math.random();
// console.log(a,b,c,d);

// a=Math.random()*100;
//   b=Math.random()*100;
//   c=Math.random()*100;
//   d=Math.random();
//   e.style.backgroundColor=`rgb(${a},${b},${c},${d})`;
// })
