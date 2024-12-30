//tagName--returns tag for element nodes
let firstel=document.querySelector("div");
console.dir(firstel.tagName);


//.innerText:returns the text content of the element and all its children
let div=document.querySelector("div");
console.dir(div);
console.dir(div.innerText);
// div.innerText="abcd";
let heads=document.querySelector("h1");
heads.innerText="FRUITS";

//.innerHTML:returns plain text or HTML contents in the element
console.dir(div.innerHTML);
// div.innerHTML="<div>rgffffffff</div>";

//textContent:returns textual content even for hidden elements
console.dir(div.textContent);
console.dir(heads.textContent);

























/*let header=document.querySelector("h1");
console.dir(header);
header.firstChild.data="Aaja sabi fruits milta hai";*/

let fruits=document.querySelectorAll("li");
console.dir(fruits);
fruits[0].firstChild.data="mangoes";
fruits[1].firstChild.data="oranges";
fruits[2].innerText="litches";


 let newfruit=document.createTextNode("papaya");
 let newelement=document.createElement("li");
 newelement.appendChild(newfruit);
//  document.querySelector("li").parentNode.appendChild(newelement);
 document.querySelector("ul").appendChild(newelement);


































