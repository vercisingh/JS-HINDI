//  Datatype conversion
// let score= "33";
// if 33abc value is there 
let score="33abc"; // then line 8 output is NaN

console.log(typeof(score));// string
console.log(typeof score);//string
let valueInNumber = Number (score); // Number if prefixed above value will being typeof as number be it is absurd value it will take NaN (Not a Number)as it's output 
console.log(valueInNumber);
console.log(typeof valueInNumber);

// Conversion in String
let temp= null;
valueInNumber = String (temp);
console.log(valueInNumber);//null
console.log(typeof(valueInNumber));//string

let para= undefined ; 
valueInString= String(para);
 console.log(valueInString);// undefined 
 console.log(typeof(valueInString));// string
 

 //Conversiin in Number
  let something= null;
  valueInNumber = Number (something);
  console.log(valueInNumber);//0
  console.log(typeof(valueInNumber));//number


  let otherthing= undefined;
  valueInNumber = Number (otherthing);
  console.log(valueInNumber);//NaN
  console.log(typeof(valueInNumber));//number
 
  let something1= true;
  valueInNumber = Number (something1);
  console.log(valueInNumber);//1
  console.log(typeof(valueInNumber));//number
 
  let something2= false;
  valueInNumber = Number (something2);
  console.log(valueInNumber);//0
  console.log(typeof(valueInNumber));//number
  
  // Conversion in Boolean

  let anything=1;
  valueInBoolean = Boolean (anything);
  console.log(valueInBoolean);// true
  console.log(typeof(valueInBoolean));//Boolean

 Number ="4567"; 
 console.log(Number);