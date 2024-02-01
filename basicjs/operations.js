let value = 3;
let negVale= -value;
console.log(-value);


// don't write these types of codes it's just confusing give exact parenthesis when dealing with operators
 console.log(7*4/5%10+4-55);


console.log("1" +2);//12 (toPremitive when first is string the whole will be considered as string always but (see next comment):) )
console.log(1+"2");//12
console.log("1"+2+3);//123
console.log(typeof("1"+2+3));
console.log(1+2+"3");//33 (toPremitve when first values are  numbers then the operation will be done for then and even a single string is present in that expression the whole expression is considered as string only always (after that first string encountered be it any nymber of numbers come they will just be appended and nothing else operatuion will be done on them ))
console.log(1+2+"$"+5+15+"6"+"%");
console.log(typeof(1+2+"3"));


// Tricky conversion
console.log(true);//true
console.log(+true);//1 (confusion code don't ever write this kind of code in any company this kind of code is not appreciated and won't be merged in git even if requested )
console.log(-true);//-1
console.log(+false);//0
console.log(+"");//0

// prefix and postfix stuffs (important)
let gameCounter =100;
gameCounter++;
console.log(gameCounter);


