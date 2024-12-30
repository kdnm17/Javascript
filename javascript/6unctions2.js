//forEach loop in arrays
//array name.forEach(callbackfunction)
//three parametres are used in forEach()
//(val,i,array name) ---we can use all three or even one
let num=[1,2,3,4,5,6];
let i=0;
num.forEach((val)=>{ //here val is the value of ecah index in num array
  console.log(`number at index ${i} is ${val}`);
  i++;
}

);
i=0;
for(let item of num){
console.log(`number at index ${i} is ${item}`);
i++
}
for(i=0;i<num.length;i++){
  console.log(`number at index ${i} is ${num[i]}`);
}

let cars=["rolls royce","farrari","maruti suzuki swift","tata harrier","lamborghini"]
cars.forEach(function gdbn(item,i,cars){
  console.log(item,i,cars);
}

);


// HIGHER ORDER FUNCTION/METHOD MEANS- they either take functions as a parameter (or) returns function 
// forEach() method is a HIGHER ORDER METHOD because it takes function as a parameter


const calsquare=(num)=>{
  console.log(num*num);
}
num.forEach(calsquare);

function calSquare(num){
  console.log(num*num);
}
num.forEach(calSquare);




//map method - creates a new array with results of some operation
//arr.map(callbackfnx(value,index,array))
let newnum=num.map((val)=>{
  return val**2;
}

);
console.log("num=",num);
console.log("num**2=",newnum);

let rgfdbh=num.map((val)=>{
  console.log(num**2);
});
console.log(rgfdbh);
console.log(num);



//filter -- creates a new array of elements that give true for consdition
//even elements
let evennum=num.filter((val)=>{
  return val%2===0;
});
console.log(evennum);

//reduce method-- performs some operation and reduces the array to a single value.
let recon={
  company:"google",
  ceo:"sundar pichai",
  studiedAt:"IIT karagpur",

};
recon=[1,2,3,4,5];
let con1=recon.reduce((res,currentval)=>{
    return res+currentval;
});
console.log(con1);
let con2=recon.reduce((res,val)=>{
  if(val>res){
    res=val;
  }
  return res;
})
console.log(con2);


//questions
// we are given array of marks of students . filter out marks of students that scored 90+
//1st method
let stu_marks=[87,95,99,83,52,34,90,92,13,9,76];
console.log(`no of students are ${stu_marks.length}`);
let stu_marks_more_90=[];
let j=0;
for(let i=0;i<stu_marks.length;i++){
  if(stu_marks[i]>90){
     stu_marks_more_90[j]=stu_marks[i];
     j++;
  }
  else{
    
  }
}
console.log(`marks of student got more than 90 are ${stu_marks_more_90}`);

//2nd method
stu_marks_more_90=stu_marks.filter((val)=>{
  return val>90;
})
console.log(`marks of student got more than 90 are ${stu_marks_more_90}`);

/*take a number n as input fron user. create an array of numbers from 1 to n.
use the reduce method to calculatee sum of all numbers in the array.
use the reduce method to calculate product of all numbers in the array*/
let n=prompt("enter a number");
array=[];
for(let i=1;i<=n;i++){
   array[i-1]=i;
}
console.log(array);
let unicon=array.reduce((res,val)=>{
  return res+val;
})
let bicon=array.reduce((res,val)=>{
  return res*val;
})
console.log("sum=",unicon,"product=",bicon);













let a=[1,2,3,4,5,6,7];
let sum=0;

a.forEach((val)=>{
  sum=sum+val;
  });
console.log(sum);




