/*------------------------------ 5.0.6 Parameters ------------------------------*/
/*
the use of parameters in functions is optional.

In JavaScript, a function’s parameters appear in its declaration. 
These are names separated by commas, placed in parentheses after the function name. 
Each parameter inside a function will be treated as a local variable. 
A function whose definition specifies the parameters must be invoked in an appropriate way. 

The values given during a call are called arguments. Arguments, if there is more than one, 
are separated by commas and must be passed in the same order as the parameters 
we define in the function declaration.

Let's look at a simple function that adds two values. We will call it add.
*/
function add(first, second) {
    return first + second;
}
    
let result = add(5, 7);
console.log(result); // -> 12

/*
You can pass any type of data as arguments to the function, both simple and complex. 
Let's write the getElement function, which will return the selected element from the array, 
with the array and index of the element being the function's parameters.
*/
function getElement(elements, index) {
    return elements[index];
}

let names = ["Alice", "Bob", "Eve", "John"];
let name = getElement(names, 2);
console.log(name); // -> Eve


//Let's go back to the example with mean temperature.

function getMeanTemp(temperatures) {
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
     sum += temperatures[i];
    }
    return sum / temperatures.length;
}

let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp(day1)}`); // -> mean:
16.666666666666668

let day2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`mean: ${getMeanTemp(day2)}`); // -> mean:
18.083333333333332
