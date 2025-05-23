/*--------------------- 1.7.1 Methods ---------------------*/
/*
We’ve previously discovered that the properties of an object can be of any type.

Then the name method appeared (i.e. a property) which is a function. In most cases, the reasonable use of objects begins when we equip them with methods.

Let's create a circle object in which we place the getType method.
*/

let circle = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType: function() {
        return "circle";
    }
};

/*
There is a simplified way of declaring the method, which may be a bit more readable. 
Compare both examples by finding a difference in the way the method is defined. The effect of both declarations is identical.
*/

let circlea = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType () {
        return "circle";
    }
};

/*
In order to call up the method, we usually use dot notation.

We point to the object, name the method, and then add a parenthesis.

In parentheses, as in the case of regular functions, the arguments passed on may appear.
*/

console.log(circlea.getType());

//The method can obviously also be called up using bracket notation.


console.log(circlea["getType"]() );

/*--------------------- 1.7.2 The this keyword ---------------------*/
/*
The methods make real sense when they use object fields. 
Most often they’ll be used to influence their state (i.e. modify their properties) or to retrieve information about them.

However, in order to do so, we must have access to the object's fields from inside the method. How to do this?

The easiest way would be to refer to the object by its name, in other words, use the variable in which it was placed.

Let's modify the getType method from the previous example. We’ll test whether the object has a radius field, and whether a number is stored in it.

Depending on the test result, we’ll return either "circle" or "unknown". Note that we’ll use the conditional operator instead of the if construction. 
Look at the code below:
*/

let circleaa = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType () {
        return (typeof circleaa.radius === "number") ? 
        "circle" : "unknown" ;
    }
};
console.log(circleaa.getType());

/*
The example works, right? But this way has a big flaw – so never, ever, ever use it! The problem will become apparent when we make a copy of our circle object.
*/

let figure = {...circleaa};
delete circleaa.radius;
console.log(figure.radius);
console.log(figure.getType()); // "unknown"!

/*
The figure object is a copy of the circle. 
Deleting the radius field in the circle object does not affect the field with the same name in the new figure object. 
So we would expect figure.getType to return "circle", but instead we get "unknown".

You've probably already figured out what actually happened. 
By calling the figure.getType method, we instinctively expect it to check the type of the radius field in this very object.

However, in the code of the method, we clearly indicate to check the radius field type of the circle object.

The method, which seems quite simple and logical, proves to be completely useless. So, what's the solution? A new keyword comes to the rescue – this.

To give a simplified explanation, we can say that this one will always contain a reference to the object we are in. 
We’ll use it inside the methods to refer to the property of the object in which the method is located.

Let's verify this by correcting the previous example - look at the code:
*/

let circleb = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType () {
        return typeof this.radius === "number" ? "circle" : "unknown" ;
    }
};
console.log(circleb.getType());
let figureb = {...circleb};
delete circleb.radius;
console.log(figureb.radius);
console.log(figureb.getType()); // "circle"

/*
This time the effect of the program is in line with our expectations.

The keyword this is not only applicable to objects.

We’ll take a closer look at this topic in the section dedicated to more advanced function constructions. 
However, one issue related to this, and to functions, should be addressed now. 
You probably remember the construction of the arrow function, which allows you to shorten the definition of a function.

For example:
*/

let add = function (a,b) {
    return a + b;
}

// can be written in a more compact form:

let adda = (a,b) => a + b;

/* Arrow functions differ from ordinary functions not only in form. They contain inside themselves lexical scoping. 
Without going into detail, the method we would define in the form of an arrow will not have access to the properties of the object using this.

We should not use arrow functions to declare object methods. 
*/