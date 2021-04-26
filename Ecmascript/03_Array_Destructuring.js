// Array Destructuring means to unpack values from arrays

// es5 
// var courses=['js','reactjs','nodejs'];
// var first=courses[0];
// var second=courses[1];
// var third=courses[2];
// console.log("First Course is "+first);
// console.log("Second Course is "+second);
// console.log("Third Course is "+third);

// es6 
// const courses = ['js', 'reactjs', 'nodejs'];
// let [first, second, third] = courses;
// console.log(`first : ${first}
// second : ${second}
// third : ${third}`);

// Program to swap two numbers without using third variable 
let a=10,b=20;
[a,b]=[b,a];
console.log(`value of a is ${a} and b is ${b}`);