let box=document.querySelectorAll(".box");
console.log(box);
box[0].style.color="blue";
box[0].style.backgroundColor="lightgreen";


//CHILDNODES --gives text node,element node , comment node .......all

//document ke andar hamara body hothe hai , body ke andar childnodes hote hai , 
//aur uss childnodes ke andar bhi childnodes ho saktee hai
console.log(document.body.childNodes);
let cn=document.body.childNodes[1];

console.log(cn.childNodes);
console.log(cn.firstChild);  //it considers all childs 
console.log(cn.lastChild); //u can only access first and last ones in this way
console.log(cn.firstElementChild);  //giving first element child
console.log(cn.lastElementChild);

cn.lastElementChild.style.backgroundColor="lightblue";
//we can also check parent for a child node
console.log(cn.lastElementChild.parentElement);


console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.firstElementChild);

//CHILDREN-- only gives elements
console.log(document.body.children);
console.log(document.body.firstElementChild.children);
let babies=document.body.children[0];
console.log(babies.children);

//how to get SIBLINGS which are under same parent
console.log(babies.children[1].previousElementSibling);//it is giving the previous sibling which is an element
console.log(babies.children[1].nextElementSibling);
console.log(babies.children[1].previousSibling);//every box is having previous or next sibling as text 




