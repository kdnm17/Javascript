// window object-- all the things like console.log,alert.... are part of WINDOW OBJECT
//it is already defined in the browser
console.log(window);
console.dir(window);
// console.log() is part of window
window.console.log("hello");

//DOM-DOCUMENT OBJECT MODEL--(html ko javascript meh access karne ka tarika hai DOM)
//DOCUMENT  is again a sub object in window which is having complete html code 
//DOM  is reference for acccessing the html code(i.e, web page) and BOM is reference for accessing wen browser

/*While console. log() will work for objects, there is a method specifically meant for displaying objects to the console called console. dir() . 
“The Console method dir() displays an interactive list of the properties of the specified JavaScript object.*/

console.log(window.document); // it is just printing html code
console.dir(window.document);//it is printing properties and methods in that document object
console.dir(document.body);
console.dir(window.document.body);// It is javascript code but we are able to access html code..
console.dir(document.body.childNodes);
console.dir(document.body.childNodes[1]);

/*In window object we are having document object .... 
this documnet object is model for the html code.*/



document.body.childNodes[1].innerText="abcd"


// DOM MANIPULATION 
//SELECTING BY ID--document.getElementByID("myId")
console.dir(document.getElementById("heading1"));

//SELECTING BY CLASS--document.getElementsByClassName("myclass")
let heads=document.getElementsByClassName("heading")
console.dir(heads);
console.log(heads);

//SELECTING BY TAG--document.getElementsByTagName("name")
let para=document.getElementsByTagName("p");
console.dir(para);

//querySelector("#id/.class/tag")
let firstel=document.querySelector("p"); //1st element
console.dir(firstel);

console.dir(document.querySelector(".heading"));

//querySelectorALL--provides the node lists
let allel=document.querySelectorAll("p"); //all elements 
console.dir(allel);

console.dir(document.querySelectorAll(".heading"));


//printing the children of a parent node
console.dir(document.querySelector("div").children);
console.dir(document.querySelector("div").children[1]);





















