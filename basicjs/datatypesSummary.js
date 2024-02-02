// Datatype in offcial documentation is  categories in two parts:  
// a>  Primitive datatype
    //   7 types: String, Number, Boolean,null,undefined,Symbol,Bigint 
// b> Non-Primitive datatype (Reference type)
   // array,objects,function
// On the basis of :
// 1. HOW they are stored in Memory (like array are stored in contigious memory and so on )
// 2. and how they are accessed from Memory (call by value and call by reference (concepts))


// if  you want to master js you need to master js "objects" and "web events" or "browser-events"
// primitve examples 
// const id=Symbol("123");
// const anotherId = Symbol("123");
// console.log(id === anotherId);


//non-primitive examples
// array 
// let arr=["harsh","28"];
//object 
//  let myObject= {
//     name:"harsh",
//     age:"28",
// }

//function

// let myFunction = function(){
//     console.log("Hello world");
// };


// ------------------------------------------------------------------------------

//memory allocation 
// stack (primitive ) we get copy of the variable  , 
// heap(non-primitive) we get refernce of original value means any change is variable directly changes the origional variable


// call by value (copy comes only)
let  name = "ram";
name1 = name;
console.log(name);
console.log(name1);
name = "ramayan";
console.log(name);
console.log(name1);


// call by reference (changes the original)
let myObject ={
    name:"Rohit",
    age:28
}

console.log(myObject);
let myObject1={
    name:"raghav",
    age:33
}
console.log(myObject1);
// myObject = myObject1;
console.log(myObject);
myObject1=myObject;
console.log(myObject1);