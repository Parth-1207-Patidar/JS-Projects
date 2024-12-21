"use strict";

// //implicit type conversion done by JS
// let result = '4' - "3";
// console.log(result); //1

// //explicit type conversion done by user
// let num = 20.0202020546;
// console.log(parseInt(num)); //20 - converts to integer

// // == (equality) vs === (strict equality)
// let a = "6";
// let b = 6;
// console.log(a == b); //true, because a is string and b is number but still holds same value
// console.log(a === b); //false, because a is string and b is number even if they hold same value

// // ternary operator condition ? exprIfTrue : exprIfFalse
// let age = 18;
// let isAdult = age >= 18 ? "Yes" : "No";
// console.log(isAdult); //Yes

// //functions

// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(add(2, 3, 4)); //9

// // arrow functions
// const add = (a, b, c) => a + b + c;
// console.log(add(2, 3, 4)); //9


// // arrays
let arr = [1, "two", 2, 3, 4, 5];
// console.log(arr);


// // forEach method

// arr.forEach( (value) => {
//     console.log(value);
// })


// // map method

// let newArr = arr.map( (value) => {
//     value = value ** 2;
// })
// console.log(newArr); //square of each element in array


// // filter method

// let newArr = arr.filter( (value) => {
//     return (value > 2) ? value : null;
// })

// console.log(newArr); // [3, 4, 5]

// // forIn loop

// for (let index in arr){
//     console.log(index + " : " + arr[index] + "\n");
// }

// // // forOf loop

// for (let value of arr){
//     console.log( arr.indexOf(value) +  " : " + value + "\n");
// }

// // array destructuring
// let item1 = arr[0];
// let item2 = arr[1];
// let item3 = arr[2];

// let [item1, item2, item3] = arr;

// console.log(item1, item2, item3);

// // object

// let obj = {
//     name: "John",
//     age: 34,
//     lastName: "Marston",
//     a: () => {
//         console.log("Hello");
//     }
// }

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.lastName);
// obj.a();

// // array of objects

// let objArr = [
//     {
//         name: "John",
//         age: 34,
//         lastName: "Marston",
//         a: () => {
//             console.log("Hello");
//         }
//     },
//     {
//         name: "Arthur",
//         age: 36,
//         lastName: "Morgan",
//         a: () => {
//             console.log("Hello");
//         }
//     },
//     {
//         name: "Dutch",
//         age: 40,
//         lastName: "Van der Linde",
//         a: () => {
//             console.log("Hello");
//         }
//     }
// ]

// for (let obj of objArr){
//     for (let key in obj){
//         console.log(obj[key]);
//     }
// }