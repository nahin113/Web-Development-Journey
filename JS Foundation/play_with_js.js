// console.log("Hello world");
// const total = 306;
// let num1 = 102;
// let num2 = 204;

// console.log(num1 + num2);

// let exp = 2**4;
// console.log(exp);

// if (num1 != num2)
// {
//     console.log("WTF !!!")
// }
// else {
//     console.log("Same same !!!")
// }

// console.log(5,5);

// for (let i=1; i<=5;i++)
// {
//     console.log(`${i} - ${i*i}`);
// }

/* console.log("55.56" + 88);
console.log("64"/8);
console.log("64"*8);
console.log("64"-8);
console.log("64"+8); */
// alt + shift + A

 
// code for taking user input
// const fs = require("fs");
/* fs stands for File System module in Node.js.
In Node.js, there is no cin like in C++, so we use this built-in module to read input.
require("fs") is like including a library in C++ (#include <iostream>).
*/
// const val = fs.readFileSync(0,"utf-8");
/*
const input = fs.readFileSync(0, "utf-8").trim();
fs.readFileSync(0, "utf-8")
Reads everything from standard input (stdin).
0 means stdin (just like cin in C++).
"utf-8" means we want the input as a string.
.trim()
Removes extra spaces or newlines at the start and end (like getline(cin, s) in C++ and then trimming).
*/
// console.log(val); 

// let a = [1, 2, 3, 4, 5];
// let b = [6, 7, 8, 9, 10];
// let c = a.concat(b);
// console.log(c.indexOf(3));

// function processTeaOrder () {
//     return makeTea("earl grey")
// }

// function makeTea (name) {
//     console.log(`${name} tea is making`);
// }

// processTeaOrder();


////Closure
// function createTeaMaker(Tea){
//     return function (teaType) {
//         let score = 100;
//       return `Making ${teaType} ${Tea} ${score}`;
//     };
// }


// let teaMaker = createTeaMaker("hitesh");
// let result = teaMaker("Green Tea");
// console.log(result);

// task1
// function stringToNumber(value) {
//     let convert = Number(value);
//     if(isNaN(convert)) return "Not a Number";
//     return convert;
// }

// console.log(stringToNumber(58));
// console.log(stringToNumber("Abir"));

// task2
// function flibBoolean(input) {

//     return !Boolean(input);
// }

// console.log(flibBoolean(1));

// task3
// function WhatAmI(input){
//     return `I'm a ${typeof(input)}`;
// }

// console.log(WhatAmI(true));


//task4
// function isItTruty(input){
//     if(input) return "it's Truthy"
//     else return "it's Falsey"
// }

//array
// let a = [1 , 'hello' , 69 , true , 89];
// let b = [1,69,89];

// function filterNumbers(arr) {
//     return arr.filter(item => typeof item === 'number')
// }

// function reverseArray(arr) {
//     return arr.reverse();
// }
 
// function findMax(arr) {
//     return Math.max(...arr);
// }

// function removeDuplicates(arr)
// {
//     return new Set(arr);
// }

// function flattenArray(arr) {
//     return arr.flat(Infinity);
// }

// console.log(flattenArray([1,[2,3],[4,5,[9,10]]]));

//loops
// function sumOfN(n) {
//     let total=0;
//     for(let i=1;i<=n;i++) total+=i;
//     return total;
// }

// function printMultiplicationTable(n){
//     let table = [];
//     for(let i=1;i<=10;i++) {
//         table.push(`${n} * ${i} = ${n*i}`);
//     }
//     return table;
// }

// function countVowels(str) {
//     let s= 'AEIOUaeiou';
//     let cnt=0;
//     for (let char of str) {
//         if(s.includes(char)) cnt++;
//     }
//     return cnt;
// }

// console.log(countVowels('Sadika Ahmed'));

//Functions high order
// const squareNumbers = (arr) => arr.map(num=>num*num);
// const filterEvenNumbers = (arr)=>arr.filter(num=>(num%2===0));
// const sumOfPositiveNumbers = (arr)=> arr.filter(num=>num>=0).reduce((sum,num)=>sum+num,0);
// const getNames = (arr)=>arr.map(obj=>obj.name);
// const findLongestWord = arr => arr.reduce((Lword,word)=>word.length>Lword.length ? word:Lword,"");
// let a=[1,2,4,6,8,10];
// let obj = [
//     {
//         name : "nahin ahmed",
//         id : 151,
//     },
//     {
//         name : "sadika ahmed",
//         id : 375,
//     }
// ];
// const words = ["apple", "banana", "grapefruit", "kiwi"];
// console.log(squareNumbers(a));
// console.log(filterEvenNumbers(a));
// console.log(sumOfPositiveNumbers(a));
// console.log(getNames(obj));
// console.log(findLongestWord(words));

//Nested functions and context
// const obj = {
//     name : "Nahin",
//     age : 25,
//     introduce() {
//         return `Hi, my name is ${this.name} and I am ${this.age} years old`;
//     }
// };
// console.log(obj.introduce());

// function outer() {
//     function inner() {
//         return "inner function called";
//     }
//     return inner(); // here we are returning string , and function calling right away
// }

// let f = outer();
// console.log(f); // printing string

// function outer() {
//     return ()=> {
//         return "inner function called";
//     } // here we are returning the function itself
// }

// let f = outer();
// console.log(f()); // printing function
