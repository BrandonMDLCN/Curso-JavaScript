/*--------------------- 4.1.7 Forwarding calls (apply, call, bind) ---------------------*/

/* 
Do you remember the this operator?

When used inside a method of an object, it points to that particular object.

Thanks to this, we can access any properties and other methods of the object from the level of the method.

As a reminder; take a look at this example below:
*/

let pointo = {
    x: 100,
    y: 200,
    testThis: function() {
        console.log(this);
    },
    show: function() {
        console.log(`${this.x}:${this.y}`);
    }
}
pointo.testThis(); // -> {x: 100, y: 200, test: ƒ}
pointo.show(); // -> 100:200

/*
The point object has two properties, x and y, and two methods, testThis and show.

The first method only displays this (i.e. the point object in this case), while the second method outputs the values of the x and y properties to the console.

Note that the show method explicitly uses this to retrieve the x and y values.

What happens if we use the this operator inside a function that is not a method?

It depends mainly on whether we are working in strict mode or not.

Additionally, arrow functions behave quite differently, but we’ll come back to these in a moment.

Let's start with a simple function whose task will be only to display the value of this.
*/

'use strict';
function test() {
    console.log(this);
}
test(); // -> undefined

/*
In the example, we use the 'use strict' directive so the code runs in strict mode. 
In such a situation, this inside the function is not set to any value (it remains undefined).
*/

function testo() {
    console.log(this);
}
testo(); // -> Window (global object)

/*
Calling the same function without strict mode has a completely different effect. This time this points to a Window object (in the browser, it's called a global object).

As a reminder, many functions we use (e.g. console.log) are actually methods of the global Window object.
*/

window.console.log === console.log; // -> true

/*
JavaScript allows you to change the object pointed to by this inside a function.

We can do this by calling such a function (the call and apply methods) or by creating a new function using the bind method.

Take a look at the example:
*/

'use strict';
function showPoint(msg) {
    console.log(this);  // -> undefined
    console.log(`${msg} [${this.x}:${this.y}]`); // -> TypeError
}
showPoint('coordinates');

/*
The showPoint function first displays the value of this, 
then tries to display a message consisting of the argument passed to it and the two properties x and y that it expects to find in the context of this.

Because, as we showed earlier, in strict mode, this is set to undefined, trying to retrieve the x property of an undefined object will end in an error.

Let's modify the example slightly – take a look at the example below:
*/

'use strict';
let point0 = {
    x: 100,
    y: 200
}
function showPoint0(msg) {
    console.log(this);  // -> {x: 100, y: 200}
    console.log(`${msg} [${this.x}:${this.y}]`); // -> coordinates [100:100]
}
showPoint0.call(point0, 'coordinates');

/*
The first change is to create a point object with two properties, x and y.

The second is to use the call method.

Every function has such a method.

Incidentally, you can see that the function itself is also an object (like almost everything in JavaScript).

We use the dot notation to call its call method.

This method takes an object as the first argument, which is to be treated as this inside the function.

Then we give a list of arguments analogical to the one we would normally call the function with.

As you can see, the effect is successful.

The apply method works exactly the same as call; the only difference is how the arguments are passed.

As the first argument, we provide the object (i.e. call) which is to be treated as this.

However, there is no list of arguments.

We pass instead an array of arguments.

Let's rewrite our example using the apply method:
*/

'use strict';
let point1 = {
    x: 100,
    y: 200
}
function showPoint1(msg) {
    console.log(this);  // -> {x: 100, y: 200}
    console.log(`${msg} [${this.x}:${this.y}]`); // -> coordinates [100:200]
}
showPoint1.apply(point1, ['coordinates']);

/*
For another function, with more parameters, the calls could look as follows:
*/

test(a, b, c, d);
test.call(obj, a, b, c, d);
test.call(obj, [a, b, c, d]);

/*
In practice, however, the bind method is much more useful than the call and apply methods.

It allows us to bind a function to a specific context (an object) before calling it (we create a new function de facto).
*/

'use strict';
let point = {
    x: 100,
    y: 200
}
function showPoint2(msg) {
    console.log(`${msg} [${this.x}:${this.y}]`); // -> coordinates [100:100]
}
let showCoordinates = showPoint2.bind(point, 'coordinates');
let show = showPoint2.bind(point);
showCoordinates(); // -> coordinates [100:200]
showCoordinates('point'); // -> coordinates [100:200]
show('point'); // -> point [100:200]
showPoint2('test'); // -> TypeError

/*
In the example, we simplify the showPoint function slightly, 
limiting its logic to displaying the message that is passed and the x and y properties of the object pointed to by this.

The next two lines of code after the function declaration are the most important for us. 
In the first one, we call the bind method of our showPoint function, and we put the result in the showCoordinates variable. What exactly is this result?

It’s a new function, with the body and logic of the showPoint function. However, the arguments passed to the bind method are important.

The first one is, just like in call and apply, an object, which inside the function will be pointed by this. 
The following arguments, given as a list, will be permanently bound to the parameters of the original function.

Calling the showCoordinates function will call showPoint with the msg parameter set to the 'coordinates' string and the context set to the point object.

Passing another call argument to showCoordinates does not change the value of msg.

The next function, show, is created by calling the bind method with only one parameter.

This time, we only point to the object to be interpreted as this.


Since we have not bound any values to the function parameters (specifically, to one parameter – msg) calling the point function requires passing an argument.

Calling the bind method does not affect the showPoint function itself.

As you can see, calling it will end with an error because inside it, this indicates undefined.

You can analyze the situation from the example again in the following figure:


https://www.netacad.com/content/jsa/1.0/courses/content/m4/en-US/assets/114a4f32ffb2d3af2d3782aca845f8967dcf35c5.png

As we mentioned earlier, the situation is slightly different for arrow functions.

This is because arrow functions do not have their own this (we can refer to it in their body, but it will be this linked to the parent object). As a result:

    the bind, call, and apply methods do not apply to arrow functions;
    arrow functions cannot be used as constructors (i.e. called with the new operator)
    they should not be used as methods.
*/