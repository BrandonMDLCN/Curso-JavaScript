/*--------------------- 1.10.1 Prototypes ---------------------*/
/*
Let's start again with the unrecommended __proto__ way.

Let’s create a figure object that has one getType method. 
The method will check if we have a type field in the object, returning either its value or the string "unknown".

The second object, circle, contains the properties type, center, and radius. 
Both objects are created using the letter technique. Using __proto__, we assign a figure as the prototype circle.

Look at the code below:
*/

figure = {
    getType: function() {
        return this.type ? this.type : "unknown";
    }
};
let circle = {
    type: "circle",
    center: {x:0, y:0},
    radius: 100
};
circle.__proto__ = figure;

// Let's call the getType method for both objects:

console.log(figure.getType());
console.log(circle.getType());

/* 
If you call figure.getType, it will return "unknown"; after all, the object has no type field. 
Calling circle.getType will display "circle", a string stored in the type field of the circle object.

In this case, JavaScript doesn’t find the getType method directly in circle, so it starts searching the prototype chain.

After finding the method in the prototype, it calls it. Only one thing may need to be explained.

Look at the getType method declaration. Inside it, we refer to the type field using the word this.

We explained earlier that this refers to the object in which we define the method. 
That was a bit of a simplification, but usually true. In fact, this refers to the object in the context of which a given function is called. 
In our case, the method belongs to figure, but it is called in circle.

In such a situation, this inside it refers to circle and not to figure.
*/



/*--------------------- 1.10.3 Object.setPrototypeOf ---------------------*/
/*
What alternatives do we have if using __proto__ is not recommended?

First, we can use the Object.setPrototypeOf and Object.getPrototypeOf methods.

The first one allows us to associate the target object with the prototype object.

The second one returns the prototype of the indicated object (in our example, the proto variable should refer to the figure object).
*/

Object.setPrototypeOf(circle, figure);
let proto = Object.getPrototypeOf(circle);
console.log(circle.getType());



/*--------------------- 1.10.4 Object.create ---------------------*/
/*
We can also create an empty object on the basis of the selected prototype, completing it later with the necessary fields.

We use the Object.create method we already learned about.

Previously, we used it with a null argument, which meant that we created an empty object without a prototype.
*/

let circle = Object.create(figure)
circle.type = "circle";
circle.center = {x:0, y:0},
circle.radius = 100;
console.log(circle.getType());