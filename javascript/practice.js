//LOOPS

// for(let i=1;i<=100;i++){
// console.log(i);
// }

// let student={
//   name:"neharika",
//   clg:"iit dhanbad",
//   cgpa:8.73,
// };

// for (const key in student) { //forin and enter (keys so used for object) --used for array also but generally use forof for array
//   console.log(key,student[key]);
// }

// for (const c of "harry potter") {//forof and then enter (interator used for strings and array)
//   console.log(c);
// }

// let i=1;
// while(i<=100){
//   console.log(i); i++;
// }

//FUNCTIONS

// function sum1(a,b){
//   console.log(a+b);
// }
// function sum2(a,b){
//   return a+b;
// }
// let result;
// sum1(3,5);
// result=sum2(3,4);
// console.log('result=',result);


// const even=(x)=>{
//   if(x%2==0) console.log("its an even number");
//   else console.log("its odd number");
// }
// even(8);

//STRINGS

// let surname='vasa';
// let naam="neharika";
// console.log(surname,naam);

// console.log(surname[-1],surname[0]); //even we are using -1 no error its just showing undefined

// // for (const iterator of naam) {
// //   console.log(iterator);
// // }

// let full_name=surname+naam; //concatenation
// console.log(full_name);
// console.log(surname.concat(naam));
// console.log(full_name.length); //length of a string

// console.log(`my name is ${full_name}`);

// let my_name="  Vasa Neharika";
// console.log(my_name.toUpperCase(),my_name);
// console.log(my_name.toLowerCase(),my_name);
// console.log(my_name.trim(),my_name);
// console.log(my_name.slice(2,6),my_name);
// console.log(my_name.slice(2),my_name);
// console.log(my_name.replace("a","z"),my_name);
// console.log(my_name.replaceAll("a","z"),my_name);

/*prompt user to enter full name . generate a username for them Based
on the input . start username with @,followed by thier full name and ending with full name length */
// let full_name=prompt("enter your full name ");
// let user_name='@'+full_name+full_name.length;
// console.log(`yoyr username is ${user_name}`);



//ARRAYS

// let marks=[32,4324,434,32 ,324];
// console.log(marks);
// console.log(marks.length);

// let student=["Neharika",'D',110]; //can use diff data types
// for (const iterator of student) {
//   console.log(iterator);
// }

// marks.push(100);
// for (const i of marks) {
//   console.log(i);
// }
// marks.pop();
// console.log(marks);

// console.log(marks.toString());
// console.log(marks);

// let marvelHeroes=["thor","spiderman","ironman"];
// let dcHeroes=["superman","batman"];
// let indianHeroes=["shaktiman","krish"];
// let Heroes=marvelHeroes.concat(dcHeroes);
// console.log("MARVEL HEROES :")
// for (const i of marvelHeroes) {
//   console.log(i);
// }
// console.log("HEROES :");
// for (const i of Heroes) {
//   console.log(i);
// }

//push(),pop(),unshift(),shift(),splice()--changes array   slice(),toString()-makes a new one

//FACTORIAL
// let a=prompt("enter a number");
// let product=1;

// let ans=(number)=>{   //ans is a function here
//   for(let i=1;i<=number;i++){
//     product=product*i;
//   }
//   return product;
// }
// console.log(ans(a));
// ans=10;  //here ans changed from a function to number  so it shows error for down line that it is no more a function
// console.log(ans(a));

//DOM
// console.log(window);
// console.dir(window);

// console.log(window.document);
// console.log(document);     //giving html code
// console.dir(document);    //giving properties of the object
// console.log(document.body);
// console.dir(document.childNodes);

// let mainh=document.querySelector("#mainhead");
// console.log(mainh);
// console.dir(mainh);
// mainh.innerText="skills ... Communication Skills"; //changed heading

// let para=document.querySelector("p");
// console.log(para);
// console.log(para.innerHTML);
// para.innerHTML="why for u";
// console.log(para.innerHTML);
 
// let maind=document.querySelector("#maindiv");
// console.log(maind);
// console.log(maind.innerHTML);
// // maind.innerHTML="why for u";
// // console.log(maind.innerHTML);

// let paras=document.querySelectorAll("p");  //stores as nodelists
// console.log(paras);
// //paras.style.color="red";  not possible to do for a group u need to acccess one by one
// paras[0].style.color="blue";
// paras[1].style.color="blue";
// paras[0].style.fontSize="50px";
// paras[0].style.backgroundColor="red";
// paras[1].innerHTML="neekenduku ra";


// let heads=document.querySelectorAll(".subhead");
// console.log(heads);
// heads.forEach((heading)=>{
//   heading.style.color="brown";
// })
// //heads.style.color="brown"   it is wrong means u cant assign a color for group of elements
// //heads[0].style.color="brown" ; heads[1].style.color="brown";   instead u can access each child in that group

// //get and set attribute
// let head1=document.querySelector("h1");
// console.log(head1.getAttribute("id"));  //asking for id name 
// head1.setAttribute("class","MainHeading"); //setting the class name
// console.log(head1.getAttribute("class")); //asking for class name

// //create element
// let details=document.createElement("p");
// details.setAttribute("id","details");
// details.innerText="Neharika\n23Je1069\n110";
// details.style.backgroundColor="lightblue";
// details.style.color="red";
// document.querySelector("div").append(details);

// let div=document.body.children[1];
// console.log(div);
// console.log(div.children); //para which we created is also there in it

// let button=document.createElement("button");
// button.innerText="click for more details...";
// document.querySelector("div").prepend(button);

// //delete element
// button.remove();


// //hide or unhide
// let divs=document.querySelectorAll("div");
// console.log(divs);
// let hiddendiv=divs[2];
// console.log(hiddendiv);
// hiddendiv.hidden=false;

//CLASSNAME AND CLASSLIST

let subh=document.querySelector(".subhead");
console.log(subh.classList);//can have classlist from sub class
console.log(subh.className);//can have class name from sub class

subh.classList.add("mywish"); //can add class  
console.log(subh.classList);

subh.classList.remove("mywish");//can remove existing class
console.log(subh.classList);

//using TOGGLE we can just create and delete accordingly in project which creates great effect
subh.classList.toggle("colormagic");//if exits i will remove if not exists it will add
console.log(subh.classList);
subh.classList.toggle("colormagic"); 
console.log(subh.classList);

// //EVENT 
// let sunh1=document.querySelector("#subhead1");
// function randomcolor(){
//   let a=Math.ceil(Math.random()*255);
//   let b=Math.ceil(Math.random()*255);
//   let c=Math.ceil(Math.random()*255);
//   return `rgb(${a},${b},${c})`;
// }
// sunh1.onclick=()=>{
//   sunh1.style.backgroundColor=randomcolor();
//   console.log("colour changed");
// }

// let subh=document.querySelectorAll(".subhead");
// console.log(subh);
// subh[1]. ondblclick=()=>{
//   subh[1].classList.toggle("colormagic");
//   console.log("kya hua bhai ....u are something else.....")
// }

// //MAP
// let num=[1,2,3,4,5];
// let newnum=num.map((value)=>{ //using map to create new array using existing array values
//   return value*2;
// })
// newnum.forEach((value)=>{
//   console.log(value);
// })

// let naya=num.map((value)=>{ 
//   console.log(value);
// })
// naya.forEach((value)=>{
//   console.log(value);
// })

// num.map((value)=>{ //using map just as foreach
//   console.log(value*2);
// })






