let names=['gourav','ram','sohan','mohan'];
// console.log(names);
console.log(names.length);
for(let i=0;i<names.length;i++){
    console.log(names[i]);
}
console.log("========================");
names.push("Yash");
names.push("gourav")

// for each loop in js 
names.forEach(function(items, index ){
    console.log(index +" => " + items);
})
console.log("========================");
names.pop();
// names.pop();
names.shift();
// for each loop in js 
names.forEach(function(items, index ){
    console.log(index +" => " + items);
})

names.unshift("abhishek");
console.log("========================");
// for each loop in js 
names.forEach(function(items, index ){
    console.log(index +" => " + items);
})

// console.log(names[2]);  // sohan
