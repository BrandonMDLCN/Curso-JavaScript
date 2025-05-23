/*--------------------- 1.3.3 A function as a property type – a method ---------------------*/
/*
The property of an object, as we have seen before, can also be a function.

A function that is the property of an object will be called a method.

Just as the properties of objects describe their characteristics, methods can be treated as their characteristic behavior, or ways of changing the state of an object.

As an example, let’s consider an object describing a point on the surface. 
We’ll only describe its two properties, which determine its position, that is, the position x and y. 
To this we’ll add two methods, moveVertically and moveHorizontally.

Look at the code below:
*/

let point = {
    x: 0,
    y: 0,
    moveHorizontally: function(distance) {
        this.x = this.x + distance;
    },
    moveVertically: function(distance) {
        this.y = this.y + distance;
    }
}
console.log(point.x);    // -> 0
point.moveHorizontally(30);
console.log(point.x);    // -> 30

/*
Obviously, there may be more levels of nested properties.

In the example, we have a new keyword, this.

In simple terms, it indicates the object we are in. However, we’ll leave a more detailed discussion of it for later. 
At this point, it’s enough to know that this.x simply indicates the x property of the object in which our method is located.

The method does not have to affect the state of the object, but this is essentially one of the main reasons for their use.

The test.fn method from the previous example not only doesn’t change the state of an object, it doesn’t even use any of its properties.

In real life applications, placing this function inside an object would be quite debatable, but for the moment we don’t care.
*/