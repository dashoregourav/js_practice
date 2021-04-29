// Example 1
// async function test(){
//     return "Promise Resolved";
// }
// test().then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })

// Example 2
// let test=async ()=>{
//   console.log("2 : Message");
//   await console.log("3 : Message");
//   console.log("4 : Message");
// }
// console.log("1 : Message");
// test();
// console.log("5 : Message");

// Exmaple 3 :
const fetch=require('node-fetch');
let test = async () => {
    console.log("2 : Message");
    const response = await fetch("student.json");
    console.log("3 : Message");
    const students = response.json();
    return students;
}
console.log("1 : Message");
test().then((response)=>{
    console.log(response);
})
.catch((err)=>{
console.log(err);
})
// console.log("4 : Message");
// console.log(result);