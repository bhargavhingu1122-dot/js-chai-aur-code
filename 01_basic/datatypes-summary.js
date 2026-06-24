// Primitive (call by value)

// 7 types :- String , Number , Boolean , Null , Undefined , Symbol , BigInt

const score = 100
const scoreVlaue = 100.5

const isLoggedIn = false
const outsideTemp = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 6262625251616162373n


// Non-Primitive(Reference)

// Array , Objects , Function

const shoes = ["gucci","armani","nike"]

let myObj = {
    name:"Bhargav",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof myFunction);



//++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non - Primitive) 

let myInstagramname = "BhargavHingu"

let anothername = myInstagramname
anothername = "HinguBhargav"

console.log(myInstagramname);
console.log(anothername);  

let userOne = {
    email = "bh@gmail.com",
    upi   = "bh@ybl",
}



