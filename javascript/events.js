/*node.event=()=>{
  code here
}*/

let a=1;
let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
console.log("btn1 is clicked");
console.log(`no of times operated is ${a}`);
a++;
}

//event object:has all the details about event
let btn2=document.querySelector("#btn2");
btn2.ondblclick=(e)=>{
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX,e.clientY);
}


//event listeners
//node.addEventListener(event,callabck);
let cola=document.querySelector("#keeda");

cola.addEventListener("mouseover",(evt)=>{
  console.log("div ke andar hai baayi-handler1");
})    
                                                       //it is printing both when addEventListener is used
cola.addEventListener("mouseover",()=>{                      //in above case it is erasing previous one
  console.log("div ke andar hai baayi-handler2");
})

let handler3=()=>{                      
  console.log("div ke andar hai baayi-handler3");
}
cola.addEventListener("mouseover",handler3); 
                                                          
cola.addEventListener("mouseover",()=>{                      
  console.log("div ke andar hai baayi-handler4");
})

cola.removeEventListener("mouseover",handler3);    //callback reference should be same for removing

//question
/*create a toggle button that changes the screen to dark-mode when clicked 
and light -mode when again clicked*/
let but=document.querySelector("#ques");
let curmode="light";
let body=document.querySelector("body");
but.addEventListener("click",()=>{
    if(curmode==="light"){
      curmode="dark";
      // document.querySelector("body").style.backgroundColor="black";
      body.classList.add("dark");   
      body.classList.remove("light"); 
    }
    else{
      curmode="light";
      // document.querySelector("body").style.backgroundColor="white";
      body.classList.add("light");
      body.classList.remove("dark");
    }
    console.log(curmode);
})








