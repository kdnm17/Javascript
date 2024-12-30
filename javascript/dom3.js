// getAttribute(attr):to get attribute value
let div=document.querySelector("div");
console.dir(div);
let classes=div.getAttribute("class"); //storing the class name of div
console.dir(classes);
console.log(div.getAttribute("id"));//asking for id name for div
 

//setAttribute(attr,value)
let paras=document.querySelector("p");
console.dir(paras.getAttribute("id"));


console.dir(paras.setAttribute("id","kadunanna"));
console.dir(paras.getAttribute("id"));

//style--node.style
console.dir(div.style); //showing background color as aquamarine
console.dir(div.style.backgroundColor);
console.dir(document.head.style);///not showing any background color
console.dir(document.style);//it is wrong because there is no direct style object in document

div.style.backgroundColor="green";
div.style.fontSize="20px";

// div.innerText="this is my div samj gaya ";



//INSERT ELEMENTS
let newbtn=document.createElement("button");
newbtn.innerText="click here!!";
console.dir(newbtn.innertext);
//node.append(el):adds at the end of node(inside)
div=document.querySelector("div");
div.append(newbtn);
//node.prepend(el):add at start of node
//node.before(el):before node
//node.after(el):after node

let heading=document.createElement("h1");
heading.innerText="document object model";
/*div.before(heading);*/
document.querySelector("body").prepend(heading);

//DELETE ELEMENT
let para=document.querySelector("p");
para.remove();


//append(e) prepend(e) before(e) after(e) replaceWith(e)





