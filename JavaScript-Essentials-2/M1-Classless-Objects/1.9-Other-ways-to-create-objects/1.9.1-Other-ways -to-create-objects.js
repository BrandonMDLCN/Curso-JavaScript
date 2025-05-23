/*--------------------- 1.9.1 Other ways to create objects ---------------------*/
/*
In all the examples that have appeared so far in our play with objects, we used the literal notation to create them.

This method is primarily simple and legible, and generally enough for most applications.

It is ideal when we create a single object.

However, this is not the only method available in JavaScript to create objects, and so we will take some time to look at alternative techniques.
*/



/*--------------------- 1.9.2 Factory ---------------------*/
/*
Let's start with a technique called factory in object-oriented programming. 
This is the name given to functions that create and return objects. 
In JavaScript, factory is a programming pattern rather than a mechanism of the language itself, 
but understanding it will allow us to move smoothly to a technique based on a constructor.

The idea itself is very simple. We create a function that will return a new object of our defined type every time it is called. 
We can pass arguments to a function that will be used to initiate the new object.

Let's say we need to create several points on a surface where each point is an object. 
The objects will have the same properties, and they will only differ in their values. Let's look at the first example:
*/

let createPointa  = function(x, y) {
    let obj = {};
    obj.x = x;
    obj.y = y;
    return obj;
};
let point1 = createPoint(1,1);
let point2 = createPoint(2,2);
console.log(point1.x); // ->  1
console.log(point2.x); // -> 2

/*
The createPoint function is our factory. 
Inside the factory, we create an empty object, then add the x and y properties to it, 
and initialize it with the values given as arguments of the function. The function returns the created and initiated object with a return. 
A function prepared in this way is used to create the two objects point1 and point2.

Let's improve the appearance of our function a little, without changing its operation.

Doesn't it look a bit simpler?
*/

let createPointb  = function(x, y) {
    return {
        x:x,
        y:y
    }
};

/* 
We can go one step further. JavaScript makes our code even simpler.

If we have defined variables, in this case the x and y arguments passed to the function, 
we can insert them into the object without separating them into key and value.

Such a property will have both a variable name and its value.

Si pones el argumento dentro del objeto que devuelves, el Key sera el argumento y el Value sera el valor del argumento
 */

let createPointc  = function(x, y) {
    return {
        x,
        y
    }
};

// What's interesting is that we can present the same function in an even shorter form using arrow notation.

let createPoint  = (x, y) => ({x, y});

/* 
But let's get back to normal notation. Let's declare the local variables _color and _info in the function. Additionally, 
we’ll add a new property to our object – the getColor method. Its only task will be to return the value of our new local variable.

Let's try to write some information to the console.

Look at the code below:
 */

let createColoredPoint  = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);
    return {
        x,
        y,
        getColor() {return _color}
    }
};
let coloredPoint1 = createColoredPoint (1, 1, "red");// -> ... object under construction
let coloredPoint2 = createColoredPoint (2, 2, "green");// -> ... object under construction 
console.log(coloredPoint1.getColor());    // -> red
console.log(coloredPoint2.getColor());    // -> green
console.log(coloredPoint1._color);   // -> undefined !!!

/* 
Let's try to explain what actually happened after we ran our program. In JavaScript, each time a function is called, 
a new environment is created for it, containing among others its local variables. 
In our example, twice (because we call our function so many times) a new environment is created, together with the variables _color and _info.

The variable _info is only used inside the function while it is running. We display its contents on the console and do not return to it again. 
After leaving the function, it won’t be needed anymore, so we won’t have access to it (we can assume that it is removed).

Things are different for the _color variable. We refer to it in the getColor method of our newly created object. 
And since the object is returned by a function (after all, it is a factory), it will also exist after the function has finished working. 
And with it, the getColor method will exist, which we can run. 
How will the method get the value of the local variable _color from a function that is already finished? JavaScript is prepared for this scenario. 
It recognizes the situation and, together with our new object, stores the call environment of the function in which the object was created. 
So, in human terms, the local variables of the function, which are used by the methods of the returned object, are not deleted. 
And more importantly, each call to a function has its own independent environment, just as objects created by the factory are independent. 
This mechanism is called closure.

By the way, we’ve seen how to create private property. 
In object-oriented programming, these are properties to which only the methods of our object have access. This is the case in our example. 
The local variable _color is not accessible from the outside, but only with the getColor method. Therefore, we can treat it as private property.
 */