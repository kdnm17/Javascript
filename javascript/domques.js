/*create a h2 heading element with text-"hello javascript"
append "from apna college students" to this text using js*/

/*let heading2=document.querySelector("h2");
let appends=document.createTextNode('from Apna College students');
heading2.appendChild(appends);*/

let heading2=document.querySelector("h2");
console.dir(heading2.innerText);
heading2.innerText=heading2.innerText + "from Apna College students";  //concatinating
console.dir(heading2.innerText);




/*create 3 divs with common class name-"box"
access them and add some unique text to each of them*/
 let divs=document.querySelectorAll(".box");
 console.dir(divs);
 console.dir(divs.innerText);
 console.dir(divs[0].innerText);
 console.dir(divs[1].innerText);
 divs[0].innerText="unique1";
 divs[1].innerText="unique2";
 divs[2].innerText="unique3";


/*craete a new button give it a text "click me",
background color of red and text color of white
insert the button as the first element inside the body tag.*/
let newbtn=document.createElement("button");
newbtn.innerText="click me";
newbtn.style.backgroundColor="red";
newbtn.style.color="white";
document.querySelector("body").prepend(newbtn);



/*create a <p> tag ,give it a class and some styling.
now create a new class in css and try to append this class to <P> element
solve using classList*/
let p=document.createElement("P");
p.innerText="para bolteh hai para";
p.setAttribute("class","paraboltehpara");
document.querySelector("body").append(p);
p.style.color="brown";
p.style.fontSize="50px";
//adding class
console.dir(p.classList);
p.classList.add("newclass");
console.dir(p.classList);





























