class Student{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
    }
    getBioData(){
        return `My name is ${this.name}.My Age is ${this.age}.My email is ${this.email}`;
    }
}
// let obj1=new Student("Gourav",22,"gourav@gmail.com");
// obj1.getBioData();
class Player extends Student{
    constructor(name,age,email,game){
        super(name,age,email);
        this.game=game;
    }
    getPlayerData(){
        console.log(`${super.getBioData()} And My Favourite Game is ${this.game}.`);
    }
}
let obj2=new Player("Gourav",22,"gourav@gmail.com","Football");
obj2.getPlayerData();