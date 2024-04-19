/*--------------------- 5.1.6 Asynchronous callbacks ---------------------*/
/*
Asynchronous operation of programs is a rather complex topic, strongly dependent on a particular programming language, 
and often also on the environment.

In the case of client-side JavaScript running in a browser, it is limited to event-based programming, 
i.e. the asynchronous response to certain events. 
An event can be a signal sent by a timer, a user action (e.g. pressing a key or clicking on a selected interface element), 
or information about receiving data from the server.

Using appropriate functions, we combine a specific type of event with a selected callback function, 
which will be called when the event occurs.

One of the simplest cases when there is an asynchronous execution of instructions is the use of the setTimeout function. 
This function takes another function (a callback) and the time expressed in milliseconds as arguments. 
The callback function is executed after the specified time, and meanwhile, 
the next program instruction (placed in the code after setTimeout) will be executed.

Thus, the moment the callback function is called is not determined by its order, but by an arbitrarily imposed delay. 
The delay only applies to the callback function given to setTimeout, while the rest of the code is still executed synchronously.

Let's modify the previous example a bit. 
In the outer function, we do not call callback() immediately, but pass it to setTimeout, 
which executes it with a delay of 1000 milliseconds (one second).
*/
let inner = function() {
    console.log('inner 1');
}
     
let outer = function(callback) {
    console.log('outer 1');
    setTimeout(callback, 1000) /*ms*/;
    console.log('outer 2');
}
    
console.log('test 1');
outer(inner);
console.log('test 2');
    
/*
The result is actually a bit different than we observed in the previous example, 
as this time the following sequence of messages will appear on the console (the last with a delay of one second)
*/