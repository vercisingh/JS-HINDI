 let name = "Rohit";
console.log(`Hello! my name is ${name}`);
let gameName = new String ("rohit's game");// new is used to initialize Object so thus is not string it is Object
console.log(gameName);
console.log(gameName.valueOf());
console.log(typeof(name));// string
console.log(typeof(gameName));// Object
console.log(gameName[1]);


// for numbers (new Number) it doesn't work like object 
let game= new Number (123456);
console.log(game);
console.log(game.valueOf());
console.log(typeof(game));// this is also object but it doesn't has key for the associated value .
console.log(game[2]);//undefinded no presence of key for the values in Number Object 

// new Datatype simply makes the subsequent datatype to object wrapper (which shouldn't be used plenty times)

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.valueOf());
console.log(gameName.split (" ").map(gameName=>gameName.charAt(0).toUpperCase()+ gameName.slice(1)).join(" "));
