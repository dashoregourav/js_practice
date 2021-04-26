// const myData={
//     name:"gourav",
//     age:22,
//     email:"gourav@gmail.com"
// }
// Type 1
// let {name,age,email}=myData;
// console.log(`My name is ${name}.My Age is ${age} and My email is ${email}.`)

// Type 2
// let name,age,email;
// ({name,age,email}=myData);
// console.log(`My name is ${name}.My Age is ${age} and My email is ${email}.`);

// Type 3
// let {name:myName,age:myAge,email:myEmail}=myData;
// console.log(`My name is ${myName}.My Age is ${myAge} and My email is ${myEmail}.`);

// Type 4 
const myData = {
    name: "gourav",
    age: 22,
    email: "gourav@gmail.com",
    hobbies :{
        first :"Listening Music",
        second :"Playing Cricket"
    }
}

let {name,age,email,hobbies}=myData;
console.log(`My name is ${name}.My Age is ${age} and My email is ${email}.
My first Hobbie is ${hobbies.first} and second hobbie is ${hobbies.second}.`);
