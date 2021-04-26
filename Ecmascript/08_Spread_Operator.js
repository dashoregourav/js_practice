// 1. Spread Operator replaces apply () 
// function sum(a,b,c){
//     return a+b+c;
// }
// const num=[1,2,3];
// console.log(sum.apply(null,num)); //6

// let sum= (a,b,c)=>a+b+c;
// const nums=[1,2,3];
// console.log(sum(...nums));

// 2. Spread Operator replace concat() and copy 
// let arr1=[1,2,3];
// let arr2=arr1;
// arr2.push(4);
// console.log(arr1); //[1,2,3,4]
// console.log(arr2); //[1,2,3,4]

// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3 =[...arr1,...arr2];
// arr3.push(7);
// console.log(...arr1); //1 2 3
// console.log(...arr3); //1 2 3 4 5 6 7

// Object type Example
// const obj1 = {
//     name: "gourav",
//     age: 22
// }
// const obj2 = {
//     email:"gourav@gmail.com"
// }
// const obj3={...obj1,...obj2};
// console.log(obj3); //{ name: 'gourav', age: 22, email: 'gourav@gmail.com' }
