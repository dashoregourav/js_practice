// function scoping -> var
function f1(){
     var x=10;
    // console.log(x);
    if(true){
    console.log(x);   
      y=20;
    }
    console.log(y);
}
f1();

z="Hi, How are You ?";
console.log(z);  //code is fine and print Hi, How are You ?
var z;