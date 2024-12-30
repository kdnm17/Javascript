str1="vasa";
str2='neharika';

// properties 

// string length --- var.length 
console.log(str1.length);

// string indices --- var[0] 
console.log(str2[5]);


// template literals 
// in template literals we can write our variables along with the string 
let SpecialString=`this is a template literal`
console.log(SpecialString);
console.log(typeof SpecialString);

const obj={
  item:"pen",
  price:10,
};
let output=`cost of ${obj.item} is ${obj.price} rupees `
console.log(output);
console.log("cost of",obj.item,"is",obj.price,"rupees");

output=`sum of 1 and 2 is ${1+2}`;
console.log(output);
console.log(`sum of 1 and 2 is ${1+2}`);

console.log("Vasa\nNeharika");
output='Vasa\nNeharika';
console.log(output);



// string methods 

// var.toUpperCase() 
let str="Vasa Neharika";
console.log(str.toUpperCase());

// var.toLowerCase()
let newstr=str.toLowerCase();
console.log(newstr);

// var.trim()
// trims starting and ending spaces of the variable 
str='  vasa neharika   ';
console.log(str.trim());

//var.slice(start,end)
// end number is not included 
str="vasa neharika";
console.log(str.slice(5,13));
console.log(str.slice(5));
let num='012345678';
console.log(num.slice(0,6));

//var1.concat(var2)
let firstname="vasa";
let lastname="neharika"
console.log(firstname.concat(lastname));

let res1=firstname+lastname;
console.log(res1);
let res2="my name is"+firstname+lastname;
console.log(res2);

//var.replace(searchVal,newVal)
str="hello";
console.log(str.replace("h","y"));
console.log(str.replace("lo","p"));
str="hellololo"
console.log(str.replace("lo","p"));
console.log(str.replaceAll("lo","p"));


//var.charAt(idx)
str="IloveJs";
console.log(str.charAt(2)); 
console.log(str[2]);

// strings are immutable{cant change} (for changing we need to introduce new variable)
str[0]="s";
console.log(str)

newstr=str.replace("I","s");
console.log(newstr);
console.log(str.replace("I","s"));


// questions
/*prompt user to enter full name . generate a username for them Based
on the input . start username with @,followed by thier full name and ending with full name length */
let uname=prompt("enter full name");
let length=uname.length;
let username=`@ ${uname} ${length}`;
// let username="@"+uname+length;
console.log(username)