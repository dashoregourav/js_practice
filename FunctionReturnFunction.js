function a(){
    function b(){
        console.log("Function b is called.");
    }
    return b();
}
 var temp=a();
temp();