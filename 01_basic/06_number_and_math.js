const score = 400
// console.log(score);
// console.log(typeof score);



const balance = new Number(1000)
// console.log(balance); 


// console.log(balance.toString());
// console.log(typeof balance);                //object
// console.log(balance.toFixed(2));

const othervalue = 100.333
// console.log(othervalue.toPrecision(4));    // 100.3

const indianHunderds = 100000000
// console.log(indianHunderds.toLocaleString('en-in'));     //10,00,00,000


//++++++++++++++++++++++++ Maths +++++++++++++++++++++++

// console.log(Math);   //Object
// console.log(Math.abs(-4));      //Positive value
// console.log(Math.round(4.7));   //Round figure ..... Most usage
// console.log(Math.ceil(4.7));    // Upper Round figure value
// console.log(Math.floor(4.7));   // Lower round figure value
// console.log(Math.min(4, 5, 1, 7));  // Minimum value
// console.log(Math.max(4, 5, 1, 7));  // Maximum value


console.log(Math.random());                          // 0 or 1
console.log((Math.random()*10) + 1);                 //  0 or 1 ... Random into(*) 10 + 1
console.log(Math.floor(Math.random()*10) + 1);       // Value that lower round figure ''

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));











