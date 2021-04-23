let num=[10,20,30,40,50,60,70,80,90,100]
var b=num.filter(getEvenPlaces);

function getEvenPlaces(items,index){
    return index%2==0;
}
console.log(b);