// var variables are global or function scoped
// function getName(){
//     if(true){
//         var myName="Gourav";
//     }
//     console.log(myName);
// }
// getName();

// But let and const variables are blocked scoped 
// function getName(){
//     if(true){
//         let firstName="Gourav";
//         const lastName="Dashore";
//         console.log(firstName+" "+lastName);
//     }
//     // console.log(myName); //error
// }
// getName();

// var variables can be updated and redeclared 
// var name="gourav";
// function getName(){
//     // var name="yash";
//     name="yash";
//     console.log(name); //yash  
// }
// getName();
// console.log(name); //gourav //yash

// But let variables can be updated but not redeclared 
// let name="gourav";
// if(true){
//     let name="yash";
//     console.log(name);  //yash
// }
// // let name="shivansh";  // Error - 'name' has already been declared
// console.log(name); //gourav
// name="shivansh";
// console.log(name); //shivansh

// const variables can not be redeclared and updated 
// const name="gourav";
// if(true){
//     const name="yash";
//     console.log(name); //yash
// }
// // const name="shivansh"; // Error - 'name' has already been declared
// // name="shivansh"; //TypeError: Assignment to constant variable.
// console.log(name); //gourav

// Hoisting is possible in case of var varibles but not in case of let and const
name="gourav";
console.log(name); //gourav
var name;
