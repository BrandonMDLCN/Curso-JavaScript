/*--------------------- 1.9.3 The constructor and the new keyword ---------------------*/
/*
As we mentioned, the factory in JavaScript is not really a mechanism of the language itself, but a programming pattern. 
On the language level, however, a similar technique is provided, using the constructor functions (or simply the constructor).

A constructor, like a factory, is a function that creates and returns an object. 
However, it differs from the factory in several respects. First of all, it requires the use of the keyword new when creating a new object. 
Additionally, it implicitly performs some actions that we have taken in the factory explicitly (e.g. creating an empty object).

So let's turn our factory example into a code that uses the constructor function. 
The changes are small, and you can probably find them easily by comparing the two programs.

Look at the code below:
*/

let ColoredPoint = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);
    
    this.x = x;
    this.y = y;
    this.getColor = function() {return _color};
};
let coloredPoint1 = new ColoredPoint(1, 1, "red");
let coloredPoint2 = new ColoredPoint(2, 2, "green"); 
console.log(coloredPoint1.getColor());    // -> red
console.log(coloredPoint2.getColor());    // -> green
console.log(coloredPoint1._color);   // -> undefined !!!

/* 
Usually the names of constructors begin with capital letters, hence the name of the ColoredPoint function. 
The first change that is noticeable is the lack of the word return. In the constructor, this is not necessary, 
after running it with new, it will automatically return an implicitly created object. 
We have access to this implicitly created object in the constructor using the keyword this. 
With this, we define and initiate the properties of the new object. Because the constructor is a function, we can also use the closure here. 
This part of the code is practically no different from the factory.

Let's do one more little experiment:
 */

console.log(coloredPoint1.constructor.name);

/* 
The name of our constructor will appear on the console: "ColoredPoint". 
Everything matches up ... But wait, after all, we didn’t define the property of the constructor in our object anywhere.

So how did it get there? Let's check the type of this property (or more precisely the type of value placed in the property).
*/

console.log(typeof coloredPoint1.constructor);

/* 
It turns out it's a function.

Let's try the same thing with an empty object.
*/

let a = {};
console.log(typeof a.constructor);

/* 
The effect is the same as before.

It's time to complicate our idea of objects a little. With {} or new we do not really create an empty object.

To create it, we use the implicitly generic Object constructor, on which most objects in JavaScript are built.

The Object constructor contains some generic properties and methods that can be useful in all objects (including in the constructor property). 
What exactly does it mean to create an object on the basis of another object? We’ll explain this more in the part of the course concerning prototypes.

At the moment, it’s enough to know that most of the objects we create inherit properties from the generic Object constructor object.

Note that the inherited properties are not enumerated with the "for ... in" loop, nor Object.kesys nor Object.getOwnPropertyNames. 
They are available, we can use them, but they are treated slightly differently from the object's own properties.

The name of the getOwnPropertyNames method does not appear by accident.
*/