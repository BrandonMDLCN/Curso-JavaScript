/*--------------------- 5.1.7 setTimeout and setInterval functions ---------------------*/
/*
1. The setTimeout() function executes a function after a specified amount of time.
2. The setInterval() function executes a function every specified amount of time.


// setTimeout(function, milliseconds, param1, param2, ...)
// setInterval(function, milliseconds, param1, param2, ...)

The setTimeout function is used when you want to cause a delayed action. 

A similar function is setInterval. 
This time, the action is also performed with a delay, but periodically, so it is repeated at fixed intervals. 
In the meantime, the main program is executed, and at every specified time, the callback given as an argument for a setInterval call is called.

The setInterval function returns an identifier during the call, which can be used to remove the timer used in it 
(and consequently to stop the cyclical callback function call).

First, we run setInterval, which will call the callback function (i.e. the inner function) in one-second intervals. 
Then we call setTimeout, which will turn off the timer associated with the previously called setInterval after 5.5 seconds. 
As a result, the inner function should be called five times. In the meantime, the rest of the program will be executed ...
*/

let inner = function() {
    console.log('inner 1');
}
     
let outer = function(callback) {
    console.log('outer 1');
    let timerId = setInterval(callback, 1000) /*ms*/;
    console.log('outer 2');
     
    setTimeout(function(){
         clearInterval(timerId);
    }, 5500);
}
     
console.log('test 1');
outer(inner);
console.log('test 2');
    
/*
If we run the JavaScript code on the client side, in the browser, it is always associated with the website. 
The window in which this page is located is represented in the client-side JavaScript by a global window variable.

The window object has a method (or its own function) named addEventListener. 
This function allows you to register a certain action to be performed in response to a window-related event.

Such an event can be a "click", which is a single mouse click on any place on the page 
(there is a limited set of named events associated with a particular object, to which it can react).

The action to be taken is passed to the addEventListener method as a callback function.
*/

window.addEventListener("click", function() {
     console.log("clicked!");
});


/*--------------------- 5.1.8 clearTimeout and clearInterval functions ---------------------*/
/*
1. The clearTimeout() function cancels a timeout previously established by calling setTimeout().
2. The clearInterval() function cancels a timer previously established by calling setInterval().

*/

// clearTimeout(timeoutID)
// clearInterval(intervalID)

/*--------------------- 5.1.9 Nested setTimeout and setInterval functions ---------------------*/
/*
1. The setTimeout() and setInterval() functions can be nested.
2. The nested setTimeout() and setInterval() functions can be nested.

*/
