// const area=new Function("length","breadth","console.log('Area of Recangle is',length*breadth);");
// // const result=area(5);
// area(10,20);

// const perimeter=new Function("length","breadth","console.log('Perimeter of rectangle is',2*(length+breadth));")
// perimeter(10,20);

// const volume= new Function("length","breadth","console.log()")

function Rectangle(length, breadth, height) {
    this.length = length;
    this.breadth = breadth;
    this.height = height;

    this.area = function () {
        console.log("Area of rectangle=", this.length * this.breadth);
    }
    this.perimeter = function () {
        console.log("Perimeter of rectangle=", 2 * (this.length + this.breadth));
    }
    this.volume = function () {
        console.log("Volume of rectagle=", length * breadth * height);
    }

}
const rect1 = new Rectangle(10, 20, 30);

rect1.area();
rect1.perimeter();
rect1.volume();