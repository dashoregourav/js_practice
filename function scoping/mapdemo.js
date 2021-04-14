let values=[1,2,3,4,5];
let newValue=values.map(function(num){
    return num*num;
})
console.log(newValue);
console.log("=====================================");

let val=values.map(function(num){
    return num%2;
})
console.log(val);