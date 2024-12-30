console.dir(document.body);
console.dir(document.body.div);
console.log(document);
console.dir(document.head);
console.dir(document.head.style);

console.dir(document.querySelector(".container"));
let some=document.querySelector(".container");
console.dir(some.innerText);
some.innerText="na pani neeku enduku beh";
console.dir(some.innerText);

let somes=document.body;
console.dir(somes);
console.dir(somes.innerText);
somes.innerText="div ni para ni teesesi raasa";
console.dir(somes.innerText);

let nayaele=document.createElement("p");
let nayama=document.createTextNode("kothaga add chesa ma");
nayaele.appendChild(nayama);
somes.appendChild(nayaele);
console.dir(somes.innerText);
