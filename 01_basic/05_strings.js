const name = "Bhargav"
const repoCount = 50

//console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Bhargav-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const url = "http://bhargav.com/bhargav20%hingu"

console.log(url.replace('20%','_'))

console.log(url.includes('bhargavings are complete'));


// Common methods of string
let text = "Hello World";

console.log(text.toUpperCase());    // HELLO WORLD
console.log(text.toLowerCase());    // hello world
console.log(text.includes("World")); // true
console.log(text.startsWith("Hello")); // true
console.log(text.endsWith("World")); // true


let text = "Hello";

console.log(text[0]);      // H
console.log(text.charAt(1)); // e


let text = "JavaScript";

console.log(text.slice(0, 4));      // Java
console.log(text.substring(4, 10)); // Script


// Replace
let text = "Hello World";

console.log(text.replace("World", "JS"));
// Hello JS




//split
let text = "apple,banana,mango";

let arr = text.split(",");
console.log(arr); // ["apple", "banana", "mango"]



// Template literal
let name = "John";
let age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
// My name is John and I am 25 years old.




// To convert
let num = 123;

console.log(String(num)); // "123"
console.log(num.toString()); // "123"


