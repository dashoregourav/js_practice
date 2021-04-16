function Counter(){
    this.sum=0;
    this.add=function(num){
        this.sum+=num;
        return this;
    }
    this.get=function(){
        return this.sum;
    }
}
const result=new Counter().add(4).add(5).get();
console.log(result);