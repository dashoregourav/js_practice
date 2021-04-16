let person = {
    fullName: function (city, state) {
        return this.firstName + " " + this.lastName + " from " + city + ", " + state + ".";
    }
}
let person1 = {
    firstName: "Gourav",
    lastName: "Dashore"
}
// let result=person.fullName.call(person1,"Indore");
// console.log(result);
let person2 = {
    firstName: "Yash",
    lastName: "Dashore"
}
// console.log(person.fullName.call(person2, "Khandwa"));

// console.log(person.fullName.apply(person1,["Indore","MP"]));
// console.log(person.fullName.apply(person2,["Khandwa","MP"]));

const full = person.fullName.bind(person1, "Indore", "MP");
console.log(full());

``