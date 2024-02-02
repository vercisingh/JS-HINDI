const score = 400;
const balance= new Number (134.623);
console.log(balance);
console.log(score);
console.log(balance.valueOf());

console.log(typeof(balance.toString()));
console.log(balance);
console.log(typeof(balance.valueOf()));
console.log(balance.toString().length);

console.log(balance.toFixed(2)); // used in ecommerce website as user is not finds cool to see the aftermath of much more calculations and the result in upto  many decimal points.
console.log(balance.toPrecision(3)); // it shows result in round of order and give priority to non-decimal part first means (left to right)

const num= 100000000;
console.log(num.toLocaleString());// gives by default values in ausa dollars
console.log(num.toLocaleString("en-IN"));// gives in indian INR (preety much good usecase)

// ----------------Maths-------------------------
console.log(Math);
console.log(Math.abs(-40));
console.log(Math.round(4.678)); // mostly used than ceil and floor 
console.log(Math.ceil(4.56));// always gives highest value 
console.log(Math.floor(4.66));// will always give lowest
console.log(Math.min(2,400,33,0));
console.log(Math.max(2,400,33,0));
console.log(Math.pow(2,4));

console.log(Math.random());// always gives number in betwwen 0-1 everytime mostly many decimal points number 
console.log(Math.floor(Math.random()*10));// getting only interger part of number eveytime random is running.

// What if i want user to see randon numbers between 10 to 20 ?

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max-min+1))+min);
