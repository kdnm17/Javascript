class car{
 
  sound="vroom";
  drive = ()=>{
    console.log(this.sound);
  }
}

let bmw=new car();
bmw.drive();
let test=bmw.drive;
test();
