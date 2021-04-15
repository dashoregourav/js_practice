// console.log(this);
"use strict";
// function sum(){
//     const add=2+2;
//     console.log("sum =",add);
//     console.log(this);
// }
sum();

var details = {
    firstname: "Gourav",
    lastname: "Dashore",
    fullname: function () {
        console.log("FullName=",this.firstname,this.lastname);
        console.log(this);
    }
}

details.fullname();