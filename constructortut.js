function circle(radius){

    this.radius = radius;
    this.draw = function(){
        console.log("This is a function with a constructor");
    }

}

let c1 = new circle(5);
//console.log(c1);
console.log(c1.radius);
c1.draw();