let num=[1,2,3,4,5,6,7,8,9,10];
var b=num.filter(function(items,index){
    return index%2==0;
})
console.log("Even Place Elements:",b);
var c=b.map(function(items,index){
    return items*items;
})
console.log("Even Place Elements Square=",c);

var d=c.reduce(function(sum,item){
    return sum+=item; 
})
console.log("Final Result=",d);