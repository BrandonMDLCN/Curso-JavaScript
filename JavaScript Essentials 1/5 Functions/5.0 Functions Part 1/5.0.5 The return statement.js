/*
Functions that have been called execute a sequence of instructions contained in their body. 
The result of this execution may be a certain value that we may want to store in some variable. 
The return keyword comes to help us in this case. 
What exactly is return for?

First, it causes the function to end exactly where this word occurs, even if there are further instructions.
Second, it allows us to return a given value from inside the function to the place where it was called.

Let's move away for a moment from our example with mean temperature calculation and play 
with a slightly simpler code. 

The showMsg function contains only two console.logs separated by return.
*/
function showMsg() {
    console.log("message 1");
    return;
    console.log("message 2");
}

showMsg(); // -> message 1

/*
return allows us not only to terminate a function. 
If we place some expression (literal, variable, function call) immediately after the return keyword, 
the value of this expression will be returned by the completed function to the place where it was called. 
You can then, for example, assign the returned value to a variable.
*/
function getTrue() {
    return true;
}

let test = getTrue();
console.log(test); // -> true

///////////////////////////////////////////////////////////////////////////////
//Ejemplo de la temperatura

let temperatures;
 
function getMeanTemp() {
     let sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
         sum += temperatures[i];
     }
     return sum / temperatures.length;
}
 
temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp()}`);
 
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`mean: ${getMeanTemp()}`);
