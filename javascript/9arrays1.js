let student=["Vasa Neharika",17,8.82,"pass"];
let str="vasa neharika";


console.log(student);
console.log(student.length);
console.log(typeof student);
console.log(student[0]);
console.log(student[0].length);
console.log(str[0]);
console.log(str.length);
str=str+student[0];
console.log(str);

student[1]=18; //arrays are mutable(can be changed)
console.log(student);


// for loop
for(let i=0;i<4;i++){
  console.log(student[i]);
}

// for-of loop
for(let i of student){
  console.log(i);
}

let cities=["delhi","dhanbad","palakol","chennai","banglore"];
for(let i of cities){
  console.log(i.toUpperCase());
}


// questions
// find average for[85,97,4,37,76,60]
let student_marks=[85,97,4,37,76,60];
let sum=0;
for(let i of student_marks){
  sum=sum+i;
}
let average=sum/6;
console.log(student_marks);
console.log("sum=",sum);
console.log(`average of marks ${average}`);

/* for a given array with prices of 5 items [250,645,300,900,50]
all items have an offer of 10 % OFF on them . change the array
to store final price after applying offer */
let items=[250,645,300,900,50];
let offer;
for(i=0;i<items.length;i++){
  console.log(`cost of item with index ${i} before applying offer is ${items[i]}`);
  offer=items[i]/10;
  items[i]=items[i]-offer;
  console.log(`cost of item with index ${i} after applying offer is ${items[i]}`);
}
 /* let i=0;
for(let val of items){
console.log(`cost of item with index ${i} before applying offer is ${val}`);
offer=val/10;
val=val-offer;
console.log(`cost of item with index ${i} after applying offer is ${val}`);
i++
}*/



















































