// in strings 
// as strings are immutable (cant change the string) and we can only create new strings from old 

// coming to arrays ,, arrays are mutable 
// we can change the array or craete a new array 
// array methods have two options 


// array methods 

//.push():add to end 
let cars=["farrari","rolls royce","lamborghini","maruti suzuki swift"]
let add=cars.push("hyundai creta","tata nexon");
console.log(cars);
console.log(cars.push("tata harrier"));
console.log(cars);
console.log(add);

//pop():delete from end and return
let deleted=cars.pop();
console.log(cars);
console.log(`deleted car is ${deleted}`);
cars.push(cars.pop());
console.log(cars);
cars.push(deleted);
console.log(cars);


//toString():converts array to string
console.log(cars.toString());
console.log(cars);

//concat():joins multiple arrays and returs result
let marvelHeroes=["thor","spiderman","ironman"];
let dcHeroes=["superman","batman"];
let indianHeroes=["shaktiman","krish"];
let heroes=marvelHeroes.concat(dcHeroes);
console.log(heroes);
console.log(marvelHeroes.concat(dcHeroes,indianHeroes));

//unshift():add to start
marvelHeroes.unshift("antman");
console.log(marvelHeroes);

//shift():delete from satrt and return
marvelHeroes.shift();
console.log(marvelHeroes);

//slice():returns a piece of the array
console.log(cars.slice(1,4));

//splice():cahnge original array(add,remove,replace)
//splice(startIdx,delCount,newE())
console.log(cars);
console.log(cars.splice(2,2,"fhhfrgi","riodfji"));
console.log(cars);
let newcars=cars.splice(2,2,"gvfh","ur");
console.log(newcars);
console.log(cars);
//delete
cars.splice(2,2);
console.log(cars);
//add
cars.splice(2,0,"lamborghini");
console.log(cars);
//replace
cars.splice(2,1,"maruti suzuki swift");
console.log(cars);

cars.splice(6,0,"yg4rf");
console.log(cars);

cars.splice(6,1);
console.log(cars);



//push(),pop(),unshift(),shift(),splice() are changing the array
//but slice() is making a new array

let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
companies.shift();
companies.splice(5,0,"ola");
companies.push("amazon");
console.log(companies);









































