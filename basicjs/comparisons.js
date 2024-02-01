console.log("2">1);//true
console.log("02">1);//true

// "Abstract Equality Comparison"
//now comes the confusing that's why not a good practice to use them in code (always write easy and clean readable code )

console.log(null>0);// false
console.log(null == 0);//false // loose Equality Operator which performs Type Coercion.
console.log(null===0);//false // STRICT Equality Operator which doesn't performs Type Coercion
console.log(null >=0);//true // simply changes datatype of null to number (due to Type Coercion) and then equates if 0 is >= 0 . and that's true 
// console.log(null=0);// SyntaxError :Invalid left-hand side in assignment // It attempts to assign the value 0 to null, but assignments DO NOT return a value.


console.log(undefined>0);// false
console.log(undefined == 0);//false
console.log(undefined>=0);//false


console.log("abc">"bcz");// false (due to lexi dictionary order of coming )