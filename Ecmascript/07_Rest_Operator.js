//es5 - Here problem is we dont know how many parameter we have to used;
// function sum(a,b,c,d){
//     console.log(a+b+c+d); //100
// }
// sum(10,20,30,40);

// function sum(...inputs){
//     let total=0;
//     for (const i of inputs) {
//         total+=i;
//     }
//     return total;
// }
// console.log(`The sum of 3 numbers is ${sum(10,20,30)}`);

let sum = (...inputs) => {
    return inputs.reduce((previous, current) => {
        return previous + current;
    },0);
}
console.log(sum(1,2,3,4));  //10