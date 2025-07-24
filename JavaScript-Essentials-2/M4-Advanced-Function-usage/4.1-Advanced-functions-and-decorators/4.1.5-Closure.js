/*--------------------- 4.1.5 Closure ---------------------*/

/* 
The concept of closure, when we try to understand it by its definition, is usually quite inaccessible, so don't worry if it's not clear to you at first.

However, by analyzing the examples step by step we can clarify what is happening.

A closure is a mechanism that binds a defined function to the environment that affects it.

This environment stores all variables used in the function and those that are not its local variables. 
In simple terms, there are variables defined outside the function whose state is stored between successive function calls.

It’s good to note that there would be nothing strange about this if these were global variables visible throughout the whole code.

Such a situation can be seen in the following example code below:
*/

let counter = 0; // global variable
function tick() {
    return ++counter;
}
console.log(tick()); // -> 1
console.log(tick()); // -> 2
console.log(tick()); // -> 3

/*
The global variable counter is initialized to 0.

The function tick increments its value and returns it at the same time. As it is a global variable, the function has free access to it.

Calling the function several times will gradually increase the value of the variable counter.

What happens when we place the variable inside the function? It becomes local.

Every time we call the tick function, it is set to 0. What's more, when the function ends, it is removed from the memory.

This is due to the JavaScript engine that systematically deletes variables (this is done by the Garbage Collector).


  Note   During the JavaScript program, runtime variables are stored in the memory, which is available to the interpreter. 
  In this way, the interpreter has constant access to their values. 
  In bigger applications the amount of data to be stored in the memory can be very high; 
  the interpreter constantly evaluates which data is no longer needed (i.e. won’t be used in the executed code anymore). 
  Unnecessary data is deleted, thus freeing up memory for potentially new data.

We can see an example of such a situation here.

The local variable counter is declared and initialized to 0 each time the function is called, and it’s implicitly removed from the memory when the function finishes.

Look at the example code below:
*/

function tick() {
    let counter = 0;
    return ++counter;
}
console.log(tick()); // -> 1
console.log(tick()); // -> 1
console.log(tick()); // -> 1

/*
What if we wanted to keep the value of the counter variable in subsequent calls of our function?

Closure comes to our aid. Let's do one more experiment.

We'll create a getTick function that will return a function with logic like our earlier tick function 
(note that getTick returns the entire function and not the result of its action).

In the getTick function, we declare the local variable counter.

Look at the example code below:
*/

function getTick() {
    let counter = 10;
    return function () {
        return ++counter;
    }
}
let tick = getTick();
console.log(tick()); // -> 11
console.log(tick()); // -> 12
console.log(tick()); // -> 13

/*
We store the result of the getTick function and call in the tick variable, a function that operates on the counter variable.

Logically, when the getTick function finishes, its local variables should be removed from the memory, which in this case is the counter variable.

However, the opposite thing happens. The interpreter recognizes that the function returned by getTick refers to the counter variable in its code, and does not remove it.

Therefore, the function is returned with the context (in this case consisting of the counter variable) needed for it to work properly.

In this way we have used a closure.

In practice, closures turn out to be very useful, allowing us to remember the context of a function call and the history of its calls.

One typical use of closures is to emulate private properties and methods in JavaScript objects.

Let's look at another example:
*/

function getPoint() {
    function inc(n) {
        return ++n;
    };
    return {
        x: 10,
        y: 20,
        incX: function() {
            this.x = inc(this.x);
        },
        incY: function() {
            this.x = inc(this.x);
        }
    };
}
let point = getPoint();
console.log(point); // -> {x: 10, y: 20, show: ƒ, incX: ƒ, incY: ƒ}
point.incX();
console.log(point); // -> {x: 11, y: 20, show: ƒ, incX: ƒ, incY: ƒ}

/*
This time we define the getPoint function, which returns an object representing a point on the plane.

A point has two properties, x and y, which define its position, and two methods, incX and incY that add 1 to either x or y respectively.

So far, there's nothing unusual about this.

But look at the declaration of the inc function.

This is a local function of the getPoint function, and a reference to it appears in the incX and incY methods.

Theoretically, when the getPoint function terminates, local functions, like variables, should be removed.

However, the interpreter sees that inc is used in the methods of the returned object and returns it along with the object to form a closure.

In this way, the object's methods use a function that is only available to them.

We have no way of explicitly calling the inc function other than through the incX or incY methods.

The function is also obviously not part of the object, as we can see by displaying a point in the console.
*/