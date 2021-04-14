function f1(){
    var a=1;
}
var b=22;
function f2(){
    var b = "Hello,";
    // a++;  not defined
    // console.log(a); not defined
    if(true){
        b+=" Good Afternoon";
    }
    b+=" Gourav";
    console.log(b);
}

function f3(){
    var c=100;
    function f4(){
        console.log(c); //100
        var c1=200;
    }
    f4();
    // console.log(c1);  not defined
}
f1();
f2();
f3();