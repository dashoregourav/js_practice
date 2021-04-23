function f1(){
    let city="Delhi";
    if(true){
        let message="Hi , How are you";
        console.log(city);
        city="Mumbai";
    }
    console.log(city);  // Mumbai
    // console.log(message);  not defined 
}
f1();